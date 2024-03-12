# 系统函数 - System

System对象，提供一些常用的方法。

## sleep(millisecond)
> millisecond {number} 毫秒

休眠millisecond毫秒

```javascript
console.log('立即输出');
System.sleep(1000);
console.log('1秒钟后输出');
```

## time()
> 返回 {string}

返回当前系统时间

```javascript
console.log(System.time());//输出：2024-03-07 12:12:12
```

## currentActivity()
> 返回 {string}

返回最近一次监测到的正在运行的Activity名称，一般可以认为就是当前正在运行的Activity的名称。
此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

```javascript
console.log(System.currentActivity());//输出：top.deeke.script
```


## currentPackage()
> 返回 {string}

返回最近一次监测到的正在运行的Package的名称，一般可以认为就是当前正在运行的Package的名称。
此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

```javascript
console.log(System.currentPackage());//输出：top.deeke.script
```

## setClip(content)
> content {string}
> 
> 返回 {void}

将内容写入到剪切板中

## getClip()
> 返回 {string|null}

返回剪切板内容

## toast(message)
> msg {string} 要显示的信息
> 
> 返回 {void}

以气泡显示信息message几秒。(具体时间取决于安卓系统，一般都是2秒)

注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。


## toastLong(message)
> msg {string} 要显示的信息
> 
> 返回 {void}

比toast(message)显示的更久一些，具体时长以开发机为准

注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。

## waitForActivity(activity, period, timeout)
> activity {string} 等待的Activity名称
> 
> period {number} 等待的毫秒数
> 
> timeout {number} 等待的总毫秒数
> 
> 返回 {void}

等待Activity出现，period为检查Activity的间隔。如果timeout毫秒后未出现，则停止等待。


## waitForPackage(package, period, timeout)
> package {string} 等待的Package名称
> 
> period {number} 等待的毫秒数
> 
> timeout {number} 等待的总毫秒数
> 
> 返回 {void}

等待Package出现，period为检查Package的间隔。如果timeout毫秒后未出现，则停止等待。


## exit(closeAll)
> closeAll {boolean} 是否关闭所有脚本引擎，为true则关闭所有，否则只关闭当前引擎外的其他脚本引擎
> 
> 返回 {void}

关闭脚本引擎
