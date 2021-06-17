<template>
  <div style="background: #eee; height: 100%">
    <van-nav-bar
      title="用户注册"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <van-password-input
      ref="stateDom"
      style="margin: 10px auto; width: 75%"
      :length="4"
      :value="verifyValue"
      :mask="false"
      :gutter="26"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <van-count-down
      ref="countDown"
      :time="30 * 1000"
      format="ss"
      @finish="onCountDownFinish"
      v-if="showCountdown"
    >
      <template #default="timeData">
        <div class="block">{{ timeData.seconds }} s</div>
      </template>
    </van-count-down>
    <div
      v-else
      class="block"
      style="margin-top: 10px"
      @click="onCountDownStart"
    >
      重新获取
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="verifyValue"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onMounted, ref } from 'vue'
import { userVerifyEffect } from './hooks/userVerifyEffect'

export default defineComponent({
  name: 'Verify',
  setup() {
    const {
      verifyValue,
      showKeyboard,
      showCountdown,
      onCountDownStart,
      onCountDownFinish
    } = userVerifyEffect()

    const stateDom = ref(null)
    // let nodes: string | any[]
    const inputLength = ref(0)
    watch(verifyValue, newVal => {
      console.log(newVal.length)
      inputLength.value = newVal.length
      // if (newVal.length > 4) {
      //   inputLength.value = 4
      //   console.log(inputLength.value)
      // }
      // if (newVal.length < 4) {
      //   for (let i = 0; i < nodes.length; i++) {
      //     nodes[i].style.backgroundColor = 'white'
      //   }
      //   nodes[newVal.length].style.backgroundColor = 'red'
      // }
    })

    onMounted(() => {
      // nodes = stateDom.value.$el.children[0].children
      // console.log(nodes)
      // console.log(document.querySelectorAll('.van-password-input__item'))
    })

    return {
      stateDom,
      verifyValue,
      inputLength,
      showKeyboard,
      showCountdown,
      onCountDownStart,
      onCountDownFinish
    }
  }
})
</script>
<style scoped>
.block {
  color: #fff;
  text-align: center;
  color: #ee0a24;
}
</style>
