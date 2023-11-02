<template>
   <v-expand-x-transition >
    <div v-show="checkShow" :class="[$style.commentWrap, isMobile ? $style.mCommentWrap : '', isClose ? $style.close : '']">
     <CommentList  @close="clickClose"></CommentList>
    </div>
  </v-expand-x-transition>
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
      isClose: false,
    }
  },
  watch: {
    isShow () {
      if (!this.checkShow) {
        this.checkShow = true
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
      this.$emit('close', emitClose)
    }
  }
}
</script>
<style  module>
@import '../assets/scss/pages/CommentWrap.module.scss';
</style>