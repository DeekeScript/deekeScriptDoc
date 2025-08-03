---
title: 日志 - Log
description: DeekeScript - 日志 - Log
---

# 日志 - Log

日志模块提供了一些日志写入方法。

> 如果你需要记录日志到文件，请使用Log.log()方法

## setFile(filename);

设置日志输出文件

```javascript
//未打包：最终存储在 /data/data/com.android.deeke.script/files/log/myfile.log
//打包后：最终存储在 /data/data/com.example.myapp/files/log/myfile.log
Log.setFile("myfile.log");
```

## log([data][, ...args])

与console.log类似，区别是会记录输出内容到文件，而不会打印到控制台。

```javascript
Log.log(132,"sdfds", [12,3]);
```
