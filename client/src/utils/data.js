const todayWeek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const classTime = [
  { begin: '08:30', end: '09:15' },
  { begin: '09:25', end: '10:10' },
  { begin: '10:30', end: '11:15' },
  { begin: '11:25', end: '12:10' },
  { begin: '14:30', end: '15:15' },
  { begin: '15:25', end: '16:10' },
  { begin: '16:30', end: '17:15' },
  { begin: '17:25', end: '18:10' },
  { begin: '19:30', end: '20:15' },
  { begin: '20:25', end: '21:10' }
]
// 将上课起止时间转为分钟单位
const markTime = [510, 565, 630, 685, 870, 925, 990, 1045, 1170, 1225, 1270]

const schoolWeek = [
  [
    { day: '09/02' },
    { day: '09/03' },
    { day: '09/04' },
    { day: '09/05' },
    { day: '09/06' },
    { day: '09/07' },
    { day: '09/08' }
  ],
  [
    { day: '09/09' },
    { day: '09/10' },
    { day: '09/11' },
    { day: '09/12' },
    { day: '09/13' },
    { day: '09/14' },
    { day: '09/15' }
  ],
  [
    { day: '09/16' },
    { day: '09/17' },
    { day: '09/18' },
    { day: '09/19' },
    { day: '09/20' },
    { day: '09/21' },
    { day: '09/22' }
  ],
  [
    { day: '09/23' },
    { day: '09/24' },
    { day: '09/25' },
    { day: '09/26' },
    { day: '09/27' },
    { day: '09/28' },
    { day: '09/29' }
  ],
  [
    { day: '09/30' },
    { day: '10/01' },
    { day: '10/02' },
    { day: '10/03' },
    { day: '10/04' },
    { day: '10/05' },
    { day: '10/06' }
  ],
  [
    { day: '10/07' },
    { day: '10/08' },
    { day: '10/09' },
    { day: '10/10' },
    { day: '10/11' },
    { day: '10/12' },
    { day: '10/13' }
  ],
  [
    { day: '10/14' },
    { day: '10/15' },
    { day: '10/16' },
    { day: '10/17' },
    { day: '10/18' },
    { day: '10/19' },
    { day: '10/20' }
  ],
  [
    { day: '10/21' },
    { day: '10/22' },
    { day: '10/23' },
    { day: '10/24' },
    { day: '10/25' },
    { day: '10/26' },
    { day: '10/27' }
  ],
  [
    { day: '10/28' },
    { day: '10/29' },
    { day: '10/30' },
    { day: '10/31' },
    { day: '11/01' },
    { day: '11/02' },
    { day: '11/03' }
  ],
  [
    { day: '11/04' },
    { day: '11/05' },
    { day: '11/06' },
    { day: '11/07' },
    { day: '11/08' },
    { day: '11/09' },
    { day: '11/10' }
  ],
  [
    { day: '11/11' },
    { day: '11/12' },
    { day: '11/13' },
    { day: '11/14' },
    { day: '11/15' },
    { day: '11/16' },
    { day: '11/17' }
  ],
  [
    { day: '11/18' },
    { day: '11/19' },
    { day: '11/20' },
    { day: '11/21' },
    { day: '11/22' },
    { day: '11/23' },
    { day: '11/24' }
  ],
  [
    { day: '11/25' },
    { day: '11/26' },
    { day: '11/27' },
    { day: '11/28' },
    { day: '11/29' },
    { day: '11/30' },
    { day: '12/01' }
  ],
  [
    { day: '12/02' },
    { day: '12/03' },
    { day: '12/04' },
    { day: '12/05' },
    { day: '12/06' },
    { day: '12/07' },
    { day: '12/08' }
  ],
  [
    { day: '12/09' },
    { day: '12/10' },
    { day: '12/11' },
    { day: '12/12' },
    { day: '12/13' },
    { day: '12/14' },
    { day: '12/15' }
  ],
  [
    { day: '12/16' },
    { day: '12/17' },
    { day: '12/18' },
    { day: '12/19' },
    { day: '12/20' },
    { day: '12/21' },
    { day: '12/22' }
  ],
  [
    { day: '12/23' },
    { day: '12/24' },
    { day: '12/25' },
    { day: '12/26' },
    { day: '12/27' },
    { day: '12/28' },
    { day: '12/29' }
  ],
  [
    { day: '12/30' },
    { day: '12/31' },
    { day: '01/01' },
    { day: '01/02' },
    { day: '01/03' },
    { day: '01/04' },
    { day: '01/05' }
  ],
  [
    { day: '01/06' },
    { day: '01/07' },
    { day: '01/08' },
    { day: '01/09' },
    { day: '01/10' },
    { day: '01/11' },
    { day: '01/12' }
  ],
  [
    { day: '01/13' },
    { day: '01/14' },
    { day: '01/15' },
    { day: '01/16' },
    { day: '01/17' },
    { day: '01/18' },
    { day: '01/19' }
  ]
]

const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const myClass = [{ "name": "离散数学", "place": "东理科楼南105", "week": [3, 5, 7, 9, 11, 13, 15, 17], "section": "0910", "teacher": "邓义华", "day": "1" }, { "name": "线性代数", "place": "东计算机楼210", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "section": "0102", "teacher": "彭白玉", "day": "2" }, { "name": "离散数学", "place": "东理科楼南105", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "section": "0102", "teacher": "邓义华", "day": "3" }, { "name": "大学物理I", "place": "东计算机楼210", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "section": "0102", "teacher": "张军民", "day": "4" }, { "name": "普通话", "place": "东计算机楼207", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "section": "0102", "teacher": "向丹", "day": "5" }, { "name": "美术鉴赏", "place": "东美术楼109", "week": [8, 9, 10, 11, 12], "section": "020304", "teacher": "陈丽莉", "day": "7" }, { "name": "中国近现代史纲要", "place": "东计算机楼208", "week": [17, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "section": "0304", "teacher": "刘启明", "day": "1" }, { "name": "微积分（下）", "place": "东计算机楼208", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "section": "0304", "teacher": "曾云辉", "day": "2" }, { "name": "面向对象程序设计", "place": "东计算机楼210", "week": [18, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16], "section": "0304", "teacher": "李康满", "day": "3" }, { "name": "微积分（下）", "place": "东计算机楼208", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "section": "0304", "teacher": "曾云辉", "day": "4" }, { "name": "大学英语II", "place": "东数学楼203", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "section": "0304", "teacher": "王莲", "day": "5" }, { "name": "面向对象程序设计 ,大学物理I", "place": "东计算机楼210", "week": [17, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "section": "0506", "teacher": "李康满", "day": "2" }, { "name": "面向对象程序设计", "place": "东计算机楼418", "week": [18, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16], "section": "0506", "teacher": "李康满", "day": "3" }, { "name": "线性代数", "place": "东计算机楼210", "week": [2, 4, 6, 8, 10, 12, 14, 16], "section": "0506", "teacher": "彭白玉", "day": "4" }, { "name": "大学体育II", "place": "暂无教室", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "section": "0506", "teacher": "暂无教师", "day": "5" }, { "name": "面向对象程序设计", "place": "东计算机楼513", "week": [17], "section": "0708", "teacher": "李康满", "day": "2" }, { "name": "大学英语II", "place": "东理科楼南406", "week": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "section": "0708", "teacher": "王莲", "day": "3" }, { "name": "准职业人导向训练（一）", "place": "东计算机楼205", "week": [2, 4, 6, 8, 10, 12, 14, 16], "section": "0708", "teacher": "罗素媛", "day": "4" }, { "name": "军事理论课", "place": "东计算机楼211", "week": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "section": "0708", "teacher": "彭雁", "day": "5" }]

const designRes = [
	{
		name: '基于Java的网上购物系统的设计与实现',
		college: '马克思主义学院',
		teacher: '徐峰',
		tTitle: '助教',
		limit: '1',
		selected: '0',
		id: '99BD298070BD49F29EA2E489CD73D86D'
	},
	{
		name: '基于队列服务的打印机器人实现',
		college: '中兴通讯信息工程学院',
		teacher: '陈溪辉',
		tTitle: '副教授',
		limit: '2',
		selected: '2',
		id: '6EF391BCA89B43F3B2EAD3EC7F73E6E7'
	},
	{
		name: '基于asp.net的高校科研项目申报评审软件的实现',
		college: '中兴通讯信息工程学院',
		teacher: '陈溪辉',
		tTitle: '副教授',
		limit: '2',
		selected: '2',
		id: '1A75E9467CA049A490E67C3199424F05'
	},
	{
		name: '基于NLP的中文文本情感分析平台的实现',
		college: '中兴通讯信息工程学院',
		teacher: '陈溪辉',
		tTitle: '副教授',
		limit: '1',
		selected: '1',
		id: 'A062B97FC50B45B49DE1B82490054B52'
	},
	{
		name: '基于JAVAWEB的同城洗衣管理系统的设计与实现',
		college: '中兴通讯信息工程学院',
		teacher: '彭亚云',
		tTitle: ' ',
		limit: '1',
		selected: '1',
		id: '311A9E0AE9E54D17B43D723D595A1920'
	},
	{
		name: '基于Android的寝室小助手APP的设计与实现',
		college: '中兴通讯信息工程学院',
		teacher: '彭亚云',
		tTitle: ' ',
		limit: '1',
		selected: '1',
		id: 'D0FF6FBD33834A2EB01D6329304E588D'
	},
	{
		name: '基于GridviewHelper的多维数据呈现方法与实现研究',
		college: '中兴通讯信息工程学院',
		teacher: '陈溪辉',
		tTitle: '副教授',
		limit: '1',
		selected: '1',
		id: '788E77AA602E421F9469BDE35D911C0E'
	},
	{
		name: '学生公寓报修管理系统的设计与实现',
		college: '计算机科学与技术学院',
		teacher: '梁小满',
		tTitle: '教授',
		limit: '1',
		selected: '1',
		id: '2EB0DA74C2AC4A768B524D46E192DC74'
	},
	{
		name: '基于H5的休闲游戏的设计与实现',
		college: '计算机科学与技术学院',
		teacher: '刘新宇',
		tTitle: ' ',
		limit: '1',
		selected: '1',
		id: '744F17D80B414D3692A48D41E3274DF9'
	},
	{
		name: '交互式旅游平台APP研究与实现',
		college: '计算机科学与技术学院',
		teacher: '李浪',
		tTitle: '教授',
		limit: '1',
		selected: '1',
		id: '6736DD47E03F4E1BADE4773CA1D778DA'
	}
]

export { todayWeek, classTime, schoolWeek, myClass, markTime, day,designRes }