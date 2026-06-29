<script setup>
</script>

<template>
  <div class="hero-custom">
    <div class="hero-badge">
      <span class="badge-dot" />
      一站式商业化解决方案
    </div>
    <h1 class="hero-title">
      DeekeScript
    </h1>
    <p class="hero-subtitle">
      Android 自动化脚本开发框架
    </p>
    <p class="hero-desc">
      基于无障碍服务，无需 ROOT，提供从开发调试到打包分发的<br />全链路解决方案
    </p>
    <div class="hero-actions">
      <a href="/quick/start" class="hero-btn-brand">快速开始</a>
      <a href="/quick/quick" class="hero-btn-alt">API 文档</a>
    </div>
  </div>
</template>

<style scoped>
.hero-custom {
  text-align: center;
  padding-top: 40px;
  position: relative;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 20px;
  background: var(--hero-badge-bg, rgba(0, 106, 101, 0.06));
  border: 1px solid var(--hero-badge-border, rgba(0, 106, 101, 0.15));
  font-size: 13px;
  color: var(--hero-badge-color, #006A65);
  margin-bottom: 28px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  box-shadow: 0 0 6px currentColor;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.hero-title {
  font-size: clamp(44px, 9vw, 80px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.05;
  margin: 0;
  background: linear-gradient(135deg, var(--vp-c-brand-2, #006A65) 0%, var(--vp-c-brand-1, #009688) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(20px, 3.5vw, 28px);
  font-weight: 600;
  color: var(--hero-text-color, #333340);
  margin: 16px 0 0;
  letter-spacing: -0.3px;
}

.hero-desc {
  font-size: clamp(14px, 1.8vw, 17px);
  color: var(--hero-desc-color, #666670);
  margin: 16px 0 0;
  line-height: 1.8;
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 36px;
  flex-wrap: wrap;
}

.hero-btn-brand {
  display: inline-block;
  padding: 13px 36px;
  background: var(--vp-c-brand-2, #006A65);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0, 106, 101, 0.25);
  transition: all 0.3s ease;
}
.hero-btn-brand:hover {
  background: var(--vp-c-brand-1, #00857F);
  box-shadow: 0 4px 24px rgba(0, 106, 101, 0.4);
  transform: translateY(-2px);
  color: #fff;
  text-decoration: none;
}

.hero-btn-alt {
  display: inline-block;
  padding: 13px 36px;
  background: var(--hero-btn-alt-bg, #fff);
  border: 1px solid var(--hero-btn-alt-border, #D0D0D8);
  color: var(--hero-btn-alt-color, #444);
  font-size: 15px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.hero-btn-alt:hover {
  border-color: var(--vp-c-brand-2, #006A65);
  color: var(--vp-c-brand-2, #006A65);
  background: var(--vp-c-brand-soft, rgba(0, 106, 101, 0.06));
  text-decoration: none;
}

@media (max-width: 768px) {
  .hero-custom { padding-top: 20px; }
  .hero-btn-brand, .hero-btn-alt { padding: 12px 32px; font-size: 14px; }
}
</style>
