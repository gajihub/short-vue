<template>
     <span :class="[$style.profileInfo, color ? color : '']">
        <i class="material-icons">person</i>
     </span>
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    color: String
  },
  mounted () {
    console.log(this.color)
  }
}
</script>
  <style  module>
  @import '../../assets/scss/icon/ProfileIcon.module.scss';
  </style>
