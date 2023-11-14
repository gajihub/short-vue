<template>
    <div :class="$style.CommentWrite">
      <div :class="$style.profile">
       <ProfileIcon color="blue"/>
       </div>
      <v-text-field v-model="commentInput" :append-icon="commentInput ? 'mdi-send' : ''" :counter="50" label="댓글쓰기" variant="underlined"  @click:append="sendMessage" clearable hide-details></v-text-field>
    </div>
</template>

<script>
import ProfileIcon from '@components/icon/ProfileIcon'

export default {
  name: 'CommentWrite',
  components :{
    ProfileIcon
  },
  props: {
    checkin: String
  },
  watch:{
    checkin(val){
      this.commentInput = val
      this.editCheck = true
    }
  },
  data(){
    return {
      commentInput: '',
      editCheck: false
    }
  },
  methods:{
    sendMessage () {
      this.$emit('send', this.commentInput, this.editCheck)
      this.commentInput=''
    },
  }
}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/CommentWrite.module.scss';
</style>
