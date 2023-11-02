<template>
    <div :class="[$style.CommentList, isMobile ? $style.mobileCommentList : '']">
            <div :class="$style.title">
                <div :class="$style.left">
                    댓글<span :class="$style.number">400</span>
                </div>
                <div :class="$style.right">
                    <button :class="$style.rightbtn" @click="clickClose"></button>
                </div>
            </div>
            <div :class="$style.comment">
                <ul :class="$style.userList">
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='blue'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.05.04</span>
                        </div>
                        <div :class="$style.detail">골때녀 좋아요!</div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='blue'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.04.01</span>
                        </div>
                        <div :class="$style.detail">내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                        </div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='purple'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.05.04</span>
                        </div>
                        <div :class="$style.detail">골때녀 좋아요!</div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='blue'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.04.01</span>
                        </div>
                        <div :class="$style.detail">내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            qwersdfasdfasdfasdfadfasdfasdfasdfasdfasdfas
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                        </div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='blue'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.05.04</span>
                        </div>
                        <div :class="$style.detail">골때녀 좋아요!</div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                    <li :class="$style.listinner">
                        <div :class="$style.profile">
                        <ProfileIcon color='blue'/>
                        </div>
                        <div :class="$style.commentInfo">
                            <span :class="$style.userid">@user_id</span>
                            <span :class="$style.userdate">2023.04.01</span>
                        </div>
                        <div :class="$style.detail">내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                            내용이 길어질 경우<br/>
                        </div>
                        <div :class="$style.toolbar">
                            <span><CommentLikeIconVue/></span>
                            <span><CommentUnlikeIconVue/></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import MobileDetect from 'mobile-detect'
import ProfileIcon from '@components/icon/ProfileIcon'
import CommentLikeIconVue from '@components/comments/icon/CommentLikeIcon.vue'
import CommentUnlikeIconVue from '@components/comments/icon/CommentUnlikeIcon.vue'

export default {
  name: 'CommentList',
  components: {
    ProfileIcon,
    CommentLikeIconVue,
    CommentUnlikeIconVue
  },
  data: function () {
    return {
      isMobile: false,
      isClose: false
    }
  },
  mounted () {
    const md = new MobileDetect(window.navigator.userAgent)
    if (md.mobile()) {
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

