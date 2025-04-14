# Engines

你可以把Engines理解为JavaScript运行时的管理器。有时候你需要在当前脚本环境中开启一个新的运行时来执行另外的JavaScript脚本（完全脱离当前JavaScript环境的上下文，而且不阻塞当前JavaScript代码运行），这个时候就需要使用Engines。

当然，在一些时候，如果你想彻底关闭JavaScript运行时，也是通过Engines来关闭。

## executeScript(filename)

> filename {string}   要执行的JS文件地址  必须为相对项目根目录的地址，非当前文件的相对地址
> 
> 返回 {Thread}

```javascript
//heart.js主要启动一个定时任务，每间隔几秒钟往服务器发送当前App的状态
Engines.executeScript("script/task/heart.js");//心跳脚本，监测App的在线状态

//特别说明，即使当前脚本终止运行了，heart.js依旧会继续运行
//如果需要关闭heart.js，可以使用 Engines.closeAll方法来操作;
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

关闭所有正在运行的脚本和定时器

```javascript
Engines.closeAll();//关闭所有脚本运行时，当前脚本所在运行时也会被结束
```

## closeOther()

关闭除了当前脚本之外的其他脚本（有一定延时）和所有定时器

> 如果你想在当前脚本执行一段时间后，进入休眠一段时间，并且在休眠的时间内执行其他脚本；休眠完成后，立马关闭其他脚本，就需要使用此方法
