---
layout: home
hero:
  name: DeekeScript
  text: 一站式商业化解决方案
  tagline: 无需编写UI、更快捷、更稳定的Android自动化脚本开发方案，提供打包、后台（卡密/代理商系统）支持
  actions:
    - theme: brand
      text: 快速开始
      link: /quick/start
    - theme: alt
      text: API文档
      link: /quick/quick

features:
  - icon: 🚀
    title: 快速开发
    details: JSON配置UI、内置标准的APP界面，开发者只需关注应用业务逻辑，大幅提升开发效率
  - icon: 🔧
    title: 强大功能
    details: 支持模拟点击、输入、手势操作，完整的UI节点操作和系统功能，内置输入法、Hid操作
  - icon: 📱
    title: Android原生
    details: 基于Android无障碍服务，稳定可靠，兼容性强
  - icon: ☁️
    title: 系统化支持
    details: 提供SaaS卡密系统和管理后台，支持本地APP打包
  - icon: 🔒
    title: 安全可靠
    details: 支持代码混淆加密，保护开发者知识产权
  - icon: 🎯
    title: 简单易用
    details: 提供完整的开发工具链，从开发到打包一站式解决方案
---

<script setup>
// 简单的气泡系统
class SimpleBubbleSystem {
    constructor() {
        this.bubbles = [];
        this.animationId = null;
        this.intervalId = null;
        this.isRunning = false;
        this.maxBubbles = 6; // 最大气泡数量限制
        this.colors = [
            'rgba(255, 107, 107, 0.15)',
            'rgba(78, 205, 196, 0.15)',
            'rgba(118, 75, 162, 0.15)',
            'rgba(254, 202, 87, 0.15)',
            'rgba(255, 159, 243, 0.15)',
            'rgba(120, 119, 198, 0.15)'
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
        // 检查是否在浏览器环境
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return;
        }

        // 清理可能存在的旧容器
        const existingContainer = document.querySelector('[data-bubble-container]');
        if (existingContainer) {
            existingContainer.remove();
        }

        // 创建容器
        this.container = document.createElement('div');
        this.container.setAttribute('data-bubble-container', 'true');
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

        // 创建初始气泡
        this.createBubbles(4);
        
        // 启动动画
        this.start();
        
        // 设置初始可见性
        this.updateVisibility();
    }

    isHomePage() {
        if (typeof window === 'undefined') return false;
        return window.location.pathname === '/' || 
               window.location.pathname === '/index.html' || 
               window.location.pathname.endsWith('/');
    }

    updateVisibility() {
        if (this.container) {
            if (this.isHomePage()) {
                this.container.style.display = 'block';
            } else {
                this.container.style.display = 'none';
            }
        }
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        // 动画循环
        this.animate();
        
        // 定时生成新气泡
        this.intervalId = setInterval(() => {
            if (this.bubbles.length < this.maxBubbles) {
                this.createBubble();
            }
        }, 5000);
    }

    stop() {
        this.isRunning = false;
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        
        // 清除所有气泡
        this.clearAllBubbles();
    }

    clearAllBubbles() {
        // 清理数组中的气泡
        this.bubbles.forEach(bubble => {
            if (bubble && bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        });
        this.bubbles = [];
        
        // 清理容器中的所有气泡（双重保险）
        if (this.container) {
            const allBubbles = this.container.querySelectorAll('div');
            allBubbles.forEach(bubble => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            });
        }
    }

    createBubbles(count) {
        for (let i = 0; i < count; i++) {
            this.createBubble();
        }
    }

    createBubble() {
        // 检查气泡数量限制
        if (this.bubbles.length >= this.maxBubbles) {
            return;
        }

        const bubble = document.createElement('div');
        const size = Math.random() * 40 + 40;
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

        bubble.vx = (Math.random() - 0.5) * 0.17;
        bubble.vy = (Math.random() - 0.5) * 0.17;
        bubble.life = 0;
        bubble.maxLife = 1000;

        this.container.appendChild(bubble);
        this.bubbles.push(bubble);

        setTimeout(() => {
            bubble.style.opacity = '0.6';
        }, 200);
    }

    animate() {
        if (!this.isRunning) return;

        // 清理无效的气泡引用
        this.bubbles = this.bubbles.filter(bubble => bubble && bubble.parentNode);

        this.bubbles.forEach((bubble, index) => {
            if (!bubble || !bubble.parentNode) {
                this.bubbles.splice(index, 1);
                return;
            }

            let x = parseFloat(bubble.style.left) + bubble.vx;
            let y = parseFloat(bubble.style.top) + bubble.vy;

            if (x < 0 || x > 100) bubble.vx *= -1;
            if (y < 0 || y > 100) bubble.vy *= -1;

            x = Math.max(0, Math.min(100, x));
            y = Math.max(0, Math.min(100, y));

            bubble.style.left = x + '%';
            bubble.style.top = y + '%';

            bubble.life++;
            if (bubble.life > bubble.maxLife) {
                this.removeBubble(bubble, index);
            }
        });

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    removeBubble(bubble, index) {
        if (bubble && bubble.parentNode) {
            bubble.style.opacity = '0';
            
            setTimeout(() => {
                if (bubble && bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
                // 从数组中移除
                const bubbleIndex = this.bubbles.indexOf(bubble);
                if (bubbleIndex > -1) {
                    this.bubbles.splice(bubbleIndex, 1);
                }
            }, 1000);
        }
    }
}

// 全局实例
let bubbleSystem = null;

// 初始化函数
function initBubbleSystem() {
    // 检查是否在浏览器环境
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
    }

    // 清理旧实例
    if (bubbleSystem) {
        bubbleSystem.stop();
        bubbleSystem = null;
    }
    
    // 创建新实例
    bubbleSystem = new SimpleBubbleSystem();
}

// 页面加载时初始化
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBubbleSystem);
    } else {
        initBubbleSystem();
    }
}

// 监听路由变化，更新气泡可见性
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // 监听popstate事件（浏览器前进后退）
    window.addEventListener('popstate', () => {
        if (bubbleSystem) {
            bubbleSystem.updateVisibility();
        }
    });

    // 监听pushstate事件（编程式导航）
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
        originalPushState.apply(history, args);
        if (bubbleSystem) {
            bubbleSystem.updateVisibility();
        }
    };

    // 监听replaceState事件
    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        if (bubbleSystem) {
            bubbleSystem.updateVisibility();
        }
    };
}

// 监听页面可见性变化，避免后台运行
if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
        if (bubbleSystem) {
            if (document.hidden) {
                bubbleSystem.stop();
            } else {
                bubbleSystem.start();
            }
        }
    });
}
</script>
