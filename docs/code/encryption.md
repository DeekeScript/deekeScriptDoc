# 混淆加密

JavaScript代码混淆，一定程度上达到了保护原代码的目的。DeekeScript默认采用了UglifyJS插件进行代码混淆。

> 注意：开发模式下不建议使用混淆，生产环境可以使用混淆。同时还需要了解到混淆之后，给生产bug排查带来了一定阻碍。

## UglifyJS

> UglifyJS 是一个 JavaScript 压缩与混淆工具，专注于减少代码体积、优化逻辑结构，并提供基础的变量名混淆功能。它是前端工程化中常用的代码优化工具。

### 核心功能
> 代码压缩

    删除空格、换行、注释。

    缩短变量名（如 myVariable → a）。

    合并表达式（如 a=1; b=2; → a=1,b=2;）。

> 语法优化

    移除未使用的代码（Dead Code Elimination）。

    简化逻辑（如 if (true) { ... } 直接执行内部代码）。

    数学表达式优化（如 2 * 3 → 6）。

> 变量混淆

    重命名局部变量（全局变量默认不混淆）。

    可选混淆属性名（需手动配置）。

### 执行步骤：

> 打开项目根目录下面的package.json文件，可以看到如下配置：

  ```
  "scripts": {
    "build": "cpx \"src/**/*\" script",
    "build-zip": "cpx \"src/**/*\" script && ts-node --esm ./deekeScriptZipBuild",
    "build-obfuscator": "cpx \"src/**/*\" script && ts-node --esm ./gulpfile",
    "build-obfuscator-zip": "cpx \"src/**/*\" script && ts-node --esm ./gulpfile && ts-node --esm ./deekeScriptZipBuild",
    "postinstall": "ts-node --esm init"
  },
  ```
> build命令是将源码复制到script文件夹；build-zip命令是将源码复制到script文件夹并打包成zip；包含“obfuscator”相关的命令则是在原有命令基础上增加代码混淆。
>
> 混淆执行命令：npm run build-obfuscator
