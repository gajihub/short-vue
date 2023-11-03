<template>
  <flicking
    :options="{ horizontal: false, autoResize: true}"
    :class="[$style.sliderWrap ,  isMobile ? $style.mobilesliderWrap : '', isCommentCheck ? $style.comment : '']">
  <div v-for="(item) in videoOptions.sources" :key="item.src" :class="$style.Wrap">
    <PlayerWrap>
      <!-- 플레이어 영역 -->
      <template #player>
        <video-player  :options="{ autoplay: true, controls: true, muted: true, width: '100%', height: '100%', sources: [{src: item.src, type:'video/mp4' }]}"></video-player>
      </template>
      <!-- //플레이어 영역 -->
      <!-- 클릭 영역 -->
      <template #action>
        <IconBoxWrap :checkIcon="isCheckIcon" @click="clickIcon"></IconBoxWrap>
        <div :class="$style.comment">
          <IconBox @click="clickComment">
            <template #icon><CommentIcon></CommentIcon></template>
            <template #text>345</template>
          </IconBox>
        </div>
        <More></More>
      </template>
      <!-- //클릭 영역 -->
    </PlayerWrap>
    <!-- 댓글 입력 영역-->
    <CommentWrap :isShow="isCommentCheck" @close="clickClose"></CommentWrap>
    <!-- //댓글 입력 영역-->
  </div>
  </flicking>
</template>

<script>
import Vue from 'vue'
import MobileDetect from 'mobile-detect'
import VideoPlayer from './videojsWrap.vue'
import PlayerWrap from './PlayerWrap.vue'
import IconBoxWrap from './IconBoxWrap.vue'
import CommentWrap from './CommentWrap.vue'
import CommentIcon from '@components/comments/icon/CommentIcon.vue'
import IconBox from '@components/actionIconBox/IconBox.vue'
import More from '@components/actionIconBox/More.vue'
import VueFlicking from '@egjs/vue-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'

Vue.use(VueFlicking)



export default {
  name: 'container',
  components: {
    PlayerWrap,
    IconBoxWrap,
    More,
    VueFlicking,
    CommentIcon,
    IconBox,
    CommentWrap,
    VideoPlayer
  },
  data () {
    return {
      plugins: [new AutoPlay()],
      isMobile: false,
      isCheckIcon: false,
      videoOptions:{
        autoplay: true,
        controls: true,
        sources: [{
        src: 'video/video01.mp4',
        type: 'video/mp4'
      }, {
        src: 'video/video02.mp4',
        type: 'video/mp4'
      }, {
        src: 'video/video03.mp4',
        type: 'video/mp4'
      }, {
        src: 'video/video04.mp4',
        type: 'video/mp4'
      }],
      },
      isCommentCheck: false
    }
  },
  mounted () {
    const md = new MobileDetect(window.navigator.userAgent)
    if (md.mobile()) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  methods: {
    clickIcon () {
      this.isCheckIcon = true
    },
    clickComment () {
      if (!this.isCommentCheck) {
        this.isCommentCheck = true
      } else {
        return;
      }
    },
    clickClose(emitClose){
      if(emitClose){
        this.isCommentCheck = false
      }else{
        this.isCommentCheck = true
      }
    }
  }
}
</script>

<style  module>
@import '../assets/scss/pages/container.module.scss';
</style>
