import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Logo from '@components/logo'
import { AtDivider } from 'taro-ui'
import logList from './log-list'
import slogan from '@utils/slogan.js'
import './log.scss'

export default class Log extends Taro.Component {
  config = {
    navigationBarTitleText: '更新日志'
  }

  onShareAppMessage() {
    return {
      title: slogan
    }
  }

  render() {
    return (
      <View className='log'>
        <Logo />
        {logList.map(item => (
          <View className='container' key={item.version}>
            <AtDivider content={item.date} />
            <View>版本：{item.version}</View>
            <View className='content'>更新内容：{item.content}</View>
          </View>
        ))}
      </View>
    )
  }
}
