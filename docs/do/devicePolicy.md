---
title: DevicePolicy - 设备策略管理
description: DeekeScript - DevicePolicy - 设备策略管理（Device Owner模式）
---

# DevicePolicy - 设备策略管理

DevicePolicy对象提供了Device Owner模式下的设备策略管理功能，包括锁屏、亮屏等基础操作。

> **注意：** 所有Device Owner相关的功能都需要应用被设置为Device Owner后才能使用。如果不是Device Owner，相关方法将返回失败。

## isDeviceOwner()

**返回：** `{boolean}`

检查当前应用是否为Device Owner。

**返回：**
- `true` - 当前应用是Device Owner
- `false` - 当前应用不是Device Owner

```javascript
if (DevicePolicy.isDeviceOwner()) {
    console.log("当前应用是Device Owner");
} else {
    console.log("当前应用不是Device Owner");
}
```

## lockNow()

**返回：** `{boolean}`

立即锁屏/息屏。需要Device Owner权限。

**返回：**
- `true` - 锁屏成功
- `false` - 锁屏失败（通常是因为不是Device Owner）

```javascript
// 立即锁屏
let success = DevicePolicy.lockNow();
if (success) {
    console.log("锁屏成功");
} else {
    console.log("锁屏失败，请检查是否为Device Owner");
}
```

## wakeScreen()

**返回：** `{boolean}`

亮屏/唤醒屏幕。需要WAKE_LOCK权限（在AndroidManifest.xml中声明）。

**返回：**
- `true` - 亮屏成功
- `false` - 亮屏失败

```javascript
// 唤醒屏幕
let success = DevicePolicy.wakeScreen();
if (success) {
    console.log("亮屏成功");
}
```
