import { ref } from 'vue'

export const userVerifyEffect = () => {
    const verifyValue = ref('12') //验证码输入框值
    const showKeyboard = ref(false) // 是否显示键盘
    const showCountdown = ref(true) // 是否显示倒计时

    const onCountDownStart = () => (showCountdown.value = true)
    const onCountDownFinish = () => (showCountdown.value = false)

    return {
        verifyValue,
        showKeyboard,
        showCountdown,
        onCountDownStart,
        onCountDownFinish
    }
}
