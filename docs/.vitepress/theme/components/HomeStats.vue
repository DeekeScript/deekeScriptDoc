<script setup>
const stats = [
  { value: '> 98%', label: 'Android 8+ 主流手机覆盖' },
  { value: '免ROOT', label: '无障碍服务驱动、蓝牙Hid支持' },
   { value: 'DO模式', label: '更高权限、企业级设备管理' },
  { value: '一键打包', label: 'APK 本地快速构建' },
  { value: 'SaaS', label: '卡密·代理商系统' }
]
</script>

<template>
  <div class="home-section">
    <div class="stats-bar">
      <div v-for="s in stats" :key="s.label" class="stat-card glass-card">
        <div class="stat-value">{{ s.value }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 60px auto 0;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  text-align: center;
  padding: 28px 12px;
}
.stat-value {
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 800;
  color: var(--stat-value-color, #006A65);
  margin-top: 8px;
}
.stat-label {
  font-size: 13px;
  color: var(--stat-label-color, #888);
  margin-top: 6px;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .stats-bar { gap: 12px; margin-top: 40px; flex-wrap: wrap; }
  .stat-card { min-width: calc(50% - 8px); flex: 0 0 calc(50% - 8px); padding: 20px 14px; }
}
@media (max-width: 480px) {
  .stat-card { min-width: 100%; flex: 0 0 100%; }
}
</style>
