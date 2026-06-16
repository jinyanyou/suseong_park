const PARKS = [
  {
    "seq": 1,
    "category": "도시자연공원",
    "name": "대구대공원",
    "dong": "욱수동",
    "address": "욱수동",
    "fullAddress": "대구광역시 수성구 욱수동",
    "area": "1878637",
    "facility": "종합경기장 주변으로 조성중"
  },
  {
    "seq": 2,
    "category": "근린공원",
    "name": "범어공원",
    "dong": "황금동",
    "address": "황금동 산1",
    "fullAddress": "대구광역시 수성구 황금동 산1",
    "area": "1132458",
    "facility": "어린이회관, 박물관, 운동장, 학생과학관, 궁도장, 노인복지회관, 정구장, 편익시설(주차장2, 벤치195, 음수대2, 파고라4, 가로등54, 휴지통17)"
  },
  {
    "seq": 3,
    "category": "근린공원",
    "name": "야시골공원",
    "dong": "범어동",
    "address": "범어동 산250",
    "fullAddress": "대구광역시 수성구 범어동 산250",
    "area": "198268",
    "facility": "골프연습장, 편익시설(화장실2, 음수대1, 벤치88, 체력단련장1, 가로등34, 휴지통33, 주차장3, 파고라3)"
  },
  {
    "seq": 4,
    "category": "근린공원",
    "name": "화랑공원",
    "dong": "만촌동",
    "address": "만촌동 1417",
    "fullAddress": "대구광역시 수성구 만촌동 1417",
    "area": "45120",
    "facility": "테니스장, 수성도서관, 주민쉼터, 통일전시관, 산책로, 편익시설(화장실, 공중전화, 파고라, 벤치, 체육시설물, 가로등, 휴지통, 주차장, 음수대, 다목적광장, 에어로빅, 배드민턴, 게이트볼 등)"
  },
  {
    "seq": 5,
    "category": "근린공원",
    "name": "만촌공원",
    "dong": "만촌동",
    "address": "만촌동산 407-10",
    "fullAddress": "대구광역시 수성구 만촌동산 407-10",
    "area": "314016",
    "facility": "미조성"
  },
  {
    "seq": 6,
    "category": "근린공원",
    "name": "수성공원",
    "dong": "수성동",
    "address": "수성4가 1090-15",
    "fullAddress": "대구광역시 수성구 수성4가 1090-15",
    "area": "4960",
    "facility": "도로 및 광장 1식, 편의시설(등의자 24, 공원등 10, 휴지통3)"
  },
  {
    "seq": 7,
    "category": "근린공원",
    "name": "지산공원",
    "dong": "지산동",
    "address": "지산동 1274",
    "fullAddress": "대구광역시 수성구 지산동 1274",
    "area": "11572",
    "facility": "종합놀이대1, 그네1, 정글짐1, 다목적운동장1, 음수대2, 화장실1, 모래장1"
  },
  {
    "seq": 8,
    "category": "근린공원",
    "name": "범물공원",
    "dong": "범물동",
    "address": "범물동 1328-2",
    "fullAddress": "대구광역시 수성구 범물동 1328-2",
    "area": "7158",
    "facility": "편익시설(화장실1, 파고라3, 휴지통13, 벤치26, 가로등10)"
  },
  {
    "seq": 9,
    "category": "근린공원",
    "name": "신매공원",
    "dong": "고산동",
    "address": "신매동 590",
    "fullAddress": "대구광역시 수성구 신매동 590",
    "area": "9854",
    "facility": "편익시설(도로 및 광장 1식, 어린이놀이터1, 조기운동시설외 1종, 노인정1, 화장실1, 휴지통9, 벤치20, 파고라1, 가로등16)"
  },
  {
    "seq": 10,
    "category": "근린공원",
    "name": "노변공원",
    "dong": "고산동",
    "address": "시지동 501",
    "fullAddress": "대구광역시 수성구 시지동 501",
    "area": "10454",
    "facility": "편익시설(파고라3, 휴지통11, 벤치44, 음수대1, 가로등17)"
  },
  {
    "seq": 11,
    "category": "근린공원",
    "name": "매호공원",
    "dong": "고산동",
    "address": "매호동 1321",
    "fullAddress": "대구광역시 수성구 매호동 1321",
    "area": "9955",
    "facility": "편익시설(도로 및 광장 1식, 어린이 놀이터, 조기운동시설외 1종, 화장실1, 노인정1, 파고라1, 휴지통7, 벤치17, 화장실1, 음수대1, 가로등10)"
  },
  {
    "seq": 12,
    "category": "근린공원",
    "name": "알파시티공원",
    "dong": "고산동",
    "address": "노변동 741 일원",
    "fullAddress": "대구광역시 수성구 노변동 741 일원",
    "area": "14117",
    "facility": "관리사무실 1, 생태연못1, 운동시설물 16 등"
  },
  {
    "seq": 13,
    "category": "대구체육공원",
    "name": "대구체육공원",
    "dong": "욱수동",
    "address": "욱수동",
    "fullAddress": "대구광역시 수성구 욱수동",
    "area": "1925700",
    "facility": "대구대공원과 연계하여 조성중"
  },
  {
    "seq": 14,
    "category": "어린이공원",
    "name": "계림어린이공원",
    "dong": "범어동",
    "address": "범어2동 416-9",
    "fullAddress": "대구광역시 수성구 범어2동 416-9",
    "area": "666.1",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 15,
    "category": "어린이공원",
    "name": "범어재어린이공원",
    "dong": "범어동",
    "address": "범어3동 966-2",
    "fullAddress": "대구광역시 수성구 범어3동 966-2",
    "area": "1146.9000000000001",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 16,
    "category": "어린이공원",
    "name": "샛별어린이공원",
    "dong": "만촌동",
    "address": "만촌1동 656-3",
    "fullAddress": "대구광역시 수성구 만촌1동 656-3",
    "area": "993.1",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 17,
    "category": "어린이공원",
    "name": "청구어린이공원",
    "dong": "만촌동",
    "address": "만촌2동1006-2",
    "fullAddress": "대구광역시 수성구 만촌2동1006-2",
    "area": "660.2",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 18,
    "category": "어린이공원",
    "name": "동원어린이공원",
    "dong": "만촌동",
    "address": "만촌2동1017-2",
    "fullAddress": "대구광역시 수성구 만촌2동1017-2",
    "area": "475.7",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 19,
    "category": "어린이공원",
    "name": "광명어린이공원",
    "dong": "만촌동",
    "address": "만촌2동1023-11",
    "fullAddress": "대구광역시 수성구 만촌2동1023-11",
    "area": "728.9",
    "facility": "야외운동기구 등"
  },
  {
    "seq": 20,
    "category": "어린이공원",
    "name": "무열어린이공원",
    "dong": "만촌동",
    "address": "만촌2동 991-8",
    "fullAddress": "대구광역시 수성구 만촌2동 991-8",
    "area": "659.2",
    "facility": "흔들놀이기구 외 1종"
  },
  {
    "seq": 21,
    "category": "어린이공원",
    "name": "국화어린이공원",
    "dong": "만촌동",
    "address": "만촌3동 852",
    "fullAddress": "대구광역시 수성구 만촌3동 852",
    "area": "1604",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 22,
    "category": "어린이공원",
    "name": "진달래어린이공원",
    "dong": "만촌동",
    "address": "만촌3동 862",
    "fullAddress": "대구광역시 수성구 만촌3동 862",
    "area": "2844.9",
    "facility": "흔들놀이기구 외 2종"
  },
  {
    "seq": 23,
    "category": "어린이공원",
    "name": "만촌어린이공원",
    "dong": "만촌동",
    "address": "만촌3동870-13",
    "fullAddress": "대구광역시 수성구 만촌3동870-13",
    "area": "1683.8",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 24,
    "category": "어린이공원",
    "name": "봉선화어린이공원",
    "dong": "만촌동",
    "address": "만촌3동874-2",
    "fullAddress": "대구광역시 수성구 만촌3동874-2",
    "area": "1501.4",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 25,
    "category": "어린이공원",
    "name": "민들레어린이공원",
    "dong": "만촌동",
    "address": "만촌3동 1496",
    "fullAddress": "대구광역시 수성구 만촌3동 1496",
    "area": "1634.7",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 26,
    "category": "어린이공원",
    "name": "새마을어린이공원",
    "dong": "수성동",
    "address": "수성동3가 130-2",
    "fullAddress": "대구광역시 수성구 수성동3가 130-2",
    "area": "1650.9",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 27,
    "category": "어린이공원",
    "name": "수성어린이공원",
    "dong": "수성동",
    "address": "수성동3가 216",
    "fullAddress": "대구광역시 수성구 수성동3가 216",
    "area": "1711.7",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 28,
    "category": "어린이공원",
    "name": "호돌이어린이공원",
    "dong": "수성동",
    "address": "수성4가동 1009-2",
    "fullAddress": "대구광역시 수성구 수성4가동 1009-2",
    "area": "1717.7",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 29,
    "category": "어린이공원",
    "name": "동신어린이공원",
    "dong": "황금동",
    "address": "황금2동 750",
    "fullAddress": "대구광역시 수성구 황금2동 750",
    "area": "1982.2",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 30,
    "category": "어린이공원",
    "name": "수목어린이공원",
    "dong": "황금동",
    "address": "황금2동 721",
    "fullAddress": "대구광역시 수성구 황금2동 721",
    "area": "1976.5",
    "facility": "조합놀이대 외 5종"
  },
  {
    "seq": 31,
    "category": "어린이공원",
    "name": "황금어린이공원",
    "dong": "황금동",
    "address": "황금2동 802",
    "fullAddress": "대구광역시 수성구 황금2동 802",
    "area": "1993.1",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 32,
    "category": "어린이공원",
    "name": "대경어린이공원",
    "dong": "황금동",
    "address": "황금2동 882-2",
    "fullAddress": "대구광역시 수성구 황금2동 882-2",
    "area": "1952.7",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 33,
    "category": "어린이공원",
    "name": "무궁화어린이공원",
    "dong": "중동",
    "address": "중동 12",
    "fullAddress": "대구광역시 수성구 중동 12",
    "area": "1664.1",
    "facility": "조합놀이대외3종"
  },
  {
    "seq": 34,
    "category": "어린이공원",
    "name": "상록수어린이공원",
    "dong": "중동",
    "address": "중동127",
    "fullAddress": "대구광역시 수성구 중동127",
    "area": "1984.1",
    "facility": "조합놀이대외5종"
  },
  {
    "seq": 35,
    "category": "어린이공원",
    "name": "중동어린이공원",
    "dong": "중동",
    "address": "중동171",
    "fullAddress": "대구광역시 수성구 중동171",
    "area": "1981.8",
    "facility": "조합놀이대외2종"
  },
  {
    "seq": 36,
    "category": "어린이공원",
    "name": "희망어린이공원",
    "dong": "상동",
    "address": "상동 17",
    "fullAddress": "대구광역시 수성구 상동 17",
    "area": "2655.2",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 37,
    "category": "어린이공원",
    "name": "청소년어린이공원",
    "dong": "상동",
    "address": "상동 54",
    "fullAddress": "대구광역시 수성구 상동 54",
    "area": "2647.6",
    "facility": "운동기구 외 1종"
  },
  {
    "seq": 38,
    "category": "어린이공원",
    "name": "들안길어린이공원",
    "dong": "상동",
    "address": "상동 343",
    "fullAddress": "대구광역시 수성구 상동 343",
    "area": "2643.6",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 39,
    "category": "어린이공원",
    "name": "덕화어린이공원",
    "dong": "상동",
    "address": "상동 400-1",
    "fullAddress": "대구광역시 수성구 상동 400-1",
    "area": "1500.7",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 40,
    "category": "어린이공원",
    "name": "샛터어린이공원",
    "dong": "두산동",
    "address": "두산동 41",
    "fullAddress": "대구광역시 수성구 두산동 41",
    "area": "2633.4",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 41,
    "category": "어린이공원",
    "name": "아랫마을어린이공원",
    "dong": "두산동",
    "address": "두산동 141",
    "fullAddress": "대구광역시 수성구 두산동 141",
    "area": "2641.7",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 42,
    "category": "어린이공원",
    "name": "끝동어린이공원",
    "dong": "두산동",
    "address": "두산동 155",
    "fullAddress": "대구광역시 수성구 두산동 155",
    "area": "2653.9",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 43,
    "category": "어린이공원",
    "name": "말뫼어린이공원",
    "dong": "두산동",
    "address": "두산동 741-7",
    "fullAddress": "대구광역시 수성구 두산동 741-7",
    "area": "1524",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 44,
    "category": "어린이공원",
    "name": "들안길꿈나무어린이공원",
    "dong": "두산동",
    "address": "두산동 31-7",
    "fullAddress": "대구광역시 수성구 두산동 31-7",
    "area": "2397",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 45,
    "category": "어린이공원",
    "name": "지산어린이공원",
    "dong": "지산동",
    "address": "지산1동 1013",
    "fullAddress": "대구광역시 수성구 지산1동 1013",
    "area": "3315",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 46,
    "category": "어린이공원",
    "name": "세각단어린이공원",
    "dong": "지산동",
    "address": "지산1동 1265",
    "fullAddress": "대구광역시 수성구 지산1동 1265",
    "area": "1924",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 47,
    "category": "어린이공원",
    "name": "무학어린이공원",
    "dong": "지산동",
    "address": "지산1동 1293",
    "fullAddress": "대구광역시 수성구 지산1동 1293",
    "area": "1525.8",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 48,
    "category": "어린이공원",
    "name": "지봉어린이공원",
    "dong": "지산동",
    "address": "지산1동 1287",
    "fullAddress": "대구광역시 수성구 지산1동 1287",
    "area": "2049",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 49,
    "category": "어린이공원",
    "name": "수동어린이공원",
    "dong": "지산동",
    "address": "지산1동 1280",
    "fullAddress": "대구광역시 수성구 지산1동 1280",
    "area": "1502.9",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 50,
    "category": "어린이공원",
    "name": "현대어린이공원",
    "dong": "지산동",
    "address": "지산2동1184-5",
    "fullAddress": "대구광역시 수성구 지산2동1184-5",
    "area": "2237.4",
    "facility": "조합놀이대 등"
  },
  {
    "seq": 51,
    "category": "어린이공원",
    "name": "거성어린이공원",
    "dong": "지산동",
    "address": "지산2동1211-2",
    "fullAddress": "대구광역시 수성구 지산2동1211-2",
    "area": "1643.8",
    "facility": "조합놀이대 외 5종"
  },
  {
    "seq": 52,
    "category": "어린이공원",
    "name": "에덴어린이공원",
    "dong": "지산동",
    "address": "지산2동1272-1",
    "fullAddress": "대구광역시 수성구 지산2동1272-1",
    "area": "6983.8",
    "facility": "조합놀이대 외 6종"
  },
  {
    "seq": 53,
    "category": "어린이공원",
    "name": "청산어린이공원",
    "dong": "지산동",
    "address": "지산2동 1247",
    "fullAddress": "대구광역시 수성구 지산2동 1247",
    "area": "1493.4",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 54,
    "category": "어린이공원",
    "name": "화성어린이공원",
    "dong": "지산동",
    "address": "지산2동 1256",
    "fullAddress": "대구광역시 수성구 지산2동 1256",
    "area": "1529.1",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 55,
    "category": "어린이공원",
    "name": "보성어린이공원",
    "dong": "범물동",
    "address": "범물1동1279-3",
    "fullAddress": "대구광역시 수성구 범물1동1279-3",
    "area": "1714.5",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 56,
    "category": "어린이공원",
    "name": "용지어린이공원",
    "dong": "범물동",
    "address": "범물1동1283-2",
    "fullAddress": "대구광역시 수성구 범물1동1283-2",
    "area": "1702.3",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 57,
    "category": "어린이공원",
    "name": "마산어린이공원",
    "dong": "범물동",
    "address": "범물1동 1288-2",
    "fullAddress": "대구광역시 수성구 범물1동 1288-2",
    "area": "1601.7",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 58,
    "category": "어린이공원",
    "name": "배수지어린이공원",
    "dong": "범물동",
    "address": "범물1동 1302",
    "fullAddress": "대구광역시 수성구 범물1동 1302",
    "area": "1510",
    "facility": "그네 외 2종"
  },
  {
    "seq": 59,
    "category": "어린이공원",
    "name": "중앙어린이공원",
    "dong": "범물동",
    "address": "범물2동 1348",
    "fullAddress": "대구광역시 수성구 범물2동 1348",
    "area": "2273.6",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 60,
    "category": "어린이공원",
    "name": "관계지어린이공원",
    "dong": "범물동",
    "address": "범물2동 1367",
    "fullAddress": "대구광역시 수성구 범물2동 1367",
    "area": "3315.9",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 61,
    "category": "어린이공원",
    "name": "범물어린이공원",
    "dong": "범물동",
    "address": "범물2동 1376",
    "fullAddress": "대구광역시 수성구 범물2동 1376",
    "area": "1588.9",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 62,
    "category": "어린이공원",
    "name": "삼주어린이공원",
    "dong": "범물동",
    "address": "범물2동1382-1",
    "fullAddress": "대구광역시 수성구 범물2동1382-1",
    "area": "4213.6000000000004",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 63,
    "category": "어린이공원",
    "name": "천마어린이공원",
    "dong": "고산동",
    "address": "고산1 신매579-1",
    "fullAddress": "대구광역시 수성구 고산1 신매579-1",
    "area": "1987.8",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 64,
    "category": "어린이공원",
    "name": "청솔어린이공원",
    "dong": "고산동",
    "address": "고산1 신매580-2",
    "fullAddress": "대구광역시 수성구 고산1 신매580-2",
    "area": "1857.4",
    "facility": "조합놀이대 외 5종"
  },
  {
    "seq": 65,
    "category": "어린이공원",
    "name": "신기어린이공원",
    "dong": "고산동",
    "address": "고산1 신매586",
    "fullAddress": "대구광역시 수성구 고산1 신매586",
    "area": "1451.4",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 66,
    "category": "어린이공원",
    "name": "동서어린이공원",
    "dong": "고산동",
    "address": "고산1 신매 594-2",
    "fullAddress": "대구광역시 수성구 고산1 신매 594-2",
    "area": "2059.4",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 67,
    "category": "어린이공원",
    "name": "두성어린이공원",
    "dong": "고산동",
    "address": "고산1 신매 595-2",
    "fullAddress": "대구광역시 수성구 고산1 신매 595-2",
    "area": "1939.2",
    "facility": "조합놀이대 외 1종"
  },
  {
    "seq": 68,
    "category": "어린이공원",
    "name": "두리어린이공원",
    "dong": "고산동",
    "address": "고산1 신매 598",
    "fullAddress": "대구광역시 수성구 고산1 신매 598",
    "area": "1710.9",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 69,
    "category": "어린이공원",
    "name": "고산어린이공원",
    "dong": "고산동",
    "address": "고산2 시지137-5",
    "fullAddress": "대구광역시 수성구 고산2 시지137-5",
    "area": "2015",
    "facility": "조합놀이대 외 5종"
  },
  {
    "seq": 70,
    "category": "어린이공원",
    "name": "달무리어린이공원",
    "dong": "고산동",
    "address": "고산2 시지487",
    "fullAddress": "대구광역시 수성구 고산2 시지487",
    "area": "1568.8",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 71,
    "category": "어린이공원",
    "name": "미진어린이공원",
    "dong": "고산동",
    "address": "고산2 시지498-1",
    "fullAddress": "대구광역시 수성구 고산2 시지498-1",
    "area": "2955.6",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 72,
    "category": "어린이공원",
    "name": "전원어린이공원",
    "dong": "고산동",
    "address": "고산2 시지509-1",
    "fullAddress": "대구광역시 수성구 고산2 시지509-1",
    "area": "2117.6999999999998",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 73,
    "category": "어린이공원",
    "name": "삼각어린이공원",
    "dong": "고산동",
    "address": "고산3 매호1329",
    "fullAddress": "대구광역시 수성구 고산3 매호1329",
    "area": "1702.9",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 74,
    "category": "어린이공원",
    "name": "나래어린이공원",
    "dong": "고산동",
    "address": "고산3 매호1333",
    "fullAddress": "대구광역시 수성구 고산3 매호1333",
    "area": "1582.8",
    "facility": "조합놀이대 외 2종"
  },
  {
    "seq": 75,
    "category": "어린이공원",
    "name": "누리어린이공원",
    "dong": "고산동",
    "address": "고산3 매호1330-2",
    "fullAddress": "대구광역시 수성구 고산3 매호1330-2",
    "area": "5671.8",
    "facility": "조합놀이대 외 4종"
  },
  {
    "seq": 76,
    "category": "어린이공원",
    "name": "사월어린이공원",
    "dong": "고산동",
    "address": "고산3 사월동646",
    "fullAddress": "대구광역시 수성구 고산3 사월동646",
    "area": "2560",
    "facility": "조합놀이대 외 5종"
  },
  {
    "seq": 77,
    "category": "어린이공원",
    "name": "도담어린이공원",
    "dong": "범어동",
    "address": "범어1동2293",
    "fullAddress": "대구광역시 수성구 범어1동2293",
    "area": "1806.6",
    "facility": "조합놀이대 외 3종"
  },
  {
    "seq": 78,
    "category": "어린이공원",
    "name": "용두어린이공원",
    "dong": "파동",
    "address": "파동 1012",
    "fullAddress": "대구광역시 수성구 파동 1012",
    "area": "1802",
    "facility": "조합놀이대 외 10종"
  },
  {
    "seq": 79,
    "category": "소공원",
    "name": "백합소공원",
    "dong": "상동",
    "address": "상동 59-5",
    "fullAddress": "대구광역시 수성구 상동 59-5",
    "area": "1441",
    "facility": "조합놀이대등15점"
  },
  {
    "seq": 80,
    "category": "소공원",
    "name": "상동소공원",
    "dong": "상동",
    "address": "상동 44",
    "fullAddress": "대구광역시 수성구 상동 44",
    "area": "2980.9",
    "facility": "조합놀이대등20점"
  },
  {
    "seq": 81,
    "category": "소공원",
    "name": "보람소공원",
    "dong": "두산동",
    "address": "두산동 43",
    "fullAddress": "대구광역시 수성구 두산동 43",
    "area": "1449.6",
    "facility": "파고라등15점"
  },
  {
    "seq": 82,
    "category": "소공원",
    "name": "맑음소공원",
    "dong": "두산동",
    "address": "두산동 149-11",
    "fullAddress": "대구광역시 수성구 두산동 149-11",
    "area": "4313.1000000000004",
    "facility": "조합놀이대등26점"
  },
  {
    "seq": 83,
    "category": "소공원",
    "name": "상동제1소공원",
    "dong": "상동",
    "address": "상동 555-1",
    "fullAddress": "대구광역시 수성구 상동 555-1",
    "area": "1270",
    "facility": "운동기구 등 6점"
  },
  {
    "seq": 84,
    "category": "소공원",
    "name": "상동제2소공원",
    "dong": "상동",
    "address": "상동 555-2",
    "fullAddress": "대구광역시 수성구 상동 555-2",
    "area": "1170",
    "facility": "평의자 등"
  },
  {
    "seq": 85,
    "category": "소공원",
    "name": "중동소공원",
    "dong": "중동",
    "address": "중동 532-263 (중동 643)",
    "fullAddress": "대구광역시 수성구 중동 532-263 (중동 643)",
    "area": "877",
    "facility": "평의자 등"
  },
  {
    "seq": 86,
    "category": "소공원",
    "name": "용지소공원",
    "dong": "범물동",
    "address": "범물동 790-2",
    "fullAddress": "대구광역시 수성구 범물동 790-2",
    "area": "1325",
    "facility": "평의자 등"
  },
  {
    "seq": 87,
    "category": "소공원",
    "name": "파동소공원",
    "dong": "파동",
    "address": "파동 1006",
    "fullAddress": "대구광역시 수성구 파동 1006",
    "area": "1058",
    "facility": "평의자 등"
  },
  {
    "seq": 88,
    "category": "소공원",
    "name": "사월소공원",
    "dong": "고산동",
    "address": "욱수동 19-2",
    "fullAddress": "대구광역시 수성구 욱수동 19-2",
    "area": "192",
    "facility": "파고라 등 3종"
  },
  {
    "seq": 89,
    "category": "수성유원지",
    "name": "1",
    "dong": "두산동",
    "address": "",
    "fullAddress": "대구광역시 수성구 두산동",
    "area": "",
    "facility": ""
  },
  {
    "seq": 90,
    "category": "기타공원",
    "name": "수성생활체육공원",
    "dong": "지산동",
    "address": "지산동",
    "fullAddress": "대구광역시 수성구 지산동",
    "area": "",
    "facility": ""
  },
  {
    "seq": 91,
    "category": "기타공원",
    "name": "무학산공원",
    "dong": "지산동",
    "address": "지산동",
    "fullAddress": "대구광역시 수성구 지산동",
    "area": "",
    "facility": ""
  },
  {
    "seq": 92,
    "category": "기타공원",
    "name": "두건골공원",
    "dong": "만촌동",
    "address": "만촌동 725-1",
    "fullAddress": "대구광역시 수성구 만촌동 725-1",
    "area": "",
    "facility": ""
  }
];
