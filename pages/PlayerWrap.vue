<template>
  <div :class="[$style.playerWrap, isMobile ? $style.mobile : '']">
    <div :class="$style.player">
       <slot name="player" ></slot>
    </div>
    <div :class="$style.action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
export default {
  name: 'playerWrap',
  data () {
    return {
      isMobile: false
    }
  },
  mounted () {
    const md = new MobileDetect(window.navigator.userAgent)
    if (md.mobile()) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  }
}
</script>

<style  module>
@import '../assets/scss/pages/playerWrap.module.scss';
</style>
