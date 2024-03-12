
# 开发环境说明

### Android版本支持

DeekeScript对绝大多数Android版本都提供支持，主要支持Android 8.0及以上版本；对应的Android Api版本是26及以上。

### Android权限说明
使用DeekeScript可以获取Android的哪些权限呢？ 目前DeekeScript不限制应用获取Android权限，只要Android开放的权限，DeekeScript都会开放；DeekeScript默认支持了大多数常用<a href="#">权限</a>，对于DeekeScript默认不支持的权限，可以通过<a href="#">自定义权限</a>方式获取（注意此方式，需要将开发脚本<a href="#">打包成App</a>）。

### JavaScript支持哪些能力？

DeekeScript底层是基于<a href="https://v8.dev/docs" target="_blank">V8引擎的</a>，V8 是 Google 的开源高性能 JavaScript 和 WebAssembly 引擎，用 C++ 编写。它用于 Chrome 和 Node.js 等。
因此不用担心DeekeScript支持JavaScript的功能不全的问题。


### 基础函数支持
很多同学之前可能了解浏览器环境下的JavaScript和nodejs，因此可能习惯了使用setTimeout、setInterval、console.log等方法，这些DeekeScript都从底层进行了实现；因此可以放心使用这些函数。

### 是否支持模块化
另外关注点更多的可能是模块化部分，因为DeekeScript本身就是为了支持项目化（针对某个或者某些应用开发N个脚本）开发的工具（而不仅仅只是支持单个脚本的开发），所以对模块化支持也是很友好的，具体可以参阅<a href="#">模块化</a>

### 异步支持
DeekeScript提供了异步支持，具体参考<a href="#">DeekeScript异步</a>

### 是否支持多线程？

相信富有经验的开发者，会发现很多工具都有提供多线程支持；因为很多时候，我们需要同时执行两个操作（比如，采集直播间弹幕的时候，又要实时获取在线人数）；这个时候使用多线程的方式可以更好地满足我们的需求。DeekeScript本身也是支持多线程的；因为JavaScript是不支持多线程的，实际上底层是由Java在执行，具体可以参考<a href="#">多线程篇</a>。

### 其他支持

类似http请求，websocket都有支持，具体可以参考文档对应部分
