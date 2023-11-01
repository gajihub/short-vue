<template>
  <div :class="$style.unlike">
    <IconBox>
      <template #icon><UnLikeIcon></UnLikeIcon></template>
      <template #text>싫어요</template>
    </IconBox>
  </div>
</template>

<script>
import UnLikeIcon from '@/components/icon/UnLikeIcon'
import IconBox from '@/components/actionIconBox/IconBox'

export default {
  name: 'UnLike',
  components: {
    UnLikeIcon,
    IconBox
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/unlike.module.scss';
</style>
