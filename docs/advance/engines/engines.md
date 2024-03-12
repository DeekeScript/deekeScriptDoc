# Engines

首先有必要介绍一下什么是Engines。你可以把Engines理解为JavaScript运行时的管理器。默认情况下，你的JavaScript运行在一个V8环境中。
在某些情况下，你可能需要在你的JavaScript代码中执行一段代码，但是希望这段代码是独立于当前环境（并且不阻塞当前的JavaScript运行），
这个时候你就会使用Engines来创建一个新的JavaScript运行时，代码将会在一个新的V8环境中运行。

当然，在一些时候，如果你想彻底关闭JavaScript运行时，也是通过Engines来关闭的。

> 注意，如果你需要使用[多线程](../thread.md)，可以采用Engines来实现

## exec(filename)
> filename {string}   要执行的JS文件地址  必须为相对项目根目录的地址，非当前文件的相对地址
> 
> 返回 {Thread}

在新的环境中执行JavaScript，新的环境会开启新的堆栈空间，不会和当前的脚本有任何关联，是完全独立的。
比如：你想执行当前脚本的时候，又要定时与服务器进行沟通或者做一些其他事情，可以采用这种方式实现。

```javascript
//heart.js主要启动一个定时器setInterval，每间隔几秒钟往服务器发送当前App的状态
Engines.exec("js/heart.js");//心跳脚本，监测App的在线状态

//特别说明，即使当前脚本终止运行了，heart.js依旧会继续运行
//如果需要关闭heart.js，可以使用 Engines.closeAll方法来操作;
```

## closeAll(bool)
> bool {boolean} 是否关闭当前脚本，为true则关闭当前脚本，否则只关闭当前脚本以外的脚本

> 建议在脚本运行完成后进行关闭，否则可能会出现内存泄漏

关闭JavaScript运行时和运行时所在的线程

```javascript
Engines.closeAll(true);//关闭所有脚本运行时，当前脚本所在运行时也会被结束
```
