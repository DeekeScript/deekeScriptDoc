<script setup>
const capabilities = [
  {
    icon: '\u{1F9E0}',
    title: '无障碍自动化',
    desc: '基于 Android Accessibility Service，提供 UiSelector 节点选择 + UiObject 节点操作，支持手势模拟点击、滑动、输入，无需 ROOT 权限。',
    tags: ['UiSelector', 'UiObject', '手势操作', '免ROOT']
  },
  {
    icon: '\u{1F4F1}',
    title: '设备管控 (DO模式)',
    desc: 'Device Owner 模式提供系统级设备管理能力，支持 DevicePolicy 策略管理、应用静默安装/卸载、Kiosk 锁定模式、硬件功能控制。',
    tags: ['DO模式', 'DevicePolicy', 'Kiosk', '硬件控制']
  },
  {
    icon: '\u{1F3AE}',
    title: 'HID 蓝牙硬件',
    desc: '通过蓝牙 HID 协议模拟物理键盘输入，无需依赖无障碍服务即可实现稳定输入，兼容性极高，适合群控与自动化测试。',
    tags: ['蓝牙HID', '键盘模拟', '免无障碍', '高兼容']
  },
  {
    icon: '\u{2328}',
    title: '自定义输入法',
    desc: '内置 DeekeIME 自定义输入法引擎，支持 KeyBoard 注入、输入法切换与管理，可绕过应用输入限制实现精准文本输入。',
    tags: ['DeekeIME', '输入法注入', 'KeyBoard']
  },
  {
    icon: '\u{26A1}',
    title: '高级特性',
    desc: 'Hook 系统拦截方法调用，多线程/Engines 并行执行，Promise 异步支持，模块化开发架构，满足复杂业务场景需求。',
    tags: ['Hook', '多线程', 'Engines', 'Promise', '模块化']
  },
  {
    icon: '\u{1F6E1}',
    title: '代码安全 & 商业化',
    desc: '代码混淆加密保护知识产权，一键云端 APK 打包，SaaS 卡密 + 代理商系统 + 管理后台，集成腾讯云 COS 存储。',
    tags: ['代码加密', 'APK打包', '卡密系统', '腾讯云COS']
  }
]
</script>

<template>
  <div class="home-section" style="margin-top: 100px;">
    <div class="home-section-header">
      <h2 class="home-section-title">核心能力</h2>
      <p class="home-section-subtitle">从底层自动化到商业化交付，一站式覆盖全链路</p>
    </div>
    <div class="capabilities-grid">
      <div v-for="c in capabilities" :key="c.title" class="capability-card glass-card">
        <div class="capability-header">
          <span class="capability-icon">{{ c.icon }}</span>
          <h3 class="capability-title">{{ c.title }}</h3>
        </div>
        <p class="capability-desc">{{ c.desc }}</p>
        <div class="capability-tags">
          <span v-for="t in c.tags" :key="t" class="capability-tag">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.capability-card { padding: 32px 28px; }
.capability-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.capability-icon { font-size: 28px; }
.capability-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--cap-title, #1A1A24);
  margin: 0;
}
.capability-desc {
  font-size: 13.5px;
  color: var(--cap-desc, #666670);
  line-height: 1.7;
  margin-bottom: 14px;
}
.capability-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.capability-tag {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  background: var(--cap-tag-bg, rgba(0, 106, 101, 0.06));
  border: 1px solid var(--cap-tag-border, rgba(0, 106, 101, 0.12));
  color: var(--cap-tag-color, #006A65);
  letter-spacing: 0.2px;
}

@media (max-width: 960px) {
  .capabilities-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .capabilities-grid { grid-template-columns: 1fr; }
  .capability-card { padding: 24px 20px; }
}
</style>
