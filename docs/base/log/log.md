# 日志 - Log

日志模块提供了一些日志写入方法，例如log, info等。

> 如果你不仅仅需要打印数据到控制台，还需要记录日志到文件，请使用[Log](../log/log.md)相关的方法

## setFile(filename);
设置日志输出文件

```javascript
//未打包：最终存储在 /data/data/top.deeke.script/files/log/myfile.log
//打包后：最终存储在 /data/data/com.example.myapp/files/log/myfile.log
Log.setFile("myfile.log");
```

## getFileDir(filename);
获取日志文件完整路径

```javascript
let filename = Log.getFileDir("myfile.log");

//未打包：返回内容为 /data/data/top.deeke.script/files/log/myfile.log
//打包后：返回内容为 /data/data/com.example.myapp/files/log/myfile.log
Log.log(filename);
```

## log([data][, ...args])
与console.log类似，区别是会记录输出内容到文件。

## info([data][, ...args])
与console.info类似，区别是会记录输出内容到文件。

## warn([data][, ...args])
与console.warn类似，区别是会记录输出内容到文件。

## error([data][, ...args])
与console.error，区别是会记录输出内容到文件。
