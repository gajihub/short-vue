<template>
    <div :class="[$style.commentWrap, checkShow ? $style.isBlock : '', isMobile ? $style.mCommentWrap : '', isClose ? $style.close : '']">
      <transition name="fade">
        <CommentList @close="clickClose"></CommentList>
      </transition>
    </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import CommentList from '@components/comments/comment/CommentList.vue'

export default {
  name: 'commentWrap',
  components: {
    CommentList
  },
  props: {
    isShow: Boolean
  },
  data () {
    return {
      checkShow: this.isShow,
      isMobile: false,
      isClose: false
    }
  },
  watch: {
    isShow () {
      console.log(this.isClose + ' ' + this.checkShow)
      if (this.isClose && !this.checkShow) {
        this.checkShow = true
        this.isClose = false
      } else {
        this.checkShow = this.isShow
      }
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
    clickClose (emitClose) {
      this.isClose = emitClose
    }
  }
}
</script>
<style  module>
@import '../assets/scss/pages/CommentWrap.module.scss';
</style>
<style>
   .fade-enter-active, .fade-leave-active {
    transition: width .5s;
  }
</style>
