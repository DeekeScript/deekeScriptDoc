<script setup>
</script>

<template>
  <div class="home-cta">
    <h2 class="home-cta-title">准备好构建你的自动化脚本了吗？</h2>
    <p class="home-cta-desc">
      从开发到分发，DeekeScript 提供一站式解决方案，让 Android 自动化更简单。
    </p>
    <a href="/quick/start" class="home-cta-btn">立即开始</a>
    <a href="/deeke/deeke" class="home-cta-btn-alt">查看案例</a>
  </div>
</template>

<style scoped>
.home-cta {
  text-align: center;
  padding: 100px 24px 80px;
  position: relative;
}
.home-cta::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(0, 106, 101, 0.05) 0%, transparent 70%);
  pointer-events: none;
}
.home-cta-title {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 700;
  color: var(--cta-title, #1A1A24);
  margin-bottom: 16px;
}
.home-cta-desc {
  font-size: 16px;
  color: var(--cta-desc, #666670);
  margin-bottom: 36px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}
.home-cta-btn {
  display: inline-block;
  padding: 14px 40px;
  background: var(--vp-c-brand-2, #006A65);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0, 106, 101, 0.2);
  transition: all 0.3s ease;
}
.home-cta-btn:hover {
  background: var(--vp-c-brand-1, #00857F);
  box-shadow: 0 4px 24px rgba(0, 106, 101, 0.35);
  transform: translateY(-2px);
  color: #fff;
  text-decoration: none;
}
.home-cta-btn-alt {
  display: inline-block;
  padding: 14px 40px;
  background: var(--cta-btn-alt-bg, #fff);
  border: 1px solid var(--cta-btn-alt-border, #D0D0D8);
  color: var(--cta-btn-alt-color, #444);
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: 16px;
}
.home-cta-btn-alt:hover {
  border-color: var(--vp-c-brand-2, #006A65);
  color: var(--vp-c-brand-2, #006A65);
  background: var(--vp-c-brand-soft, rgba(0, 106, 101, 0.06));
  text-decoration: none;
}

@media (max-width: 640px) {
  .home-cta-btn-alt { margin-left: 0; margin-top: 12px; }
}
</style>
