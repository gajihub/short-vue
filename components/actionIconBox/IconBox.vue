<template>
  <div :class="[$style.iconBox, isMobile ? $style.iconBoxMobile : '', checkin ? $style.check : '']" @click="$emit('click')">
    <div :class="$style.icon"><slot name="icon"></slot></div>
    <div :class="$style.text" v-if="$slots.text">
    <slot name="text"></slot>
  </div>
  </div>
</template>

<script>
export default {
  name: 'iconBox',
  data () {
    return {
      isMobile: false,
      checkValue: this.checkin
    }
  },
  props: {
    checkin: Boolean
  },
  mounted () {
    const md = this.$mobileDetect.mobile()
    if (md) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  watch: {
    checkin () {
      this.checkValue = this.checkin
    }
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/IconBox.module.scss';
</style>
