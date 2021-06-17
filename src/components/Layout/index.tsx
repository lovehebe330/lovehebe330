import { defineComponent } from 'vue'
import Tabbar from '../Tabbar'
import { useRoute } from 'vue-router'
import { ConfigProvider } from 'vant'

export default defineComponent({
  setup() {
    const route = useRoute()

    const themeVars = {
      // rateIconFullColor: '#07c160',
      // sliderBarHeight: '4px',
      // sliderButtonWidth: '20px',
      // sliderButtonHeight: '20px',
      // sliderActiveBackgroundColor: '#07c160',
      // buttonPrimaryBorderColor: '#07c160',
      // buttonDefaultHeight: '44px',
      // buttonPrimaryBackgroundColor: '#07c160'
    }

    return () => (
      <ConfigProvider theme-vars={themeVars}>
        <div>
          <router-view />
          {route.meta.showTab && <Tabbar />}
        </div>
      </ConfigProvider>
    )
  }
})
