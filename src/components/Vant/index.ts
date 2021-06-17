import { App } from 'vue'
import {
  Button,
  List,
  PullRefresh,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Switch,
  DatetimePicker,
  PasswordInput,
  NumberKeyboard,
  CountDown,
  Toast
} from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [
  Button,
  List,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  VanImage,
  PullRefresh,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Switch,
  DatetimePicker,
  PasswordInput,
  NumberKeyboard,
  CountDown,
  Toast
]

export default {
  install: (vm: App) => {
    plugins.forEach(item => {
      vm.component(item.name, item)
    })
  }
}
