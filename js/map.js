/**
 * 新約地理互動地圖地圖繪製核心 (NT Map Engine)
 * 基於 Leaflet.js 與 OpenStreetMap / CartoDB 圖資
 * 支援動態路線拓撲、貝茲曲線發送弧線、七教會環路與歷史時空標記
 */

class NTMapEngine {
  constructor(mapId) {
    this.mapId = mapId;
    this.map = null;
    this.markers = {};
    this.currentLayers = {
      base: null,
      routes: L.layerGroup(),
      epistles: L.layerGroup(),
      churches: L.layerGroup(),
      focusCities: L.layerGroup()
    };
    this.tileLayers = {};
    this.currentLanguage = 'zh';
  }

  // 初始化地圖容器與底圖
  init() {
    // 預設中心置於愛琴海與東地中海交界 (涵蓋希臘、小亞細亞、黎凡特與義大利)
    this.map = L.map(this.mapId, {
      center: [36.5, 27.5],
      zoom: 6,
      minZoom: 4,
      maxZoom: 13,
      zoomControl: false
    });

    // 縮放控制項置於右下角，避免遮擋左側浮動控制卡片
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // OpenStreetMap 標準圖資 (Standard OpenStreetMap Tile Layer)
    const osmStandard = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // OpenStreetMap 人道救援/地形風格圖資 (Humanitarian OpenStreetMap Team - HOT)
    const osmHot = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/">HOT</a>'
    });

    this.tileLayers = {
      osm: osmStandard,
      hot: osmHot
    };

    // 預設直接加載 OpenStreetMap 標準圖資
    osmStandard.addTo(this.map);
    this.currentLayers.base = osmStandard;

    // 將各互動圖層加入地圖
    this.currentLayers.routes.addTo(this.map);
    this.currentLayers.epistles.addTo(this.map);
    this.currentLayers.churches.addTo(this.map);
    this.currentLayers.focusCities.addTo(this.map);

    // 註冊全部城市基本點位標記
    this.plotAllCityMarkers();
  }

  // 切換 OpenStreetMap 圖資模式 (標準 OSM / 人道暖色 OSM HOT)
  setBasemap(mode) {
    if (this.currentLayers.base) {
      this.map.removeLayer(this.currentLayers.base);
    }
    const selected = this.tileLayers[mode] || this.tileLayers.osm;
    selected.addTo(this.map);
    this.currentLayers.base = selected;
  }

  // 繪製所有聖經城市座標點
  plotAllCityMarkers() {
    const locs = NT_DATA.locations;
    for (const [key, item] of Object.entries(locs)) {
      const isZh = this.currentLanguage === 'zh';
      const name = isZh ? item.nameZh : item.nameEn;
      const grk = item.nameGrk || '';

      // 建立自訂圓形標記
      const icon = L.divIcon({
        className: 'custom-city-marker',
        html: `<div title="${name} (${grk})"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      const marker = L.marker(item.coords, { icon: icon });

      // 點擊事件彈出提示窗與展開抽屜
      marker.bindTooltip(`<strong>${name}</strong><br><span style="font-size:10px;opacity:0.8">${grk}</span>`, {
        direction: 'top',
        className: 'city-tooltip',
        offset: [0, -6]
      });

      marker.on('click', () => {
        if (window.NT_APP) {
          window.NT_APP.openLocationDossier(key);
        }
      });

      this.markers[key] = marker;
      this.currentLayers.focusCities.addLayer(marker);
    }
  }

  // 清除動態覆蓋路線與向量弧線
  clearDynamicLayers() {
    this.currentLayers.routes.clearLayers();
    this.currentLayers.epistles.clearLayers();
    this.currentLayers.churches.clearLayers();
    this.resetAllMarkerStyles();
  }

  // 重置標記為預設樣式
  resetAllMarkerStyles() {
    for (const [key, marker] of Object.entries(this.markers)) {
      const el = marker.getElement();
      if (el) {
        el.classList.remove('highlighted');
      }
    }
  }

  // 高亮指定清單的城市點位
  highlightCities(cityKeys) {
    this.resetAllMarkerStyles();
    cityKeys.forEach(k => {
      const marker = this.markers[k];
      if (marker) {
        const el = marker.getElement();
        if (el) {
          el.classList.add('highlighted');
        }
      }
    });
  }

  // 平滑飛向目標城市或邊界
  focusCity(cityKey, zoom = 8) {
    const loc = NT_DATA.locations[cityKey];
    if (loc && loc.coords) {
      this.map.flyTo(loc.coords, zoom, { duration: 1.2 });
      this.highlightCities([cityKey]);
    }
  }

  // 適應包含特定點位群的最佳可視範圍
  fitToCities(cityKeys, padding = [50, 50]) {
    const coords = cityKeys
      .map(k => NT_DATA.locations[k] ? NT_DATA.locations[k].coords : null)
      .filter(c => c !== null);

    if (coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      this.map.flyToBounds(bounds, { padding: padding, maxZoom: 8, duration: 1.2 });
    }
  }

  // 1. 繪製四福音書路徑視圖
  renderGospel(gospelId) {
    this.clearDynamicLayers();
    const g = NT_DATA.gospels.find(item => item.id === gospelId);
    if (!g) return;

    const coordsList = [];
    const cityKeys = [];

    g.points.forEach((pt, idx) => {
      const loc = NT_DATA.locations[pt.loc];
      if (loc) {
        coordsList.push(loc.coords);
        cityKeys.push(pt.loc);

        // 設置編號點標記
        const stepIcon = L.divIcon({
          className: 'custom-church-marker',
          html: `<span>${idx + 1}</span>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const stepMarker = L.marker(loc.coords, { icon: stepIcon });
        const title = this.currentLanguage === 'zh' ? pt.titleZh : pt.titleEn;
        stepMarker.bindTooltip(`<strong>${idx + 1}. ${title}</strong>`, { direction: 'top' });
        this.currentLayers.routes.addLayer(stepMarker);
      }
    });

    if (coordsList.length > 1) {
      const line = L.polyline(coordsList, {
        color: g.color || NT_DATA.brandColors.antiqueGold,
        weight: 3.5,
        opacity: 0.85,
        dashArray: '6, 8',
        smoothFactor: 1.5
      });
      this.currentLayers.routes.addLayer(line);
    }

    this.highlightCities(cityKeys);
    this.fitToCities(cityKeys);
  }

  // 2. 繪製使徒行傳宣教旅程
  renderActsJourney(journeyId) {
    this.clearDynamicLayers();
    const j = NT_DATA.actsJourneys.find(item => item.id === journeyId);
    if (!j) return;

    const coordsList = [];
    const cityKeys = [];

    j.stops.forEach((stopKey, idx) => {
      const loc = NT_DATA.locations[stopKey];
      if (loc) {
        coordsList.push(loc.coords);
        if (!cityKeys.includes(stopKey)) cityKeys.push(stopKey);
      }
    });

    if (coordsList.length > 1) {
      // 繪製航線外發光層
      const haloLine = L.polyline(coordsList, {
        color: NT_DATA.brandColors.amber,
        weight: 6,
        opacity: 0.25,
        smoothFactor: 1.5
      });
      this.currentLayers.routes.addLayer(haloLine);

      // 主航線路徑
      const mainLine = L.polyline(coordsList, {
        color: j.color || NT_DATA.brandColors.antiqueGold,
        weight: 3.5,
        opacity: 0.9,
        dashArray: journeyId === 'acts_rome_voyage' ? '5, 8' : undefined,
        smoothFactor: 1.5
      });
      this.currentLayers.routes.addLayer(mainLine);
    }

    this.highlightCities(cityKeys);
    this.fitToCities(cityKeys, [60, 60]);
  }

  // 3. 繪製保羅書信發送向量弧線 (Bézier-style Curved Arcs)
  renderEpistlesNetwork(selectedEpistleId = null) {
    this.clearDynamicLayers();
    const epistles = selectedEpistleId
      ? NT_DATA.paulineEpistles.filter(e => e.id === selectedEpistleId)
      : NT_DATA.paulineEpistles;

    const touchedCities = new Set();

    epistles.forEach(ep => {
      const fromLoc = NT_DATA.locations[ep.writtenAt];
      const toLoc = NT_DATA.locations[ep.recipientAt];

      if (fromLoc && toLoc) {
        touchedCities.add(ep.writtenAt);
        touchedCities.add(ep.recipientAt);

        // 計算彎曲弧線的中間控制點 (曲率偏移)
        const lat1 = fromLoc.coords[0];
        const lon1 = fromLoc.coords[1];
        const lat2 = toLoc.coords[0];
        const lon2 = toLoc.coords[1];

        const midLat = (lat1 + lat2) / 2;
        const midLon = (lon1 + lon2) / 2;
        const dx = lat2 - lat1;
        const dy = lon2 - lon1;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // 橫向垂直向外弓起弧度
        const offsetFactor = 0.15;
        const ctrlLat = midLat - (dy * offsetFactor);
        const ctrlLon = midLon + (dx * offsetFactor);

        // 生成二次貝茲曲線坐標點數組
        const curvePoints = [];
        for (let t = 0; t <= 1; t += 0.05) {
          const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * ctrlLat + t * t * lat2;
          const lon = (1 - t) * (1 - t) * lon1 + 2 * (1 - t) * t * ctrlLon + t * t * lon2;
          curvePoints.push([lat, lon]);
        }

        const isHighlight = selectedEpistleId === ep.id;
        const arc = L.polyline(curvePoints, {
          color: isHighlight ? NT_DATA.brandColors.amber : NT_DATA.brandColors.antiqueGold,
          weight: isHighlight ? 4 : 2.2,
          opacity: isHighlight ? 0.95 : 0.65,
          dashArray: '6, 6',
          className: 'epistle-flow-line'
        });

        const title = this.currentLanguage === 'zh' ? ep.nameZh : ep.nameEn;
        const fromName = this.currentLanguage === 'zh' ? fromLoc.nameZh : fromLoc.nameEn;
        const toName = this.currentLanguage === 'zh' ? toLoc.nameZh : toLoc.nameEn;

        arc.bindTooltip(`
          <strong>${title}</strong> (${ep.date})<br>
          <span style="font-size:11px;color:${NT_DATA.brandColors.antiqueGold}">
            ${fromName} ➔ ${toName}
          </span>
        `, { sticky: true });

        arc.on('click', () => {
          if (window.NT_APP) {
            window.NT_APP.openEpistleDossier(ep.id);
          }
        });

        this.currentLayers.epistles.addLayer(arc);
      }
    });

    const cityArray = Array.from(touchedCities);
    this.highlightCities(cityArray);
    if (selectedEpistleId && cityArray.length > 0) {
      this.fitToCities(cityArray, [80, 80]);
    }
  }

  // 4. 繪製啟示錄七教會郵遞順時針環線
  renderRevelationPostalRoute() {
    this.clearDynamicLayers();
    const rev = NT_DATA.revelationPostalRoute;
    const patmosLoc = NT_DATA.locations[rev.writerLocation];

    const churchCoords = [];
    const churchKeys = [];

    // 依序建立 1 至 7 號徽章標記
    rev.churches.forEach(item => {
      const loc = NT_DATA.locations[item.id];
      if (loc) {
        churchCoords.push(loc.coords);
        churchKeys.push(item.id);

        const badgeIcon = L.divIcon({
          className: 'custom-church-marker',
          html: `<span>${item.order}</span>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12]
        });

        const marker = L.marker(loc.coords, { icon: badgeIcon });
        const cName = this.currentLanguage === 'zh' ? item.nameZh : item.nameEn;
        const role = this.currentLanguage === 'zh' ? item.roleZh : item.roleEn;

        marker.bindTooltip(`
          <strong>${item.order}. ${cName}</strong><br>
          <span style="font-size:11px">${role}</span><br>
          <small style="color:${NT_DATA.brandColors.antiqueGold}">${item.scripture}</small>
        `, { direction: 'top' });

        marker.on('click', () => {
          if (window.NT_APP) {
            window.NT_APP.openRevelationChurchDossier(item);
          }
        });

        this.currentLayers.churches.addLayer(marker);
      }
    });

    // 連接拔摩島 ➔ 以弗所啟航線
    if (patmosLoc && churchCoords.length > 0) {
      const seaLink = L.polyline([patmosLoc.coords, churchCoords[0]], {
        color: NT_DATA.brandColors.slateBlue,
        weight: 2.5,
        dashArray: '4, 6',
        opacity: 0.8
      });
      seaLink.bindTooltip('拔摩島 ➔ 以弗所海路送信 (約 70 km)');
      this.currentLayers.churches.addLayer(seaLink);
      churchKeys.push(rev.writerLocation);
    }

    // 順時針閉合郵路: 1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 ➔ 6 ➔ 7 ➔ 1
    if (churchCoords.length === 7) {
      const loopCoords = [...churchCoords, churchCoords[0]];
      const circuitLine = L.polyline(loopCoords, {
        color: NT_DATA.brandColors.amber,
        weight: 3.5,
        opacity: 0.9,
        dashArray: '8, 6',
        className: 'epistle-flow-line'
      });
      circuitLine.bindTooltip('亞西亞七教會順時針郵道環線 (約 220 km)');
      this.currentLayers.churches.addLayer(circuitLine);
    }

    this.highlightCities(churchKeys);
    this.fitToCities(churchKeys, [60, 60]);
  }

  // 5. 繪製歷時性時期 (Diachronic Era) 焦點城市與動態
  renderDiachronicEra(eraId) {
    this.clearDynamicLayers();
    const era = NT_DATA.diachronicEras.find(e => e.id === eraId);
    if (!era) return;

    this.highlightCities(era.focalCities);
    this.fitToCities(era.focalCities, [70, 70]);
  }

  // 6. 繪製大公書信與希伯來書傳遞動線
  renderGeneralEpistles() {
    this.clearDynamicLayers();
    const touchedCities = new Set();

    NT_DATA.generalEpistles.forEach(ge => {
      const fromLoc = NT_DATA.locations[ge.writtenAt];
      const toLoc = NT_DATA.locations[ge.recipientAt];

      if (fromLoc && toLoc) {
        touchedCities.add(ge.writtenAt);
        touchedCities.add(ge.recipientAt);

        const line = L.polyline([fromLoc.coords, toLoc.coords], {
          color: NT_DATA.brandColors.slateBlue,
          weight: 2.2,
          opacity: 0.75,
          dashArray: '5, 5'
        });

        const title = this.currentLanguage === 'zh' ? ge.nameZh : ge.nameEn;
        line.bindTooltip(`<strong>${title}</strong> (${ge.date})<br>${ge.themeZh}`);
        this.currentLayers.epistles.addLayer(line);
      }

      // 彼前額外多省份廣播輻射線
      if (ge.extraRecipients) {
        ge.extraRecipients.forEach(rKey => {
          const rLoc = NT_DATA.locations[rKey];
          if (fromLoc && rLoc) {
            touchedCities.add(rKey);
            const radLine = L.polyline([fromLoc.coords, rLoc.coords], {
              color: NT_DATA.brandColors.antiqueGold,
              weight: 1.5,
              opacity: 0.5,
              dashArray: '3, 6'
            });
            this.currentLayers.epistles.addLayer(radLine);
          }
        });
      }
    });

    const cityArray = Array.from(touchedCities);
    this.highlightCities(cityArray);
    this.fitToCities(cityArray, [70, 70]);
  }
}

// 供全域與模組環境呼叫
window.NTMapEngine = NTMapEngine;
