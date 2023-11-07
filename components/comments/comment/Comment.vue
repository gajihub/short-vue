<template>
  <div :class="$style.comment" @click="clickComment">
    <IconBox>
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
  data(){
    return{
      showComment: this.CommentCheck
    }
  },
  methods:{
    clickComment () {
      this.$emit('click')
    },
  }

}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/Comment.module.scss';
</style>
