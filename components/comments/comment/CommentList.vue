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
              <ul  :class="$style.userList"  ref="scrollTarget">
                  <li v-for="(item,i) in commentjson[videoNum]" :key="item.videoNum" :class="$style.listinner">
                      <div :class="$style.profile">
                        <ProfileIcon :color="item.profile"/>
                      </div>
                      <div :class="$style.commentInfo">
                          <span :class="$style.userid">{{ item.user }}</span>
                          <span :class="$style.userdate">{{ item.reg_date }}</span>
                          <span v-if="lastClass && (i == commentjson[videoNum].length - 1)" :class="$style.editIcon" >
                            <i class="material-symbols-outlined" @click="edtiClick">mode_edit</i>
                            <i class="material-symbols-outlined" @click="delClick">delete</i>
                          </span>
                      </div>
                      <div :class="$style.detail">{{ item.content }}</div>
                      <div :class="$style.toolbar">
                          <span><CommentLikeIconVue/></span>
                          <span><CommentUnlikeIconVue/></span>
                      </div>
                  </li>
              </ul>
          </div>
          <CommentWrite :checkin="listEdit"  @send="commentInput"></CommentWrite>
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
      videoNum: this.isNum,
      commentList: [],
      lastClass: false,
      listEdit: ''
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
    },
    commentInput(val, val2){
      if (val2) {
        // val2가 true이면 마지막 댓글을 수정합니다.
        const lastIndex = this.commentList.length - 1;
        if (lastIndex >= 0) {
          // 마지막 댓글을 수정
          this.commentList[lastIndex].content = val;
          // commentjson 업데이트 (실제 JSON 데이터를 업데이트해야 함)
          this.commentjson[this.videoNum][lastIndex].content = val;
        }
      } else{
        const newComment = {
          id: this.commentList.length + 1, // 새로운 댓글의 ID
          user: '@user', // 사용자 이름
          reg_date: '방금 전', // 등록 일자 (예시로 '방금 전'으로 설정)
          content: val, // 입력된 댓글 내용
          profile: 'blue', // 프로필 색상 (원하는 값으로 설정)
        };
        let liHeight = 0

        // commentjson에 새로운 댓글 추가
        if (!this.commentjson[this.videoNum]) {
          this.$set(this.commentjson, this.videoNum, []); // Vue.set을 사용하여 새로운 키 추가
        }
        this.commentjson[this.videoNum].push(newComment);

        // 화면에 표시할 댓글 데이터 배열에도 추가
        this.commentList.push(newComment);

        liHeight = this.$refs.scrollTarget.lastChild

        this.$nextTick(function() {
          this.$refs.scrollTarget.scrollTo({top: this.$refs.scrollTarget.scrollHeight + liHeight.clientHeight, behavior: 'smooth'})
          this.lastClass = true
        });

        }
          
     
    },
    edtiClick(){
      this.listEdit = this.$refs.scrollTarget.lastChild.children[2].innerText
    },
    delClick(){
      const lastIndex = this.commentList.length - 1;
      if (lastIndex >= 0) {
        // 마지막 댓글을 삭제
        this.commentList.pop();
        
        this.commentjson[this.videoNum].pop();

        this.lastClass = false;
        this.listEdit = '';
      }
    }
  }
}
</script>
<style  module>
@import '../../../assets/scss/comments/comment/CommentList.module.scss';
</style>

