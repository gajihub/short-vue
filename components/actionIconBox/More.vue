<template>
  <div :class="$style.more">
    <v-overlay v-if="isMobile" v-model="isShowMore" @click="moreClick"></v-overlay>
    <transition  :name="isShowMore ? 'fade' : 'slide'">
      <v-list lines="one" v-show="isShowMore" :class="[$style.moreList, isMobile ? $style.mobile : '']">
        <v-list-item><Explain/><p>설명</p></v-list-item>
        <v-list-item><Subtitle/><p>자막</p></v-list-item>
        <v-list-item><Report/><p>신고</p></v-list-item>
        <v-list-item><Idea/><p>의견보내기</p></v-list-item>
      </v-list>
    </transition>
    
    <IconBox @click="moreClick">
      <template #icon><MoreIcon></MoreIcon></template>
    </IconBox>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import MoreIcon from '@/components/icon/MoreIcon'
import IconBox from '@/components/actionIconBox/IconBox'
import Subtitle from '@/components/icon/Subtitle'
import Explain from '@/components/icon/Explain'
import Idea from '@/components/icon/Idea'
import Report from '@/components/icon/Report'

export default {
  name: 'More',
  components: {
    MoreIcon,
    IconBox,
    Explain,
    Subtitle,
    Idea,
    Report
  },
  data() {
    return{
      isShowMore: false,
      isMobile: false
    }
  },
  watch:{
    isShowMore (val) {
        if(!val){
          this.isShowMore = false
        }
      },
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
    moreClick () {
      if(!this.isShowMore){
        this.isShowMore = true
      }else{
        this.isShowMore = false
      }
    }
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/more.module.scss';
</style>
<style>
/* Pc버전 */
.slide-enter-active, .slide-leave-active {
  transition: all .1s ease;
}
.slide-enter-active [class*="moreList"], .slide-leave-active [class*="moreList"]{
  visibility: hidden;
}
.slide-enter, .slide-leave-enter
{
  opacity: 0;
}


/* Mobile 버전 */
.mobile-enter-active {
  height: 603px;
  transition: height .1s ease-in-out;
}

.mobile-leave-active {
  height:0;
  transition: height .1s ease-in-out;
}
.mobile-enter-active [class*="moreList"], .mobile-leave-active [class*="moreList"]{
  visibility: hidden;
}
.mobile-enter
{
  height: 0;
  opacity: 0;
}
</style>