<script setup>
</script>

<template>
  <div class="home-section" style="margin-top: 100px;">
    <div class="home-section-header">
      <h2 class="home-section-title">入门教学视频</h2>
      <p class="home-section-subtitle">跟随视频快速上手 DeekeScript 开发</p>
    </div>
    <div class="video-wrapper glass-card">
      <div class="video-container">
        <iframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=115027981898564&bvid=BV11Pb7zyEHH&cid=31698521810&p=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          class="video-iframe"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
  padding: 6px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
}
.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .video-wrapper { padding: 4px; }
}
</style>
