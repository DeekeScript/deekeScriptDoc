---
title: Device Owner模式 - 开启指南
description: DeekeScript - Device Owner模式开启指南
---

# Device Owner模式 - 开启指南

本文档介绍如何将DeekeScript应用或使用DeekeScript打包后的App设置为Device Owner（设备所有者）。

> **重要说明**：不仅DeekeScript应用可以设置为Device Owner，使用DeekeScript打包后的App也可以设置为Device Owner。设置时只需要将命令中的包名替换为你打包后的App包名即可。

## 前提条件

在开始之前，请确保：

1. **设备状态** - 设备必须是**未激活状态**（首次启动）或需要**恢复出厂设置**
2. **Android版本** - Android 8.0 (API 26) 及以上版本
3. **ADB权限** - 你需要有设备的ADB调试权限
4. **USB调试** - 设备需要开启USB调试模式

> **重要提示**：
> - Device Owner只能在设备未激活时设置。如果设备已经激活，必须先恢复出厂设置。
> - **每台设备只能设置一个应用为Device Owner模式**。如果设备上已有Device Owner，必须先恢复出厂设置才能设置新的Device Owner。
> - **必须删除所有用户账户**：设置Device Owner前，需要删除设备上的所有用户账户（包括Google账户、小米账户、华为账户等）。如果设备已登录账号，需要先退出所有账号或恢复出厂设置。

## 通过ADB命令设置

这是最常用的方法，适用于开发和测试环境。

### 步骤1：准备设备

1. **恢复出厂设置**（如果设备已激活）
   - 进入设备设置 → 系统 → 重置选项 → 恢复出厂设置
   - 或通过Recovery模式恢复出厂设置
   - **注意**：恢复出厂设置会自动清除所有账户，这是设置Device Owner的必要步骤

2. **退出所有账户**（如果设备已激活但未恢复出厂设置）
   - 进入设备设置 → 账户
   - 删除所有已登录的账户（Google账户、小米账户、华为账户等）
   - 如果设备启用了多用户模式、访客模式或应用双开，也需要关闭或删除这些功能
   - **建议**：如果设备已激活，直接恢复出厂设置是最简单的方法
   - **小米手机特殊说明**：小米手机可能需要先登录小米账号才能通过adb执行命令，但设置Device Owner又需要退出小米账号。如果遇到这种情况，建议：
     - 先登录小米账号，完成adb授权等准备工作
     - 在执行Device Owner设置命令前，退出小米账号
     - 然后再执行adb设置Device Owner命令

3. **开启开发者选项**
   - 进入设备设置 → 关于手机
   - 连续点击"版本号"7次
   - 返回设置，找到"开发者选项"

4. **开启USB调试**
   - 进入开发者选项
   - 开启"USB调试"

5. **连接电脑**
   - 使用USB线连接设备到电脑
   - 在设备上允许USB调试授权

### 步骤2：获取应用包名和Receiver类名

**DeekeScript应用的Device Owner Receiver信息：**
- **包名**: `com.android.deeke.script`
- **Receiver类名**: `top.deeke.script.service.AdminReceiver`

> **提示**：如果你使用的是打包后的App，需要将包名替换为你打包后的App包名。Receiver类名保持不变，因为打包后的App会继承DeekeScript的Device Owner Receiver配置。

### 步骤3：执行ADB命令

> **小米手机注意事项**：如果是小米手机，adb调试相关设置可能需要登录小米账号，相关设置打开后，再退出账号，最后执行下面的命令。

在电脑上打开终端/命令提示符，执行以下命令：

```bash
adb shell dpm set-device-owner \
com.android.deeke.script/top.deeke.script.service.AdminReceiver
```

### 步骤4：验证设置

执行命令后，如果看到类似以下输出，说明设置成功：

```
Success: Device owner set to package com.android.deeke.script
Active admin set to component {com.android.deeke.script/top.deeke.script.service.AdminReceiver}
```

### 步骤5：在代码中验证

在DeekeScript脚本中验证Device Owner状态：

```javascript
if (DevicePolicy.isDeviceOwner()) {
    console.log("✅ Device Owner设置成功！");
} else {
    console.log("❌ Device Owner设置失败，请检查设置步骤");
}
```

## 常见问题

### Q1: 提示"Error: Can't set package as device owner because it's already a device owner or profile owner"

**原因**：设备上已经存在Device Owner或Profile Owner。

**解决方法**：
- 恢复出厂设置
- 或者移除现有的Device Owner（需要恢复出厂设置）

### Q2: 提示"Error: Can't set package as device owner because the device is already set up"

**原因**：设备已经激活，Device Owner只能在未激活的设备上设置。

**解决方法**：
- 恢复出厂设置
- 在恢复出厂设置后，不要完成设置向导，直接通过ADB设置

### Q3: 提示"Error: Device owner component cannot be found"

**原因**：应用未安装或Receiver类名不正确。

**解决方法**：
- 确认应用已正确安装
- 检查包名和Receiver类名是否正确
- 确认AndroidManifest.xml中已正确声明Receiver

### Q4: 设置后应用被卸载了怎么办？

**原因**：设备恢复出厂设置会清除所有应用。

**解决方法**：
- 重新安装应用
- Device Owner设置会在恢复出厂设置后清除，需要重新设置

### Q5: 如何移除Device Owner？

**方法**：
- 唯一的方法是恢复出厂设置
- Device Owner权限一旦授予，无法通过常规方法移除
- 这是Android系统的安全机制

### Q6: 设备已经激活，不想恢复出厂设置怎么办？

**抱歉**：如果设备已经激活，必须恢复出厂设置才能设置Device Owner。这是Android系统的限制，无法绕过。

## 验证Device Owner功能

设置成功后，你可以测试以下功能：

```javascript
// 1. 检查Device Owner状态
if (DevicePolicy.isDeviceOwner()) {
    console.log("Device Owner状态: ✅ 已设置");
    
    // 2. 测试锁屏功能
    DevicePolicy.lockNow();
    System.sleep(1000);
    DevicePolicy.wakeScreen();
    
    // 3. 测试应用管理
    let packages = Device.getInstalledPackages();
    console.log("已安装应用数量:", packages.length);
    
    // 4. 测试硬件控制
    DeviceHardware.setScreenCaptureDisabled(true);
    console.log("截屏功能已禁用");
} else {
    console.log("Device Owner状态: ❌ 未设置");
    console.log("请按照开启指南设置Device Owner");
}
```

## 生产环境注意事项

在生产环境中使用Device Owner模式时，请注意：

1. **设备采购** - 采购时选择支持Device Owner的设备
2. **初始化流程** - 制定标准的设备初始化流程
3. **备份数据** - 设置Device Owner前备份重要数据
4. **测试验证** - 在批量部署前，充分测试所有功能
5. **文档记录** - 记录每个设备的Device Owner设置时间

## 相关文档

- [Device Owner模式介绍](./introduction.md) - 了解Device Owner的基本概念
- [DevicePolicy API文档](./devicePolicy.md) - DevicePolicy功能说明
- [DeviceApp API文档](./deviceApp.md) - DeviceApp功能说明
- [DeviceHardware API文档](./deviceHardware.md) - DeviceHardware功能说明
- [DeviceKiosk API文档](./deviceKiosk.md) - DeviceKiosk功能说明

## 技术支持

如果在设置过程中遇到问题，可以：

1. 查看设备的系统日志：`adb logcat | grep -i "device.owner"`
2. 检查应用的AndroidManifest.xml配置
3. 确认设备的Android版本和制造商
4. 参考Android官方文档：https://developer.android.com/work/dpc/build-device-owner
