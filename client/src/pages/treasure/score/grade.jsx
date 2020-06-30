import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ajax from '@utils/ajax'
import {
  set as setGlobalData,
  get as getGlobalData
} from '@utils/global_data.js'
import './grade.scss'

export default class Grade extends Component {
  config = {
    navigationBarTitleText: '考级成绩',
  }

  state = {
    grade: []
  }

  componentWillMount() {
    const grade_score = getGlobalData('grade_score')
    if (grade_score) {
      this.setState({ grade: grade_score })
    } else {
      const data = {
        func: 'getGrade',
        data: {
          sessionid: getGlobalData('sid')
        }
      }
      ajax('base', data).then(({ grade }) => {
        this.setState({ grade })
        setGlobalData('grade_score', grade)
      })
    }
  }

  render() {
    const { grade } = this.state

    return (
      <View className='grade'>
        <View className='tip c9'>
          数据完全从教务处-考务管理中获取，仅供参考
        </View>
        <View className='at-row'>
          <View className='at-col at-col-5'>课程等级</View>
          <View className='at-col'>总成绩</View>
          <View className='at-col at-col-4'>考级时间</View>
        </View>
        {grade.map(item => (
          <View className='at-row row' key={item.time}>
            <View className='at-col at-col-5 break'>{item.grade}</View>
            <View className='at-col'>{item.score}</View>
            <View className='at-col at-col-4'>{item.time}</View>
          </View>
        ))}
        {grade.length == 0 && <View className='tac'>没有数据</View>}
      </View>
    )
  }
}
