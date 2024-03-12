# 多线程

相信富有经验的开发者，会发现很多工具都有提供多线程支持；因为很多时候，我们需要同时执行两个操作（比如，采集直播间弹幕的时候，又要实时获取在线人数）；这个时候使用多线程的方式可以更好地满足我们的需求。DeekeScript本身也是支持多线程的；

> 特别说明一点，因为DeekeScript底层是基于V8的，而V8是基于单线程的
>
> 如果确实需要使用真正意义上的多线程，可以使用[Engines](./engines/engines.md)来实现

## Promise实现异步效果

当然，实际上，还可以通过异步的方式来实现你需要的效果，代码如下：

```javascript
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('任务1执行完毕');
      resolve();// 当任务1完成时，resolve这个Promise  
    }, 1000);
  });
}
  
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('任务2执行完毕');
      resolve();
    }, 1000);
  });  
}

task1();
task2();
```

如果你需要循环执行某些动作，可以采用setInterval定时器来实现。