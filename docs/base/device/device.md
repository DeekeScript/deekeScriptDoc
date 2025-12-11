---
title: 设备 - Device
description: DeekeScript - 设备 - Device
---

# 设备 - Device

Device对象，提供一些设备相关的方法。

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

## manufacturer()

**返回：** `{string}`

获取设备制造商信息，如 "HUAWEI"、"Xiaomi" 等

## hardware()

**返回：** `{string}`

获取硬件名称，如 "kirin990" 等

## board()

**返回：** `{string}`

获取主板型号信息

## product()

**返回：** `{string}`

获取产品名称信息

## bootloader()

**返回：** `{string}`

获取 Bootloader 版本信息

## buildId()

**返回：** `{string}`

获取构建ID信息

## display()

**返回：** `{string}`

获取显示版本信息

## fingerprint()

**返回：** `{string}`

获取设备指纹信息

## host()

**返回：** `{string}`

获取主机名信息

## user()

**返回：** `{string}`

获取构建用户信息

## getCpuAbi()

**返回：** `{string}`

获取CPU架构信息，如 "arm64-v8a"、"armeabi-v7a" 等

## getCpuAbis()

**返回：** `{string[]}`

获取所有支持的CPU架构列表

## getWifiIPAddress()

**返回：** `{string}`

获取WiFi网络的IP地址（仅WiFi连接时有效）。如果WiFi未连接，返回空字符串 `""`

```javascript
let wifiIP = Device.getWifiIPAddress();
console.log("WiFi IP:", wifiIP); // 例如: "192.168.1.100"
```

## getIPAddress()

**返回：** `{string}`

获取当前活动网络的IP地址（支持WiFi和移动网络，返回局域网IP）。如果获取失败，返回 `"127.0.0.1"`

```javascript
let ip = Device.getIPAddress();
console.log("当前IP:", ip); // 例如: "192.168.1.100" 或 "10.0.0.5"
```

## getPublicIPAddress()

**返回：** `{string}`

获取公网IPv4地址（需要通过HTTP请求外部服务）。如果获取失败，返回空字符串 `""`

> 注意：此方法需要网络连接，可能需要几秒钟时间

```javascript
let publicIP = Device.getPublicIPAddress();
console.log("公网IP:", publicIP); // 例如: "123.45.67.89"
```

## getPublicIPAddressV6()

**返回：** `{string}`

获取公网IPv6地址（需要通过HTTP请求外部服务）。如果获取失败，返回空字符串 `""`

> 注意：此方法需要网络连接，可能需要几秒钟时间

```javascript
let publicIPV6 = Device.getPublicIPAddressV6();
console.log("公网IPv6:", publicIPV6); // 例如: "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
```

## getPublicIPInfo()

**返回：** `{object}`

获取公网IP信息（包含IPv4和IPv6）

**返回对象：**
- `ipv4 {string}` - 公网IPv4地址
- `ipv6 {string}` - 公网IPv6地址

```javascript
let ipInfo = Device.getPublicIPInfo();
console.log("IPv4:", ipInfo.ipv4);
console.log("IPv6:", ipInfo.ipv6);
```

## getIpInfo()

**返回：** `{object}`

获取完整的IP信息（包括当前IP、WiFi IP、公网IP等）

**返回对象：**
- `ip {string}` - 当前活动网络的IP地址（支持WiFi和移动网络，局域网IP）
- `wifiIP {string}` - WiFi网络的IP地址（仅WiFi连接时有效）
- `publicIP {string}` - 公网IPv4地址
- `publicIPV6 {string}` - 公网IPv6地址
- `publicIPInfo {object}` - 公网IP信息（包含IPv4和IPv6）

```javascript
let ipInfo = Device.getIpInfo();
console.log("当前IP:", ipInfo.ip);
console.log("WiFi IP:", ipInfo.wifiIP);
console.log("公网IPv4:", ipInfo.publicIP);
console.log("公网IPv6:", ipInfo.publicIPV6);
```

## getMacAddress()

**返回：** `{string}`

获取MAC地址（需要WiFi已连接）。如果WiFi未连接，返回空字符串 `""`

```javascript
let mac = Device.getMacAddress();
console.log("MAC地址:", mac);
```

## getNetworkType()

**返回：** `{string}`

获取网络类型，可能的值：
- `"WiFi"` - WiFi网络
- `"Mobile"` - 移动网络
- `"Ethernet"` - 以太网
- `"Other"` - 其他网络类型
- `"None"` - 无网络连接

```javascript
let networkType = Device.getNetworkType();
console.log("网络类型:", networkType);
```

## isNetworkConnected()

**返回：** `{boolean}`

检查网络是否已连接

```javascript
if (Device.isNetworkConnected()) {
    console.log("网络已连接");
} else {
    console.log("网络未连接");
}
```

## getNetworkInfo()

**返回：** `{object}`

获取完整的网络信息

**返回对象：**
- `type {string}` - 网络类型（WiFi、Mobile、Ethernet等）
- `connected {boolean}` - 网络是否已连接
- `macAddress {string}` - MAC地址
- `ip {string}` - 当前活动网络的IP地址（局域网IP）
- `wifiIP {string}` - WiFi网络的IP地址
- `publicIP {string}` - 公网IPv4地址
- `publicIPV6 {string}` - 公网IPv6地址

```javascript
let networkInfo = Device.getNetworkInfo();
console.log("网络类型:", networkInfo.type);
console.log("是否连接:", networkInfo.connected);
console.log("MAC地址:", networkInfo.macAddress);
console.log("当前IP:", networkInfo.ip);
console.log("公网IP:", networkInfo.publicIP);
```

## getLocation()

**返回：** `{object | null}`

获取设备当前位置信息。需要先申请位置权限（使用`Access.requestLocationPermissions()`）。

**返回对象：**
- `latitude {number}` - 纬度
- `longitude {number}` - 经度
- `altitude {number}` - 海拔高度（米）
- `accuracy {number}` - 精度（米）
- `speed {number}` - 速度（米/秒）
- `bearing {number}` - 方向角（度）
- `time {number}` - 时间戳（毫秒）
- `provider {string}` - 定位提供者（"gps" 或 "network"）

**如果获取失败或没有权限，返回 `null`**

> 注意：此方法会优先使用GPS定位（更精确），如果GPS不可用，会尝试使用网络定位。如果仍然无法获取位置，会尝试使用被动定位提供者。

```javascript
// 先检查并申请位置权限
if (!Access.hasLocationPermission()) {
    if (Access.isLocationPermissionPermanentlyDenied()) {
        Dialogs.show('提示', '需要位置权限才能继续，请在设置中开启');
        Access.openPermissionSettings();
        System.exit();
    } else {
        Access.requestLocationPermissions();
        System.sleep(1000); // 等待权限申请完成
    }
}

// 获取位置信息
let location = Device.getLocation();
if (location) {
    console.log("纬度:", location.latitude);
    console.log("经度:", location.longitude);
    console.log("海拔:", location.altitude);
    console.log("精度:", location.accuracy);
    console.log("速度:", location.speed);
    console.log("方向角:", location.bearing);
    console.log("时间戳:", location.time);
    console.log("定位提供者:", location.provider);
} else {
    console.log("获取位置失败，请检查权限和定位服务是否开启");
}
```