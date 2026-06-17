---
title: 腾讯云COS-Cos
description: DeekeScript - 腾讯云COS文件上传
---

# 腾讯云COS-Cos

Cos模块提供腾讯云对象存储（COS）的文件上传功能，支持同步和异步上传图片、视频等文件。

## setConfig(secretId, secretKey, region, bucket)

**说明：** 设置腾讯云COS配置信息，调用后会自动初始化COSClient。切换不同账号或存储桶只需重新调用此方法。

**参数：**
- `secretId {string}` 腾讯云API密钥SecretId
- `secretKey {string}` 腾讯云API密钥SecretKey
- `region {string}` 存储桶所在地域，例如 `"ap-guangzhou"`、`"ap-shanghai"`、`"ap-beijing"`
- `bucket {string}` 存储桶名称，格式如 `"my-bucket-1234567890"`

```javascript
Cos.setConfig(
    "YOUR_SECRET_ID",
    "YOUR_SECRET_KEY",
    "ap-guangzhou",
    "my-bucket-1234567890"
);
```

## upload(localPath, cosKey)

**说明：** 同步上传文件到COS，此方法会阻塞当前线程直到上传完成。

**参数：**
- `localPath {string}` 本地文件路径
- `cosKey {string}` COS上的对象键（路径），例如 `"images/photo.jpg"`

**返回值：** 上传成功返回文件访问URL，失败返回 `null`

```javascript
let url = Cos.upload("/sdcard/DCIM/photo.jpg", "images/photo.jpg");
if (url) {
    console.log("上传成功：" + url);
    // 输出: https://my-bucket-1234567890.cos.ap-guangzhou.myqcloud.com/images/photo.jpg
} else {
    console.log("上传失败");
}
```

## upload(localPath)

**说明：** 同步上传文件到COS，自动生成cosKey（格式为 `uploads/时间戳_文件名`）。

**参数：**
- `localPath {string}` 本地文件路径

**返回值：** 上传成功返回文件访问URL，失败返回 `null`

```javascript
let url = Cos.upload("/sdcard/DCIM/video.mp4");
console.log("上传成功：" + url);
```

## uploadAsync(localPath, cosKey, callback)

**说明：** 异步上传文件到COS（指定cosKey），不会阻塞当前线程。

**参数：**
- `localPath {string}` 本地文件路径
- `cosKey {string}` COS上的对象键（路径）
- `callback {object}` 回调对象，包含 `success` 和 `fail` 两个方法

```javascript
Cos.uploadAsync("/sdcard/DCIM/photo.jpg", "gallery/photo.jpg", {
    success: function(url) {
        console.log("上传成功：" + url);
    },
    fail: function(error) {
        console.log("上传失败：" + error);
    }
});
```

## uploadAsync(localPath, callback)

**说明：** 异步上传文件到COS（自动生成cosKey），不会阻塞当前线程。

**参数：**
- `localPath {string}` 本地文件路径
- `callback {object}` 回调对象，包含 `success` 和 `fail` 两个方法

```javascript
Cos.uploadAsync("/sdcard/DCIM/video.mp4", {
    success: function(url) {
        console.log("上传成功：" + url);
    },
    fail: function(error) {
        console.log("上传失败：" + error);
    }
});
```

## shutdown()

**说明：** 关闭COSClient，释放网络资源。通常在不再需要上传文件时调用。

```javascript
Cos.shutdown();
```

## 完整示例

```javascript
// 1. 配置COS
Cos.setConfig(
    "your-secret-id",
    "your-secret-key",
    "ap-guangzhou",
    "your-bucket-1234567890"
);

// 2. 同步上传图片
let imageUrl = Cos.upload("/sdcard/DCIM/Camera/photo.jpg", "photos/photo.jpg");
console.log("图片上传结果：" + imageUrl);

// 3. 异步上传视频
Cos.uploadAsync("/sdcard/DCIM/Camera/video.mp4", "videos/video.mp4", {
    success: function(url) {
        console.log("视频上传成功：" + url);
        // 上传完成后可以发送通知或进行后续处理
    },
    fail: function(error) {
        console.log("视频上传失败：" + error);
    }
});

// 4. 使用完后释放资源
Cos.shutdown();
```
