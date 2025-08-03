---
title: 在线打包
description: DeekeScript - 在线打包
---

# 在线打包

> <a href="https://mp.deeke.cn" target="_blank">DeekeScript开放平台</a>提供了在线打包的功能，用户可以在线打包Android应用。

### 操作流程

- 本地执行打包（压缩成zip文件）,打开项目根目录下面的package.json文件，可以看到如下配置

  ```
  "scripts": {
    "build": "cpx \"src/**/*\" script",
    "build-zip": "cpx \"src/**/*\" script && ts-node --esm ./deekeScriptZipBuild",
    "build-obfuscator": "cpx \"src/**/*\" script && ts-node --esm ./gulpfile",
    "build-obfuscator-zip": "cpx \"src/**/*\" script && ts-node --esm ./gulpfile && ts-node --esm ./deekeScriptZipBuild",
    "postinstall": "ts-node --esm init"
  },
  ```

- 执行`npm run build-zip`命令，即可打包成zip文件。(如果需要[混淆代码](../code/encryption.md)，请执行`npm run build-obfuscator-zip`命令)

- 执行完后，会在根目录下生成一个`deekeScript.zip`文件

- 登录<a href="https://mp.deeke.cn" target="_blank">DeekeScript开放平台</a>

- 购买会员服务

- 创建App

- 进入App包管理，创建包

- 将deekeScript.zip文件上传到包中

- 等待打包完成，下载App即可

> 注意：包名不允许修改，deekeScript.json文件的host配置的域名也不允许修改；后续只允许修改版本号~
