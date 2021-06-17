<template>
  <div>
    <div>333 {{ username }} {{ b }}</div>
    <!-- <van-rate v-model="value" /> -->
    <van-switch v-model="checked" />
    <!-- <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="自定义列排序"
      :columns-order="['month', 'day', 'year']"
      :formatter="formatter"
    /> -->
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref, toRefs, getCurrentInstance } from 'vue'
import moment from 'moment'
export default {
  setup(props, context) {
    console.log(window.innerWidth)
    console.log(props)
    console.log(context)
    console.log(getCurrentInstance())
    const router = useRouter()
    const route = useRoute()
    console.log(router)
    console.log(route)
    const form = reactive({
      username: 'chenchen',
      password: '',
      confirmPassword: '',
      captcha: '',
      captchaSvg: null
    })
    form.username = 'eee'
    console.log(form)
    const a = 555
    console.log(a)
    const b = ref(a)
    console.log(b)
    b.value = 5
    console.log(b)
    const form1 = toRefs(form)
    console.log(form)
    console.log(form1)
    const value = ref(3)
    const checked = ref(true)

    const currentDate = ref(new Date())
    console.log(moment(currentDate).format('YYYY-MM-DD HH:mm:ss'))
    const formatter = (type, val) => {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      return val
    }
    console.log(formatter())
    return {
      ...form,
      // ...form1,
      b,
      value,
      checked,
      currentDate,
      formatter
    }
  }
}
</script>
