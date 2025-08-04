---
layout: home
hero:
  name: DeekeScript
  text: 一站式商业化解决方案
  tagline: 无需编写UI、更快捷、更稳定的Android自动化脚本开发方案，提供打包、后台（卡密/代理商系统）支持
  actions:
    - theme: brand
      text: 快速开始
      link: /quick/quick
    - theme: alt
      text: API文档
      link: /quick/start
    - theme: alt
      text: 在线打包平台
      link: https://mp.deeke.cn
      target: _blank

features:
  - icon: 🚀
    title: 快速开发
    details: JSON配置UI、内置标准的APP界面，开发者只需关注应用业务逻辑，大幅提升开发效率
  - icon: 🔧
    title: 强大功能
    details: 支持模拟点击、输入、手势操作，完整的UI控件操作和系统功能，内置输入法、Hid操作
  - icon: 📱
    title: Android原生
    details: 基于Android无障碍服务，稳定可靠，兼容性强
  - icon: ☁️
    title: 系统化支持
    details: 提供SaaS卡密系统和管理后台，支持在线打包
  - icon: 🔒
    title: 安全可靠
    details: 支持代码混淆加密，保护开发者知识产权
  - icon: 🎯
    title: 简单易用
    details: 提供完整的开发工具链，从开发到打包一站式解决方案
---

<script setup>
// 动态气泡系统
class BubbleSystem {
    constructor() {
        this.bubbles = [];
        this.isActive = false;
        this.animationId = null;
        this.intervalId = null;
        this.colors = [
            'rgba(255, 107, 107, 0.15)',   // 红色
            'rgba(78, 205, 196, 0.15)',     // 青色
            'rgba(118, 75, 162, 0.15)',     // 紫色
            'rgba(254, 202, 87, 0.15)',     // 黄色
            'rgba(255, 159, 243, 0.15)',    // 粉色
            'rgba(120, 119, 198, 0.15)'     // 蓝紫色
        ];
        this.borderColors = [
            'rgba(255, 107, 107, 0.3)',
            'rgba(78, 205, 196, 0.3)',
            'rgba(118, 75, 162, 0.3)',
            'rgba(254, 202, 87, 0.3)',
            'rgba(255, 159, 243, 0.3)',
            'rgba(120, 119, 198, 0.3)'
        ];
        this.shadowColors = [
            'rgba(255, 107, 107, 0.2)',
            'rgba(78, 205, 196, 0.2)',
            'rgba(118, 75, 162, 0.2)',
            'rgba(254, 202, 87, 0.2)',
            'rgba(255, 159, 243, 0.2)',
            'rgba(120, 119, 198, 0.2)'
        ];
        this.init();
    }

    init() {
        // 检查是否在主页
        if (!this.isHomePage()) {
            return;
        }

        // 创建气泡容器
        this.container = document.createElement('div');
        this.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;
        document.body.appendChild(this.container);

        // 生成初始气泡（减少数量）
        this.createBubbles(4);
        
        // 开始动画循环
        this.startAnimation();
        
        // 定期生成新气泡（降低频率）
        this.intervalId = setInterval(() => {
            if (this.bubbles.length < 6) {
                this.createBubble();
            }
        }, 5000); // 5秒生成一个

        // 监听路由变化
        this.setupRouteListener();
    }

    isHomePage() {
        // 检查是否在主页
        return window.location.pathname === '/' || 
               window.location.pathname === '/index.html' ||
               window.location.pathname.endsWith('/');
    }

    setupRouteListener() {
        // 监听VitePress的路由变化
        if (typeof window !== 'undefined') {
            // 监听popstate事件（浏览器前进后退）
            window.addEventListener('popstate', () => {
                this.handleRouteChange();
            });

            // 监听pushstate事件（编程式导航）
            const originalPushState = history.pushState;
            history.pushState = function(...args) {
                originalPushState.apply(history, args);
                this.handleRouteChange();
            }.bind(this);

            // 监听replaceState事件
            const originalReplaceState = history.replaceState;
            history.replaceState = function(...args) {
                originalReplaceState.apply(history, args);
                this.handleRouteChange();
            }.bind(this);
        }
    }

    handleRouteChange() {
        if (this.isHomePage()) {
            // 如果在主页且动画未启动，则启动
            if (!this.isActive) {
                this.startAnimation();
            }
        } else {
            // 如果不在主页，停止动画
            this.stopAnimation();
        }
    }

    startAnimation() {
        if (!this.isActive) {
            this.isActive = true;
            this.animate();
        }
    }

    stopAnimation() {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        // 清除所有气泡
        this.clearBubbles();
    }

    clearBubbles() {
        this.bubbles.forEach(bubble => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        });
        this.bubbles = [];
    }

    createBubbles(count) {
        for (let i = 0; i < count; i++) {
            this.createBubble();
        }
    }

    createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 40; // 40-80px，稍微大一点
        const colorIndex = Math.floor(Math.random() * this.colors.length);
        
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${this.colors[colorIndex]};
            border: 1px solid ${this.borderColors[colorIndex]};
            box-shadow: 0 0 15px ${this.shadowColors[colorIndex]};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            transition: opacity 1s ease;
        `;

        // 气泡属性 - 降低速度（再慢3倍）
        bubble.vx = (Math.random() - 0.5) * 0.17; // 水平速度降低3倍
        bubble.vy = (Math.random() - 0.5) * 0.17; // 垂直速度降低3倍
        bubble.life = 0;
        bubble.maxLife = 1000; // 增加生命周期，让气泡存在更久

        this.container.appendChild(bubble);
        this.bubbles.push(bubble);

        // 淡入效果
        setTimeout(() => {
            bubble.style.opacity = '0.6';
        }, 200);
    }

    animate() {
        if (!this.isActive) return;

        this.bubbles.forEach((bubble, index) => {
            // 更新位置
            let x = parseFloat(bubble.style.left) + bubble.vx;
            let y = parseFloat(bubble.style.top) + bubble.vy;

            // 边界检测
            if (x < 0 || x > 100) bubble.vx *= -1;
            if (y < 0 || y > 100) bubble.vy *= -1;

            // 确保在边界内
            x = Math.max(0, Math.min(100, x));
            y = Math.max(0, Math.min(100, y));

            bubble.style.left = x + '%';
            bubble.style.top = y + '%';

            // 生命周期管理 - 修复消失问题
            bubble.life++;
            if (bubble.life > bubble.maxLife) {
                // 重新生成气泡而不是删除
                this.replaceBubble(bubble, index);
            }
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    replaceBubble(oldBubble, index) {
        // 淡出旧气泡
        oldBubble.style.opacity = '0';
        
        setTimeout(() => {
            // 移除旧气泡
            if (oldBubble.parentNode) {
                oldBubble.parentNode.removeChild(oldBubble);
            }
            
            // 创建新气泡
            this.createBubble();
            
            // 从数组中移除旧气泡
            this.bubbles.splice(index, 1);
        }, 1000);
    }
}

// 使用多种方式确保执行
function initBubbles() {
    if (typeof window !== 'undefined' && document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new BubbleSystem();
        });
    } else if (typeof window !== 'undefined') {
        new BubbleSystem();
    }
}

// 立即执行
initBubbles();

// 延迟执行，确保VitePress完全加载
setTimeout(() => {
    if (typeof window !== 'undefined' && !document.querySelector('[data-bubble-system]')) {
        new BubbleSystem();
    }
}, 1000);
</script>

 