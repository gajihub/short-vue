<template>
  <div :class="$style.more">
    <IconBox @click="moreClick">
      <template #icon><MoreIcon></MoreIcon></template>
    </IconBox>
  </div>
</template>

<script>
import MoreIcon from '@/components/icon/MoreIcon'
import IconBox from '@/components/actionIconBox/IconBox'

export default {
  name: 'More',
  components: {
    MoreIcon,
    IconBox
  },
  methods: {
    moreClick () {
      console.log('a')
    }
  }
}
</script>
<style  module>
@import '../../assets/scss/actionIconBox/more.module.scss';
</style>
