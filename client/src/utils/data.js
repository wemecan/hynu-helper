// 上课时间
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
// 校历
const schoolWeek = [[{day:"02/17"},{day:"02/18"},{day:"02/19"},{day:"02/20"},{day:"02/21"},{day:"02/22"},{day:"02/23"}],[{day:"02/24"},{day:"02/25"},{day:"02/26"},{day:"02/27"},{day:"02/28"},{day:"02/29"},{day:"03/01"}],[{day:"03/02"},{day:"03/03"},{day:"03/04"},{day:"03/05"},{day:"03/06"},{day:"03/07"},{day:"03/08"}],[{day:"03/09"},{day:"03/10"},{day:"03/11"},{day:"03/12"},{day:"03/13"},{day:"03/14"},{day:"03/15"}],[{day:"03/16"},{day:"03/17"},{day:"03/18"},{day:"03/19"},{day:"03/20"},{day:"03/21"},{day:"03/22"}],[{day:"03/23"},{day:"03/24"},{day:"03/25"},{day:"03/26"},{day:"03/27"},{day:"03/28"},{day:"03/29"}],[{day:"03/30"},{day:"03/31"},{day:"04/01"},{day:"04/02"},{day:"04/03"},{day:"04/04"},{day:"04/05"}],[{day:"04/06"},{day:"04/07"},{day:"04/08"},{day:"04/09"},{day:"04/10"},{day:"04/11"},{day:"04/12"}],[{day:"04/13"},{day:"04/14"},{day:"04/15"},{day:"04/16"},{day:"04/17"},{day:"04/18"},{day:"04/19"}],[{day:"04/20"},{day:"04/21"},{day:"04/22"},{day:"04/23"},{day:"04/24"},{day:"04/25"},{day:"04/26"}],[{day:"04/27"},{day:"04/28"},{day:"04/29"},{day:"04/30"},{day:"05/01"},{day:"05/02"},{day:"05/03"}],[{day:"05/04"},{day:"05/05"},{day:"05/06"},{day:"05/07"},{day:"05/08"},{day:"05/09"},{day:"05/10"}],[{day:"05/11"},{day:"05/12"},{day:"05/13"},{day:"05/14"},{day:"05/15"},{day:"05/16"},{day:"05/17"}],[{day:"05/18"},{day:"05/19"},{day:"05/20"},{day:"05/21"},{day:"05/22"},{day:"05/23"},{day:"05/24"}],[{day:"05/25"},{day:"05/26"},{day:"05/27"},{day:"05/28"},{day:"05/29"},{day:"05/30"},{day:"05/31"}],[{day:"06/01"},{day:"06/02"},{day:"06/03"},{day:"06/04"},{day:"06/05"},{day:"06/06"},{day:"06/07"}],[{day:"06/08"},{day:"06/09"},{day:"06/10"},{day:"06/11"},{day:"06/12"},{day:"06/13"},{day:"06/14"}],[{day:"06/15"},{day:"06/16"},{day:"06/17"},{day:"06/18"},{day:"06/19"},{day:"06/20"},{day:"06/21"}],[{day:"06/22"},{day:"06/23"},{day:"06/24"},{day:"06/25"},{day:"06/26"},{day:"06/27"},{day:"06/28"}],[{day:"06/29"},{day:"06/30"},{day:"07/01"},{day:"07/02"},{day:"07/03"},{day:"07/04"},{day:"07/05"}]]

const day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

export { classTime, schoolWeek, markTime, day }
