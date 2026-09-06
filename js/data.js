/**
 * 新約地理互動地圖資料庫 (NT Geography Explorer Data)
 * 完整雙語資料庫 (Comprehensive Bilingual Dataset: Traditional Chinese & English)
 */

const NT_DATA = {
  // 品牌調色盤常數
  brandColors: {
    charcoal: '#2B2B2B',       // 炭灰
    warmWhite: '#F5F3EE',      // 温暖白
    antiqueGold: '#C8A96A',    // 古金
    slateBlue: '#4A5D73',      // 靛藍 / 觬藍
    ivory: '#EAE6DC',          // 柔米
    amber: '#D6A84C'           // 琥珀
  },

  // 地理城市與聖經考古座標
  locations: {
    jerusalem: {
      nameZh: '耶路撒冷',
      nameEn: 'Jerusalem',
      nameGrk: 'Ἱεροσόλυμα',
      coords: [31.7767, 35.2345],
      regionZh: '猶太 (Judea)',
      regionEn: 'Judea',
      descZh: '新約救贖歷史的核心中心：聖殿、受難與復活、五旬節聖靈降臨、早期母會與耶路撒冷會議所在地。',
      descEn: 'The spiritual heart of the NT: Temple, Passion & Resurrection, Pentecost, Mother Church, and the Council of Jerusalem.',
      archeologyZh: '聖殿山南階考古、畢士大池、西羅亞池、希律王宮遺址。',
      archeologyEn: 'Southern Temple Mount steps excavations, Pools of Bethesda and Siloam, Herod’s palace remains.'
    },
    bethlehem: {
      nameZh: '伯利恆',
      nameEn: 'Bethlehem',
      nameGrk: 'Βηθλέεμ',
      coords: [31.7054, 35.2024],
      regionZh: '猶太 (Judea)',
      regionEn: 'Judea',
      descZh: '耶穌基督降生地，大衛的故鄉，應驗彌迦書 5:2 之預言。',
      descEn: 'Birthplace of Jesus Christ, city of David, fulfilling Micah 5:2.',
      archeologyZh: '主誕堂（Church of the Nativity）、聖傑羅姆譯經洞穴。',
      archeologyEn: 'Church of the Nativity, Grotto of the Nativity, Jerome’s cave.'
    },
    nazareth: {
      nameZh: '拿撒勒',
      nameEn: 'Nazareth',
      nameGrk: 'Ναζαρέτ',
      coords: [32.7019, 35.3033],
      regionZh: '加利利 (Galilee)',
      regionEn: 'Galilee',
      descZh: '耶穌成長居住之處，耶穌在此會堂宣讀以賽亞書並展開事工。',
      descEn: 'Childhood home of Jesus, where he proclaimed Isaiah in the synagogue.',
      archeologyZh: '天使報喜堂、公元一世紀農莊生活遺構。',
      archeologyEn: 'Basilica of the Annunciation, 1st-century courtyard house excavations.'
    },
    capernaum: {
      nameZh: '迦百農',
      nameEn: 'Capernaum',
      nameGrk: 'Καφαρναούμ',
      coords: [32.8806, 35.5753],
      regionZh: '加利利 (Galilee)',
      regionEn: 'Galilee',
      descZh: '「耶穌自己的城」，加利利宣教事工樞紐，呼召彼得、安得烈、雅各、約翰與馬太。',
      descEn: '“Jesus’ own city”, headquarters of the Galilean ministry; calling of Peter and disciples.',
      archeologyZh: '彼得故居遺址（八角教堂下方）、四世紀猶太會堂玄武岩基座。',
      archeologyEn: 'St. Peter’s Insula (beneath octagonal church), 4th-century white limestone synagogue over 1st-century basalt foundation.'
    },
    seaOfGalilee: {
      nameZh: '加利利海',
      nameEn: 'Sea of Galilee',
      nameGrk: 'Τιβεριάς / Γεννησαρέτ',
      coords: [32.8200, 35.5800],
      regionZh: '加利利 (Galilee)',
      regionEn: 'Galilee',
      descZh: '平靜風浪、履海神蹟、登山寶訓與多次捕魚神蹟之水域。',
      descEn: 'Calming the storm, walking on water, feeding multitudes on surrounding hills.',
      archeologyZh: '1986年出土「加利利古船」（約公元一世紀造）。',
      archeologyEn: '1986 “Jesus Boat” discovery (1st-century fishing vessel preserved in mud).'
    },
    jordanRiver: {
      nameZh: '約旦河受洗處',
      nameEn: 'Jordan River (Bethabara)',
      nameGrk: 'Ἰορδάνης',
      coords: [31.8385, 35.5484],
      regionZh: '庇哩亞 / 猶太邊界',
      regionEn: 'Perea / Judea Border',
      descZh: '施洗約翰事工所在地，耶穌在此受洗，聖靈如鴿子降臨。',
      descEn: 'Baptism site of Jesus by John the Baptist, where the Holy Spirit descended like a dove.',
      archeologyZh: '卡斯爾葉胡德（Qasr al-Yahud）考古受洗池遺跡。',
      archeologyEn: 'Qasr al-Yahud and Bethany Beyond the Jordan Byzantine baptismal pools.'
    },
    alexandria: {
      nameZh: '埃及 / 亞歷山大港',
      nameEn: 'Alexandria / Egypt',
      nameGrk: 'Ἀλεξάνδρεια',
      coords: [31.2001, 29.9187],
      regionZh: '埃及 (Egypt)',
      regionEn: 'Egypt',
      descZh: '聖家逃難之地（太 2:13-15）；希臘化猶太學術中心，七十士譯本（LXX）翻譯處，亞波羅故鄉，希伯來書可能撰寫地。',
      descEn: 'Flight of the Holy Family; intellectual capital of Hellenistic Judaism, home of Apollos, candidate origin for Hebrews.',
      archeologyZh: '古代大圖書館遺址周遭、七十士譯本發源地。',
      archeologyEn: 'Ancient Library district, Hellenistic Jewish quarter remnants.'
    },
    caesarea: {
      nameZh: '凱撒利亞',
      nameEn: 'Caesarea Maritima',
      nameGrk: 'Καισάρεια',
      coords: [32.5008, 34.8924],
      regionZh: '猶太省首府',
      regionEn: 'Judea Province Capital',
      descZh: '羅馬總督駐地；彼得為百夫長哥尼流施洗（福音臨外邦起點）；腓利事工中心；保羅被監禁兩年（主後57-59年）並向非斯都、亞基帕王分訴。',
      descEn: 'Roman administrative capital; Cornelius baptism, Paul imprisoned 2 years before voyage to Rome.',
      archeologyZh: '「彼拉多石碑」（Pilate Stone）、希律海濱宮殿、古羅馬圓形劇場與引水道。',
      archeologyEn: 'Pilate Inscription stone, Herod’s Promontory Palace, Roman theater and aqueduct.'
    },
    samaria: {
      nameZh: '撒瑪利亞 (撒巴斯忒)',
      nameEn: 'Samaria (Sebaste)',
      nameGrk: 'Σαμάρεια',
      coords: [32.2770, 35.1880],
      regionZh: '撒瑪利亞 (Samaria)',
      regionEn: 'Samaria',
      descZh: '司提反殉道後門徒散逸至此；腓利傳福音大有能力，彼得與約翰按手賜聖靈（徒 8章）。',
      descEn: 'Philip preached after Stephen’s stoning; Peter and John laid hands for the Holy Spirit.',
      archeologyZh: '希律建立之奧古斯都神廟遺址、古羅馬列柱大道。',
      archeologyEn: 'Herodian Augusteum temple, Roman colonnaded street and city walls.'
    },
    damascus: {
      nameZh: '大馬士革',
      nameEn: 'Damascus',
      nameGrk: 'Δαμασκός',
      coords: [33.5138, 36.2765],
      regionZh: '敘利亞 (Syria)',
      regionEn: 'Syria',
      descZh: '保羅在大馬士革路上見復活主大光歸信；亞拿尼亞奉差按手；保羅由筐子自城牆垂下逃脫。',
      descEn: 'Saul’s dramatic Damascus Road conversion; Ananias; Paul escaped through city wall in a basket.',
      archeologyZh: '「直街」（Straight Street, Via Recta）、亞拿尼亞之家小堂。',
      archeologyEn: 'Via Recta (Straight Street colonnade), Chapel of Saint Ananias crypt.'
    },
    arabia: {
      nameZh: '阿拉伯 (拿巴泰境域)',
      nameEn: 'Arabia (Nabataea)',
      nameGrk: 'Ἀραβία',
      coords: [30.3285, 35.4444],
      regionZh: '阿拉伯 / 拿巴泰王國',
      regionEn: 'Nabataean Realm',
      descZh: '保羅歸信後未立即上耶路撒冷，而是在阿拉伯隱修與思索福音神學近三年（加 1:17）。',
      descEn: 'Paul retreated into Arabia for theological reflection after conversion (Gal 1:17).',
      archeologyZh: '佩特拉（Petra）及拿巴泰王亞哩達四世銘文。',
      archeologyEn: 'Petra monumental tombs and King Aretas IV epigraphic records.'
    },
    antiochSyria: {
      nameZh: '敘利亞安提阿',
      nameEn: 'Antioch (Syria)',
      nameGrk: 'Ἀντιόχεια',
      coords: [36.2021, 36.1606],
      regionZh: '敘利亞行省首府',
      regionEn: 'Syria Province Capital',
      descZh: '普世宣教基地：門徒稱為「基督徒」自此起；巴拿巴與保羅被聖靈差派展開三次宣教旅程出發點；馬太福音與加拉太書早期的推定成書地。',
      descEn: 'Missionary launching pad: believers first called “Christians”; launchpad for Paul’s 3 journeys.',
      archeologyZh: '聖彼得洞穴教堂（St. Peter’s Cave Church）、古奧龍特斯河岸遺蹟。',
      archeologyEn: 'Church of Saint Peter (cave church), Orontes river port structures.'
    },
    seleucia: {
      nameZh: '西流基',
      nameEn: 'Seleucia Pieria',
      nameGrk: 'Σελεύκεια',
      coords: [36.1217, 35.9189],
      regionZh: '敘利亞 (Syria)',
      regionEn: 'Syria',
      descZh: '安提阿的外港，保羅與巴拿巴第一次宣教啟航出海港口（徒 13:4）。',
      descEn: 'Port of Syrian Antioch, embarkation point for Paul & Barnabas’ 1st journey.',
      archeologyZh: '提圖斯維斯帕先引水隧道（Titus Tunnel）。',
      archeologyEn: 'Vespasian-Titus rock-cut diversion tunnel and ancient breakwaters.'
    },
    salamis: {
      nameZh: '撒拉米',
      nameEn: 'Salamis',
      nameGrk: 'Σαλαμίς',
      coords: [35.1856, 33.9031],
      regionZh: '塞浦路斯 (Cyprus)',
      regionEn: 'Cyprus',
      descZh: '保羅與巴拿巴登塞浦路斯東岸首站，在猶太各會堂宣講道（徒 13:5）。',
      descEn: 'First stop in Cyprus, Paul and Barnabas preached in synagogues.',
      archeologyZh: '大型希臘化體育場（Gymnasium）、古羅馬浴場與巴拿巴墓。',
      archeologyEn: 'Hellenistic Gymnasium, Roman baths, traditional tomb of Saint Barnabas.'
    },
    paphos: {
      nameZh: '帕弗',
      nameEn: 'Paphos',
      nameGrk: 'Πάφος',
      coords: [34.7556, 32.4111],
      regionZh: '塞浦路斯首府',
      regionEn: 'Cyprus Capital',
      descZh: '羅馬總督士求保羅駐地；術士以呂馬敵擋使徒眼盲，總督信主（徒 13:6-12）。',
      descEn: 'Roman proconsul Sergius Paulus believed after sorcerer Elymas blinded.',
      archeologyZh: '保羅受鞭打石柱、羅馬總督官邸鑲嵌畫。',
      archeologyEn: 'Pillar of St. Paul, Roman Governor’s Palace mosaics.'
    },
    perga: {
      nameZh: '別加',
      nameEn: 'Perga',
      nameGrk: 'Πέργη',
      coords: [36.9606, 30.5694],
      regionZh: '旁非利亞 (Pamphylia)',
      regionEn: 'Pamphylia',
      descZh: '保羅一行抵達小亞細亞本土首站；約翰馬可在此離隊折返耶路撒冷（徒 13:13）。',
      descEn: 'Arrival in Asia Minor; John Mark departed here back to Jerusalem.',
      archeologyZh: '壯觀希臘化圓形塔城門、列柱大道、古劇場。',
      archeologyEn: 'Hellenistic twin-tower gate, water canal street, stadium and theater.'
    },
    attalia: {
      nameZh: '亞大利',
      nameEn: 'Attalia',
      nameGrk: 'Ἀττάλεια',
      coords: [36.8841, 30.7056],
      regionZh: '旁非利亞 (Pamphylia)',
      regionEn: 'Pamphylia',
      descZh: '第一次宣教旅程結束時搭船返回敘利亞安提阿的海港（徒 14:25）。',
      descEn: 'Port where Paul and Barnabas sailed back to Antioch at end of 1st journey.',
      archeologyZh: '哈德良之門（Hadrian’s Gate）、古羅馬港灣城牆。',
      archeologyEn: 'Hadrian’s Gate, ancient harbor walls and Roman harbor basin.'
    },
    pisidianAntioch: {
      nameZh: '彼西底安提阿',
      nameEn: 'Pisidian Antioch',
      nameGrk: 'Ἀντιόχεια τῆς Πισιδίας',
      coords: [38.3075, 31.1892],
      regionZh: '加拉太省 (Galatia)',
      regionEn: 'Galatia Province',
      descZh: '保羅在此發表使徒行傳記載最長之一的會堂講道（徒 13:16-41）；福音轉向外邦人重大宣言。加拉太書受信群體之一。',
      descEn: 'Site of Paul’s major synagogue sermon; pivot to the Gentiles. Addressed in Galatians.',
      archeologyZh: '奧古斯都神廟遺址（Augusteum）、拜占庭聖保羅大教堂。',
      archeologyEn: 'Temple of Augustus, Tiberius Square, Basilica of St. Paul.'
    },
    iconium: {
      nameZh: '以哥念',
      nameEn: 'Iconium',
      nameGrk: 'Ἰκόνιον',
      coords: [37.8714, 32.4846],
      regionZh: '加拉太省 (Galatia)',
      regionEn: 'Galatia Province',
      descZh: '保羅巴拿巴行神蹟，城中眾人分裂，保羅險遭用石頭打死（徒 14:1-6）。今土耳其科尼亞。',
      descEn: 'Signs and wonders; city divided; escape from threatened stoning.',
      archeologyZh: '古代科尼亞衛城遺址、希臘羅馬銘文。',
      archeologyEn: 'Alaaddin Hill acropolis, Greco-Roman architectural spolia.'
    },
    lystra: {
      nameZh: '路司得',
      nameEn: 'Lystra',
      nameGrk: 'Λύστρα',
      coords: [37.5750, 32.4539],
      regionZh: '加拉太省 (Galatia)',
      regionEn: 'Galatia Province',
      descZh: '醫好瘸腿者被群眾誤認為希臘神祇丟斯與希耳米；後遭安提阿猶太人挑唆，保羅被石頭打得半死棄於城外；提摩太故鄉。',
      descEn: 'Healed lame man; mistaken for Hermes and Zeus; Paul stoned and dragged out; Timothy’s home.',
      archeologyZh: '路司得土丘（Hatunsaray Mound）、拉丁殖民地碑文。',
      archeologyEn: 'Hatunsaray mound, Roman colony inscription confirming Lystra location.'
    },
    derbe: {
      nameZh: '特庇',
      nameEn: 'Derbe',
      nameGrk: 'Δέρβη',
      coords: [37.3481, 33.3639],
      regionZh: '加拉太省 (Galatia)',
      regionEn: 'Galatia Province',
      descZh: '第一次宣教旅程最東南終點站；傳福音收了許多門徒（徒 14:20-21）。該猶故鄉。',
      descEn: 'Furthest eastern turning point of 1st journey; won many disciples in a peaceful stay.',
      archeologyZh: 'Kerti Hüyük 遺址主教座堂遺構。',
      archeologyEn: 'Kerti Hüyük site, 1956 Michael Ballance inscription confirming Derbe.'
    },
    tarsus: {
      nameZh: '大數',
      nameEn: 'Tarsus',
      nameGrk: 'Ταρσός',
      coords: [36.9167, 34.8958],
      regionZh: '基利家 (Cilicia)',
      regionEn: 'Cilicia',
      descZh: '保羅故鄉（「非無名小城」），生來具羅馬公民身分，希臘化哲學教育名城。',
      descEn: 'Birthplace of Paul, “no mean city”; famous center of Stoic learning; Roman citizenship.',
      archeologyZh: '聖保羅之井、羅馬街道與克麗奧佩脫拉之門。',
      archeologyEn: 'St. Paul’s Well, excavated Roman basalt street, Cleopatra’s Gate.'
    },
    troas: {
      nameZh: '特羅亞',
      nameEn: 'Troas (Alexandria Troas)',
      nameGrk: 'Τρῳάς',
      coords: [39.7561, 26.1611],
      regionZh: '亞西亞 (Asia)',
      regionEn: 'Asia Province',
      descZh: '關鍵轉折點：保羅在此夜見「馬其頓呼聲」異象（徒 16:8-10），福音正式踏入歐洲；猶推古墜樓復活神蹟；保羅提後絕筆留有外衣與皮卷之處。',
      descEn: 'Vision of the Macedonian Man; Gospel enters Europe; Eutychus raised; cloak & parchments left here.',
      archeologyZh: '希羅德阿提庫斯大浴場、人造古港灣石構。',
      archeologyEn: 'Herodes Atticus gymnasium/bath complex, ancient artificial harbor basin.'
    },
    philippi: {
      nameZh: '腓立比',
      nameEn: 'Philippi',
      nameGrk: 'Φίλιπποι',
      coords: [41.0133, 24.2858],
      regionZh: '馬其頓行省 (Macedonia)',
      regionEn: 'Macedonia Province',
      descZh: '歐洲宣教第一城：河畔呂底亞信主全家受洗；被囚禁唱詩地大震動獄卒信主；腓立比書收信教會。',
      descEn: 'First European church: Lydia’s baptism, midnight earthquake in prison; Philippians epistle.',
      archeologyZh: '古羅馬集市廣場（Agora）、保羅監獄遺構、八角大教堂。',
      archeologyEn: 'Roman Forum, traditional prison of Paul, Octagon Church, Via Egnatia.'
    },
    thessalonica: {
      nameZh: '帖撒羅尼迦',
      nameEn: 'Thessalonica',
      nameGrk: 'Θεσσαλονίκη',
      coords: [40.6401, 22.9444],
      regionZh: '馬其頓行省首府',
      regionEn: 'Macedonia Capital',
      descZh: '馬其頓大道要衝；保羅一連三個安息日辯道，被控「顛覆天下」另立耶穌為王；帖前後書收信教會。',
      descEn: 'Macedonian capital on Via Egnatia; accused of “turning the world upside down”; 1 & 2 Thess.',
      archeologyZh: '古羅馬廣場（Forum）、伽勒里烏斯拱門、埃格納提亞大道石鋪路面。',
      archeologyEn: 'Roman Agora, Arch of Galerius, Via Egnatia paved stones.'
    },
    berea: {
      nameZh: '庇哩亞',
      nameEn: 'Berea (Veria)',
      nameGrk: 'Βέροια',
      coords: [40.5244, 22.2039],
      regionZh: '馬其頓行省 (Macedonia)',
      regionEn: 'Macedonia',
      descZh: '庇哩亞人「賢於帖撒羅尼迦人，甘心領受這道，天天考查聖經」（徒 17:11）。',
      descEn: 'Bereans were “more noble-minded, examining the Scriptures daily” to test Paul’s words.',
      archeologyZh: '聖保羅講台（Bema of St. Paul）紀念壇。',
      archeologyEn: 'Bema of St. Paul commemorative steps and mosaics.'
    },
    athens: {
      nameZh: '雅典',
      nameEn: 'Athens',
      nameGrk: 'Ἀθῆναι',
      coords: [37.9838, 23.7275],
      regionZh: '亞該亞 (Achaia)',
      regionEn: 'Achaia',
      descZh: '古希臘文化頂點；保羅見滿城偶像心裡焦急，在亞略巴古（Areopagus）向斯多亞與伊壁鳩魯哲士宣講「未識之神」與復活（徒 17章）。',
      descEn: 'Intellectual capital; Paul debated Stoics & Epicureans at the Areopagus regarding the Unknown God.',
      archeologyZh: '衛城帕德嫩神廟、亞略巴古石丘、阿哥拉集市廣場。',
      archeologyEn: 'Parthenon on the Acropolis, Mars Hill (Areopagus rock), Ancient Agora.'
    },
    corinth: {
      nameZh: '哥林多',
      nameEn: 'Corinth',
      nameGrk: 'Κόρινθος',
      coords: [37.9056, 22.8803],
      regionZh: '亞該亞行省首府',
      regionEn: 'Achaia Province Capital',
      descZh: '商業樞紐；保羅二次旅程長駐18個月；與亞居拉百基拉織帳棚；在此撰寫帖前後書；三次旅程末在此過冬三個月寫下《羅馬書》；哥前後書收信地。',
      descEn: 'Trade megacity; Paul stayed 18 mos; tentmaking; wrote 1&2 Thess & Romans; received 1&2 Cor.',
      archeologyZh: '「迦流審判座」（Bema of Gallio, 徒 18:12）、極具歷史證言之「以拉都市政官鋪石銘文」（Erastus Inscription, 羅 16:23）。',
      archeologyEn: 'Bema of Gallio, famous Erastus Inscription stone (Rom 16:23), Temple of Apollo.'
    },
    cenchreae: {
      nameZh: '堅革哩',
      nameEn: 'Cenchreae',
      nameGrk: 'Κεγχρεαί',
      coords: [37.8864, 22.9903],
      regionZh: '亞該亞 (Achaia)',
      regionEn: 'Achaia',
      descZh: '哥林多東向愛琴海港口；保羅許願剪髮之處（徒 18:18）；女執事非比（Phoebe）母會，非比親手攜帶《羅馬書》遠赴羅馬。',
      descEn: 'Eastern harbor of Corinth; Paul shaved his head for a vow; deaconess Phoebe carried letter to Rome.',
      archeologyZh: '淹沒於水下的港口碼頭建築與早期基督教巴西利卡教堂基石。',
      archeologyEn: 'Submerged Greco-Roman harbor quays, Early Christian basilica foundations.'
    },
    nicopolis: {
      nameZh: '尼哥坡里',
      nameEn: 'Nicopolis',
      nameGrk: 'Νικόπολις',
      coords: [39.0253, 20.7333],
      regionZh: '伊庇魯斯 (Epirus)',
      regionEn: 'Epirus',
      descZh: '屋大維紀念亞克興海戰大勝所建「勝利之城」；保羅定意在此過冬，並可能在此寫下《提多書》（多 3:12）。',
      descEn: '“City of Victory”; Paul decided to spend winter here and wrote Titus (Titus 3:12).',
      archeologyZh: '巨型羅馬奧古斯都紀念碑、引水道與馬賽克教堂大殿。',
      archeologyEn: 'Monument of Augustus, Roman aqueduct, Basilica of Dumetios mosaics.'
    },
    ephesus: {
      nameZh: '以弗所',
      nameEn: 'Ephesus',
      nameGrk: 'Ἔφεσος',
      coords: [37.9400, 27.3417],
      regionZh: '亞西亞行省首府',
      regionEn: 'Asia Province Capital',
      descZh: '新約最重要雙重樞紐：保羅第三次旅程長駐近三年，在推喇奴學房辯道，引發銀匠底米丟暴動；撰寫哥林多前書；使徒約翰晚年牧養與成書處；啟示錄七教會首站。',
      descEn: 'Major hub: Paul spent 3 years here (School of Tyrannus, riot in theater); wrote 1 Cor; John’s late ministry; 1st of 7 Churches.',
      archeologyZh: '可容納 25,000 人的古代大劇場（徒 19:29）、塞爾蘇斯圖書館、亞底米神廟基座、聖約翰大教堂。',
      archeologyEn: '25,000-seat Grand Theater (Acts 19:29), Library of Celsus, Temple of Artemis, Basilica of St. John.'
    },
    miletus: {
      nameZh: '米利都',
      nameEn: 'Miletus',
      nameGrk: 'Μίλητος',
      coords: [37.5308, 27.2783],
      regionZh: '亞西亞 (Asia)',
      regionEn: 'Asia Province',
      descZh: '保羅第三次旅程急欲趕赴耶路撒冷守五旬節，特邀以弗所長老前來米利都海濱發表淚別贈言（徒 20:17-38）。',
      descEn: 'Paul called Ephesian elders to beach for poignant emotional farewell discourse (Acts 20).',
      archeologyZh: '規模壯麗的古希臘羅馬劇場、浮雕海港獅子石雕。',
      archeologyEn: 'Faustina baths, monumental theater, Harbor Monument of Lions.'
    },
    sidon: {
      nameZh: '西頓',
      nameEn: 'Sidon',
      nameGrk: 'Σιδών',
      coords: [33.5631, 35.3689],
      regionZh: '腓尼基 (Phoenicia)',
      regionEn: 'Phoenicia',
      descZh: '百夫長猶流寬待保羅，准他上岸探望朋友受照應（徒 27:3）。',
      descEn: 'Julius courteously allowed Paul to go to his friends and be cared for.',
      archeologyZh: '古代腓尼基海城堡與衛城遺址。',
      archeologyEn: 'Phoenician Sea Castle, ancient harbor basin, Temple of Eshmun nearby.'
    },
    myra: {
      nameZh: '每拉',
      nameEn: 'Myra',
      nameGrk: 'Μύρα',
      coords: [36.2583, 29.9856],
      regionZh: '呂家 (Lycia)',
      regionEn: 'Lycia',
      descZh: '押解保羅往羅馬的百夫長在此換搭一艘亞歷山大港運糧船（徒 27:5-6）。今土耳其德姆雷。',
      descEn: 'Centurion transferred Paul onto an Alexandrian grain ship bound for Italy.',
      archeologyZh: '呂家岩壁懸墓群、羅馬糧倉安德利亞克（Andriake）。',
      archeologyEn: 'Rock-cut Lycian tombs, Andriake Roman grain storehouse.'
    },
    fairHavens: {
      nameZh: '佳澳 / 克里特島',
      nameEn: 'Fair Havens (Crete)',
      nameGrk: 'Καλοὶ Λιμένες',
      coords: [34.9317, 24.8183],
      regionZh: '克里特 (Crete)',
      regionEn: 'Crete',
      descZh: '保羅航程在克里特南岸避風港，保羅勸眾人停泊過冬遭忽視，啟航後遭遇「友拉革羅」十四天颶風（徒 27:8-14）；提多被派在此設立長老（多 1:5）。',
      descEn: 'Port in Crete where Paul warned against sailing; struck by “Euroclydon” hurricane; Titus appointed elders here.',
      archeologyZh: '佳澳海灣與拉西亞古城廢墟。',
      archeologyEn: 'Kali Limenes natural bay, ruins of ancient Lasea.'
    },
    malta: {
      nameZh: '馬耳他島',
      nameEn: 'Malta (Melita)',
      nameGrk: 'Μελίτη',
      coords: [35.9483, 14.4022],
      regionZh: '中地中海島嶼',
      regionEn: 'Central Mediterranean Island',
      descZh: '全船 276 人無一人傷亡全數獲救之船難島嶼；保羅拾柴被毒蛇咬手無損；醫治島長部百流之父與眾人（徒 28:1-10）。',
      descEn: 'Miraculous shipwreck with 276 survivors; viper bite unharmed; healed Publius’ father.',
      archeologyZh: '聖保羅灣（St. Paul’s Bay）、部百流別墅遺址、早期基督教地下墓穴。',
      archeologyEn: 'St. Paul’s Bay, Roman Domus in Rabat, St. Paul’s Catacombs.'
    },
    syracuse: {
      nameZh: '敘拉古',
      nameEn: 'Syracuse',
      nameGrk: 'Συράκουσαι',
      coords: [37.0755, 15.2866],
      regionZh: '西西里島 (Sicily)',
      regionEn: 'Sicily',
      descZh: '在馬耳他過了三個月後，搭乘亞歷山大船抵達西西里停泊三天（徒 28:12）。',
      descEn: 'Anchored for three days aboard an Alexandrian ship named Castor & Pollux.',
      archeologyZh: '古希臘劇場、戴奧尼修斯之耳採石場。',
      archeologyEn: 'Greek Theatre of Syracuse, Ear of Dionysius quarries, Roman amphitheater.'
    },
    rhegium: {
      nameZh: '利基翁',
      nameEn: 'Rhegium',
      nameGrk: 'Ῥήγιον',
      coords: [38.1113, 15.6473],
      regionZh: '義大利靴尖 (Calabria)',
      regionEn: 'Calabria, Italy',
      descZh: '墨西拿海峽入口，等候南風一日後啟程向北駛往羅馬外港（徒 28:13）。',
      descEn: 'Waited one day at the Strait of Messina until south wind blew.',
      archeologyZh: '古希臘羅馬城牆與古代港口遺蹟。',
      archeologyEn: 'Ancient Greek city walls and Roman waterfront structures.'
    },
    puteoli: {
      nameZh: '部丟利',
      nameEn: 'Puteoli',
      nameGrk: 'Ποτίολοι',
      coords: [40.8228, 14.1206],
      regionZh: '那不勒斯灣 (Campania)',
      regionEn: 'Bay of Naples',
      descZh: '主要羅馬海港；遇見基督徒弟兄，被邀請住了七天，隨後由陸路沿亞壁古道進羅馬（徒 28:13-14）。',
      descEn: 'Main Roman seaport; found brothers and stayed seven days before marching on Via Appia.',
      archeologyZh: '弗拉維安圓形劇場、沉入海中的古碼頭柱石。',
      archeologyEn: 'Flavian Amphitheater, submerged Roman harbor pilings at Pozzuoli.'
    },
    rome: {
      nameZh: '羅馬',
      nameEn: 'Rome',
      nameGrk: 'Ῥώμη',
      coords: [41.9028, 12.4964],
      regionZh: '帝國心臟 / 首都',
      regionEn: 'Imperial Capital',
      descZh: '帝國首都；保羅第一次被囚兩年自租房屋放膽傳講（徒 28:30-31），寫就獄中書信（以弗所、腓立比、歌羅西、腓利門）；第二次被囚殉道前寫下提後；彼得、保羅相繼在此殉道；馬可福音、彼得前後書傳統寫作地。',
      descEn: 'Imperial capital: Paul’s 2-year house arrest (Prison Epistles); 2nd imprisonment & martyrdom; Peter’s martyrdom; writing of Mark & Peter.',
      archeologyZh: '馬梅爾定監獄（Mamertine Prison）、城外聖保羅大殿、亞壁古道古墓群。',
      archeologyEn: 'Mamertine Prison, Basilica of St. Paul Outside the Walls, Appian Way Catacombs.'
    },
    patmos: {
      nameZh: '拔摩島',
      nameEn: 'Patmos',
      nameGrk: 'Πάτμος',
      coords: [37.3167, 26.5500],
      regionZh: '愛琴海斯波拉澤斯群島',
      regionEn: 'Aegean Dodecanese',
      descZh: '使徒約翰因神的道並為耶穌作的見證，在多米田皇帝迫害期被流放於此海島；在聖靈感動下見異象寫成《啟示錄》（啟 1:9）。',
      descEn: 'Island of John’s exile under Emperor Domitian; received heavenly visions of Revelation.',
      archeologyZh: '啟示錄神聖洞穴（Cave of the Apocalypse）、十一世紀聖約翰修道院。',
      archeologyEn: 'Holy Cave of the Apocalypse, Monastery of Saint John the Theologian.'
    },
    smyrna: {
      nameZh: '士每拿',
      nameEn: 'Smyrna',
      nameGrk: 'Σμύρνα',
      coords: [38.4192, 27.1287],
      regionZh: '亞西亞 (Asia)',
      regionEn: 'Asia Province',
      descZh: '七教會之二：「受苦但富足」的教會；主勉勵「至死忠心，我就賜給你那生命的冠冕」；主教波利卡殉道名城。今土耳其伊茲密爾。',
      descEn: '2nd church: Persecuted but rich; “Be faithful unto death, and I will give you the crown of life”; Polycarp martyrdom.',
      archeologyZh: '伊茲密爾阿哥拉古羅馬集市（Smyrna Agora）、列柱大廳。',
      archeologyEn: 'Smyrna Agora excavations, Faustina Gate, multi-story vaulted basements.'
    },
    pergamum: {
      nameZh: '別迦摩',
      nameEn: 'Pergamum',
      nameGrk: 'Πέργαμος',
      coords: [39.1325, 27.1842],
      regionZh: '亞西亞 (Asia)',
      regionEn: 'Asia Province',
      descZh: '七教會之三：亞西亞古都；「有撒但座位之處」（高聳衛城宙斯大祭壇、皇帝神廟）；責備服從巴蘭教訓者。',
      descEn: '3rd church: “Where Satan’s throne is” (Zeus Altar & Imperial cult); urged repentance from Balaam doctrine.',
      archeologyZh: '世界最陡斜古劇場、宙斯祭壇原址、醫神阿斯克勒庇俄斯神殿（Asclepion）。',
      archeologyEn: 'Steepest Hellenistic theater, Great Altar of Zeus foundation, Asklepion healing complex.'
    },
    thyatira: {
      nameZh: '推雅推喇',
      nameEn: 'Thyatira',
      nameGrk: 'Θυάτειρα',
      coords: [38.9244, 27.8406],
      regionZh: '亞西亞 / 呂底亞',
      regionEn: 'Lydia, Asia',
      descZh: '七教會之四：繁盛的商業手工業行會之城（紫布、銅鐵匠）；責備容讓假先知耶洗別引誘門徒行淫與吃祭偶像之物。呂底亞故鄉。',
      descEn: '4th church: City of trade guilds; rebuked for tolerating false prophetess Jezebel.',
      archeologyZh: '市中心阿克希薩爾（Akhisar）出土拱廊與巴西利卡石柱。',
      archeologyEn: 'Akhisar city center basilica, colonnaded porticos, trade guild inscriptions.'
    },
    sardis: {
      nameZh: '撒狄',
      nameEn: 'Sardis',
      nameGrk: 'Σάρδεις',
      coords: [38.4889, 28.0403],
      regionZh: '亞西亞 / 呂底亞古都',
      regionEn: 'Lydia Capital',
      descZh: '七教會之五：曾為富甲天下呂底亞古都；因兩次因衛兵懈怠遭突襲破城；主責備「按名你是活的，其實是死的」，勸其警醒。',
      descEn: '5th church: Wealthy ancient capital; “Name that you are alive, but you are dead”; called to wake up.',
      archeologyZh: '極其雄偉之亞底米大阿提米絲神廟柱石、世界最大古代猶太會堂鑲嵌畫地磚。',
      archeologyEn: 'Colossal Temple of Artemis columns, world’s largest ancient Synagogue with mosaics.'
    },
    philadelphia: {
      nameZh: '非拉鐵非',
      nameEn: 'Philadelphia',
      nameGrk: 'Φιλαδέλφεια',
      coords: [38.3517, 28.5186],
      regionZh: '亞西亞 (Asia)',
      regionEn: 'Asia Province',
      descZh: '七教會之六：「弟兄相愛」之城；處地震斷層帶；主賜「敞開的門」，稱讚其「略有一點力量，也曾遵守我的道，沒有棄絕我的名」；得勝者作神殿柱子。',
      descEn: '6th church: Brotherly love; earthquake zone; praised for keeping Christ’s word with “little strength”.',
      archeologyZh: '聖約翰大教堂巨大磚砌巨柱（Alaşehir）、拜占庭城垛。',
      archeologyEn: 'Monumental brick pillars of Byzantine Basilica of St. John in Alaşehir.'
    },
    laodicea: {
      nameZh: '老底嘉',
      nameEn: 'Laodicea',
      nameGrk: 'Λαοδίκεια',
      coords: [37.8358, 29.1083],
      regionZh: '亞西亞 / 弗呂家',
      regionEn: 'Phrygia, Asia',
      descZh: '七教會之七：富庶銀行金融、黑羊毛業與眼藥之都；水流溫吞「不冷也不熱」，主警告從口中吐出，勸買火煉的金子。',
      descEn: '7th church: Wealthy banking and eye salve center; “Lukewarm, neither cold nor hot”; urged to buy gold refined by fire.',
      archeologyZh: '雙劇院、蓄水槽引水系統、大西利亞大街道、最近修復之大教堂。',
      archeologyEn: 'Twin theaters, travertine water pipes, Syria Street colonnade, restored Basilica.'
    },
    colossae: {
      nameZh: '歌羅西',
      nameEn: 'Colossae',
      nameGrk: 'Κολοσσαί',
      coords: [37.7872, 29.2567],
      regionZh: '弗呂家 / 萊卡斯河谷',
      regionEn: 'Lycus Valley, Phrygia',
      descZh: '距離老底嘉約 15 公里；以巴弗在此植堂；保羅在羅馬監獄寫給歌羅西教會與腓利門（為逃奴阿尼西母代求）。',
      descEn: 'Epaphras founded church; received Colossians and Philemon from Paul’s Roman imprisonment.',
      archeologyZh: '尚未大規模開挖之古霍納茲土丘（Honaz Mound）。',
      archeologyEn: 'Unexcavated tell of Honaz Höyük overlooking the Lycus River.'
    },
    pontusRegion: {
      nameZh: '本都 (小亞細亞北境)',
      nameEn: 'Pontus',
      nameGrk: 'Πόντος',
      coords: [40.6539, 35.8331],
      regionZh: '黑海南岸省份',
      regionEn: 'Black Sea Coast',
      descZh: '彼得前書開篇第一受信地區（彼前 1:1）；散居寄居信徒群體。',
      descEn: '1st province addressed in 1 Peter 1:1; Black Sea coast Christians.',
      archeologyZh: '阿馬西亞（Amasya）本都諸王岩窟墓。',
      archeologyEn: 'Rock-cut tombs of Pontic Kings in Amasya, Sinope ancient coastal walls.'
    },
    cappadociaRegion: {
      nameZh: '加帕多家',
      nameEn: 'Cappadocia',
      nameGrk: 'Καππαδοκία',
      coords: [38.7312, 35.4787],
      regionZh: '小亞細亞東部高原',
      regionEn: 'Eastern Anatolia',
      descZh: '彼得前書受信省份；五旬節聖靈降臨時有加帕多家猶太人在場（徒 2:9）。',
      descEn: 'Addressed in 1 Peter; pilgrims present at Pentecost (Acts 2:9).',
      archeologyZh: '格雷梅（Göreme）火山凝灰岩地下城與早期基督教壁畫洞穴教堂。',
      archeologyEn: 'Göreme rock-cut churches, Derinkuyu and Kaymakli underground cities.'
    },
    bithyniaRegion: {
      nameZh: '庇推尼',
      nameEn: 'Bithynia',
      nameGrk: 'Βιθυνία',
      coords: [40.7654, 29.9406],
      regionZh: '小亞細亞西北省份',
      regionEn: 'NW Asia Minor',
      descZh: '保羅第二次宣教時「耶穌的靈不許」進入（徒 16:7）；彼得前書受信省份；小普林尼（Pliny the Younger）曾任總督並記錄早期信徒清晨歌唱敬拜。',
      descEn: 'Holy Spirit forbade Paul to enter (Acts 16:7); addressed in 1 Peter; Pliny the Younger’s famous letter.',
      archeologyZh: '伊茲密特（尼哥米底亞）古代省會遺構。',
      archeologyEn: 'Nicomedia Roman provincial capital ruins, Nicaea city walls.'
    }
  },

  // 1. 四福音書地理動線與書寫背景
  gospels: [
    {
      id: 'mark',
      nameZh: '馬可福音',
      nameEn: 'Gospel of Mark',
      date: '約主後 65–70 年 / c. 65–70 AD',
      writtenAt: 'rome',
      audienceZh: '外邦讀者（詳細解釋猶太潔淨習俗與亞蘭文）',
      audienceEn: 'Gentile readers (explains Jewish customs & Aramaic terms)',
      keyGeographies: ['seaOfGalilee', 'capernaum', 'jerusalem'],
      routeSummaryZh: '加利利海周遭事工核心 ➔ 經約旦河外 ➔ 耶路撒冷受難週。',
      routeSummaryEn: 'Galilean ministry around the Sea of Galilee ➔ Transjordan ➔ Jerusalem Passion Week.',
      color: '#4A5D73', // 靛藍
      points: [
        { loc: 'rome', titleZh: '推定寫作地：帝國首都羅馬', titleEn: 'Written in Rome (Traditional)' },
        { loc: 'capernaum', titleZh: '加利利早期密集神蹟與教導', titleEn: 'Miracles and teachings in Capernaum' },
        { loc: 'jerusalem', titleZh: '受難週、十字架與空墳墓', titleEn: 'Passion Week, Crucifixion, and Empty Tomb' }
      ]
    },
    {
      id: 'matthew',
      nameZh: '馬太福音',
      nameEn: 'Gospel of Matthew',
      date: '約主後 80–90 年 / c. 80–90 AD',
      writtenAt: 'antiochSyria',
      audienceZh: '猶太背景基督徒為主（強調舊約律法應驗與彌賽亞家譜）',
      audienceEn: 'Primarily Jewish Christians (fulfilling Tanakh prophecy)',
      keyGeographies: ['bethlehem', 'alexandria', 'nazareth', 'jordanRiver', 'capernaum', 'jerusalem'],
      routeSummaryZh: '伯利恆降生 ➔ 逃往埃及 ➔ 拿撒勒成長 ➔ 約旦河受洗 ➔ 加利利登山寶訓 ➔ 耶路撒冷十架受難與差遣。',
      routeSummaryEn: 'Bethlehem birth ➔ Flight to Egypt ➔ Nazareth ➔ Jordan baptism ➔ Galilee teaching ➔ Jerusalem crucifixion.',
      color: '#C8A96A', // 古金
      points: [
        { loc: 'antiochSyria', titleZh: '推定寫作地：敘利亞安提阿', titleEn: 'Written in Syrian Antioch' },
        { loc: 'bethlehem', titleZh: '君王基督降生於伯利恆', titleEn: 'Birth of Messiah in Bethlehem' },
        { loc: 'alexandria', titleZh: '逃避希律殘殺避難埃及', titleEn: 'Flight to Egypt (Out of Egypt I called my son)' },
        { loc: 'nazareth', titleZh: '回歸拿撒勒成長', titleEn: 'Return to Nazareth' },
        { loc: 'jordanRiver', titleZh: '在約旦河受洗應驗諸般的義', titleEn: 'Baptism in the Jordan' },
        { loc: 'capernaum', titleZh: '加利利海濱宣告天國福音', titleEn: 'Kingdom proclaimed in Galilee' },
        { loc: 'jerusalem', titleZh: '大衛之子騎驢進耶路撒冷受難', titleEn: 'Triumphal entry and Passion in Jerusalem' }
      ]
    },
    {
      id: 'luke',
      nameZh: '路加福音',
      nameEn: 'Gospel of Luke',
      date: '約主後 80–85 年 / c. 80–85 AD',
      writtenAt: 'ephesus',
      altWritten: 'caesarea',
      audienceZh: '提阿非羅大人與廣大希臘外邦世界（注重普世救恩、社會邊緣者與婦女）',
      audienceEn: 'Theophilus and Gentile world (universal salvation, marginalized, women)',
      keyGeographies: ['nazareth', 'jordanRiver', 'capernaum', 'samaria', 'jerusalem'],
      routeSummaryZh: '強調以耶路撒冷為目的地：加利利 ➔「定意向耶路撒冷去」（9:51起長達10章的行路旅程段落）➔ 聖殿受難與升天。',
      routeSummaryEn: 'The Central Travel Narrative: Galilee ➔ resolutely sets out for Jerusalem (Luke 9:51-19:27) ➔ Temple Passion & Ascension.',
      color: '#D6A84C', // 琥珀
      points: [
        { loc: 'ephesus', titleZh: '推定寫作地：小亞細亞以弗所（或凱撒利亞）', titleEn: 'Written in Ephesus or Caesarea' },
        { loc: 'nazareth', titleZh: '拿撒勒會堂宣讀恩年禧年', titleEn: 'Nazareth manifesto: Year of the Lord’s favor' },
        { loc: 'capernaum', titleZh: '加利利醫治與呼召', titleEn: 'Galilean healings and discipleship' },
        { loc: 'samaria', titleZh: '撒瑪利亞好人比喻與旅程教導', titleEn: 'Good Samaritan & journey instructions' },
        { loc: 'jerusalem', titleZh: '往耶路撒冷受難，以馬忤斯顯現與聖殿升天', titleEn: 'Emmaus Road and Ascension from Jerusalem' }
      ]
    },
    {
      id: 'john',
      nameZh: '約翰福音',
      nameEn: 'Gospel of John',
      date: '約主後 90–100 年 / c. 90–100 AD',
      writtenAt: 'ephesus',
      audienceZh: '普世讀者群體，帶深厚神學辯護色彩（道成肉身、七大神蹟與「我是」宣告）',
      audienceEn: 'Universal audience; profound theological apologetic (Logos incarnate, 7 signs, “I AM”)',
      keyGeographies: ['ephesus', 'jerusalem', 'seaOfGalilee', 'samaria'],
      routeSummaryZh: '頻繁穿梭加利利與猶大耶路撒冷（明確記載三次逾越節），強調猶太聖殿節期場景與神學對話。',
      routeSummaryEn: 'Frequent back-and-forth between Galilee and Jerusalem (3 recorded Passovers), centering in Judean feast dialogues.',
      color: '#2B2B2B', // 炭灰
      points: [
        { loc: 'ephesus', titleZh: '傳統寫作地：小亞細亞以弗所長老會堂', titleEn: 'Written in Ephesus by the Apostle John' },
        { loc: 'samaria', titleZh: '敘加雅各井旁向撒瑪利亞婦人賜活水', titleEn: 'Living water at Jacob’s Well in Samaria' },
        { loc: 'seaOfGalilee', titleZh: '迦拿婚宴、五餅二魚、提比哩亞海邊三次堅固彼得', titleEn: 'Cana, Loaves multiplied, Tiberias restoration of Peter' },
        { loc: 'jerusalem', titleZh: '三次過節入京：住棚節、修殿節、畢士大池、受難與復活', titleEn: '3 Passovers, Feast of Booths, Hanukkah at Jerusalem Temple' }
      ]
    }
  ],

  // 2. 使徒行傳時空軌跡 (Acts Journeys)
  actsJourneys: [
    {
      id: 'acts_early',
      nameZh: '早期耶路撒冷教會與散逸',
      nameEn: 'Early Church & Dispersion',
      years: '主後 30–36 年 / 30–36 AD',
      color: '#D6A84C', // 琥珀
      stops: ['jerusalem', 'samaria', 'damascus', 'arabia', 'tarsus'],
      events: [
        { year: '30–33', loc: 'jerusalem', descZh: '五旬節聖靈降臨、門徒於聖殿所羅門廊教訓人、信徒凡物公用。', descEn: 'Pentecost Holy Spirit descent; apostles preaching at Solomon’s Colonnade; all things held in common.' },
        { year: '33–35', loc: 'jerusalem', descZh: '司提反被石頭打死殉道，教會大遭逼迫，門徒散逸至各處。', descEn: 'Stephen’s martyrdom by stoning; severe persecution erupts; disciples scattered throughout regions.' },
        { year: '34–35', loc: 'samaria', descZh: '腓利在撒瑪利亞宣教，使徒彼得約翰按手賜聖靈；迦薩路上為衣索匹亞太監施洗。', descEn: 'Philip’s mission in Samaria; Peter and John lay hands for Holy Spirit; Ethiopian eunuch baptized on Gaza road.' },
        { year: '34–36', loc: 'damascus', descZh: '掃羅往大馬士革捉拿信徒，路上見大光歸信基督。', descEn: 'Saul struck down by heavenly light on Damascus road; radical transformation into apostle.' },
        { year: '36–38', loc: 'arabia', descZh: '保羅退隱阿拉伯荒野靜思靈修，後經大馬士革、耶路撒冷返回大數故鄉。', descEn: 'Paul retreats into Arabia for contemplation, returns via Damascus and Jerusalem back to Tarsus.' }
      ]
    },
    {
      id: 'acts_journey_1',
      nameZh: '第一次宣教旅程 (保羅與巴拿巴)',
      nameEn: '1st Missionary Journey (Paul & Barnabas)',
      years: '主後 46–48 年 / 46–48 AD',
      color: '#4A5D73', // 靛藍
      stops: ['antiochSyria', 'seleucia', 'salamis', 'paphos', 'perga', 'pisidianAntioch', 'iconium', 'lystra', 'derbe', 'lystra', 'iconium', 'pisidianAntioch', 'perga', 'attalia', 'antiochSyria'],
      events: [
        { loc: 'antiochSyria', descZh: '聖靈說：「要為我分派巴拿巴和掃羅，去做我召他們做的工。」禁食禱告後啟航。', descEn: 'Holy Spirit commands: “Set apart Barnabas and Saul for the work”; sent off after fasting.' },
        { loc: 'paphos', descZh: '在塞浦路斯巡撫士求保羅面前制伏術士以呂馬，總督信主。', descEn: 'Proconsul Sergius Paulus believes after sorcerer Elymas is struck blind.' },
        { loc: 'perga', descZh: '登上小亞細亞，約翰馬可在此脫離隊伍返回耶路撒冷。', descEn: 'Arrival in Asia Minor mainland; John Mark departs back to Jerusalem.' },
        { loc: 'pisidianAntioch', descZh: '在會堂發表重大基督論宣講，猶太人反對，保羅宣布「轉向外邦人」。', descEn: 'Major synagogue sermon; facing Jewish opposition, Paul announces turn to Gentiles.' },
        { loc: 'iconium', descZh: '傳道大有能力，城中分裂，有使徒被丟石頭之危險。', descEn: 'Signs and wonders performed; city divided; escape from threatened stoning.' },
        { loc: 'lystra', descZh: '醫好生來瘸腿者被當作希臘諸神；後遭挑唆被石頭打昏扔出城外，奇蹟甦醒。', descEn: 'Lame man healed; mistaken for Zeus and Hermes; stoned and left for dead; miraculous recovery.' },
        { loc: 'derbe', descZh: '向特庇傳福音，得許多門徒，隨後原路折返堅固各教會並選立長老。', descEn: 'Many disciples won in Derbe; retraced steps appointing elders in each church.' }
      ]
    },
    {
      id: 'acts_council',
      nameZh: '耶路撒冷大公會議',
      nameEn: 'Council of Jerusalem',
      years: '主後 49 年 / 49 AD',
      color: '#C8A96A', // 古金
      stops: ['antiochSyria', 'jerusalem', 'antiochSyria'],
      events: [
        { loc: 'jerusalem', descZh: '使徒與長老聚集辯論外邦人是否須受割禮與守律法；彼得發言、雅各總結宣布外邦信徒單憑恩典得救，只需禁戒偶像、血、勒死與淫亂。', descEn: 'Apostles and elders convene; Peter speaks; James decrees Gentiles are saved by grace alone without circumcision.' }
      ]
    },
    {
      id: 'acts_journey_2',
      nameZh: '第二次宣教旅程 (歐洲宣教突破)',
      nameEn: '2nd Missionary Journey (Into Europe)',
      years: '主後 50–52 年 / 50–52 AD',
      color: '#C8A96A', // 古金
      stops: ['antiochSyria', 'tarsus', 'derbe', 'lystra', 'troas', 'philippi', 'thessalonica', 'berea', 'athens', 'corinth', 'cenchreae', 'ephesus', 'caesarea', 'jerusalem', 'antiochSyria'],
      events: [
        { loc: 'lystra', descZh: '保羅帶領青年提摩太同工加入旅程。', descEn: 'Paul enlists young Timothy to join the mission.' },
        { loc: 'troas', descZh: '聖靈禁止往亞西亞，夜間在特羅亞看見「馬其頓人呼聲」之異象。', descEn: 'Forbidden by Spirit to enter Asia; receives Macedonian Call vision at Troas.' },
        { loc: 'philippi', descZh: '歐洲初熟果子：呂底亞信主；夜間獄中唱詩地震獲救，獄卒全家受洗。', descEn: 'Lydia baptized; midnight hymns in prison followed by earthquake; jailer’s household converted.' },
        { loc: 'thessalonica', descZh: '辯道三個安息日，被誣顛覆帝國另立耶穌為王，引起暴亂出走。', descEn: 'Reasoned in synagogue for 3 Sabbaths; charged with treason for proclaiming another King Jesus.' },
        { loc: 'athens', descZh: '登上亞略巴古石丘，向雅典哲學家宣講「未識之神」與復活。', descEn: 'Addresses Epicurean and Stoic philosophers at the Areopagus regarding the Unknown God and Resurrection.' },
        { loc: 'corinth', descZh: '長駐 18 個月，與亞居拉百基拉織帳棚，在迦流審判座前蒙主保守；寫作《帖前後書》。', descEn: '18-month stay; tentmaking with Priscilla and Aquila; cleared before Gallio’s Bema; writes 1 & 2 Thess.' }
      ]
    },
    {
      id: 'acts_journey_3',
      nameZh: '第三次宣教旅程 (以弗所重鎮與書信高峰)',
      nameEn: '3rd Missionary Journey (Ephesus & Major Letters)',
      years: '主後 53–57 年 / 53–57 AD',
      color: '#2B2B2B', // 炭灰
      stops: ['antiochSyria', 'pisidianAntioch', 'ephesus', 'philippi', 'thessalonica', 'corinth', 'philippi', 'troas', 'assos', 'miletus', 'caesarea', 'jerusalem'],
      events: [
        { loc: 'ephesus', descZh: '在以弗所長達近三年；在推喇奴學房天天辯道；行奇事焚燒邪術書籍；引發銀匠底米丟在劇場聚眾抗議；在此寫作《哥林多前書》。', descEn: 'Nearly 3 years in Ephesus; daily lectures in Hall of Tyrannus; occult books burned; theater riot by Demetrius; writes 1 Cor.' },
        { loc: 'corinth', descZh: '抵達希臘過冬三個月，寫作千古神學巨著《羅馬書》；女執事非比自堅革哩啟程送信。', descEn: 'Wintered 3 months in Corinth; composed theological masterpiece Romans; deaconess Phoebe carries epistle.' },
        { loc: 'troas', descZh: '通宵講論，少年猶推古從三樓窗口跌落摔死，保羅擁抱使其復活。', descEn: 'All-night discourse; young Eutychus falls from 3rd-story window and is raised from the dead.' },
        { loc: 'miletus', descZh: '海邊召聚以弗所長老發表流淚訣別贈言：「凡神的旨意，我沒有一樣避諱不傳給你們的。」', descEn: 'Farewell address to Ephesian elders on beach: “I did not shrink from declaring the whole counsel of God.”' },
        { loc: 'jerusalem', descZh: '明知有捆鎖與患難仍往耶路撒冷，在聖殿遭猶太暴徒圍毆被捕。', descEn: 'Enters Jerusalem despite prophecies of chains; arrested following riot at the Temple.' }
      ]
    },
    {
      id: 'acts_rome_voyage',
      nameZh: '海路押解往羅馬 (船難與帝都見證)',
      nameEn: 'Voyage to Rome & Shipwreck',
      years: '主後 57–60 年 / 57–60 AD',
      color: '#4A5D73', // 靛藍
      stops: ['jerusalem', 'caesarea', 'sidon', 'myra', 'fairHavens', 'malta', 'syracuse', 'rhegium', 'puteoli', 'rome'],
      events: [
        { loc: 'caesarea', descZh: '在總督腓力斯、非斯都與亞基帕王前受審兩年，行使羅馬公民權上告該撒。', descEn: '2-year imprisonment before Felix, Festus, and Agrippa II; appeals to Caesar as Roman citizen.' },
        { loc: 'fairHavens', descZh: '克里特島避風港，眾人不聽保羅勸阻執意開船出海。', descEn: 'Anchored at Fair Havens; centurion disregards Paul’s warning and sails into winter weather.' },
        { loc: 'malta', descZh: '地中海遭遇十四天盲航暴風「友拉革羅」，神差使者安慰，船撞灘粉碎但全體 276 人平安獲救；毒蛇咬手不傷。', descEn: '14-day tempest Euroclydon; angel comforts Paul; ship runs aground but all 276 saved; viper bite harmless.' },
        { loc: 'rome', descZh: '經亞比烏與三館抵達羅馬，在自租寓所受看守兩年，放膽傳講神國的道無人阻擋。', descEn: 'Arrives in Rome via Appian Way; stays 2 years under house arrest proclaiming God’s kingdom without hindrance.' }
      ]
    }
  ],

  // 3. 保羅書信傳遞向量網絡 (按年代順序)
  paulineEpistles: [
    {
      id: '1thess',
      nameZh: '帖撒羅尼迦前書',
      nameEn: '1 Thessalonians',
      date: '主後 50–51 年 / 50–51 AD',
      writtenAt: 'corinth',
      recipientAt: 'thessalonica',
      journeyZh: '第二次宣教旅程途中',
      journeyEn: 'During 2nd Missionary Journey',
      themeZh: '主再來的盼望與聖潔生活',
      themeEn: 'Hope of Christ’s return and holy living in affliction',
      backgroundZh: '保羅被逼迫離開帖撒羅尼迦後，提摩太帶回該教會在患難中堅立的消息，保羅在哥林多感奮寫信勸慰。',
      backgroundEn: 'Written from Corinth after Timothy returned with encouraging news of the Thessalonians’ steadfast faith despite intense persecution.'
    },
    {
      id: '2thess',
      nameZh: '帖撒羅尼迦後書',
      nameEn: '2 Thessalonians',
      date: '主後 51 年 / 51 AD',
      writtenAt: 'corinth',
      recipientAt: 'thessalonica',
      journeyZh: '第二次宣教旅程途中',
      journeyEn: 'During 2nd Missionary Journey',
      themeZh: '糾正對主日子已到的末世恐慌',
      themeEn: 'Clarifying the Day of the Lord and warning against idleness',
      backgroundZh: '針對假託使徒之信造成的混亂，澄清沉淪之子顯現與主再臨的次序，警戒游手好閒者。',
      backgroundEn: 'Addresses forged letters and end-times panic regarding the Day of the Lord, clarifying that the rebellion and Man of Lawlessness must come first.'
    },
    {
      id: 'galatians',
      nameZh: '加拉太書',
      nameEn: 'Galatians',
      date: '早期說約 48–49 年 / 晚期說約 55 年 (c. 48–49 or 55 AD)',
      writtenAt: 'antiochSyria',
      altWritten: 'corinth',
      recipientAt: 'pisidianAntioch',
      extraRecipients: ['iconium', 'lystra', 'derbe'],
      journeyZh: '耶路撒冷會議前後（南加拉太說）或三次旅程（北加拉太說）',
      journeyEn: 'Around Jerusalem Council (South Galatian) or 3rd Journey (North Galatian)',
      themeZh: '因信稱義的自由憲章，駁斥割禮派假教師',
      themeEn: 'Magna Carta of Christian Liberty: Justification by faith alone against Judaizers',
      backgroundZh: '南加拉太（彼西底安提阿、以哥念、路司得、特庇）信徒被猶太主義者誘惑，保羅嚴厲捍衛福音的唯獨恩典。',
      backgroundEn: 'Fiercely defends the pure gospel of grace against Judaizers demanding circumcision among the Galatian churches established on his 1st journey.'
    },
    {
      id: '1cor',
      nameZh: '哥林多前書',
      nameEn: '1 Corinthians',
      date: '約主後 54–55 年 / c. 54–55 AD',
      writtenAt: 'ephesus',
      recipientAt: 'corinth',
      journeyZh: '第三次旅程在以弗所長駐期間',
      journeyEn: 'During 3-year stay in Ephesus (3rd Journey)',
      themeZh: '教會紛爭、道德混亂、屬靈恩賜與基督復活',
      themeEn: 'Healing church divisions, moral purity, spiritual gifts, and bodily resurrection',
      backgroundZh: '聽聞革來氏家提起哥林多教會結黨紛爭，並回覆該教會關於婚姻、吃祭偶像之物、愛篇與復活的疑問。',
      backgroundEn: 'Written from Ephesus in response to oral reports from Chloe’s household regarding factions and queries on marriage, meats, spiritual gifts, and the resurrection.'
    },
    {
      id: '2cor',
      nameZh: '哥林多後書',
      nameEn: '2 Corinthians',
      date: '約主後 55–56 年 / c. 55–56 AD',
      writtenAt: 'philippi',
      recipientAt: 'corinth',
      journeyZh: '離開以弗所後經馬其頓途中',
      journeyEn: 'In Macedonia en route after leaving Ephesus',
      themeZh: '瓦器中的寶貝：使徒職分的辯護與十架軟弱神學',
      themeEn: 'Treasure in jars of clay: defense of apostolic integrity and theology of weakness',
      backgroundZh: '在馬其頓遇見提多帶來哥林多悔改的喜訊，保羅暢述服事的苦難、奉獻款項與神恩典在軟弱上顯得完全。',
      backgroundEn: 'Sent from Macedonia after meeting Titus with good news of repentance, offering deep theological reflection on ministry through weakness and suffering.'
    },
    {
      id: 'romans',
      nameZh: '羅馬書',
      nameEn: 'Romans',
      date: '約主後 57 年初 / c. Early 57 AD',
      writtenAt: 'corinth',
      recipientAt: 'rome',
      journeyZh: '第三次旅程末段在哥林多過冬三個月',
      journeyEn: 'Wintering 3 months in Corinth (End of 3rd Journey)',
      themeZh: '神的義：因信稱義、猶太人與外邦人的救贖奧秘、獻上活祭',
      themeEn: 'The Righteousness of God: Justification, Israel’s destiny, and living sacrifice',
      backgroundZh: '神學頂峰。16章提到堅革哩女執事非比攜帶此信，提及哥林多城政官以拉都（呼應考古「以拉都石碑」）。',
      backgroundEn: 'Paul’s theological magnum opus, sent via deaconess Phoebe of Cenchreae, greeting Erastus the city treasurer (attested by the famous Corinthian Erastus Inscription).'
    },
    {
      id: 'ephesians',
      nameZh: '以弗所書',
      nameEn: 'Ephesians',
      date: '主後 60–62 年 / 60–62 AD',
      writtenAt: 'rome',
      recipientAt: 'ephesus',
      journeyZh: '第一次羅馬被囚期間 (監獄書信)',
      journeyEn: 'First Roman Imprisonment (Prison Epistles)',
      themeZh: '基督的身體、宇宙性的教會奧秘、屬靈軍裝',
      themeEn: 'Cosmic preeminence of Christ, the mystery of the Church, and the Armor of God',
      backgroundZh: '早期重要抄本無「在以弗所」字樣，多數學者視為小亞細亞各教會傳閱之圓周通函（推基古遞送）。',
      backgroundEn: 'Likely an encyclical circular letter to the churches of Asia Minor, delivered by Tychicus while Paul was in chains in Rome.'
    },
    {
      id: 'philippians',
      nameZh: '腓立比書',
      nameEn: 'Philippians',
      date: '主後 60–62 年 / 60–62 AD',
      writtenAt: 'rome',
      recipientAt: 'philippi',
      journeyZh: '第一次羅馬被囚期間 (監獄書信)',
      journeyEn: 'First Roman Imprisonment (Prison Epistles)',
      themeZh: '在基督裡的喜樂、基督虛己頌（2章 Kenosis）、同奔天路',
      themeEn: 'Unstoppable joy in Christ, the Kenosis Christ Hymn, and pressing toward the goal',
      backgroundZh: '感謝腓立比信徒透過以巴弗提送來饋贈；雖然身繫囹圄，卻洋溢新約最具感染力的喜樂。',
      backgroundEn: 'A warm, affectionate thank-you letter carried by Epaphroditus, radiating contagious joy despite imperial chains.'
    },
    {
      id: 'colossians',
      nameZh: '歌羅西書',
      nameEn: 'Colossians',
      date: '主後 60–62 年 / 60–62 AD',
      writtenAt: 'rome',
      recipientAt: 'colossae',
      journeyZh: '第一次羅馬被囚期間 (監獄書信)',
      journeyEn: 'First Roman Imprisonment (Prison Epistles)',
      themeZh: '基督的至高首要地位、萬有之主、抗衡神秘思辨哲學',
      themeEn: 'The absolute supremacy and sufficiency of Christ over false ascetic philosophy',
      backgroundZh: '以巴弗前來羅馬探監報告歌羅西出現混合猶太律法、天使崇拜與諾斯底傾向之異端，保羅奮力駁斥。',
      backgroundEn: 'Written to counteract syncretistic heresy in the Lycus Valley blending Jewish ritualism, angel veneration, and proto-Gnosticism.'
    },
    {
      id: 'philemon',
      nameZh: '腓利門書',
      nameEn: 'Philemon',
      date: '主後 60–62 年 / 60–62 AD',
      writtenAt: 'rome',
      recipientAt: 'colossae',
      journeyZh: '第一次羅馬被囚期間 (監獄書信)',
      journeyEn: 'First Roman Imprisonment (Prison Epistles)',
      themeZh: '基督裡的復和與兄弟情誼、接納逃奴阿尼西母',
      themeEn: 'Radical reconciliation and brotherhood: receiving runaway slave Onesimus',
      backgroundZh: '個人書信典範。逃奴阿尼西母在羅馬遇見保羅歸主，保羅為其說情，懇請主人腓利門在基督裡接納他如同親弟兄。',
      backgroundEn: 'Masterpiece of pastoral diplomacy asking Philemon to receive his converted runaway slave Onesimus no longer as a bondservant, but as a beloved brother.'
    },
    {
      id: '1timothy',
      nameZh: '提摩太前書',
      nameEn: '1 Timothy',
      date: '主後 62–64 年 / 62–64 AD',
      writtenAt: 'philippi',
      recipientAt: 'ephesus',
      journeyZh: '第一次羅馬獲釋後第四次旅程途中 (馬其頓)',
      journeyEn: 'Post-Release travels in Macedonia',
      themeZh: '教會組織治理、監督與執事資格、抵擋荒渺話語',
      themeEn: 'Pastoral order, overseer/deacon qualifications, guarding sound apostolic doctrine',
      backgroundZh: '保羅囑咐留在以弗所牧養的屬靈真兒子提摩太如何引導神的家——真理的柱石和根基。',
      backgroundEn: 'Instructions to young pastor Timothy stationed in Ephesus on organizing church leadership, worship order, and confronting speculative false teachers.'
    },
    {
      id: 'titus',
      nameZh: '提多書',
      nameEn: 'Titus',
      date: '主後 63–65 年 / 63–65 AD',
      writtenAt: 'nicopolis',
      recipientAt: 'fairHavens',
      journeyZh: '保羅在尼哥坡里過冬之際',
      journeyEn: 'Wintering in Nicopolis, Epirus',
      themeZh: '在克里特設立長老、純正教訓與美好善行',
      themeEn: 'Appointing elders in Crete, sound teaching producing good works in society',
      backgroundZh: '留在克里特島開拓植堂的提多，保羅指導他如何對治「說謊話、惡獸、好吃懶做」的克里特社會風氣。',
      backgroundEn: 'Guidelines for Titus on Crete for establishing mature eldership and teaching grace that transforms cultural vices into godliness.'
    },
    {
      id: '2timothy',
      nameZh: '提摩太後書',
      nameEn: '2 Timothy',
      date: '主後 66–67 年 / 66–67 AD',
      writtenAt: 'rome',
      recipientAt: 'ephesus',
      journeyZh: '尼祿迫害爆發，保羅第二次被囚羅馬黑牢 (即將殉道絕筆)',
      journeyEn: 'Second Roman Imprisonment under Nero (Apostolic Testament)',
      themeZh: '使徒絕筆：美好的仗打過、當跑的路跑盡、信仰守住',
      themeEn: 'Paul’s farewell testament: fighting the good fight, keeping the faith until martyrdom',
      backgroundZh: '死囚監獄中的最後遺言。提及特羅亞加布家留下的外衣和皮卷（4:13），切切叮嚀提摩太剛強壯膽傳道。',
      backgroundEn: 'Paul’s swan song from a cold Roman dungeon awaiting execution, requesting his cloak and parchments left in Troas (2 Tim 4:13).'
    }
  ],

  // 4. 希伯來書與大公書信
  generalEpistles: [
    {
      id: 'hebrews',
      nameZh: '希伯來書',
      nameEn: 'Hebrews',
      date: '主後 65–70 年 / c. 65–70 AD',
      writtenAt: 'rome',
      altWritten: 'alexandria',
      recipientAt: 'jerusalem',
      themeZh: '基督的無比超越：超越天使、摩西、亞倫祭司與舊約祭物',
      themeEn: 'The supreme superiority of Christ over angels, Moses, Aaron, and old covenant sacrifices',
      backgroundZh: '面對羅馬迫害與猶太社群壓力，勸勉徘徊想要退回猶太教聖殿體系的希伯來基督徒務要持守指望。',
      backgroundEn: 'Addressed to Jewish Christians tempted to retreat back to the Temple sacrificial system under intensifying persecution.'
    },
    {
      id: 'james',
      nameZh: '雅各書',
      nameEn: 'James',
      date: '約主後 50 年代 / c. 50s AD',
      writtenAt: 'jerusalem',
      recipientAt: 'antiochSyria',
      themeZh: '真實的信心必有善行實踐、勒住舌頭、關顧貧弱',
      themeEn: 'Living faith evidenced by works, taming the tongue, and caring for the vulnerable',
      backgroundZh: '主的兄弟雅各在耶路撒冷母會寫給「散居各地的十二支派」，融合智慧文學箴言式教訓。',
      backgroundEn: 'Wisdom epistle written by James the Just in Jerusalem to Jewish believers in the diaspora, emphasizing tangible obedience.'
    },
    {
      id: '1peter',
      nameZh: '彼得前書',
      nameEn: '1 Peter',
      date: '主後 63–65 年 / 63–65 AD',
      writtenAt: 'rome',
      recipientAt: 'pontusRegion',
      extraRecipients: ['cappadociaRegion', 'bithyniaRegion', 'pisidianAntioch', 'ephesus'],
      themeZh: '火煉試煉中的活潑盼望、君尊的祭司聖潔國度',
      themeEn: 'Living hope amid fiery trials; holy nation and royal priesthood',
      backgroundZh: '彼得在「巴比倫」（羅馬隱晦稱號）寫信給小亞細亞北部和中部五大省份受迫害的寄居信徒。',
      backgroundEn: 'Sent from “Babylon” (Rome) to alien believers scattered across northern Asia Minor facing imperial slander and suffering.'
    },
    {
      id: '2peter',
      nameZh: '彼得後書',
      nameEn: '2 Peter',
      date: '主後 65–68 年 / 65–68 AD',
      writtenAt: 'rome',
      recipientAt: 'pontusRegion',
      themeZh: '防範假師傅譏誚、主的應許與新天新地',
      themeEn: 'Guarding against antinomian mockers; assurance of Christ’s return and new heavens',
      backgroundZh: '彼得自知即將離世（脫去帳棚），囑咐門徒在恩典與知識上有長進，警惕道德墮落。',
      backgroundEn: 'Peter’s farewell warning against false teachers denying the Parousia and promoting moral license.'
    },
    {
      id: 'johannine_letters',
      nameZh: '約翰一、二、三書',
      nameEn: '1, 2, 3 John',
      date: '約主後 90–100 年 / c. 90–100 AD',
      writtenAt: 'ephesus',
      recipientAt: 'smyrna',
      themeZh: '神就是光、神就是愛、防範幻影說諾斯底異端',
      themeEn: 'God is light and love; assurance of eternal life against Docetic Gnosticism',
      backgroundZh: '使徒約翰晚年於以弗所寫給小亞細亞一帶信徒群體（一書）、蒙揀選的太太（二書）及該猶（三書）。',
      backgroundEn: 'Apostle John’s mature pastoral letters from Ephesus affirming the genuine incarnation against secessionist teachers.'
    },
    {
      id: 'jude',
      nameZh: '猶大書',
      nameEn: 'Jude',
      date: '約主後 65–80 年 / c. 65–80 AD',
      writtenAt: 'jerusalem',
      recipientAt: 'caesarea',
      themeZh: '為從前一次交付聖徒的真道竭力爭辯',
      themeEn: 'Contending earnestly for the faith once for all delivered to the saints',
      backgroundZh: '主的兄弟猶大揭露混入教會將神恩變為放蕩機會的不虔者，勸勉在至聖真道上造就自己。',
      backgroundEn: 'Urgent summons by Jude, brother of James, to defend apostolic orthodoxy against sensual infiltrators.'
    }
  ],

  // 5. 啟示錄與七教會順時針郵遞環路
  revelationPostalRoute: {
    writerLocation: 'patmos',
    writtenDate: '約主後 95 年 (多米田迫害時期) / c. 95 AD (Domitian Persecution)',
    totalCircumferenceKm: 220,
    cycleDescriptionZh: '拔摩島領受異象 ➔ 橫渡愛琴海至以弗所港口 ➔ 沿羅馬帝國驛道順時針閉環傳遞：以弗所(1) ➔ 士每拿(2) ➔ 別迦摩(3) ➔ 推雅推喇(4) ➔ 撒狄(5) ➔ 非拉鐵非(6) ➔ 老底嘉(7)，最終回環距離以弗所僅約 220 公里。',
    cycleDescriptionEn: 'Vision received on Patmos ➔ Dispatched across Aegean to Ephesus port ➔ Clockwise Roman postal circuit: Ephesus(1) ➔ Smyrna(2) ➔ Pergamum(3) ➔ Thyatira(4) ➔ Sardis(5) ➔ Philadelphia(6) ➔ Laodicea(7), completing a 220km road loop back to Ephesus.',
    churches: [
      {
        order: 1,
        id: 'ephesus',
        nameZh: '以弗所教會',
        nameEn: 'Ephesus',
        roleZh: '首站海港大城 · 責備離棄起初的愛心',
        roleEn: '1st Station: Port Megacity · Rebuked for losing first love',
        promiseZh: '賜給神樂園中生命樹的果子',
        promiseEn: 'Fruit from the tree of life in the paradise of God',
        scripture: '啟 2:1-7 / Rev 2:1-7'
      },
      {
        order: 2,
        id: 'smyrna',
        nameZh: '士每拿教會',
        nameEn: 'Smyrna',
        roleZh: '北上沿海港口 · 患難中富足，勉勵至死忠心',
        roleEn: '2nd Station: Coastal Port · Persecuted but rich; faithful unto death',
        promiseZh: '必不受第二次死的害，得生命的冠冕',
        promiseEn: 'Crown of life; will not be hurt by the second death',
        scripture: '啟 2:8-11 / Rev 2:8-11'
      },
      {
        order: 3,
        id: 'pergamum',
        nameZh: '別迦摩教會',
        nameEn: 'Pergamum',
        roleZh: '折入內陸行省首府 · 撒但座位之處，責備巴蘭教訓',
        roleEn: '3rd Station: Provincial Capital · Satan’s throne; warned against Balaam',
        promiseZh: '賜隱藏的嗎哪與刻有新名的白石',
        promiseEn: 'Hidden manna and a white stone with a new name',
        scripture: '啟 2:12-17 / Rev 2:12-17'
      },
      {
        order: 4,
        id: 'thyatira',
        nameZh: '推雅推喇教會',
        nameEn: 'Thyatira',
        roleZh: '東南商業行會之城 · 責備容讓假先知耶洗別',
        roleEn: '4th Station: Trade Guild Hub · Rebuked for tolerating Jezebel',
        promiseZh: '賜鐵杖轄管列國的權柄，又賜晨星',
        promiseEn: 'Authority over nations with an iron rod, and the Morning Star',
        scripture: '啟 2:18-29 / Rev 2:18-29'
      },
      {
        order: 5,
        id: 'sardis',
        nameZh: '撒狄教會',
        nameEn: 'Sardis',
        roleZh: '西南古都要塞 · 按名是活的其實是死的',
        roleEn: '5th Station: Ancient Capital Fortress · Name of being alive, but dead',
        promiseZh: '穿白衣同乘，名字不從生命冊上塗抹',
        promiseEn: 'Clothed in white garments; name never erased from Book of Life',
        scripture: '啟 3:1-6 / Rev 3:1-6'
      },
      {
        order: 6,
        id: 'philadelphia',
        nameZh: '非拉鐵非教會',
        nameEn: 'Philadelphia',
        roleZh: '東南斷層谷地 · 敞開的門，略有力量遵守主道',
        roleEn: '6th Station: Fault Valley · Open door; kept word with little strength',
        promiseZh: '在神殿中作柱子，寫上新耶路撒冷名',
        promiseEn: 'Pillar in the temple of God; inscribed with New Jerusalem name',
        scripture: '啟 3:7-13 / Rev 3:7-13'
      },
      {
        order: 7,
        id: 'laodicea',
        nameZh: '老底嘉教會',
        nameEn: 'Laodicea',
        roleZh: '東南金融羊毛重鎮 · 不冷也不熱，門外叩門',
        roleEn: '7th Station: Banking & Wool Hub · Lukewarm; Christ knocks at the door',
        promiseZh: '與主一同坐在祂的寶座上',
        promiseEn: 'Right to sit with Christ on His throne',
        scripture: '啟 3:14-22 / Rev 3:14-22'
      }
    ]
  },

  // 6. 歷時性 7 大時期總覽 (Diachronic Overview)
  diachronicEras: [
    {
      id: 'era_1',
      titleZh: '時期一：教會建立與初期傳播期',
      titleEn: 'Era 1: Church Inception & Early Expansion',
      years: '主後 30–48 年 / 30–48 AD',
      focalCities: ['jerusalem', 'antiochSyria', 'damascus', 'caesarea'],
      booksWrittenZh: '此期尚無書信留存（部分學者主張雅各書或加拉太書早寫）',
      booksWrittenEn: 'Oral proclamation & witness; James or Galatians in earliest scholarly view',
      summaryZh: '聖靈五旬節降臨，門徒散逸至腓尼基、塞浦路斯與安提阿。安提阿成為普世外邦宣教中樞基地。',
      summaryEn: 'Pentecostal outpouring; dispersion after Stephen’s stoning spreads the Gospel to Antioch, establishing the Gentile missionary headquarters.'
    },
    {
      id: 'era_2',
      titleZh: '時期二：初期書信與向歐洲擴展',
      titleEn: 'Era 2: Early Epistles & European Mission',
      years: '主後 48–52 年 / 48–52 AD',
      focalCities: ['antiochSyria', 'corinth', 'thessalonica', 'philippi', 'jerusalem'],
      booksWrittenZh: '加拉太書、帖撒羅尼迦前書、帖撒羅尼迦後書',
      booksWrittenEn: 'Galatians, 1 Thessalonians, 2 Thessalonians',
      summaryZh: '耶路撒冷會議解決律法問題；保羅第二次宣教旅程聽見馬其頓呼聲進駐歐洲，在哥林多寫下最早成書的書信。',
      summaryEn: 'Council of Jerusalem secures Gentile freedom; Macedonian Call leads Paul across the Aegean to plant churches in Philippi, Thessalonica, and Corinth.'
    },
    {
      id: 'era_3',
      titleZh: '時期三：宣教高峰與重大神學巨著',
      titleEn: 'Era 3: Peak Missionary & Major Epistles',
      years: '主後 53–57 年 / 53–57 AD',
      focalCities: ['ephesus', 'corinth', 'philippi', 'miletus'],
      booksWrittenZh: '哥林多前書、哥林多後書、羅馬書',
      booksWrittenEn: '1 Corinthians, 2 Corinthians, Romans',
      summaryZh: '保羅以以弗所為母港三年奠定小亞細亞根基；在哥林多過冬寫就神學頂峰《羅馬書》。',
      summaryEn: 'Paul anchors in Ephesus for 3 years evangelizing Asia; composes 1 & 2 Corinthians, followed by the crowning theological monument Romans from Corinth.'
    },
    {
      id: 'era_4',
      titleZh: '時期四：第一次羅馬被囚與監獄書信',
      titleEn: 'Era 4: First Roman Imprisonment',
      years: '主後 60–62 年 / 60–62 AD',
      focalCities: ['rome', 'ephesus', 'philippi', 'colossae'],
      booksWrittenZh: '以弗所書、腓立比書、歌羅西書、腓利門書',
      booksWrittenEn: 'Ephesians, Philippians, Colossians, Philemon',
      summaryZh: '保羅上告該撒被押解至羅馬自租寓所看守；在此向小亞細亞與馬其頓發出深邃的基督宇宙論書信。',
      summaryEn: 'Appealing to Caesar, Paul reaches Rome under house custody, authoring profound Prison Epistles on cosmic Christology and spiritual unity.'
    },
    {
      id: 'era_5',
      titleZh: '時期五：獲釋巡牧與第二次被囚殉道',
      titleEn: 'Era 5: Post-Release & Final Imprisonment',
      years: '主後 62–67 年 / 62–67 AD',
      focalCities: ['nicopolis', 'philippi', 'ephesus', 'rome', 'fairHavens'],
      booksWrittenZh: '提摩太前書、提多書、提摩太後書',
      booksWrittenEn: '1 Timothy, Titus, 2 Timothy',
      summaryZh: '保羅短暫獲釋四處堅固教會；尼祿大火後大迫害爆發，保羅重囚黑牢寫下《提摩太後書》絕筆殉道。',
      summaryEn: 'Paul travels to Crete, Macedonia, and Nicopolis before re-arrest under Nero’s persecution, penning his moving farewell testament in 2 Timothy.'
    },
    {
      id: 'era_6',
      titleZh: '時期六：猶太戰爭震撼與普世大公書信',
      titleEn: 'Era 6: The Jewish War & General Epistles',
      years: '主後 65–75 年 / 65–75 AD',
      focalCities: ['jerusalem', 'rome', 'pontusRegion', 'cappadociaRegion'],
      booksWrittenZh: '馬可福音、希伯來書、彼得前後書、猶大書',
      booksWrittenEn: 'Mark, Hebrews, 1 & 2 Peter, Jude',
      summaryZh: '主後 70 年耶路撒冷聖殿被羅馬提多毀滅；信徒面臨帝國全面迫害與聖殿終結，大公書信力倡在火煉中持守指望。',
      summaryEn: 'The cataclysmic Roman destruction of the Jerusalem Temple in 70 AD; Peter and Hebrews rally believers facing fiery persecution to cling to heavenly realities.'
    },
    {
      id: 'era_7',
      titleZh: '時期七：約翰晚期著作與末世異象',
      titleEn: 'Era 7: Johannine Literature & Apocalypse',
      years: '主後 80–100 年 / 80–100 AD',
      focalCities: ['ephesus', 'patmos', 'smyrna', 'pergamum', 'laodicea'],
      booksWrittenZh: '馬太福音、路加福音–使徒行傳、約翰福音、約翰一二三書、啟示錄',
      booksWrittenEn: 'Matthew, Luke-Acts, Gospel of John, 1-3 John, Revelation',
      summaryZh: '福音書相繼編纂成冊；使徒約翰晚年於以弗所牧會並在拔摩島受流放，寫就新約正典殿後之《啟示錄》。',
      summaryEn: 'Gospels finalized for posterity; aged Apostle John ministers in Ephesus and from exile on Patmos unveils the triumphant Apocalypse of Jesus Christ.'
    }
  ],

  // 7. 新約 27 卷書卷總覽矩陣 (Master 27 NT Books)
  booksMaster: [
    { nameZh: '馬太福音', nameEn: 'Matthew', abbrevZh: '太', abbrevEn: 'Matt', categoryZh: '福音書', categoryEn: 'Gospels', date: '80–90', written: 'antiochSyria', recipientZh: '猶太背景基督徒', recipientEn: 'Jewish Christians', era: 'era_7' },
    { nameZh: '馬可福音', nameEn: 'Mark', abbrevZh: '可', abbrevEn: 'Mark', categoryZh: '福音書', categoryEn: 'Gospels', date: '65–70', written: 'rome', recipientZh: '羅馬外邦讀者', recipientEn: 'Roman Gentiles', era: 'era_6' },
    { nameZh: '路加福音', nameEn: 'Luke', abbrevZh: '路', abbrevEn: 'Luke', categoryZh: '福音書', categoryEn: 'Gospels', date: '80–85', written: 'ephesus', recipientZh: '提阿非羅 / 外邦世界', recipientEn: 'Theophilus & Gentiles', era: 'era_7' },
    { nameZh: '約翰福音', nameEn: 'John', abbrevZh: '約', abbrevEn: 'John', categoryZh: '福音書', categoryEn: 'Gospels', date: '90–100', written: 'ephesus', recipientZh: '普世信徒', recipientEn: 'Universal Believers', era: 'era_7' },
    { nameZh: '使徒行傳', nameEn: 'Acts', abbrevZh: '徒', abbrevEn: 'Acts', categoryZh: '歷史書', categoryEn: 'Historical', date: '80–85', written: 'rome', recipientZh: '提阿非羅', recipientEn: 'Theophilus', era: 'era_7' },
    { nameZh: '羅馬書', nameEn: 'Romans', abbrevZh: '羅', abbrevEn: 'Rom', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '57', written: 'corinth', recipientZh: '羅馬教會 (Rome)', recipientEn: 'Church in Rome', era: 'era_3' },
    { nameZh: '哥林多前書', nameEn: '1 Corinthians', abbrevZh: '林前', abbrevEn: '1 Cor', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '54–55', written: 'ephesus', recipientZh: '哥林多教會 (Corinth)', recipientEn: 'Church in Corinth', era: 'era_3' },
    { nameZh: '哥林多後書', nameEn: '2 Corinthians', abbrevZh: '林後', abbrevEn: '2 Cor', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '55–56', written: 'philippi', recipientZh: '哥林多教會 (Corinth)', recipientEn: 'Church in Corinth', era: 'era_3' },
    { nameZh: '加拉太書', nameEn: 'Galatians', abbrevZh: '加', abbrevEn: 'Gal', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '48–49 / 55', written: 'antiochSyria', recipientZh: '加拉太各教會', recipientEn: 'Galatian Churches', era: 'era_2' },
    { nameZh: '以弗所書', nameEn: 'Ephesians', abbrevZh: '弗', abbrevEn: 'Eph', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '60–62', written: 'rome', recipientZh: '以弗所與亞西亞各教會', recipientEn: 'Ephesus & Asia Minor', era: 'era_4' },
    { nameZh: '腓立比書', nameEn: 'Philippians', abbrevZh: '腓', abbrevEn: 'Phil', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '60–62', written: 'rome', recipientZh: '腓立比教會 (Philippi)', recipientEn: 'Church in Philippi', era: 'era_4' },
    { nameZh: '歌羅西書', nameEn: 'Colossians', abbrevZh: '西', abbrevEn: 'Col', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '60–62', written: 'rome', recipientZh: '歌羅西教會 (Colossae)', recipientEn: 'Church in Colossae', era: 'era_4' },
    { nameZh: '帖撒羅尼迦前書', nameEn: '1 Thessalonians', abbrevZh: '帖前', abbrevEn: '1 Thess', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '50–51', written: 'corinth', recipientZh: '帖撒羅尼迦教會', recipientEn: 'Church in Thessalonica', era: 'era_2' },
    { nameZh: '帖撒羅尼迦後書', nameEn: '2 Thessalonians', abbrevZh: '帖後', abbrevEn: '2 Thess', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '51', written: 'corinth', recipientZh: '帖撒羅尼迦教會', recipientEn: 'Church in Thessalonica', era: 'era_2' },
    { nameZh: '提摩太前書', nameEn: '1 Timothy', abbrevZh: '提前', abbrevEn: '1 Tim', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '62–64', written: 'philippi', recipientZh: '提摩太 (以弗所牧會)', recipientEn: 'Timothy (in Ephesus)', era: 'era_5' },
    { nameZh: '提摩太後書', nameEn: '2 Timothy', abbrevZh: '提後', abbrevEn: '2 Tim', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '66–67', written: 'rome', recipientZh: '提摩太 (以弗所)', recipientEn: 'Timothy (in Ephesus)', era: 'era_5' },
    { nameZh: '提多書', nameEn: 'Titus', abbrevZh: '多', abbrevEn: 'Tit', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '63–65', written: 'nicopolis', recipientZh: '提多 (克里特島)', recipientEn: 'Titus (in Crete)', era: 'era_5' },
    { nameZh: '腓利門書', nameEn: 'Philemon', abbrevZh: '門', abbrevEn: 'Phlm', categoryZh: '保羅書信', categoryEn: 'Pauline Epistles', date: '60–62', written: 'rome', recipientZh: '腓利門 (歌羅西)', recipientEn: 'Philemon (in Colossae)', era: 'era_4' },
    { nameZh: '希伯來書', nameEn: 'Hebrews', abbrevZh: '來', abbrevEn: 'Heb', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '65–70', written: 'rome', recipientZh: '猶太希伯來基督徒', recipientEn: 'Hebrew Christians', era: 'era_6' },
    { nameZh: '雅各書', nameEn: 'James', abbrevZh: '雅', abbrevEn: 'Jas', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '50s / 62', written: 'jerusalem', recipientZh: '散居各地十二支派', recipientEn: 'Twelve Tribes in Diaspora', era: 'era_2' },
    { nameZh: '彼得前書', nameEn: '1 Peter', abbrevZh: '彼前', abbrevEn: '1 Pet', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '63–65', written: 'rome', recipientZh: '小亞細亞五省散居信徒', recipientEn: 'Exiles across 5 Asia Minor Provinces', era: 'era_6' },
    { nameZh: '彼得後書', nameEn: '2 Peter', abbrevZh: '彼後', abbrevEn: '2 Pet', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '65–68', written: 'rome', recipientZh: '普世同得寶貴信心者', recipientEn: 'General Believers', era: 'era_6' },
    { nameZh: '約翰一書', nameEn: '1 John', abbrevZh: '約一', abbrevEn: '1 Jn', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '90–100', written: 'ephesus', recipientZh: '以弗所周邊教會群體', recipientEn: 'Churches around Ephesus', era: 'era_7' },
    { nameZh: '約翰二書', nameEn: '2 John', abbrevZh: '約二', abbrevEn: '2 Jn', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '90–100', written: 'ephesus', recipientZh: '蒙揀選的太太和兒女', recipientEn: 'The Elect Lady and Children', era: 'era_7' },
    { nameZh: '約翰三書', nameEn: '3 John', abbrevZh: '約三', abbrevEn: '3 Jn', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '90–100', written: 'ephesus', recipientZh: '該猶長老', recipientEn: 'Elder Gaius', era: 'era_7' },
    { nameZh: '猶大書', nameEn: 'Jude', abbrevZh: '猶', abbrevEn: 'Jude', categoryZh: '大公書信', categoryEn: 'General Epistles', date: '65–80', written: 'jerusalem', recipientZh: '蒙召蒙愛之眾信徒', recipientEn: 'General Believers', era: 'era_6' },
    { nameZh: '啟示錄', nameEn: 'Revelation', abbrevZh: '啟', abbrevEn: 'Rev', categoryZh: '啟示文學', categoryEn: 'Apocalyptic', date: '95', written: 'patmos', recipientZh: '亞西亞七個教會', recipientEn: 'Seven Churches of Asia', era: 'era_7' }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NT_DATA;
}
