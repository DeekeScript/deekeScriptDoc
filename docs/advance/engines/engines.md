# Engines

你可以把Engines理解为JavaScript运行时的管理器。有时候你需要在当前脚本环境中开启一个新的运行时来执行另外的JavaScript脚本（完全脱离当前JavaScript环境的上下文，而且不阻塞当前JavaScript代码运行），这个时候就需要使用Engines。

当然，在一些时候，如果你想彻底关闭JavaScript运行时，也是通过Engines来关闭。

`目前Engines运行时是通过线程池的方式实现，并且有数量限制，因此不能无限开启Engines，否则会报错`

## executeScript(filename)

> filename {string}   要执行的JS文件地址  必须为相对项目根目录的地址，非当前文件的相对地址
> 
> 返回 {Thread}

```javascript
//heart.js主要启动一个定时任务，每间隔几秒钟往服务器发送当前App的状态
Engines.executeScript("script/task/heart.js");//心跳脚本，监测App的在线状态

//保持当前线程不关闭，否则上面的代码也会关闭，导致心跳任务也立即关闭
setInterval(() => {
    console.log('保持当前线程活跃');
}, 1000);

//如果你需要一段时间后关闭心跳，可以使用Engines.closeOther();
Engines.closeOther();
```

## executeScriptStr(name, script)

> name {string}   脚本名称，自定义；实际中的任务名称，用于排查故障的时候使用
>
> script {string} 要执行的脚本内容
> 
> 返回 {Thread}

在新的环境中执行JavaScript，新的环境会开启新的堆栈空间，不会和当前的脚本有任何关联，是完全独立的。

```javascript
//heart.js主要启动一个定时器setInterval，每间隔几秒钟往服务器发送当前App的状态
Engines.executeScriptStr("My first DeekeScript", "console.log('My first DeekeScript');");
```

## closeAll()

关闭所有正在运行的脚本（包括子脚本、定时器、socket等）；注意不包括hooks启动的脚本

```javascript
Engines.closeAll();//关闭所有脚本运行时，当前脚本所在运行时也会被结束
```

## closeOther()

关闭除了当前脚本之外的其他脚本（包括脚本里面的子脚本、定时器、socket等）

> 如果你想在当前脚本执行一段时间后，进入休眠一段时间，并且在休眠的时间内执行其他脚本；休眠完成后，立马关闭其他脚本，就需要使用此方法


## closeHook()

关闭hooks启动的脚本

> 如果你在hooks里面启动了持续保活的脚本，可以使用这个方法关闭hooks脚本
