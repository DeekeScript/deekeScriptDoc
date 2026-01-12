---
title: Device Owner模式 - 开启指南
description: DeekeScript - Device Owner模式开启指南
---

# Device Owner模式 - 开启指南

本文档介绍如何将DeekeScript应用设置为Device Owner（设备所有者）。

## 前提条件

在开始之前，请确保：

1. **设备状态** - 设备必须是**未激活状态**（首次启动）或需要**恢复出厂设置**
2. **Android版本** - Android 5.0 (API 21) 及以上版本
3. **ADB权限** - 你需要有设备的ADB调试权限
4. **USB调试** - 设备需要开启USB调试模式

> **重要提示**：Device Owner只能在设备未激活时设置。如果设备已经激活，必须先恢复出厂设置。

## 方法一：通过ADB命令设置（推荐）

这是最常用的方法，适用于开发和测试环境。

### 步骤1：准备设备

1. **恢复出厂设置**（如果设备已激活）
   - 进入设备设置 → 系统 → 重置选项 → 恢复出厂设置
   - 或通过Recovery模式恢复出厂设置

2. **开启开发者选项**
   - 进入设备设置 → 关于手机
   - 连续点击"版本号"7次
   - 返回设置，找到"开发者选项"

3. **开启USB调试**
   - 进入开发者选项
   - 开启"USB调试"

4. **连接电脑**
   - 使用USB线连接设备到电脑
   - 在设备上允许USB调试授权

### 步骤2：获取应用包名和Receiver类名

DeekeScript应用的Device Owner Receiver信息：
- **包名**: `top.deeke.script`
- **Receiver类名**: `top.deeke.script.service.AdminReceiver`

### 步骤3：执行ADB命令

在电脑上打开终端/命令提示符，执行以下命令：

```bash
adb shell dpm set-device-owner top.deeke.script/.service.AdminReceiver
```

### 步骤4：验证设置

执行命令后，如果看到类似以下输出，说明设置成功：

```
Success: Device owner set to package top.deeke.script
Active admin set to component {top.deeke.script/top.deeke.script.service.AdminReceiver}
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

## 方法二：通过设备管理器设置（不推荐）

此方法在某些设备上可能不适用，仅作为备选方案。

### 步骤1：准备设备

1. 恢复出厂设置（如果设备已激活）
2. 开启USB调试
3. 安装DeekeScript应用

### 步骤2：激活设备

1. 启动设备，完成初始设置向导
2. **不要**在设置向导中设置设备管理员

### 步骤3：通过ADB跳过设置向导（如果仍在设置向导中）

```bash
adb shell settings put global device_provisioned 1
adb shell settings put secure user_setup_complete 1
```

### 步骤4：设置Device Owner

```bash
adb shell dpm set-device-owner top.deeke.script/.service.AdminReceiver
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
