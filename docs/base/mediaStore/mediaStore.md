---
title: MediaStore 媒体库操作
description: DeekeScript - MediaStore 媒体库操作
---

# MediaStore 媒体库操作

`MediaStore` 类提供了访问和操作 Android 系统媒体库的功能，包括图片、视频、音频、下载文件和文档等。所有方法都自动兼容不同 Android 版本，无需关心版本差异。

## 权限要求

使用 MediaStore 相关功能需要媒体权限。请先申请权限：

```javascript
function permission() {
  //具备媒体权限
  if (Access.hasMediaReadPermission()) {
    return true;
  }

  // 检查权限是否被永久拒绝
  if (Access.isMediaPermissionPermanentlyDenied()) {
    Dialogs.confirm("权限申请", "请开启存储权限", v => {
      if (v) {
        //进入设置页面
        Access.openPermissionSettings();
      }
    })
    return false;
  }

  //请求媒体权限
  Access.requestMediaReadPermission();
  return false;
}

//如果没有权限，停止当前脚本
if (!permission()) {
  System.exit();
  System.sleep(3000);
}

//保存截图【你也可以使用Http请求远程图片，再保存下来】
let imageFile = Images.capture();
let res = MediaStore.saveImage(imageFile);
console.log(res);

```

## 图片操作

### getImages()

获取相册中的所有图片。

**返回：** `{Array}` JavaScript 数组，包含图片信息对象

每个图片对象包含以下属性：
- `id` - 图片ID
- `name` - 图片名称
- `path` - 图片路径
- `uri` - 图片URI（content://格式）
- `size` - 图片大小（字节）
- `date` - 添加时间（时间戳）

```javascript
let images = MediaStore.getImages();
console.log('图片数量：', images.length);
images.forEach(image => {
    console.log('图片名称：', image.name);
    console.log('图片路径：', image.path);
    console.log('图片URI：', image.uri);
});
```

### saveImage(sourcePath, displayName, relativePath)

保存图片到相册。

**参数：**
- `sourcePath {string}` 源图片路径
- `displayName {string}` 显示名称（可选）
- `relativePath {string}` 相对路径（可选，如 "Pictures/MyApp"）

**返回：** `{string|null}` 保存后的 content:// Uri 字符串，失败返回 null

```javascript
// 保存图片（使用默认配置）
let uri = MediaStore.saveImage('/sdcard/screenshot.png');
console.log('保存成功，URI：', uri);

// 保存图片（指定名称和路径）
let uri2 = MediaStore.saveImage('/sdcard/screenshot.png', 'my_image.jpg', 'Pictures/MyApp');
console.log('保存成功，URI：', uri2);
```

### saveImage(sourcePath)

保存图片到相册（使用默认配置）。

**参数：**
- `sourcePath {string}` 源图片路径

**返回：** `{string}` 保存后的 content:// Uri 字符串

```javascript
let uri = MediaStore.saveImage('/sdcard/screenshot.png');
```

### deleteImage(uriString)

删除图片。

**参数：**
- `uriString {string}` content:// Uri 字符串

**返回：** `{boolean}` 删除成功返回 true

```javascript
let uri = 'content://media/external/images/media/12345';
let success = MediaStore.deleteImage(uri);
if (success) {
    console.log('删除成功');
}
```

## 视频操作

### getVideos()

获取相册中的所有视频。

**返回：** `{Array}` JavaScript 数组，包含视频信息对象

每个视频对象包含以下属性：
- `id` - 视频ID
- `name` - 视频名称
- `path` - 视频路径
- `uri` - 视频URI（content://格式）
- `size` - 视频大小（字节）
- `duration` - 视频时长（毫秒）
- `date` - 添加时间（时间戳）

```javascript
let videos = MediaStore.getVideos();
console.log('视频数量：', videos.length);
videos.forEach(video => {
    console.log('视频名称：', video.name);
    console.log('视频时长：', video.duration, 'ms');
});
```

### saveVideo(sourcePath, displayName, relativePath)

保存视频到相册。

**参数：**
- `sourcePath {string}` 源视频路径
- `displayName {string}` 显示名称（可选）
- `relativePath {string}` 相对路径（可选）

**返回：** `{string|null}` 保存后的 content:// Uri 字符串，失败返回 null

```javascript
let uri = MediaStore.saveVideo('/sdcard/video.mp4', 'my_video.mp4');
console.log('保存成功，URI：', uri);
```

### saveVideo(sourcePath)

保存视频到相册（使用默认配置）。

**参数：**
- `sourcePath {string}` 源视频路径

**返回：** `{string}` 保存后的 content:// Uri 字符串

```javascript
let uri = MediaStore.saveVideo('/sdcard/video.mp4');
```

### deleteVideo(uriString)

删除视频。

**参数：**
- `uriString {string}` content:// Uri 字符串

**返回：** `{boolean}` 删除成功返回 true

```javascript
let uri = 'content://media/external/video/media/12345';
let success = MediaStore.deleteVideo(uri);
```

## 音频操作

### getAudios()

获取所有音频文件。

**返回：** `{Array}` JavaScript 数组，包含音频信息对象

每个音频对象包含以下属性：
- `id` - 音频ID
- `name` - 音频名称
- `path` - 音频路径
- `uri` - 音频URI（content://格式）
- `size` - 音频大小（字节）
- `duration` - 音频时长（毫秒）
- `artist` - 艺术家
- `album` - 专辑

```javascript
let audios = MediaStore.getAudios();
console.log('音频数量：', audios.length);
audios.forEach(audio => {
    console.log('音频名称：', audio.name);
    console.log('艺术家：', audio.artist);
    console.log('专辑：', audio.album);
});
```

### saveAudio(sourcePath, displayName)

保存音频文件。

**参数：**
- `sourcePath {string}` 源文件路径
- `displayName {string}` 显示名称（可选）

**返回：** `{string|null}` 保存后的 content:// Uri 字符串，失败返回 null

```javascript
let uri = MediaStore.saveAudio('/sdcard/audio.mp3', 'my_audio.mp3');
console.log('保存成功，URI：', uri);
```

## 下载文件操作

### saveToDownloads(sourcePath, displayName)

保存文件到下载目录。

**参数：**
- `sourcePath {string}` 源文件路径
- `displayName {string}` 显示名称（可选）

**返回：** `{string|null}` 保存后的 content:// Uri 字符串（Android 10+）或文件路径（Android 9-），失败返回 null

**注意：** 该方法会自动处理不同 Android 版本的差异：
- Android 10+: 使用 MediaStore API，返回 content:// URI
- Android 9-: 使用文件系统方式，返回 file:// URI

```javascript
let uri = MediaStore.saveToDownloads('/sdcard/file.pdf', 'document.pdf');
console.log('保存成功，URI：', uri);
```

### getDownloads()

获取下载目录的所有文件。

**返回：** `{Array}` JavaScript 数组，包含文件信息对象

**注意：** 返回的对象结构会根据 Android 版本有所不同：
- Android 10+: `{id, name, uri, size, date}`
- Android 9-: `{name, path, uri, size, date}`

```javascript
let downloads = MediaStore.getDownloads();
console.log('下载文件数量：', downloads.length);
downloads.forEach(file => {
    console.log('文件名称：', file.name);
    console.log('文件大小：', file.size, 'bytes');
});
```

## 文档操作

### saveToDocuments(sourcePath, displayName)

保存文档文件到文档目录。

**参数：**
- `sourcePath {string}` 源文件路径
- `displayName {string}` 显示名称（可选）

**返回：** `{string|null}` 保存后的 content:// Uri 字符串（Android 10+）或文件路径（Android 9-），失败返回 null

**注意：** 该方法会自动处理不同 Android 版本的差异：
- Android 10+: 使用 MediaStore API，返回 content:// URI
- Android 9-: 使用文件系统方式，返回 file:// URI

```javascript
let uri = MediaStore.saveToDocuments('/sdcard/document.pdf', 'my_document.pdf');
console.log('保存成功，URI：', uri);
```

### saveToDocuments(sourcePath)

保存文档文件到文档目录（使用默认名称）。

**参数：**
- `sourcePath {string}` 源文件路径

**返回：** `{string}` 保存后的 content:// Uri 字符串或文件路径

```javascript
let uri = MediaStore.saveToDocuments('/sdcard/document.pdf');
```

### getDocuments()

获取文档目录的所有文件。

**返回：** `{Array}` JavaScript 数组，包含文件信息对象

**注意：** 返回的对象结构会根据 Android 版本有所不同：
- Android 10+: `{id, name, uri, size, date, mimeType}`
- Android 9-: `{name, path, uri, size, date}`

```javascript
let documents = MediaStore.getDocuments();
console.log('文档数量：', documents.length);
documents.forEach(doc => {
    console.log('文档名称：', doc.name);
    if (doc.mimeType) {
        console.log('MIME类型：', doc.mimeType);
    }
});
```

## 通用操作

### readFromUri(uriString)

从 URI 读取文件内容。

**参数：**
- `uriString {string}` content:// Uri 字符串

**返回：** `{Array|null}` 文件内容字节数组，失败返回 null

```javascript
let uri = 'content://media/external/images/media/12345';
let bytes = MediaStore.readFromUri(uri);
console.log('文件大小：', bytes.length, 'bytes');
```

### queryMediaInfo(uriString)

查询媒体文件信息。

**参数：**
- `uriString {string}` content:// Uri 字符串

**返回：** `{Object}` JavaScript 对象，包含文件信息

返回对象包含以下属性：
- `name` - 文件名称
- `size` - 文件大小（字节）
- `mimeType` - MIME 类型

```javascript
let uri = 'content://media/external/images/media/12345';
let info = MediaStore.queryMediaInfo(uri);
console.log('文件名称：', info.name);
console.log('文件大小：', info.size);
console.log('MIME类型：', info.mimeType);
```

## 完整示例

```javascript
// 1. 检查并申请媒体权限
if (!Access.hasMediaReadPermission()) {
    if (Access.isMediaPermissionPermanentlyDenied()) {
        Dialogs.show('提示', '需要媒体权限才能继续，请在设置中开启');
        Access.openPermissionSettings();
        System.exit();
    } else {
        Access.requestMediaPermissions();
    }
}

// 2. 获取所有图片
let images = MediaStore.getImages();
console.log('找到', images.length, '张图片');

// 3. 保存截图到相册
let screenshotPath = Images.capture();
let imageUri = MediaStore.saveImage(screenshotPath, 'screenshot.jpg');
console.log('截图已保存：', imageUri);

// 4. 保存文件到下载目录
let fileUri = MediaStore.saveToDownloads('/sdcard/data.txt', 'data.txt');
console.log('文件已保存：', fileUri);

// 5. 获取下载文件列表
let downloads = MediaStore.getDownloads();
console.log('下载文件数量：', downloads.length);

// 6. 读取文件内容
if (fileUri) {
    let bytes = MediaStore.readFromUri(fileUri);
    console.log('文件内容大小：', bytes.length);
}
```
