---
title: 快速开始
description: DeekeScript - 快速开始
---

# 🚀 快速开始

## 📋 开发环境概览

目前 **DeekeScript** 采用 **JavaScript** 语言开发，为开发者提供完整的自动化开发解决方案。

### ✨ 核心特性

| 特性 | 说明 | 优势 |
|------|------|------|
| **代码提示** | 完整的IDE智能提示 | 提升开发效率 |
| **代码混淆** | 支持JavaScript混淆 | 保护源代码 |
| **模块化** | 支持模块化开发 | 代码复用性强 |
| **多线程** | 支持并发处理 | 性能更优 |
| **定时器** | 内置定时器功能 | 自动化调度 |

> **开发理念**：接下来介绍如何创建项目以及相关准备工作，让您快速上手DeekeScript开发。

## 🛠️ 准备工作

### 1. 开发工具安装

#### 📝 安装VSCode
* **[下载VSCode](https://code.visualstudio.com/)**
  > **特别说明**：请确保VSCode升级到最新版本，以获得最佳开发体验

#### 🔌 安装DeekeScript插件
* 在VSCode中安装DeekeScript开发插件，如下图，点击"安装"即可：

<img src="/assets/extension.png" width="100%" /> 

### 2. 移动端准备

#### 📱 安装DeekeScript软件包
* 在手机上 **[下载安装DeekeScript软件包](https://doc.deeke.cn/assets/apk/v1.2.47-release.apk)**，或者扫码下载：

   <img src="/assets/qrcode.png" width="30%" />

#### ⚙️ 权限配置
* 打开DeekeScript的侧边栏（左上角"三条杠"），开启以下权限：
  - ✅ **无障碍服务** - 核心自动化权限
  - ✅ **悬浮窗权限** - 控制界面显示
  - ✅ **后台弹窗** - 启动后台弹窗服务
  - ✅ **图色查找** - 启动图色识别服务
  - ✅ **节点查看** - 浏览器查看节点数据
  - ✅ **开发模式** - vscode开发、或者浏览器调试

## 🔍 认识节点查看器

> **节点查看器** 主要用于查看手机界面上的"控件"信息，使用节点信息来查找您需要的"控件"，然后对控件进行点击、输入或滑动等操作。

### 📱 连接设备

1. **打开手机端DeekeScript**，如下图，可以看到手机的局域网IP是"192.168.1.3"：

   <img src="/assets/dk.jpg" width="30%" />

2. **打开浏览器**，输入：`http://192.168.1.3:8080`，可以看到下面的页面：

   <img src="/assets/widget.png" width="100%" />

3. **选择左侧的控件**，点击之后，就可以清楚地看到控件信息了

### 🔧 调试模式

> **调试建议**：
> - 如果需要看到更多的控件，可以选择"**复杂模式**"
> - 如果不想打开VSCode调试，可以切换到"**在线调试**"进行功能调试

## 📦 创建JavaScript项目

### 🛠️ 环境准备

| 工具 | 说明 | 安装方式 |
|------|------|----------|
| **Node.js** | JavaScript运行环境 | [官网下载](https://nodejs.org/) |
| **Git** | 版本控制工具 | [官网下载](https://git-scm.com/) |

### 📥 获取项目代码

#### 方式一：NPM安装（推荐）
```bash
# 如果执行下面的代码卡顿，注意将npm镜像设置为阿里云镜像
npm i deeke-script-app
```

#### 方式二：Git克隆
```bash
git clone https://github.com/DeekeScript/DeekeScript ./
# 如果执行下面的代码卡顿，注意将npm镜像设置为阿里云镜像
npm install
```

### 💻 开发环境配置

1. **打开VSCode**，将刚刚拉取的项目打开，如下图：

   <img src="/assets/typescript.png" width="100%" />

2. **编写JavaScript代码** - 开始您的自动化开发之旅

3. **[代码混淆](../code/encryption.md)**（可选）
   ```bash
   # 在项目根目录下执行如下命令（命令可以查看项目下的package.json文件）
   npm run build
   ```

   <img src="/assets/build.png" width="100%" />

4. **[同步项目到手机](../config/vscode.md)**，让APP启动

5. **运行测试** - 手机中的APP已经出现了相应的界面，可以在手机中点击对应的功能进行运行，大概如下图：

   <img src="/assets/deeke.png" width="30%" />

## 🔧 单个JavaScript调试

> **快速调试**：我不想创建项目，只想创建一个js文件，直接运行可以么？

**答案是可以的！** 目前DeekeScript支持单文件调试，操作非常简单：

### 📝 单文件调试步骤

1. **创建JS文件** - 创建一个js文件，如：`test.js`
2. **点击执行** - 点击右上角的"执行"图标即可

### ✨ 调试优势

> **DeekeScript** 支持单文件调试，并且支持引入模块（需要把相关文件同步到手机）。换句话说，可以直接运行您开发的某个功能，而不需要从手机上点击运行具体功能。

---

> **DeekeScript** - 让自动化开发变得简单、高效、专业
