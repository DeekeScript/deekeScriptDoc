---
title: 设备 - Device
description: DeekeScript - 设备 - Device
---

# 设备 - Device

Device对象，提供一些设备相关的方法。

## keepCpuAwake(seconds)

**参数：** `seconds {number}` 屏幕常量秒数

**返回：** `{void}`

息屏后，保持 CPU 唤醒，延时释放

```javascript
Device.keepCpuAwake(600);//常量10分钟
```

## releaseCpuWakeLock()

**返回：** `{void}`

释放CPU唤醒状态

## width()

**返回：** `{number}` 返回宽度  单位为px

获取屏幕真实的宽度（像素值）；手机旋转方向后，依然会返回真实的宽度

## height()

**返回：** `{number}` 返回宽度  单位为px

获取屏幕真实的高度（像素值）；手机旋转方向后，依然会返回真实的高度

## sdkInt()

**返回：** `{number}`

返回SDK的版本号

## device()

**返回：** `{string}`

> 请注意，这个返回值并不是设备的市场名称（如"华为荣耀V30"）、品牌名（如"华为"）或型号名（如"V30"）。它更偏向于一个内部或技术名称，用于在Android框架和开发中识别不同的设备硬件。

获取设备的硬件标识，比如华为荣耀，可能返回"honor_xxx"的字符串

## androidVersion()

**返回：** `{string}`

返回Android的版本号

## createUuid()

**返回：** `{string}`

> 由于Android日益严格的权限管控，导致设备的唯一标识不太方便获取，本系统提供了一个uuid生成方案，来解决设备识别问题；建议在开发者在用户激活设备之后，使用此方法创建一个uuid（创建前，请使用getUuid检查是否存在）；后续将这个唯一标识和激活码绑定；

> 注意：App卸载后、设备恢复出厂等操作，将会让生成的uuid丢失

设置设备的随机的uuid

## getUuid()

**返回：** `{string}`

获取设备的随机的uuid

## getToken()

**返回：** `{string}`

获取设备激活码（用户激活后，才有次值）

## getAttr(key)

**参数：** `key {string}`

**返回：** `{string}`

获取设备其他数据，也可以使用getAttr('token')代替getToken方法

## isScreenOn()

**返回：** `{boolean}`

获取屏幕是否亮屏

## brand()

**返回：** `{string}`

获取设备的品牌信息；对于华为（Huawei）的设备，它会返回 "huawei"。

## os()

**返回：** `{string}`

获取设备操作系统信息；对于大多数标准的 Android 设备，Build.VERSION.BASE_OS 通常返回 "android"。然而，在某些设备或定制 Android 版本中，制造商可能会为其定制的基础操作系统设置不同的名称或标识符。

## model()

**返回：** `{string}`

获取设备的model信息；如：荣耀特定设备的型号名称，如 "Honor V30" 或类似的字符串

## codename()

**返回：** `{string}`

获取设备的代号信息；如：荣耀特定设备的代号，如 "VOG-AL00" 或类似的字符串
