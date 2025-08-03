---
title: 控制台 - console
description: DeekeScript - 控制台 - console
---

# 控制台 - console

控制台模块提供了一个和Web浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。 console模块中的一些函数也可以直接作为全局函数使用，例如log, info等。

> 如果你不仅仅需要打印数据到控制台，还需要记录日志到文件，请使用 __[日志-Log](../log/log.md)__ 相关的方法

> 注意：console是DeekeScript中唯一一个首字母小写的对象（为了适应用户习惯）

## log([data][, ...args])

打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。

```javascript
console.log("输出的内容", 324, {name: "张三"});
```

## info([data][, ...args])

与console.log类似，但输出结果以绿色字体显示。输出优先级高于log, 用于输出重要信息。

## debug([data][, ...args])

与console.log类似，但输出结果以绿色字体显示。输出优先级高于log, 用于输出重要信息。

## warn([data][, ...args])

与console.log类似，但输出结果以蓝色字体显示。输出优先级高于info, 用于输出警告信息。

## error([data][, ...args])

与console.log类似，但输出结果以红色字体显示。输出优先级高于warn, 用于输出错误信息。
