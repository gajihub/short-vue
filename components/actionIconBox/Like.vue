<template>
  <div :class="$style.like">
    <IconBox>
      <template #icon><LikeIcon></LikeIcon></template>
      <template #text>좋아요</template>
    </IconBox>
  </div>
</template>

<script>
import LikeIcon from '@/components/icon/LikeIcon'
import IconBox from '@/components/actionIconBox/IconBox'

export default {
  name: 'Like',
  components: {
    LikeIcon,
    IconBox
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/like.module.scss';
</style>
