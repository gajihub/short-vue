<template>
    <video ref="videoPlayer" class="video-js" @loadedmetadata="logDuration"></video>
</template>
  
  <script>
  import videojs from 'video.js';

  const arrPlayer = [];
  
  export default {
    name: 'VideoPlayer',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        player: null,
      
      }
    },
    mounted() {
      this.initializePlayer();
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
    methods:{
      logDuration() {
        arrPlayer.push(this.$refs.videoPlayer.duration);
        this.$emit('handlePlaytime', arrPlayer)
        
      },
      initializePlayer() {
        this.player = videojs(this.$refs.videoPlayer, this.options);
      },
    }
  }
  </script>
  <style  module>
  @import '../assets/scss/pages/VideojsWrap.module.scss';
  </style>
  