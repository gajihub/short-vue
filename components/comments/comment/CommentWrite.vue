<template>
    <div :class="$style.CommentWrite">
      <div :class="$style.profile">
       <ProfileIcon color="blue"/>
       </div>
      <v-text-field :counter="50" label="댓글쓰기" hide-details></v-text-field>
    </div>
</template>

<script>
import ProfileIcon from '@components/icon/ProfileIcon'

export default {
  name: 'CommentWrite',
  components :{
    ProfileIcon
  }
}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/CommentWrite.module.scss';
</style>
