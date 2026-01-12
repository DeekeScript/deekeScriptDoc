---
title: DeviceKiosk - 设备Kiosk模式管理
description: DeekeScript - DeviceKiosk - 设备Kiosk模式管理（Device Owner模式）
---

# DeviceKiosk - 设备Kiosk模式管理

DeviceKiosk对象提供了Device Owner模式下的锁定任务模式（Lock Task Mode）功能，用于Kiosk场景。

> **注意：** 所有Device Owner相关的功能都需要应用被设置为Device Owner后才能使用。如果不是Device Owner，相关方法将返回失败。

## setLockTaskPackages(packages)

**参数：** `packages {Array<string>}` 应用包名数组

**返回：** `{boolean}`

设置锁定任务模式的应用包名列表。需要Device Owner权限。设置后，这些应用可以进入锁定任务模式（Kiosk模式）。

**参数说明：**
- `packages` - 字符串数组，包含允许进入锁定任务模式的应用包名

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner）

```javascript
// 设置锁定任务应用列表
let packages = ["com.example.app", "com.example.kiosk"];
let success = DeviceKiosk.setLockTaskPackages(packages);
if (success) {
    console.log("锁定任务应用设置成功");
} else {
    console.log("设置失败，请检查是否为Device Owner");
}
```

## getLockTaskPackages()

**返回：** `{Array<string> | null}`

获取锁定任务模式的应用包名列表。需要Device Owner权限。

**返回：**
- `{Array<string>}` - 应用包名数组，如果失败返回null

```javascript
// 获取锁定任务应用列表
let packages = DeviceKiosk.getLockTaskPackages();
if (packages) {
    console.log("锁定任务应用列表:", packages);
    for (let i = 0; i < packages.length; i++) {
        console.log("  - " + packages[i]);
    }
} else {
    console.log("获取失败，请检查是否为Device Owner");
}
```

## isLockTaskModeEnabled()

**返回：** `{boolean}`

检查锁定任务模式是否启用。注意：此方法检查的是是否配置了锁定任务应用，而不是当前是否处于锁定任务模式。

**返回：**
- `true` - 已配置锁定任务应用（锁定任务模式可用）
- `false` - 未配置锁定任务应用

```javascript
// 检查锁定任务模式是否启用
let enabled = DeviceKiosk.isLockTaskModeEnabled();
if (enabled) {
    console.log("锁定任务模式已配置");
} else {
    console.log("锁定任务模式未配置");
}
```
