---
title: 多线程-Thread
description: DeekeScript - 多线程-Thread
---

# 多线程-Thread

相信富有经验的开发者，会发现很多工具都有提供多线程支持；因为很多时候，我们需要同时执行两个操作（比如，采集直播间弹幕的时候，又要实时获取在线人数）；这个时候使用多线程的方式可以更好地满足我们的需求。DeekeScript本身也是支持多线程的；

`我们推荐使用setTimeout或者setInterval等方式来代替多线程的方式实现相关功能，或者使用Engines来实现多线程；当前这种方式可能会出现未知的问题，请谨慎使用`

> 使用[Engines](./engines/engines.md)来实现多线程效果
>
> 使用[setInterval](../base/timer/timer.md)定时器，通过异步的方式来实现系统的效果


## 多线程使用

```
let obj = {
  run: function () {
    console.log('线程');
  } 
}

let thread = new java.lang.Thread(new java.lang.Runnable(obj))
thread.start();
thread.join();//这句会阻塞当前线程，直到线程结束，当前线程才会结束

//如果你不使用join()方法，那么当前会立马结束，那么线程就会结束
//当然你也可以使用setInterval方法让当前线程保持活跃
//使用setInterval方法之后，也可以不使用thread.join()方法
setInterval(function () {
  console.log('线程保持活跃');
}, 1000);
```

## 其他使用多线程的方法

```
let obj = {
  run: function () {
    console.log('线程');
  }
}

//注意java.lang.Thread和java.lang.Runnable外层不需要引号
let javaImporterTest = JavaImporter(java.lang.Thread, java.lang.Runnable);

with(javaImporterTest){
  new Thread(new Runnable(obj)).start();
}
```
