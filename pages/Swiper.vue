<template>
 <flicking
    :options="{ horizontal: false }"
    :class="$style.sliderWrap"
    :plugins="plugins"
  >
    <div :class="$style.slide"><video src="/video/video01.mp4" width="100%" height="100%" autoplay></video></div>
    <div :class="$style.slide"><video src="/video/video02.mp4" width="100%" height="100%" autoplay></video></div>
    <div :class="$style.slide"><video src="/video/video03.mp4" width="100%" height="100%" autoplay></video></div>
    <div :class="$style.slide"><video src="/video/video04.mp4" width="100%" height="100%" autoplay></video></div>
    <div :class="$style.slide"><video src="/video/video05.mp4" width="100%" height="100%" autoplay></video></div>
    <div :class="$style.slide"><video src="/video/video06.mp4" width="100%" height="100%" autoplay></video></div>
  </flicking>
</template>
<script>
import Vue from 'vue'
import VueFlicking from '@egjs/vue-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'
import '@egjs/vue-flicking/dist/flicking.css'
Vue.use(VueFlicking)

export default {
  name: 'container',
  components: {
    VueFlicking
  },
  data () {
    return {
      plugins: [new AutoPlay()]
    }
  }
}
</script>
<style  module>
@import '../assets/scss/pages/swiper.module.scss';
</style>
