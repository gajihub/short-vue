<template>
  <div :class="$style.comment" @click="clickComment">
    <IconBox>
      <template #icon><CommentIcon></CommentIcon></template>
      <template #text>{{ commentjson[isCommentNum].length }}</template>
    </IconBox>
  </div>
</template>

<script>
import CommentIcon from '@components/comments/icon/CommentIcon'
import IconBox from '@components/actionIconBox/IconBox'
import commentjson from '@data/comment.json'

export default {
  name: 'UnLike',
  components: {
    CommentIcon,
    IconBox
  },
  props:{
    commentNum: String,
  },
  data(){
    return{
      showComment: this.CommentCheck,
      isCommentNum : 'video0'+this.commentNum,
      commentjson: commentjson
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
