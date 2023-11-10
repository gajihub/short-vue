<template>
  <flicking
    ref="flicking"
    @changed="flickingChanged"
    @select="flickingHoldStart"
    :options="{ align: isMobile ? 'prev' : 'center', horizontal: false, autoResize: true, changeOnHold: false, circular: false, moveType: 'strict' }"
    :class="[$style.sliderWrap, isMobile ? $style.mobilesliderWrap : '', isCommentCheck ? $style.comment : '']"
  >
    <div v-for="(item, i) in videoList" :key="i" :class="$style.Wrap">
      <PlayerWrap>
        <!-- 플레이어 영역 -->
        <template #player>
          <video-player ref="videoPlayer" :options="{ autoplay: false, controls: true, muted: true, width: '100%', height: '100%', sources: [{src: item.src, type:'video/mp4' }]}"></video-player>
        </template>
        <!-- //플레이어 영역 -->
        <!-- 클릭 영역 -->
        <template #action>
          <IconBoxWrap :checkIcon="isCheckIcon" @click="clickIcon"></IconBoxWrap>
          <CommentAction @click="clickComment(i)" :commentNum="(i+1)"></CommentAction>
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

import videoList from '@data/video.json'

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
      isMobile: false,
      isCheckIcon: false,
      videoList: videoList,
      videoOptions:{
        controls: true,
        sources: videoList
      },
      isCommentCheck: false,
      commentNum: null,
      timeout:null,
      isPlaytime: null,
      isemitClose: false,
      isHoldEnabled: true,
    }
  },
  mounted () {
    const md = this.$mobileDetect.mobile()
    if (md) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }

    //video
    this.timeout = setTimeout(() => {
      this.$refs.videoPlayer[0].$el.play()
    }, 100);

   
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
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
    clickClose(emitClose, num){
      const fnum = this.commentNum - 1

      this.isemitClose = emitClose
   
      if(this.isemitClose){
        this.isCommentCheck = false
        this.$refs.flicking.$children[fnum].$parent.enableInput()
       
      }
    },
    flickingHoldStart(e) {
      //댓글창이 있는 경우 이동 안됨
      if(this.isHoldEnabled && !this.isCommentCheck){
        e.currentTarget.disableInput()
      }
      
    },
    flickingChanged(e){
      const vnum = e.currentTarget.index
      const vCurrent = e.currentTarget.visiblePanels
      vCurrent.forEach(i => {
        this.$refs.videoPlayer[i.index].$el.pause()
      });
     
      this.$refs.videoPlayer[vnum].$el.play(0)
    },
   
  }
}

</script>

<style  module>
@import '../assets/scss/pages/container.module.scss';
</style>
