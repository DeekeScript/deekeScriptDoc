---
title: DeviceApp - 设备应用管理
description: DeekeScript - DeviceApp - 设备应用管理（Device Owner模式）
---

# DeviceApp - 设备应用管理

DeviceApp对象提供了Device Owner模式下的应用管理功能，包括静默安装、卸载、隐藏应用以及权限管理等功能。

> **注意：** 所有Device Owner相关的功能都需要应用被设置为Device Owner后才能使用。如果不是Device Owner，相关方法将返回失败。

## 权限策略常量

DeviceApp类提供了以下权限策略常量：

- `DeviceApp.PERMISSION_POLICY_PROMPT` (0) - 提示用户
- `DeviceApp.PERMISSION_POLICY_AUTO_GRANT` (1) - 自动授予
- `DeviceApp.PERMISSION_POLICY_AUTO_DENY` (2) - 自动拒绝

## 权限授予状态常量

- `DeviceApp.PERMISSION_GRANT_STATE_DEFAULT` (0) - 默认状态
- `DeviceApp.PERMISSION_GRANT_STATE_DENIED` (1) - 已拒绝
- `DeviceApp.PERMISSION_GRANT_STATE_GRANTED` (2) - 已授予

## installPackage(packageUri)

**参数：** `packageUri {string}` 应用安装包URI（文件路径），例如 "file:///sdcard/app.apk" 或 "/sdcard/app.apk"

**返回：** `{boolean}`

静默安装应用。需要Device Owner权限。

**参数说明：**
- `packageUri` - 可以是完整的文件路径（如 "/sdcard/app.apk"）或file://格式的URI（如 "file:///sdcard/app.apk"）

**返回：**
- `true` - 安装会话已创建（安装是异步的，通过会话进行）
- `false` - 安装失败（通常是因为不是Device Owner或文件不存在）

```javascript
// 安装APK文件
let success = DeviceApp.installPackage("/sdcard/app.apk");
if (success) {
    console.log("安装会话已创建");
} else {
    console.log("安装失败，请检查是否为Device Owner或文件是否存在");
}

// 使用file://格式
let success2 = DeviceApp.installPackage("file:///sdcard/app.apk");
```

## uninstallPackage(packageName)

**参数：** `packageName {string}` 应用包名，例如 "com.example.app"

**返回：** `{boolean}`

静默卸载应用。需要Device Owner权限。

**返回：**
- `true` - 卸载请求已提交（卸载是异步的）
- `false` - 卸载失败（通常是因为不是Device Owner）

```javascript
// 卸载应用
let success = DeviceApp.uninstallPackage("com.example.app");
if (success) {
    console.log("卸载请求已提交");
} else {
    console.log("卸载失败，请检查是否为Device Owner");
}
```

## setApplicationHidden(packageName, hidden)

**参数：**
- `packageName {string}` 应用包名，例如 "com.example.app"
- `hidden {boolean}` true表示隐藏，false表示显示

**返回：** `{boolean}`

隐藏/显示应用。隐藏的应用将从启动器中移除，但不会卸载。需要Device Owner权限。

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner）

```javascript
// 隐藏应用
let success = DeviceApp.setApplicationHidden("com.example.app", true);
if (success) {
    console.log("应用已隐藏");
}

// 显示应用
let success2 = DeviceApp.setApplicationHidden("com.example.app", false);
if (success2) {
    console.log("应用已显示");
}
```

## isApplicationHidden(packageName)

**参数：** `packageName {string}` 应用包名，例如 "com.example.app"

**返回：** `{boolean}`

检查应用是否隐藏。需要Device Owner权限。

**返回：**
- `true` - 应用已隐藏
- `false` - 应用未隐藏或查询失败

```javascript
// 检查应用是否隐藏
let isHidden = DeviceApp.isApplicationHidden("com.example.app");
if (isHidden) {
    console.log("应用已隐藏");
} else {
    console.log("应用未隐藏");
}
```

## setPermissionPolicy(policy)

**参数：** `policy {number}` 权限策略，使用常量：
- `DeviceApp.PERMISSION_POLICY_PROMPT` (0) - 提示用户
- `DeviceApp.PERMISSION_POLICY_AUTO_GRANT` (1) - 自动授予
- `DeviceApp.PERMISSION_POLICY_AUTO_DENY` (2) - 自动拒绝

**返回：** `{boolean}`

设置应用权限策略。需要Device Owner权限。

**返回：**
- `true` - 设置成功
- `false` - 设置失败（通常是因为不是Device Owner）

```javascript
// 设置权限策略为自动授予
let success = DeviceApp.setPermissionPolicy(DeviceApp.PERMISSION_POLICY_AUTO_GRANT);
if (success) {
    console.log("权限策略设置成功");
}

// 使用常量
let success2 = DeviceApp.setPermissionPolicy(DeviceApp.PERMISSION_POLICY_AUTO_DENY);
```

## grantRuntimePermission(packageName, permission)

**参数：**
- `packageName {string}` 应用包名，例如 "com.example.app"
- `permission {string}` 权限名称，例如 "android.permission.CAMERA"

**返回：** `{boolean}`

授予运行时权限。需要Device Owner权限。

**返回：**
- `true` - 权限授予成功
- `false` - 权限授予失败（通常是因为不是Device Owner或权限无效）

```javascript
// 授予相机权限
let success = DeviceApp.grantRuntimePermission("com.example.app", "android.permission.CAMERA");
if (success) {
    console.log("权限授予成功");
} else {
    console.log("权限授予失败");
}
```

## isPermissionGranted(packageName, permission)

**参数：**
- `packageName {string}` 应用包名，例如 "com.example.app"
- `permission {string}` 权限名称，例如 "android.permission.CAMERA"

**返回：** `{boolean}`

检查权限是否已授予。需要Device Owner权限。

**返回：**
- `true` - 权限已授予
- `false` - 权限未授予或查询失败

```javascript
// 检查权限是否已授予
let isGranted = DeviceApp.isPermissionGranted("com.example.app", "android.permission.CAMERA");
if (isGranted) {
    console.log("权限已授予");
} else {
    console.log("权限未授予");
}
```
