<template>
  <video
    src=""
    id="video-container"
    width="100%"
    height="100%"
    ref="video"
    controls
    playsinline
    muted
  ></video>
</template>

<script>
export default {
  name: "videocomponent",
  mounted: function () {
    /*this.$nextTick(() => {
      video = this.$refs.video

      const constraints = { audio: false, video: { width: 640, height: 480 } };
      this.$store.state.MSDK.loader().source(
        CY.createSource.fromCamera({ constraints, video })
      );
    });*/
  },
};
</script>