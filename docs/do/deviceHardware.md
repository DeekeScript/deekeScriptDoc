---
title: DeviceHardware - 设备硬件控制
description: DeekeScript - DeviceHardware - 设备硬件控制（Device Owner模式）
---

# DeviceHardware - 设备硬件控制

DeviceHardware对象提供了Device Owner模式下的硬件功能控制，如截屏、锁屏界面等。

> **注意：** 所有Device Owner相关的功能都需要应用被设置为Device Owner后才能使用。如果不是Device Owner，相关方法将返回失败。

## setScreenCaptureDisabled(disabled)

**参数：** `disabled {boolean}` true表示禁用截屏，false表示启用截屏

**返回：** `{boolean}`

禁用/启用截屏功能。禁用后，用户无法通过系统快捷键截屏。需要Device Owner权限。API级别要求：API 28 (Android 9.0) 及以上。

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner或API级别过低）

```javascript
// 禁用截屏
let success = DeviceHardware.setScreenCaptureDisabled(true);
if (success) {
    console.log("截屏功能已禁用");
} else {
    console.log("设置失败，请检查是否为Device Owner或Android版本是否为9.0及以上");
}

// 启用截屏
let success2 = DeviceHardware.setScreenCaptureDisabled(false);
if (success2) {
    console.log("截屏功能已启用");
}
```

## setKeyguardDisabled(disabled)

**参数：** `disabled {boolean}` true表示禁用锁屏界面，false表示启用锁屏界面

**返回：** `{boolean}`

禁用/启用锁屏界面。禁用后，设备将不会显示锁屏界面（但可能仍需要解锁）。需要Device Owner或Profile Owner权限。

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner）

```javascript
// 禁用锁屏界面
let success = DeviceHardware.setKeyguardDisabled(true);
if (success) {
    console.log("锁屏界面已禁用");
} else {
    console.log("设置失败，请检查是否为Device Owner");
}

// 启用锁屏界面
let success2 = DeviceHardware.setKeyguardDisabled(false);
if (success2) {
    console.log("锁屏界面已启用");
}
```

## setStatusBarDisabled(disabled)

**参数：** `disabled {boolean}` true表示禁用状态栏，false表示启用状态栏

**返回：** `{boolean}`

禁用/启用状态栏。禁用后，状态栏将被隐藏。需要Device Owner权限。API级别要求：API 26 (Android 8.0) 及以上。

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner或API级别过低）

```javascript
// 禁用状态栏
let success = DeviceHardware.setStatusBarDisabled(true);
if (success) {
    console.log("状态栏已禁用");
} else {
    console.log("设置失败，请检查是否为Device Owner或Android版本是否为8.0及以上");
}

// 启用状态栏
let success2 = DeviceHardware.setStatusBarDisabled(false);
if (success2) {
    console.log("状态栏已启用");
}
```
