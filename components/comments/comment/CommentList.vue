<template>
    <div :class="[$style.CommentList, isMobile ? $style.mobileCommentList : '']">
          <div :class="$style.title">
              <div :class="$style.left">
                  댓글<span :class="$style.number">{{ videoNum ? commentjson[videoNum].length : 0 }}</span>
              </div>
              <div :class="$style.right">
                  <button :class="$style.rightbtn" @click="clickClose"></button>
              </div>
          </div>
          <div :class="$style.comment">
              <ul  :class="$style.userList">
                  <li v-for="(item) in commentjson[videoNum]" :key="item.videoNum" :class="$style.listinner">
                      <div :class="$style.profile">
                      <ProfileIcon :color="item.profile"/>
                      </div>
                      <div :class="$style.commentInfo">
                          <span :class="$style.userid">{{ item.user }}</span>
                          <span :class="$style.userdate">{{ item.reg_date }}</span>
                      </div>
                      <div :class="$style.detail">{{ item.content }}</div>
                      <div :class="$style.toolbar">
                          <span><CommentLikeIconVue/></span>
                          <span><CommentUnlikeIconVue/></span>
                      </div>
                  </li>
              </ul>
          </div>
          <CommentWrite></CommentWrite>
      </div>
</template>

<script>
import ProfileIcon from '@components/icon/ProfileIcon'
import CommentLikeIconVue from '@components/comments/icon/CommentLikeIcon.vue'
import CommentUnlikeIconVue from '@components/comments/icon/CommentUnlikeIcon.vue'
import CommentWrite from './CommentWrite.vue'
import commentjson from '@data/comment.json'

export default {
  name: 'CommentList',
  components: {
    ProfileIcon,
    CommentLikeIconVue,
    CommentUnlikeIconVue,
    CommentWrite
  },
  props: {
    isNum: {
      type : Number,
      default : null
    },
  },
  data: function () {
    return {
      isMobile: false,
      isClose: false,
      commentjson:commentjson,
      videoNum: this.isNum
    }
  },
  mounted () {
    const md = this.$mobileDetect.mobile()
    if (md) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  methods: {
    clickClose () {
      this.isClose = true
      this.$emit('close', this.isClose)
    }
  }
}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/CommentList.module.scss';
</style>

