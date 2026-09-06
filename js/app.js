/**
 * 新約地理互動地圖主應用程式邏輯 (NT Geography Application Controller)
 * 負責：視角切換、時間軸同步、抽屜詳情渲染、雙語即時切換、矩陣檢索
 */

const I18N = {
  zh: {
    brandBadge: 'Biblical Digital Humanities · OpenStreetMap',
    appTitle: '新約地理互動地圖',
    appSubtitle: 'NT Interactive Geography Map',
    appDesc: '以地理座標為本，多維度視覺化呈現四福音書、使徒行傳宣教旅程、保羅書信發送線、啟示錄七教會環線與七大歷時性時空分期。',
    aboutSummary: '📜 關於本工具與歷史學術說明 (About & Scholarly Notes) ↓',
    basemapOsm: '🗺️ OpenStreetMap',
    basemapHot: '🌾 OSM 暖色風格',
    langToggle: '🌐 English',
    tabTimeline: '🕰️ 歷時性總覽',
    tabTimelineBadge: '30–100 AD',
    tabGospels: '📖 四福音書動線',
    tabGospelsBadge: '4卷',
    tabActs: '⛵ 使徒行傳宣教旅程',
    tabActsBadge: '4次旅程',
    tabEpistles: '✉️ 保羅書信發送線',
    tabEpistlesBadge: '13封',
    tabRevelation: '👑 啟示錄七教會環線',
    tabRevelationBadge: '220km',
    tabGeneral: '🕊️ 大公書信與希伯來書',
    tabGeneralBadge: '7卷',
    tabMatrix: '📊 27卷書時空矩陣',
    tabMatrixBadge: '全覽',
    timelineLabel: '歷史分期：',
    eras: [
      '時期一：教會建立 (30–48)',
      '時期二：初期書信 (48–52)',
      '時期三：宣教高峰 (53–57)',
      '時期四：首次被囚 (60–62)',
      '時期五：獲釋再囚 (62–67)',
      '時期六：猶太戰爭 (65–75)',
      '時期七：約翰晚期 (80–100)'
    ],
    matrixTitle: '新約二十七卷書時空合參矩陣',
    matrixDesc: '點選任何書卷，即可平滑飛行至該書卷之成書地點與接收教會，並展開完整歷史背景。',
    matrixSearchPlaceholder: '🔍 搜尋書卷、城市或收信人...',
    matrixPillAll: '全部 (27)',
    matrixPillGospels: '福音書 (4)',
    matrixPillActs: '歷史書 (1)',
    matrixPillPaul: '保羅書信 (13)',
    matrixPillGeneral: '大公書信 (8)',
    matrixPillRev: '啟示文學 (1)',
    matrixThNum: '#',
    matrixThBook: '書卷名稱',
    matrixThCat: '正典體裁',
    matrixThDate: '成書年代 (主後)',
    matrixThWritten: '推定書寫地點',
    matrixThRecipient: '接收對象 / 教會',
    matrixThAction: '地圖動作',
    matrixBtnFocus: '🔍 聚焦定位',
    footerProject: '新約地理互動地圖 © Biblical Digital Humanities Project',
    footerTile: '圖資由 OpenStreetMap 提供 (© OpenStreetMap contributors)',
    footerBrand: '品牌調色：炭灰 #2B2B2B · 温暖白 #F5F3EE · 古金 #C8A96A · 靛藍 #4A5D73 · 柔米 #EAE6DC · 琥珀 #D6A84C',
    dossierGeoTitle: '🏛️ 地理與聖經定位',
    dossierArchTitle: '🏺 考古與歷史實證',
    dossierWrittenTitle: '✍️ 在此城撰寫成書之書卷',
    dossierRecvTitle: '📬 以此城教會為接收對象',
    dossierRegionLabel: '所屬地區',
    dossierEpistleDate: '成書年代',
    dossierWrittenAt: '書寫地點',
    dossierRecipientAt: '接收對象',
    dossierThemeTitle: '🕊️ 核心神學主題',
    dossierBackgroundTitle: '📜 書卷寫作背景',
    dossierRouteTitle: '🧭 地理動線特點',
    dossierNodesTitle: '📍 關鍵地理節點與事工',
    dossierActsDateTitle: '📅 宣教旅程紀年',
    dossierActsEventsTitle: '🚶 行程重大里程碑與事件',
    dossierRevStationTitle: '📮 驛站順序與教會身份',
    dossierRevPromiseTitle: '👑 主給得勝者的應許',
    dossierRevOverviewPatmos: '🏝️ 拔摩島領受啟示',
    dossierRevOverviewCircuit: '🔄 220公里順時針閉環郵遞',
    dossierRevOverviewChurches: '⛪ 七教會順序一覽',
    dossierEraContext: '🕰️ 歷史時代脈絡',
    dossierEraBooks: '📖 此時期成書書卷',
    dossierEraHubs: '🌐 宣教與聚會樞紐中心'
  },
  en: {
    brandBadge: 'Biblical Digital Humanities · OpenStreetMap',
    appTitle: 'NT Interactive Geography Map',
    appSubtitle: 'New Testament Spatial & Temporal Explorer',
    appDesc: 'Geographically anchored interactive visualization of the Four Gospels, Acts missionary journeys, Pauline epistles transmission, Revelation 7 churches postal loop, and diachronic chronology.',
    aboutSummary: '📜 About this Tool & Scholarly Historical Notes ↓',
    basemapOsm: '🗺️ OpenStreetMap',
    basemapHot: '🌾 OSM Warm Style',
    langToggle: '🌐 中文 (繁體)',
    tabTimeline: '🕰️ Diachronic Timeline',
    tabTimelineBadge: '30–100 AD',
    tabGospels: '📖 Four Gospels Routes',
    tabGospelsBadge: '4 Books',
    tabActs: '⛵ Acts Missionary Journeys',
    tabActsBadge: '4 Journeys',
    tabEpistles: '✉️ Pauline Epistles Network',
    tabEpistlesBadge: '13 Letters',
    tabRevelation: '👑 Revelation 7 Churches',
    tabRevelationBadge: '220km',
    tabGeneral: '🕊️ General Epistles & Hebrews',
    tabGeneralBadge: '7 Books',
    tabMatrix: '📊 Master 27 Books Matrix',
    tabMatrixBadge: 'Overview',
    timelineLabel: 'Historical Eras:',
    eras: [
      'Era 1: Church Inception (30–48)',
      'Era 2: Early Epistles (48–52)',
      'Era 3: Peak Missionary (53–57)',
      'Era 4: 1st Imprisonment (60–62)',
      'Era 5: Post-Release (62–67)',
      'Era 6: Jewish War (65–75)',
      'Era 7: Johannine Era (80–100)'
    ],
    matrixTitle: 'New Testament 27 Books Spatial-Temporal Matrix',
    matrixDesc: 'Click any book row to fly directly to its composition and recipient locations, and inspect full historical dossiers.',
    matrixSearchPlaceholder: '🔍 Search book, city, or recipient...',
    matrixPillAll: 'All (27)',
    matrixPillGospels: 'Gospels (4)',
    matrixPillActs: 'Historical (1)',
    matrixPillPaul: 'Pauline (13)',
    matrixPillGeneral: 'General (8)',
    matrixPillRev: 'Apocalyptic (1)',
    matrixThNum: '#',
    matrixThBook: 'Book Name',
    matrixThCat: 'Canonical Category',
    matrixThDate: 'Date (AD)',
    matrixThWritten: 'Written At',
    matrixThRecipient: 'Recipient / Church',
    matrixThAction: 'Map Action',
    matrixBtnFocus: '🔍 Focus Map',
    footerProject: 'NT Interactive Geography Map © Biblical Digital Humanities Project',
    footerTile: 'Map data provided by OpenStreetMap (© OpenStreetMap contributors)',
    footerBrand: 'Brand Palette: Charcoal #2B2B2B · Warm White #F5F3EE · Antique Gold #C8A96A · Slate Blue #4A5D73 · Ivory #EAE6DC · Amber #D6A84C',
    dossierGeoTitle: '🏛️ Geography & Biblical Setting',
    dossierArchTitle: '🏺 Archaeology & Historical Evidence',
    dossierWrittenTitle: '✍️ Epistles Written in this City',
    dossierRecvTitle: '📬 Addressed to this Church Community',
    dossierRegionLabel: 'Region',
    dossierEpistleDate: 'Date',
    dossierWrittenAt: 'Written At',
    dossierRecipientAt: 'Recipient',
    dossierThemeTitle: '🕊️ Core Theological Theme',
    dossierBackgroundTitle: '📜 Composition Background',
    dossierRouteTitle: '🧭 Geographical Trajectory',
    dossierNodesTitle: '📍 Key Milestones & Ministry',
    dossierActsDateTitle: '📅 Chronology & Overview',
    dossierActsEventsTitle: '🚶 Journey Milestones & Events',
    dossierRevStationTitle: '📮 Postal Station & Church Identity',
    dossierRevPromiseTitle: '👑 Promise to the Overcomer',
    dossierRevOverviewPatmos: '🏝️ Vision Received on Patmos',
    dossierRevOverviewCircuit: '🔄 220km Clockwise Postal Loop',
    dossierRevOverviewChurches: '⛪ Seven Churches Directory',
    dossierEraContext: '🕰️ Historical Context',
    dossierEraBooks: '📖 Canonical Epistles/Gospels Written',
    dossierEraHubs: '🌐 Missionary & Church Hubs'
  }
};

class NTApp {
  constructor() {
    this.mapEngine = null;
    this.currentView = 'timeline';
    this.currentEraIndex = 0;
    // 預設語言依據 html lang 或全域設定
    this.currentLanguage = (document.documentElement.lang === 'en') ? 'en' : 'zh';
    this.activeGospelId = 'matthew';
    this.activeJourneyId = 'acts_journey_2';
    this.activeEpistleId = null;
  }

  init() {
    // 1. 初始化地圖引擎
    this.mapEngine = new NTMapEngine('map');
    this.mapEngine.currentLanguage = this.currentLanguage;
    this.mapEngine.init();

    // 2. 綁定全域介面事件
    this.bindEvents();

    // 3. 套用語言文字
    this.applyLanguage();

    // 4. 初始化渲染全書卷矩陣
    this.renderMasterMatrix();

    // 5. 預設啟動歷時性視角第一期
    this.switchEra(0);

    // 6. 監聽視窗調整
    window.addEventListener('resize', () => {
      if (this.mapEngine && this.mapEngine.map) {
        this.mapEngine.map.invalidateSize();
      }
    });
  }

  bindEvents() {
    // 頂部視角切換按鈕
    document.querySelectorAll('.vtab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const view = btn.dataset.view;
        this.switchView(view);
      });
    });

    // 歷時性時期切換按鈕
    document.querySelectorAll('.era-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const eraIdx = parseInt(btn.dataset.index, 10);
        this.switchEra(eraIdx);
      });
    });

    // 語言切換
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }

    // 底圖切換 (OpenStreetMap 標準 / OpenStreetMap 人道暖色)
    const baseBtn = document.getElementById('basemap-toggle-btn');
    if (baseBtn) {
      baseBtn.addEventListener('click', () => {
        const currentMode = baseBtn.dataset.mode || 'osm';
        const nextMode = currentMode === 'osm' ? 'hot' : 'osm';
        baseBtn.dataset.mode = nextMode;
        const t = I18N[this.currentLanguage];
        baseBtn.textContent = nextMode === 'osm' ? t.basemapOsm : t.basemapHot;
        this.mapEngine.setBasemap(nextMode);
      });
    }

    // 抽屜關閉按鈕
    const closeBtn = document.getElementById('drawer-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeDrawer();
      });
    }

    // 矩陣搜尋與分類過濾
    const searchInput = document.getElementById('matrix-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.filterMasterMatrix();
      });
    }

    document.querySelectorAll('.mq-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.mq-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.filterMasterMatrix();
      });
    });
  }

  // 切換視角模式
  switchView(viewName) {
    this.currentView = viewName;

    // 更新導覽按鈕啟用樣式
    document.querySelectorAll('.vtab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    const appContainer = document.querySelector('.app-container');
    const timelineStrip = document.querySelector('.timeline-strip');
    const mapContainer = document.getElementById('map-container');
    const matrixContainer = document.getElementById('matrix-view-wrap');
    const drawer = document.getElementById('detail-drawer');

    // ★★★ 修正矩陣視圖大片空白問題 ★★★
    // 進入矩陣視圖時，將佔據高度 580px 的 .app-container 及 .timeline-strip 完全隱藏，
    // 使 .matrix-container 能直接接續在導覽列下方，消除多餘空間。
    if (viewName === 'matrix') {
      if (appContainer) appContainer.style.display = 'none';
      if (timelineStrip) timelineStrip.style.display = 'none';
      if (drawer) drawer.classList.add('collapsed');
      matrixContainer.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    } else {
      if (appContainer) appContainer.style.display = 'flex';
      if (mapContainer) mapContainer.style.display = 'flex';
      if (timelineStrip) timelineStrip.style.display = 'flex';
      matrixContainer.classList.remove('active');
      if (this.mapEngine && this.mapEngine.map) {
        this.mapEngine.map.invalidateSize();
      }
    }

    const isZh = this.currentLanguage === 'zh';

    // 根據視角繪製特定圖層與配置浮動控制卡
    if (viewName === 'timeline') {
      this.switchEra(this.currentEraIndex);
      this.updateFloatingFilter([
        { label: isZh ? '時期一 (30–48)' : 'Era 1 (30–48)', action: () => this.switchEra(0) },
        { label: isZh ? '時期二 (48–52)' : 'Era 2 (48–52)', action: () => this.switchEra(1) },
        { label: isZh ? '時期三 (53–57)' : 'Era 3 (53–57)', action: () => this.switchEra(2) },
        { label: isZh ? '時期四 (60–62)' : 'Era 4 (60–62)', action: () => this.switchEra(3) },
        { label: isZh ? '時期五 (62–67)' : 'Era 5 (62–67)', action: () => this.switchEra(4) },
        { label: isZh ? '時期六 (65–75)' : 'Era 6 (65–75)', action: () => this.switchEra(5) },
        { label: isZh ? '時期七 (80–100)' : 'Era 7 (80–100)', action: () => this.switchEra(6) }
      ], isZh ? '歷時性分期切換' : 'Select Historical Era');
    } else if (viewName === 'gospels') {
      this.mapEngine.renderGospel(this.activeGospelId);
      this.openGospelDossier(this.activeGospelId);
      this.updateFloatingFilter(
        NT_DATA.gospels.map(g => ({
          label: isZh ? g.nameZh : g.nameEn,
          active: g.id === this.activeGospelId,
          action: () => {
            this.activeGospelId = g.id;
            this.mapEngine.renderGospel(g.id);
            this.openGospelDossier(g.id);
          }
        })),
        isZh ? '選擇福音書動線' : 'Select Gospel Trajectory'
      );
    } else if (viewName === 'acts') {
      this.mapEngine.renderActsJourney(this.activeJourneyId);
      this.openActsJourneyDossier(this.activeJourneyId);
      this.updateFloatingFilter(
        NT_DATA.actsJourneys.map(j => ({
          label: isZh ? j.nameZh.split('(')[0] : j.nameEn.split('(')[0],
          active: j.id === this.activeJourneyId,
          action: () => {
            this.activeJourneyId = j.id;
            this.mapEngine.renderActsJourney(j.id);
            this.openActsJourneyDossier(j.id);
          }
        })),
        isZh ? '使徒行傳旅程軌跡' : 'Acts Missionary Journeys'
      );
    } else if (viewName === 'epistles') {
      this.mapEngine.renderEpistlesNetwork(null);
      this.updateFloatingFilter([
        { label: isZh ? '全部書信網絡' : 'All Epistles Network', active: true, action: () => this.mapEngine.renderEpistlesNetwork(null) },
        ...NT_DATA.paulineEpistles.map(ep => ({
          label: isZh ? ep.nameZh : ep.nameEn,
          action: () => {
            this.activeEpistleId = ep.id;
            this.mapEngine.renderEpistlesNetwork(ep.id);
            this.openEpistleDossier(ep.id);
          }
        }))
      ], isZh ? '保羅書信發送線 (點選聚焦)' : 'Pauline Epistles (Click to Focus)');
    } else if (viewName === 'revelation') {
      this.mapEngine.renderRevelationPostalRoute();
      this.openRevelationOverviewDossier();
      this.updateFloatingFilter(
        NT_DATA.revelationPostalRoute.churches.map(c => ({
          label: `${c.order}. ${isZh ? c.nameZh : c.nameEn}`,
          action: () => {
            this.mapEngine.focusCity(c.id, 9);
            this.openRevelationChurchDossier(c);
          }
        })),
        isZh ? '啟示錄七教會環線驛路' : 'Revelation 7 Churches Postal Route'
      );
    } else if (viewName === 'general') {
      this.mapEngine.renderGeneralEpistles();
      this.openGeneralEpistlesOverviewDossier();
      this.updateFloatingFilter(
        NT_DATA.generalEpistles.map(ge => ({
          label: isZh ? ge.nameZh : ge.nameEn,
          action: () => {
            this.openGeneralEpistleDossier(ge.id);
          }
        })),
        isZh ? '大公書信與希伯來書' : 'General Epistles & Hebrews'
      );
    }
  }

  // 切換時期 (Timeline Era)
  switchEra(index) {
    this.currentEraIndex = index;
    const era = NT_DATA.diachronicEras[index];
    if (!era) return;

    // 更新時間軸按鈕樣式
    document.querySelectorAll('.era-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.index, 10) === index);
    });

    // 更新時間軸右側提示資訊
    const chip = document.getElementById('era-info-chip');
    if (chip) {
      const isZh = this.currentLanguage === 'zh';
      chip.innerHTML = `<strong>${era.years}</strong> · ${isZh ? era.booksWrittenZh : era.booksWrittenEn}`;
    }

    // 地圖繪製焦點城市並打開抽屜
    this.mapEngine.renderDiachronicEra(era.id);
    this.openEraDossier(era);
  }

  // 動態更新地圖浮動控制卡
  updateFloatingFilter(items, title) {
    const card = document.getElementById('map-floating-card');
    if (!card) return;

    card.innerHTML = `
      <div class="quick-filter-title">
        <span>${title}</span>
      </div>
      <div class="quick-pills">
        ${items.map((it, idx) => `
          <button class="qp-btn ${it.active ? 'active' : ''}" data-idx="${idx}">${it.label}</button>
        `).join('')}
      </div>
    `;

    card.querySelectorAll('.qp-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        card.querySelectorAll('.qp-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (items[idx] && items[idx].action) {
          items[idx].action();
        }
      });
    });
  }

  // 展開抽屜介面
  openDrawer(tag, title, subtitle, contentHtml) {
    const drawer = document.getElementById('detail-drawer');
    if (!drawer) return;

    drawer.classList.remove('collapsed');
    document.getElementById('drawer-tag').textContent = tag;
    document.getElementById('drawer-title').textContent = title;
    document.getElementById('drawer-subtitle').textContent = subtitle;
    document.getElementById('drawer-body').innerHTML = contentHtml;
  }

  // 關閉抽屜
  closeDrawer() {
    const drawer = document.getElementById('detail-drawer');
    if (drawer) {
      drawer.classList.add('collapsed');
    }
  }

  // 1. 城市詳情檔案 (City Dossier)
  openLocationDossier(cityKey) {
    const loc = NT_DATA.locations[cityKey];
    if (!loc) return;

    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const name = isZh ? loc.nameZh : loc.nameEn;
    const grk = loc.nameGrk || '';
    const region = isZh ? loc.regionZh : loc.regionEn;

    const writtenHere = NT_DATA.booksMaster.filter(b => b.written === cityKey);
    const receivedHere = NT_DATA.booksMaster.filter(b => b.recipientZh.includes(name) || b.recipientEn.includes(loc.nameEn));

    let html = `
      <div class="d-card">
        <h4>${t.dossierGeoTitle}</h4>
        <p><strong>${t.dossierRegionLabel}:</strong> ${region}</p>
        <p style="margin-top:6px">${isZh ? loc.descZh : loc.descEn}</p>
      </div>

      <div class="d-card archeology-banner">
        <h4>${t.dossierArchTitle}</h4>
        <p>${isZh ? loc.archeologyZh : loc.archeologyEn}</p>
      </div>
    `;

    if (writtenHere.length > 0) {
      html += `
        <div class="d-card">
          <h4>${t.dossierWrittenTitle} (${writtenHere.length})</h4>
          <ul style="padding-left: 18px; margin-top: 6px; font-size: 13px;">
            ${writtenHere.map(b => `<li><strong>${isZh ? b.nameZh : b.nameEn}</strong> (${isZh ? '主後' : 'c.'} ${b.date})</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (receivedHere.length > 0) {
      html += `
        <div class="d-card">
          <h4>${t.dossierRecvTitle} (${receivedHere.length})</h4>
          <ul style="padding-left: 18px; margin-top: 6px; font-size: 13px;">
            ${receivedHere.map(b => `<li><strong>${isZh ? b.nameZh : b.nameEn}</strong> · ${isZh ? '使徒書信' : 'Apostolic Epistle'}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    this.openDrawer(region, name, grk, html);
  }

  // 2. 福音書詳情檔案
  openGospelDossier(gospelId) {
    const g = NT_DATA.gospels.find(item => item.id === gospelId);
    if (!g) return;

    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const loc = NT_DATA.locations[g.writtenAt];
    const writtenCityName = loc ? (isZh ? loc.nameZh : loc.nameEn) : g.writtenAt;

    let html = `
      <div class="d-card">
        <h4>${t.dossierBackgroundTitle}</h4>
        <p><strong>${isZh ? '成書年代' : 'Date'}:</strong> ${g.date}</p>
        <p><strong>${isZh ? '推定成書地' : 'Location'}:</strong> ${writtenCityName}</p>
        <p><strong>${isZh ? '目標讀者' : 'Audience'}:</strong> ${isZh ? g.audienceZh : g.audienceEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierRouteTitle}</h4>
        <p>${isZh ? g.routeSummaryZh : g.routeSummaryEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierNodesTitle}</h4>
        <div class="journey-step-list" style="margin-top:10px;">
          ${g.points.map((pt, idx) => {
            const pLoc = NT_DATA.locations[pt.loc];
            const pName = pLoc ? (isZh ? pLoc.nameZh : pLoc.nameEn) : pt.loc;
            const pTitle = isZh ? pt.titleZh : pt.titleEn;
            return `
              <div class="journey-step-item" onclick="window.NT_APP.mapEngine.focusCity('${pt.loc}', 9)">
                <strong>${idx + 1}. ${pName}</strong> — ${pTitle}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.openDrawer(isZh ? '四福音書' : 'The Four Gospels', isZh ? g.nameZh : g.nameEn, g.date, html);
  }

  // 3. 使徒行傳旅程詳情
  openActsJourneyDossier(journeyId) {
    const j = NT_DATA.actsJourneys.find(item => item.id === journeyId);
    if (!j) return;

    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];

    let html = `
      <div class="d-card">
        <h4>${t.dossierActsDateTitle}</h4>
        <p><strong>${isZh ? '發生時間' : 'Time Period'}:</strong> ${j.years}</p>
        <p><strong>${isZh ? '造訪站點數' : 'Stops'}:</strong> ${j.stops.length} ${isZh ? '個城鎮與港口' : 'cities & ports'}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierActsEventsTitle}</h4>
        <div class="journey-step-list" style="margin-top:10px;">
          ${j.events.map(ev => {
            const eloc = NT_DATA.locations[ev.loc];
            const locName = eloc ? (isZh ? eloc.nameZh : eloc.nameEn) : ev.loc;
            return `
              <div class="journey-step-item" onclick="window.NT_APP.mapEngine.focusCity('${ev.loc}', 9)">
                <strong>${locName}</strong> ${ev.year ? `(${ev.year})` : ''}<br>
                <span style="font-size:12px;opacity:0.9">${isZh ? ev.descZh : ev.descEn}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.openDrawer(isZh ? '使徒行傳' : 'Acts of the Apostles', isZh ? j.nameZh : j.nameEn, j.years, html);
  }

  // 4. 保羅書信詳情
  openEpistleDossier(epistleId) {
    const ep = NT_DATA.paulineEpistles.find(e => e.id === epistleId);
    if (!ep) return;

    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const fromLoc = NT_DATA.locations[ep.writtenAt];
    const toLoc = NT_DATA.locations[ep.recipientAt];
    const fromName = fromLoc ? (isZh ? fromLoc.nameZh : fromLoc.nameEn) : ep.writtenAt;
    const toName = toLoc ? (isZh ? toLoc.nameZh : toLoc.nameEn) : ep.recipientAt;

    let html = `
      <div class="d-card">
        <h4>${isZh ? '✉️ 書信傳遞座標' : '✉️ Transmission Coordinates'}</h4>
        <p><strong>${t.dossierWrittenAt}:</strong> ${fromName} (${isZh ? ep.journeyZh : ep.journeyEn})</p>
        <p><strong>${t.dossierRecipientAt}:</strong> ${toName}</p>
        <p><strong>${t.dossierEpistleDate}:</strong> ${ep.date}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierThemeTitle}</h4>
        <p style="color:var(--brand-antique-gold);font-weight:600">${isZh ? ep.themeZh : ep.themeEn}</p>
        <p style="margin-top:8px">${isZh ? ep.backgroundZh : ep.backgroundEn}</p>
      </div>
    `;

    if (ep.id === 'romans') {
      html += `
        <div class="d-card archeology-banner">
          <h4>${isZh ? '🏛️ 哥林多重大考古印證' : '🏛️ Corinth Archaeological Evidence'}</h4>
          <p>${isZh
            ? '羅馬書16章提到女執事<strong>非比</strong>（來自堅革哩港口，為保羅攜信前往羅馬）；16:23 提到城中司庫<strong>以拉都</strong>（Erastus），與哥林多考古挖掘出土之「以拉都市政官鋪石銘文」（Erastus Inscription）完美吻合！'
            : 'Romans 16 mentions deaconess <strong>Phoebe</strong> of Cenchreae delivering the letter to Rome, and v.23 greets <strong>Erastus</strong>, the city treasurer—directly corroborated by the famous Corinthian Erastus Inscription pavement discovery!'
          }</p>
        </div>
      `;
    }

    this.openDrawer(isZh ? '保羅書信網絡' : 'Pauline Epistles Network', isZh ? ep.nameZh : ep.nameEn, ep.date, html);
  }

  // 5. 啟示錄七教會詳情
  openRevelationChurchDossier(church) {
    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const loc = NT_DATA.locations[church.id];
    const locName = loc ? (isZh ? loc.nameZh : loc.nameEn) : church.nameZh;

    const html = `
      <div class="d-card">
        <h4>${t.dossierRevStationTitle}</h4>
        <p><strong>${isZh ? '第 ' + church.order + ' 站:' : 'Station #' + church.order + ':'}</strong> ${locName}</p>
        <p><strong>${isZh ? '經文段落:' : 'Scripture:'}</strong> ${church.scripture}</p>
        <p style="margin-top:6px;color:var(--brand-amber);font-weight:600">${isZh ? church.roleZh : church.roleEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierRevPromiseTitle}</h4>
        <p style="color:var(--brand-antique-gold);font-weight:600">${isZh ? church.promiseZh : church.promiseEn}</p>
      </div>

      <div class="d-card archeology-banner">
        <h4>${t.dossierArchTitle}</h4>
        <p>${loc ? (isZh ? loc.archeologyZh : loc.archeologyEn) : ''}</p>
      </div>
    `;

    this.openDrawer(isZh ? '啟示錄七教會' : 'Revelation 7 Churches', isZh ? church.nameZh : church.nameEn, church.scripture, html);
  }

  openRevelationOverviewDossier() {
    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const rev = NT_DATA.revelationPostalRoute;

    const html = `
      <div class="d-card">
        <h4>${t.dossierRevOverviewPatmos}</h4>
        <p>${isZh
          ? '使徒約翰因見證基督在羅馬皇帝多米田逼迫下被放逐至愛琴海拔摩島（主後 95 年）。他在主日被聖靈感動，聽見大聲音吩咐將所看見的寫在卷上，達與亞細亞的七個教會。'
          : 'Apostle John, exiled to the Aegean island of Patmos under Emperor Domitian’s persecution (c. 95 AD), was in the Spirit on the Lord’s Day and commanded to write what he saw to the seven churches of Asia.'
        }</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierRevOverviewCircuit}</h4>
        <p>${isZh ? rev.cycleDescriptionZh : rev.cycleDescriptionEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierRevOverviewChurches}</h4>
        <div class="journey-step-list" style="margin-top:10px;">
          ${rev.churches.map(c => `
            <div class="journey-step-item" onclick="window.NT_APP.mapEngine.focusCity('${c.id}', 9); window.NT_APP.openRevelationChurchDossier(${JSON.stringify(c).replace(/"/g, '&quot;')})">
              <strong>${c.order}. ${isZh ? c.nameZh : c.nameEn}</strong> — ${isZh ? c.roleZh : c.roleEn}
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.openDrawer(isZh ? '啟示文學' : 'Apocalyptic Literature', isZh ? '啟示錄與七教會環線' : 'Revelation 7 Churches Postal Route', rev.writtenDate, html);
  }

  // 6. 歷時性時期詳情
  openEraDossier(era) {
    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];

    let html = `
      <div class="d-card">
        <h4>${t.dossierEraContext}</h4>
        <p><strong>${isZh ? '歷史年代' : 'Years'}:</strong> ${era.years}</p>
        <p style="margin-top:8px">${isZh ? era.summaryZh : era.summaryEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierEraBooks}</h4>
        <p style="color:var(--brand-antique-gold);font-weight:600">${isZh ? era.booksWrittenZh : era.booksWrittenEn}</p>
      </div>

      <div class="d-card">
        <h4>${t.dossierEraHubs}</h4>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">
          ${era.focalCities.map(cKey => {
            const cLoc = NT_DATA.locations[cKey];
            const cName = cLoc ? (isZh ? cLoc.nameZh : cLoc.nameEn) : cKey;
            return `
              <button class="btn-pill" style="font-size:11px;padding:4px 10px;" onclick="window.NT_APP.mapEngine.focusCity('${cKey}', 9)">
                📍 ${cName}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.openDrawer(isZh ? '歷時性總覽' : 'Diachronic Overview', isZh ? era.titleZh : era.titleEn, era.years, html);
  }

  // 7. 大公書信與希伯來書總覽
  openGeneralEpistlesOverviewDossier() {
    const isZh = this.currentLanguage === 'zh';
    let html = `
      <div class="d-card">
        <h4>${isZh ? '🌐 大公書信普世特徵' : '🌐 Universal Character of General Epistles'}</h4>
        <p>${isZh
          ? '「大公」（Catholic / General）意為「普世性」，不同於保羅寫給特定單一教會，這些書信主要是致散居地中海各行省的猶太與外邦信徒群體。'
          : '“Catholic” or “General” denotes universal relevance; unlike Paul’s letters addressed to individual congregations, these were encyclical epistles sent to scattered communities facing trial and heresy across the Roman world.'
        }</p>
      </div>
      <div class="d-card">
        <h4>${isZh ? '📜 包含書卷' : '📜 Canonical Letters'}</h4>
        <ul style="padding-left:18px;margin-top:6px;font-size:13px;">
          ${NT_DATA.generalEpistles.map(ge => `
            <li style="margin-bottom:6px;">
              <strong>${isZh ? ge.nameZh : ge.nameEn}</strong> (${ge.date})<br>
              <span style="font-size:12px;color:var(--brand-muted)">${isZh ? ge.themeZh : ge.themeEn}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    this.openDrawer(isZh ? '普世牧養' : 'General Letters', isZh ? '大公書信與希伯來書' : 'General Epistles & Hebrews', '30–100 AD', html);
  }

  openGeneralEpistleDossier(geId) {
    const ge = NT_DATA.generalEpistles.find(g => g.id === geId);
    if (!ge) return;

    const isZh = this.currentLanguage === 'zh';
    const fromLoc = NT_DATA.locations[ge.writtenAt];
    const toLoc = NT_DATA.locations[ge.recipientAt];
    const fromName = fromLoc ? (isZh ? fromLoc.nameZh : fromLoc.nameEn) : ge.writtenAt;
    const toName = toLoc ? (isZh ? toLoc.nameZh : toLoc.nameEn) : ge.recipientAt;

    let html = `
      <div class="d-card">
        <h4>${isZh ? '✉️ 成書背景與收信人' : '✉️ Background & Recipients'}</h4>
        <p><strong>${isZh ? '書寫地點' : 'Written At'}:</strong> ${fromName}</p>
        <p><strong>${isZh ? '收信對象' : 'Recipient'}:</strong> ${toName}</p>
        <p><strong>${isZh ? '成書年代' : 'Date'}:</strong> ${ge.date}</p>
      </div>
      <div class="d-card">
        <h4>${isZh ? '🕊️ 核心神學主題' : '🕊️ Core Theological Theme'}</h4>
        <p style="color:var(--brand-antique-gold);font-weight:600">${isZh ? ge.themeZh : ge.themeEn}</p>
        <p style="margin-top:8px">${isZh ? ge.backgroundZh : ge.backgroundEn}</p>
      </div>
    `;

    this.openDrawer(isZh ? '大公書信' : 'General Epistles', isZh ? ge.nameZh : ge.nameEn, ge.date, html);
  }

  // 8. 全書卷時空矩陣 (Master Matrix Table)
  renderMasterMatrix() {
    const tbody = document.getElementById('matrix-tbody');
    if (!tbody) return;

    const isZh = this.currentLanguage === 'zh';
    const t = I18N[this.currentLanguage];
    const books = NT_DATA.booksMaster;

    tbody.innerHTML = books.map((b, idx) => {
      const writtenLoc = NT_DATA.locations[b.written];
      const wName = writtenLoc ? (isZh ? writtenLoc.nameZh : writtenLoc.nameEn) : b.written;
      const bName = isZh ? b.nameZh : b.nameEn;
      const bAbbrev = isZh ? b.abbrevZh : b.abbrevEn;
      const bCat = isZh ? b.categoryZh : b.categoryEn;
      const bRecipient = isZh ? b.recipientZh : b.recipientEn;

      let catClass = 'paul';
      if (b.categoryZh === '福音書') catClass = 'gospel';
      else if (b.categoryZh === '大公書信') catClass = 'general';
      else if (b.categoryZh === '啟示文學') catClass = 'revelation';

      return `
        <tr onclick="window.NT_APP.handleMatrixRowClick('${b.nameZh}', '${b.written}', '${b.categoryZh}')">
          <td style="font-weight:700;color:var(--brand-antique-gold)">${idx + 1}</td>
          <td><strong>${bName}</strong> <span style="opacity:0.6">(${bAbbrev})</span></td>
          <td><span class="badge-cat ${catClass}">${bCat}</span></td>
          <td style="font-family:monospace">${b.date}</td>
          <td>${wName}</td>
          <td>${bRecipient}</td>
          <td><button class="btn-pill" style="padding:2px 8px;font-size:10px;">${t.matrixBtnFocus}</button></td>
        </tr>
      `;
    }).join('');
  }

  filterMasterMatrix() {
    const searchVal = (document.getElementById('matrix-search')?.value || '').toLowerCase();
    const activePill = document.querySelector('.mq-pill.active')?.dataset.cat || 'all';

    document.querySelectorAll('#matrix-tbody tr').forEach(row => {
      const text = row.innerText.toLowerCase();
      const matchSearch = text.includes(searchVal);
      const matchCat = activePill === 'all' || text.includes(activePill);
      row.style.display = matchSearch && matchCat ? '' : 'none';
    });
  }

  handleMatrixRowClick(bookName, cityKey, category) {
    // 智慧跳轉：切換至對應視角並定位城市展開檔案
    if (category === '福音書') {
      const gObj = NT_DATA.gospels.find(g => g.nameZh === bookName);
      if (gObj) {
        this.activeGospelId = gObj.id;
        this.switchView('gospels');
        return;
      }
    } else if (category === '保羅書信') {
      const epObj = NT_DATA.paulineEpistles.find(e => e.nameZh === bookName);
      if (epObj) {
        this.switchView('epistles');
        this.activeEpistleId = epObj.id;
        this.mapEngine.renderEpistlesNetwork(epObj.id);
        this.openEpistleDossier(epObj.id);
        return;
      }
    } else if (category === '啟示文學') {
      this.switchView('revelation');
      return;
    } else if (category === '歷史書') {
      this.switchView('acts');
      return;
    } else if (category === '大公書信') {
      this.switchView('general');
      const geObj = NT_DATA.generalEpistles.find(g => g.nameZh === bookName);
      if (geObj) {
        this.openGeneralEpistleDossier(geObj.id);
      }
      return;
    }

    // 預設切換至 timeline 視角定位
    this.switchView('timeline');
    if (cityKey && NT_DATA.locations[cityKey]) {
      this.mapEngine.focusCity(cityKey, 9);
      this.openLocationDossier(cityKey);
    }
  }

  // 套用語言字典至 DOM
  applyLanguage() {
    const t = I18N[this.currentLanguage];
    document.documentElement.lang = this.currentLanguage === 'zh' ? 'zh-Hant' : 'en';

    // 標頭元素
    const brandBadge = document.querySelector('.brand-badge');
    if (brandBadge) brandBadge.textContent = t.brandBadge;

    const mainH1 = document.querySelector('.title-area h1');
    if (mainH1) {
      mainH1.innerHTML = `${t.appTitle} <em>${t.appSubtitle}</em>`;
    }

    const appDesc = document.querySelector('.title-area p');
    if (appDesc) appDesc.textContent = t.appDesc;

    const aboutSummary = document.querySelector('.about-details summary');
    if (aboutSummary) aboutSummary.textContent = t.aboutSummary;

    // 按鈕
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.textContent = t.langToggle;

    const baseBtn = document.getElementById('basemap-toggle-btn');
    if (baseBtn) {
      const isHot = baseBtn.dataset.mode === 'hot';
      baseBtn.textContent = isHot ? t.basemapHot : t.basemapOsm;
    }

    // 視角 Tab 按鈕
    const tabMap = {
      timeline: [t.tabTimeline, t.tabTimelineBadge],
      gospels: [t.tabGospels, t.tabGospelsBadge],
      acts: [t.tabActs, t.tabActsBadge],
      epistles: [t.tabEpistles, t.tabEpistlesBadge],
      revelation: [t.tabRevelation, t.tabRevelationBadge],
      general: [t.tabGeneral, t.tabGeneralBadge],
      matrix: [t.tabMatrix, t.tabMatrixBadge]
    };

    document.querySelectorAll('.vtab-btn').forEach(btn => {
      const v = btn.dataset.view;
      if (tabMap[v]) {
        btn.innerHTML = `<span>${tabMap[v][0]}</span><span class="vtab-badge">${tabMap[v][1]}</span>`;
      }
    });

    // 時間軸
    const tlLabel = document.querySelector('.timeline-label');
    if (tlLabel) tlLabel.textContent = t.timelineLabel;

    document.querySelectorAll('.era-btn').forEach((btn, idx) => {
      if (t.eras[idx]) btn.textContent = t.eras[idx];
    });

    // 矩陣視圖介面
    const mTitle = document.querySelector('#matrix-view-wrap h2');
    if (mTitle) mTitle.textContent = t.matrixTitle;

    const mDesc = document.querySelector('#matrix-view-wrap p');
    if (mDesc) mDesc.textContent = t.matrixDesc;

    const mSearch = document.getElementById('matrix-search');
    if (mSearch) mSearch.placeholder = t.matrixSearchPlaceholder;

    // 矩陣分類按鈕
    const pillCatMap = {
      all: t.matrixPillAll,
      '福音書': t.matrixPillGospels,
      'Gospels': t.matrixPillGospels,
      '歷史書': t.matrixPillActs,
      'Historical': t.matrixPillActs,
      '保羅書信': t.matrixPillPaul,
      'Pauline Epistles': t.matrixPillPaul,
      '大公書信': t.matrixPillGeneral,
      'General Epistles': t.matrixPillGeneral,
      '啟示文學': t.matrixPillRev,
      'Apocalyptic': t.matrixPillRev
    };

    document.querySelectorAll('.mq-pill').forEach(pill => {
      const cat = pill.dataset.cat;
      if (pillCatMap[cat]) pill.textContent = pillCatMap[cat];
    });

    // 矩陣表頭
    const ths = document.querySelectorAll('.matrix-table th');
    if (ths.length === 7) {
      ths[0].textContent = t.matrixThNum;
      ths[1].textContent = t.matrixThBook;
      ths[2].textContent = t.matrixThCat;
      ths[3].textContent = t.matrixThDate;
      ths[4].textContent = t.matrixThWritten;
      ths[5].textContent = t.matrixThRecipient;
      ths[6].textContent = t.matrixThAction;
    }

    // 頁尾
    const footerSpans = document.querySelectorAll('footer .footer-inner > div span');
    if (footerSpans.length >= 4) {
      footerSpans[0].textContent = t.footerProject;
      footerSpans[2].textContent = t.footerTile;
      footerSpans[3].textContent = t.footerBrand;
    }
  }

  // 雙語即時切換
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
    this.mapEngine.currentLanguage = this.currentLanguage;
    this.mapEngine.plotAllCityMarkers();
    this.applyLanguage();
    this.switchView(this.currentView);
    this.renderMasterMatrix();
  }
}

// 實例化全域應用物件
window.addEventListener('DOMContentLoaded', () => {
  window.NT_APP = new NTApp();
  window.NT_APP.init();
});
