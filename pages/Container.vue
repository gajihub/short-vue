<template>
  <flicking
    :options="{ horizontal: false, autoResize: true}"
    :class="[$style.sliderWrap ,  isMobile ? $style.mobilesliderWrap : '', isCommentCheck ? $style.comment : '']">
  <div v-for="(item, i) in videoOptions.sources" :key="item.src" :class="$style.Wrap">
    <PlayerWrap>
      <!-- 플레이어 영역 -->
      <template #player>
        <video-player  :options="{ autoplay: true, controls: true, muted: true, width: '100%', height: '100%', sources: [{src: item.src, type:'video/mp4' }]}"></video-player>
      </template>
      <!-- //플레이어 영역 -->
      <!-- 클릭 영역 -->
      <template #action>
        <IconBoxWrap :checkIcon="isCheckIcon" @click="clickIcon"></IconBoxWrap>
        <CommentAction @click="clickComment(i)"></CommentAction>
        <More></More>
      </template>
      <!-- //클릭 영역 -->
    </PlayerWrap>
    <!-- 댓글 입력 영역-->
    <CommentWrap :isNum="(i+1)" v-show="item.id == commentNum ? isCommentCheck : ''" @close="clickClose"></CommentWrap>
    <!-- //댓글 입력 영역-->
  </div>
  </flicking>
</template>

<script>
import Vue from 'vue'
import VideoPlayer from './videojsWrap.vue'
import PlayerWrap from './PlayerWrap.vue'
import IconBoxWrap from './IconBoxWrap.vue'
import CommentWrap from './CommentWrap.vue'
import CommentAction from '@components/comments/comment/Comment.vue'
import CommentIcon from '@components/comments/icon/CommentIcon.vue'
import IconBox from '@components/actionIconBox/IconBox.vue'
import More from '@components/actionIconBox/More.vue'
import VueFlicking from '@egjs/vue-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'

import videoList from '../data/video.json'

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
    VideoPlayer,
    CommentAction
  },
  data () {
    return {
      plugins: [new AutoPlay()],
      isMobile: false,
      isCheckIcon: false,
      videoList: videoList,
      videoOptions:{
        autoplay: true,
        controls: true,
        sources: videoList
      },
      isCommentCheck: false,
      commentNum: null,
    }
  },
  mounted () {
    const md = this.$mobileDetect.mobile()
    if (md) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  methods: {
    clickIcon () {
      this.isCheckIcon = true
    },
    clickComment (num) {
      if (!this.isCommentCheck ) {
        this.isCommentCheck = true
        this.commentNum = (num + 1)
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
