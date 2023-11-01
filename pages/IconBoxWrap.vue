<template>
  <div :class="$style.iconWrap">
    <div :class="$style.like">
    <IconBox @click="clickIcon(isLikeIcon)" :checkin="islikeCheck">
      <template #icon><LikeIcon></LikeIcon></template>
      <template #text>좋아요</template>
    </IconBox>
  </div>
  <div :class="$style.unlike">
    <IconBox @click="clickIcon(isunLikeIcon)" :checkin="isunlikeCheck">
      <template #icon><UnLikeIcon></UnLikeIcon></template>
      <template #text>싫어요</template>
    </IconBox>
  </div>
  </div>
</template>

<script>
import UnLikeIcon from '@components/icon/UnLikeIcon.vue'
import LikeIcon from '@components/icon/LikeIcon.vue'
import IconBox from '@components/actionIconBox/IconBox.vue'

export default {
  name: 'iconBoxWrap',
  components: {
    UnLikeIcon,
    IconBox,
    LikeIcon
  },
  data () {
    return {
      isLikeIcon: 'like',
      isunLikeIcon: 'unlike',
      islikeCheck: false,
      isunlikeCheck: false
    }
  },
  methods: {
    clickIcon (clickStr) {
      if (clickStr === 'like') {
        this.isunlikeCheck = false
        this.islikeCheck = true
      } else {
        this.isunlikeCheck = true
        this.islikeCheck = false
      }
    }
  }
}
</script>

<style  module>
@import '../assets/scss/pages/IconBoxWrap.module.scss';
</style>
