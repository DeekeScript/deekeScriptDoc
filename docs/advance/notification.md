---
title: 系统通知
description: DeekeScript - 系统通知
---

# 系统通知

主要接收系统内其他App发出的通知

## startService
> 返回 {void}

启动服务

```

let hasAccess = Access.hasNotificationAccess();

console.log('是否有通知读取权限', hasAccess);

if (!hasAccess) {
    Access.requestNotificationAccess();
    System.exit();
}

NotificationBridge.startService();
```

## startListening(listener, listenerClosed)
> 返回 {void}

监听通知

```

let hasAccess = Access.hasNotificationAccess();

console.log('是否有通知读取权限', hasAccess);

if (!hasAccess) {
    Access.requestNotificationAccess();
    System.exit();
}

NotificationBridge.startService();
NotificationBridge.startListening((packageName, title, text) => {
    console.log('收到通知', packageName, title, text);
}, (packageName, title, text) => {
    console.log('通知监听已关闭', packageName, title, text);
});

NotificationBridge.startService();

setInterval(() => {
    console.log('正在监听中...');
}, 10000);

```