# 多线程-Thread

相信富有经验的开发者，会发现很多工具都有提供多线程支持；因为很多时候，我们需要同时执行两个操作（比如，采集直播间弹幕的时候，又要实时获取在线人数）；这个时候使用多线程的方式可以更好地满足我们的需求。DeekeScript本身也是支持多线程的；

> 还可以使用[Engines](./engines/engines.md)来实现多线程效果
> 也可以使用[setInterval](../base/timer/timer.md)定时器来实现


## 多线程使用

```
let obj = {
  run: function () {
    console.log('线程');
  } 
}

new java.lang.Thread(new java.lang.Runnable(obj)).start();
for(let i = 0; i < 10; i++){
  console.log(i);
  System.sleep(2000);
}

//输出如下
/**

18:02:29.063     0
18:02:29.063     线程
18:02:31.071     1
18:02:33.081     2
18:02:35.084     3
18:02:37.086     4
18:02:39.097     5
18:02:41.111     6
18:02:43.124     7
18:02:45.132     8
18:02:47.135     9
*/
            
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
