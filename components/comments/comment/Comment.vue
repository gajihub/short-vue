<template>
  <div :class="$style.comment">
    <IconBox @click="clickComment">
      <template #icon><CommentIcon></CommentIcon></template>
      <template #text>345</template>
    </IconBox>
  </div>
</template>

<script>
import CommentIcon from '@components/comments/icon/CommentIcon'
import IconBox from '@components/actionIconBox/IconBox'

export default {
  name: 'UnLike',
  components: {
    CommentIcon,
    IconBox
  },
  methods: {
    clickComment () {
      console.log('a')
    }
  }
}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/Comment.module.scss';
</style>
