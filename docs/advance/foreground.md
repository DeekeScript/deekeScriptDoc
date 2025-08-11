---
title: 前台服务
description: DeekeScript - 前台服务
---

# 前台服务

如果你需要后台常驻任务，可以使用前台服务

## startService
> 返回 {void}

启动前台服务

```
ForegroundServiceBridge.setContent('测试', '前台服务');
ForegroundServiceBridge.startService();
```

## setContent
> 返回 {void}

设置前台服务的标题和描述

```
ForegroundServiceBridge.setContent('测试', '前台服务');
ForegroundServiceBridge.startService();
```

## register(func: Function)

> func 需要执行的方法
>
> 返回 {void}

前台服务执行的任务（注意，需要在服务启动前执行）

```
let close = false;
ForegroundServiceBridge.setContent('测试', '前台服务');
ForegroundServiceBridge.register(()=>{
    console.log('前台服务启动成功');
    let m = setInterval(() => {
        console.log('正在执行任务...');
        if(close){
            clearInterval(m);
        }
    }, 3000);
});

ForegroundServiceBridge.startService();

let i = 0;
setInterval(() => {
    console.log('正在监听中...');
    if(i++ >= 1){
        ForegroundServiceBridge.stopService();
        close = true;
    }
}, 10000);

```


## stopService

> 返回 {void}

停止服务

```javascript
NotificationBridge.stopService();
```