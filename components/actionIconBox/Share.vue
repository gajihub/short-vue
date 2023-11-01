<template>
  <div :class="$style.share">
    <IconBox>
      <template #icon><ShareIcon></ShareIcon></template>
      <template #text>공유</template>
    </IconBox>
  </div>
</template>

<script>
import ShareIcon from '@/components/icon/ShareIcon'
import IconBox from '@/components/actionIconBox/IconBox'

export default {
  name: 'Share',
  components: {
    ShareIcon,
    IconBox
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/share.module.scss';
</style>
