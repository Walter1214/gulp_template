/*!
(c) 2014 milkmidi
Taiwan Cita Area Data
*/
// (function ( window ){    


/**
 * @type {{label:string,area:object[]}[]}
 */
var DATA = [{ "label": "基隆市", "area": [{ "label": "仁愛區", "zip": "200" }, { "label": "信義區", "zip": "201" }, { "label": "中正區", "zip": "202" }, { "label": "中山區", "zip": "203" }, { "label": "安樂區", "zip": "204" }, { "label": "暖暖區", "zip": "205" }, { "label": "七堵區", "zip": "206" }] }, {
        "label": "臺北市", "area": [{ "label": "中正區", "zip": "100" }, { "label": "大同區", "zip": "103" }, { "label": "中山區", "zip": "104" }, { "label": "松山區", "zip": "105" }, {
            "label": "大安區",
            "zip": "106"
        }, { "label": "萬華區", "zip": "108" }, { "label": "信義區", "zip": "110" }, { "label": "士林區", "zip": "111" }, { "label": "北投區", "zip": "112" }, { "label": "內湖區", "zip": "114" }, { "label": "南港區", "zip": "115" }, { "label": "文山區", "zip": "116" }]
    }, {
        "label": "新北市", "area": [{ "label": "萬里區", "zip": "207" }, { "label": "金山區", "zip": "208" }, { "label": "板橋區", "zip": "220" }, { "label": "汐止區", "zip": "221" }, {
            "label": "深坑區",
            "zip": "222"
        }, { "label": "石碇區", "zip": "223" }, { "label": "瑞芳區", "zip": "224" }, { "label": "平溪區", "zip": "226" }, { "label": "雙溪區", "zip": "227" }, { "label": "貢寮區", "zip": "228" }, { "label": "新店區", "zip": "231" }, { "label": "坪林區", "zip": "232" }, { "label": "烏來區", "zip": "233" }, { "label": "永和區", "zip": "234" }, { "label": "中和區", "zip": "235" }, { "label": "土城區", "zip": "236" }, { "label": "三峽區", "zip": "237" }, {
            "label": "樹林區",
            "zip": "238"
        }, { "label": "鶯歌區", "zip": "239" }, { "label": "三重區", "zip": "241" }, { "label": "新莊區", "zip": "242" }, { "label": "泰山區", "zip": "243" }, { "label": "林口區", "zip": "244" }, { "label": "蘆洲區", "zip": "247" }, { "label": "五股區", "zip": "248" }, { "label": "八里區", "zip": "249" }, { "label": "淡水區", "zip": "251" }, { "label": "三芝區", "zip": "252" }, { "label": "石門區", "zip": "253" }]
    }, {
        "label": "桃園市", "area": [{
            "label": "中壢區",
            "zip": "320"
        }, { "label": "平鎮區", "zip": "324" }, { "label": "龍潭區", "zip": "325" }, { "label": "楊梅區", "zip": "326" }, { "label": "新屋區", "zip": "327" }, { "label": "觀音區", "zip": "328" }, { "label": "桃園區", "zip": "330" }, { "label": "龜山區", "zip": "333" }, { "label": "八德區", "zip": "334" }, { "label": "大溪區", "zip": "335" }, { "label": "復興區", "zip": "336" }, { "label": "大園區", "zip": "337" }, { "label": "蘆竹區", "zip": "338" }]
    }, {
        "label": "新竹市",
        "area": [{ "label": "東區", "zip": "300" }, { "label": "北區", "zip": "300" }, { "label": "香山區", "zip": "300" }]
    }, {
        "label": "新竹縣", "area": [{ "label": "竹北市", "zip": "302" }, { "label": "湖口鄉", "zip": "303" }, { "label": "新豐鄉", "zip": "304" }, { "label": "新埔鎮", "zip": "305" }, { "label": "關西鎮", "zip": "306" }, { "label": "芎林鄉", "zip": "307" }, { "label": "寶山鄉", "zip": "308" }, { "label": "竹東鎮", "zip": "310" }, { "label": "五峰鄉", "zip": "311" }, {
            "label": "橫山鄉",
            "zip": "312"
        }, { "label": "尖石鄉", "zip": "313" }, { "label": "北埔鄉", "zip": "314" }, { "label": "峨眉鄉", "zip": "315" }]
    }, {
        "label": "苗栗縣", "area": [{ "label": "竹南鎮", "zip": "350" }, { "label": "頭份市", "zip": "351" }, { "label": "三灣鄉", "zip": "352" }, { "label": "南庄鄉", "zip": "353" }, { "label": "獅潭鄉", "zip": "354" }, { "label": "後龍鎮", "zip": "356" }, { "label": "通霄鎮", "zip": "357" }, { "label": "苑裡鎮", "zip": "358" }, {
            "label": "苗栗市",
            "zip": "360"
        }, { "label": "造橋鄉", "zip": "361" }, { "label": "頭屋鄉", "zip": "362" }, { "label": "公館鄉", "zip": "363" }, { "label": "大湖鄉", "zip": "364" }, { "label": "泰安鄉", "zip": "365" }, { "label": "銅鑼鄉", "zip": "366" }, { "label": "三義鄉", "zip": "367" }, { "label": "西湖鄉", "zip": "368" }, { "label": "卓蘭鎮", "zip": "369" }]
    }, {
        "label": "臺中市", "area": [{ "label": "中區", "zip": "400" }, { "label": "東區", "zip": "401" }, { "label": "南區", "zip": "402" }, {
            "label": "西區",
            "zip": "403"
        }, { "label": "北區", "zip": "404" }, { "label": "北屯區", "zip": "406" }, { "label": "西屯區", "zip": "407" }, { "label": "南屯區", "zip": "408" }, { "label": "太平區", "zip": "411" }, { "label": "大里區", "zip": "412" }, { "label": "霧峰區", "zip": "413" }, { "label": "烏日區", "zip": "414" }, { "label": "豐原區", "zip": "420" }, { "label": "后里區", "zip": "421" }, { "label": "石岡區", "zip": "422" }, { "label": "東勢區", "zip": "423" }, {
            "label": "和平區",
            "zip": "424"
        }, { "label": "新社區", "zip": "426" }, { "label": "潭子區", "zip": "427" }, { "label": "大雅區", "zip": "428" }, { "label": "神岡區", "zip": "429" }, { "label": "大肚區", "zip": "432" }, { "label": "沙鹿區", "zip": "433" }, { "label": "龍井區", "zip": "434" }, { "label": "梧棲區", "zip": "435" }, { "label": "清水區", "zip": "436" }, { "label": "大甲區", "zip": "437" }, { "label": "外埔區", "zip": "438" }, { "label": "大安區", "zip": "439" }]
    }, {
        "label": "彰化縣",
        "area": [{ "label": "彰化市", "zip": "500" }, { "label": "芬園鄉", "zip": "502" }, { "label": "花壇鄉", "zip": "503" }, { "label": "秀水鄉", "zip": "504" }, { "label": "鹿港鎮", "zip": "505" }, { "label": "福興鄉", "zip": "506" }, { "label": "線西鄉", "zip": "507" }, { "label": "和美鎮", "zip": "508" }, { "label": "伸港鄉", "zip": "509" }, { "label": "員林市", "zip": "510" }, { "label": "社頭鄉", "zip": "511" }, { "label": "永靖鄉", "zip": "512" }, {
            "label": "埔心鄉",
            "zip": "513"
        }, { "label": "溪湖鎮", "zip": "514" }, { "label": "大村鄉", "zip": "515" }, { "label": "埔鹽鄉", "zip": "516" }, { "label": "田中鎮", "zip": "520" }, { "label": "北斗鎮", "zip": "521" }, { "label": "田尾鄉", "zip": "522" }, { "label": "埤頭鄉", "zip": "523" }, { "label": "溪州鄉", "zip": "524" }, { "label": "竹塘鄉", "zip": "525" }, { "label": "二林鎮", "zip": "526" }, { "label": "大城鄉", "zip": "527" }, { "label": "芳苑鄉", "zip": "528" }, {
            "label": "二水鄉",
            "zip": "530"
        }]
    }, {
        "label": "南投縣", "area": [{ "label": "南投市", "zip": "540" }, { "label": "中寮鄉", "zip": "541" }, { "label": "草屯鎮", "zip": "542" }, { "label": "國姓鄉", "zip": "544" }, { "label": "埔里鎮", "zip": "545" }, { "label": "仁愛鄉", "zip": "546" }, { "label": "名間鄉", "zip": "551" }, { "label": "集集鎮", "zip": "552" }, { "label": "水里鄉", "zip": "553" }, { "label": "魚池鄉", "zip": "555" }, { "label": "信義鄉", "zip": "556" }, {
            "label": "竹山鎮",
            "zip": "557"
        }, { "label": "鹿谷鄉", "zip": "558" }]
    }, {
        "label": "雲林縣", "area": [{ "label": "斗南鎮", "zip": "630" }, { "label": "大埤鄉", "zip": "631" }, { "label": "虎尾鎮", "zip": "632" }, { "label": "土庫鎮", "zip": "633" }, { "label": "褒忠鄉", "zip": "634" }, { "label": "東勢鄉", "zip": "635" }, { "label": "臺西鄉", "zip": "636" }, { "label": "崙背鄉", "zip": "637" }, { "label": "麥寮鄉", "zip": "638" }, { "label": "斗六市", "zip": "640" }, {
            "label": "林內鄉",
            "zip": "643"
        }, { "label": "古坑鄉", "zip": "646" }, { "label": "莿桐鄉", "zip": "647" }, { "label": "西螺鎮", "zip": "648" }, { "label": "二崙鄉", "zip": "649" }, { "label": "北港鎮", "zip": "651" }, { "label": "水林鄉", "zip": "652" }, { "label": "口湖鄉", "zip": "653" }, { "label": "四湖鄉", "zip": "654" }, { "label": "元長鄉", "zip": "655" }]
    }, { "label": "嘉義市", "area": [{ "label": "東區", "zip": "600" }, { "label": "西區", "zip": "600" }] }, {
        "label": "嘉義縣", "area": [{
            "label": "番路鄉",
            "zip": "602"
        }, { "label": "梅山鄉", "zip": "603" }, { "label": "竹崎鄉", "zip": "604" }, { "label": "阿里山鄉", "zip": "605" }, { "label": "中埔鄉", "zip": "606" }, { "label": "大埔鄉", "zip": "607" }, { "label": "水上鄉", "zip": "608" }, { "label": "鹿草鄉", "zip": "611" }, { "label": "太保市", "zip": "612" }, { "label": "朴子市", "zip": "613" }, { "label": "東石鄉", "zip": "614" }, { "label": "六腳鄉", "zip": "615" }, { "label": "新港鄉", "zip": "616" }, {
            "label": "民雄鄉",
            "zip": "621"
        }, { "label": "大林鎮", "zip": "622" }, { "label": "溪口鄉", "zip": "623" }, { "label": "義竹鄉", "zip": "624" }, { "label": "布袋鎮", "zip": "625" }]
    }, {
        "label": "臺南市", "area": [{ "label": "中西區", "zip": "700" }, { "label": "東區", "zip": "701" }, { "label": "南區", "zip": "702" }, { "label": "北區", "zip": "704" }, { "label": "安平區", "zip": "708" }, { "label": "安南區", "zip": "709" }, { "label": "永康區", "zip": "710" }, { "label": "歸仁區", "zip": "711" }, {
            "label": "新化區",
            "zip": "712"
        }, { "label": "左鎮區", "zip": "713" }, { "label": "玉井區", "zip": "714" }, { "label": "楠西區", "zip": "715" }, { "label": "南化區", "zip": "716" }, { "label": "仁德區", "zip": "717" }, { "label": "關廟區", "zip": "718" }, { "label": "龍崎區", "zip": "719" }, { "label": "官田區", "zip": "720" }, { "label": "麻豆區", "zip": "721" }, { "label": "佳里區", "zip": "722" }, { "label": "西港區", "zip": "723" }, { "label": "七股區", "zip": "724" }, {
            "label": "將軍區",
            "zip": "725"
        }, { "label": "學甲區", "zip": "726" }, { "label": "北門區", "zip": "727" }, { "label": "新營區", "zip": "730" }, { "label": "後壁區", "zip": "731" }, { "label": "白河區", "zip": "732" }, { "label": "東山區", "zip": "733" }, { "label": "六甲區", "zip": "734" }, { "label": "下營區", "zip": "735" }, { "label": "柳營區", "zip": "736" }, { "label": "鹽水區", "zip": "737" }, { "label": "善化區", "zip": "741" }, { "label": "大內區", "zip": "742" }, {
            "label": "山上區",
            "zip": "743"
        }, { "label": "新市區", "zip": "744" }, { "label": "安定區", "zip": "745" }]
    }, {
        "label": "高雄市", "area": [{ "label": "新興區", "zip": "800" }, { "label": "前金區", "zip": "801" }, { "label": "苓雅區", "zip": "802" }, { "label": "鹽埕區", "zip": "803" }, { "label": "鼓山區", "zip": "804" }, { "label": "旗津區", "zip": "805" }, { "label": "前鎮區", "zip": "806" }, { "label": "三民區", "zip": "807" }, { "label": "楠梓區", "zip": "811" }, {
            "label": "小港區",
            "zip": "812"
        }, { "label": "左營區", "zip": "813" }, { "label": "仁武區", "zip": "814" }, { "label": "大社區", "zip": "815" }, { "label": "岡山區", "zip": "820" }, { "label": "路竹區", "zip": "821" }, { "label": "阿蓮區", "zip": "822" }, { "label": "田寮區", "zip": "823" }, { "label": "燕巢區", "zip": "824" }, { "label": "橋頭區", "zip": "825" }, { "label": "梓官區", "zip": "826" }, { "label": "彌陀區", "zip": "827" }, { "label": "永安區", "zip": "828" }, {
            "label": "湖內區",
            "zip": "829"
        }, { "label": "鳳山區", "zip": "830" }, { "label": "大寮區", "zip": "831" }, { "label": "林園區", "zip": "832" }, { "label": "鳥松區", "zip": "833" }, { "label": "大樹區", "zip": "840" }, { "label": "旗山區", "zip": "842" }, { "label": "美濃區", "zip": "843" }, { "label": "六龜區", "zip": "844" }, { "label": "內門區", "zip": "845" }, { "label": "杉林區", "zip": "846" }, { "label": "甲仙區", "zip": "847" }, { "label": "桃源區", "zip": "848" }, {
            "label": "那瑪夏區",
            "zip": "849"
        }, { "label": "茂林區", "zip": "851" }, { "label": "茄萣區", "zip": "852" }]
    }, {
        "label": "屏東縣", "area": [{ "label": "屏東市", "zip": "900" }, { "label": "三地門鄉", "zip": "901" }, { "label": "霧臺鄉", "zip": "902" }, { "label": "瑪家鄉", "zip": "903" }, { "label": "九如鄉", "zip": "904" }, { "label": "里港鄉", "zip": "905" }, { "label": "高樹鄉", "zip": "906" }, { "label": "鹽埔鄉", "zip": "907" }, { "label": "長治鄉", "zip": "908" }, {
            "label": "麟洛鄉",
            "zip": "909"
        }, { "label": "竹田鄉", "zip": "911" }, { "label": "內埔鄉", "zip": "912" }, { "label": "萬丹鄉", "zip": "913" }, { "label": "潮州鎮", "zip": "920" }, { "label": "泰武鄉", "zip": "921" }, { "label": "來義鄉", "zip": "922" }, { "label": "萬巒鄉", "zip": "923" }, { "label": "崁頂鄉", "zip": "924" }, { "label": "新埤鄉", "zip": "925" }, { "label": "南州鄉", "zip": "926" }, { "label": "林邊鄉", "zip": "927" }, { "label": "東港鎮", "zip": "928" }, {
            "label": "琉球鄉",
            "zip": "929"
        }, { "label": "佳冬鄉", "zip": "931" }, { "label": "新園鄉", "zip": "932" }, { "label": "枋寮鄉", "zip": "940" }, { "label": "枋山鄉", "zip": "941" }, { "label": "春日鄉", "zip": "942" }, { "label": "獅子鄉", "zip": "943" }, { "label": "車城鄉", "zip": "944" }, { "label": "牡丹鄉", "zip": "945" }, { "label": "恆春鎮", "zip": "946" }, { "label": "滿州鄉", "zip": "947" }]
    }, {
        "label": "臺東縣", "area": [{ "label": "臺東市", "zip": "950" }, {
            "label": "綠島鄉",
            "zip": "951"
        }, { "label": "蘭嶼鄉", "zip": "952" }, { "label": "延平鄉", "zip": "953" }, { "label": "卑南鄉", "zip": "954" }, { "label": "鹿野鄉", "zip": "955" }, { "label": "關山鎮", "zip": "956" }, { "label": "海端鄉", "zip": "957" }, { "label": "池上鄉", "zip": "958" }, { "label": "東河鄉", "zip": "959" }, { "label": "成功鎮", "zip": "961" }, { "label": "長濱鄉", "zip": "962" }, { "label": "太麻里鄉", "zip": "963" }, { "label": "金峰鄉", "zip": "964" }, {
            "label": "大武鄉",
            "zip": "965"
        }, { "label": "達仁鄉", "zip": "966" }]
    }, {
        "label": "花蓮縣", "area": [{ "label": "花蓮市", "zip": "970" }, { "label": "新城鄉", "zip": "971" }, { "label": "秀林鄉", "zip": "972" }, { "label": "吉安鄉", "zip": "973" }, { "label": "壽豐鄉", "zip": "974" }, { "label": "鳳林鎮", "zip": "975" }, { "label": "光復鄉", "zip": "976" }, { "label": "豐濱鄉", "zip": "977" }, { "label": "瑞穗鄉", "zip": "978" }, { "label": "萬榮鄉", "zip": "979" }, {
            "label": "玉里鎮",
            "zip": "981"
        }, { "label": "卓溪鄉", "zip": "982" }]
    }, {
        "label": "宜蘭縣", "area": [{ "label": "宜蘭市", "zip": "260" }, { "label": "頭城鎮", "zip": "261" }, { "label": "礁溪鄉", "zip": "262" }, { "label": "壯圍鄉", "zip": "263" }, { "label": "員山鄉", "zip": "264" }, { "label": "羅東鎮", "zip": "265" }, { "label": "三星鄉", "zip": "266" }, { "label": "大同鄉", "zip": "267" }, { "label": "五結鄉", "zip": "268" }, { "label": "冬山鄉", "zip": "269" }, {
            "label": "蘇澳鎮",
            "zip": "270"
        }, { "label": "南澳鄉", "zip": "272" }]
    }, { "label": "澎湖縣", "area": [{ "label": "馬公市", "zip": "880" }, { "label": "西嶼鄉", "zip": "881" }, { "label": "望安鄉", "zip": "882" }, { "label": "七美鄉", "zip": "883" }, { "label": "白沙鄉", "zip": "884" }, { "label": "湖西鄉", "zip": "885" }] }, {
        "label": "金門縣", "area": [{ "label": "金沙鎮", "zip": "890" }, { "label": "金湖鎮", "zip": "891" }, { "label": "金寧鄉", "zip": "892" }, {
            "label": "金城鎮",
            "zip": "893"
        }, { "label": "烈嶼鄉", "zip": "894" }, { "label": "烏坵鄉", "zip": "896" }]
    }, { "label": "連江縣", "area": [{ "label": "南竿鄉", "zip": "209" }, { "label": "北竿鄉", "zip": "210" }, { "label": "莒光鄉", "zip": "211" }, { "label": "東引鄉", "zip": "212" }] }];


    // if (typeof module !== 'undefined' && module.exports) {
        module.exports = DATA;
    /*} else {
        window.milkmidi = window.milkmidi || {};
        window.milkmidi.CityAreaData = DATA;        
    }
})( window);*/