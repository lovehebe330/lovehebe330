<template>
  <Logo />
  <van-form class="form" @submit="onSubmit">
    <van-field
      v-model="username"
      type="number"
      name="username"
      maxlength="11"
      clearable
      label="+86"
      placeholder="请输入手机号码"
      :rules="[{ pattern, message: '请输入正确手机号码' }]"
    />

    <!-- <div class="forget">
      <router-link to="/forget" custom v-slot="{ navigate }">
        <span @click="navigate" role="link">忘记密码</span>
      </router-link>
    </div> -->
    <div style="margin: 16px">
      <van-button
        round
        block
        type="primary"
        native-type="submit"
        :loading="loading"
      >
        获取验证码
      </van-button>
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </div>
  </van-form>
</template>

<script lang="ts">
import Logo from './components/Logo.vue'
import { defineComponent, ref } from 'vue'
import { useSigninEffect } from './hooks/useSigninEffect'

export default defineComponent({
  name: 'Signin',
  components: {
    Logo
  },

  setup() {
    const { username, password, loading, onSubmit } = useSigninEffect()
    console.log(process.env.NODE_ENV)

    const pattern = /^[1][3,4,5,7,8,9][0-9]{9}$/

    const value = ref('123')
    const showKeyboard = ref(true)

    return {
      value,
      showKeyboard,
      username,
      password,
      loading,
      pattern,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.form {
  padding: 24px;
  margin-top: 50px;
}

.forget {
  box-sizing: border-box;
  color: #323233b9;
  font-size: 26px;
  text-align: right;
  padding-right: 34px;
  padding-top: 20px;
}
</style>

<style lang="scss">
.van-cell__title {
  flex: none;
}
</style>
