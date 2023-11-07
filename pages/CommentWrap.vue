<template>
   <transition :name="isMobile ? 'mobile-slide' : 'slide'">
    <div v-show="checkShow" :class="[$style.commentWrap, isMobile ? $style.mCommentWrap : '', isClose ? $style.close : '']">
     <CommentList  :isNum="isNum" @close="clickClose"></CommentList>
    </div>
  </transition>
</template>

<script>
import CommentList from '@components/comments/comment/CommentList.vue'

export default {
  name: 'commentWrap',
  components: {
    CommentList
  },
  props: {
    isShow: Boolean,
    isNum: Number,
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
    const md = this.$mobileDetect.mobile()
    if (md) {
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
<style>
/* Pc버전 */
.slide-enter-active {
  width: 340px;
  transition: width .3s ease-in-out;
}

.slide-leave-active {
  width:0;
  transition: width .3s ease-in-out;
}
.slide-enter-active [class*="CommentList"], .slide-leave-active [class*="CommentList"]{
  visibility: hidden;
}
.slide-enter
{
  width: 0;
  opacity: 0;
}


/* Mobile 버전 */
.mobile-slide-enter-active {
  height: 603px;
  transition: height .3s ease-in-out;
}

.mobile-slide-leave-active {
  height:0;
  transition: height .3s ease-in-out;
}
.mobile-slide-enter-active [class*="CommentList"], .mobile-slide-leave-active [class*="CommentList"]{
  visibility: hidden;
}
.mobile-slide-enter
{
  height: 0;
  opacity: 0;
}
</style>