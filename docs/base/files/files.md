---
title: Files
description: DeekeScript - Files
---

# Files

Files对象提供了文件操作相关的功能，包括文件读写、移动、复制、删除、目录操作等。

## read(path)

**参数：** `path {string}` 文件路径

**返回：** `{string | null}` 文件内容，如果失败返回null

读取文件内容，返回文件的所有文本内容。

```javascript
let content = Files.read("/sdcard/test.txt");
if (content !== null) {
    console.log(content);
}
```

## write(path, content)

**参数：**
- `path {string}` 文件路径
- `content {string}` 要写入的内容

**返回：** `{boolean}` 成功返回true，失败返回false

写入内容到文件。如果文件不存在会自动创建，如果文件存在则会覆盖原有内容。

```javascript
let success = Files.write("/sdcard/test.txt", "Hello DeekeScript");
if (success) {
    console.log("写入成功");
}
```

## append(path, content)

**参数：**
- `path {string}` 文件路径
- `content {string}` 要追加的内容

**返回：** `{boolean}` 成功返回true，失败返回false

追加内容到文件末尾。如果文件不存在会自动创建。

```javascript
Files.append("/sdcard/test.txt", "\n这是追加的内容");
```

## delete(path)

**参数：** `path {string}` 文件或目录路径

**返回：** `{boolean}` 成功返回true，失败返回false

删除文件或目录。如果是目录，会递归删除目录下的所有文件和子目录。

```javascript
Files.delete("/sdcard/test.txt"); // 删除文件
Files.delete("/sdcard/testDir");  // 删除目录及其所有内容
```

## exists(path)

**参数：** `path {string}` 文件或目录路径

**返回：** `{boolean}` 存在返回true，不存在返回false

检查文件或目录是否存在。

```javascript
if (Files.exists("/sdcard/test.txt")) {
    console.log("文件存在");
}
```

## mkdirs(path)

**参数：** `path {string}` 目录路径

**返回：** `{boolean}` 成功返回true，失败返回false

创建目录（包括所有父目录）。如果目录已存在则返回true。

```javascript
Files.mkdirs("/sdcard/myDir/subDir"); // 创建目录及其父目录
```

## list(path)

**参数：** `path {string}` 目录路径

**返回：** `{string[]}` 文件名数组

列出目录中的文件和子目录名称（不包含路径）。

```javascript
let files = Files.list("/sdcard");
files.forEach(file => {
    console.log(file); // 输出文件名
});
```

## listFiles(path)

**参数：** `path {string}` 目录路径

**返回：** `{string[]}` 文件完整路径数组

列出目录中的文件和子目录的完整路径。

```javascript
let files = Files.listFiles("/sdcard");
files.forEach(file => {
    console.log(file); // 输出完整路径，如 /sdcard/test.txt
});
```

## copy(source, destination)

**参数：**
- `source {string}` 源文件路径
- `destination {string}` 目标文件路径

**返回：** `{boolean}` 成功返回true，失败返回false

复制文件。如果目标目录不存在会自动创建。

```javascript
Files.copy("/sdcard/source.txt", "/sdcard/dest.txt");
```

## move(source, destination)

**参数：**
- `source {string}` 源文件路径
- `destination {string}` 目标文件路径

**返回：** `{boolean}` 成功返回true，失败返回false

移动文件。如果目标目录不存在会自动创建。

```javascript
Files.move("/sdcard/old.txt", "/sdcard/new.txt");
```

## size(path)

**参数：** `path {string}` 文件路径

**返回：** `{number}` 文件大小（字节），如果文件不存在或为目录返回-1

获取文件大小（字节）。

```javascript
let fileSize = Files.size("/sdcard/test.txt");
console.log("文件大小：" + fileSize + " 字节");
```

## isDirectory(path)

**参数：** `path {string}` 路径

**返回：** `{boolean}` 是目录返回true，否则返回false

检查路径是否为目录。

```javascript
if (Files.isDirectory("/sdcard")) {
    console.log("这是一个目录");
}
```

## isFile(path)

**参数：** `path {string}` 路径

**返回：** `{boolean}` 是文件返回true，否则返回false

检查路径是否为文件。

```javascript
if (Files.isFile("/sdcard/test.txt")) {
    console.log("这是一个文件");
}
```

## getName(path)

**参数：** `path {string}` 文件路径

**返回：** `{string}` 文件名

获取文件名（包含扩展名）。

```javascript
let fileName = Files.getName("/sdcard/test.txt");
console.log(fileName); // 输出: test.txt
```

## getParent(path)

**参数：** `path {string}` 文件路径

**返回：** `{string}` 父目录路径

获取父目录路径。

```javascript
let parent = Files.getParent("/sdcard/test.txt");
console.log(parent); // 输出: /sdcard
```

## getAbsolutePath(path)

**参数：** `path {string}` 文件路径

**返回：** `{string}` 绝对路径

获取文件的绝对路径。

```javascript
let absPath = Files.getAbsolutePath("./test.txt");
console.log(absPath); // 输出绝对路径
```

## rename(oldPath, newPath)

**参数：**
- `oldPath {string}` 旧路径
- `newPath {string}` 新路径

**返回：** `{boolean}` 成功返回true，失败返回false

重命名文件或目录。

```javascript
Files.rename("/sdcard/old.txt", "/sdcard/new.txt");
```

## lastModified(path)

**参数：** `path {string}` 文件路径

**返回：** `{number}` 最后修改时间（毫秒），如果文件不存在返回-1

获取文件最后修改时间。

```javascript
let timestamp = Files.lastModified("/sdcard/test.txt");
let date = new Date(timestamp);
console.log("最后修改时间：" + date);
```

## readUri(uriString)

**参数：** `uriString {string}` URI字符串（支持content://和file://等URI）

**返回：** `{string | null}` 内容，如果失败返回null

从URI读取内容。支持content://和file://等URI格式。

```javascript
// 从content URI读取
let content = Files.readUri("content://media/external/images/media/123");

// 从file URI读取
let content2 = Files.readUri("file:///sdcard/test.txt");
```

## readBytesFromUri(uriString)

**参数：** `uriString {string}` URI字符串

**返回：** `{number[] | null}` 字节数组，如果失败返回null

从URI读取字节数组。用于读取图片等二进制文件。

```javascript
let bytes = Files.readBytesFromUri("content://media/external/images/media/123");
if (bytes !== null) {
    console.log("图片大小：" + bytes.length + " 字节");
}
```

## getPathFromUri(uriString)

**参数：** `uriString {string}` content URI字符串

**返回：** `{string | null}` 真实文件路径，如果失败返回null

从content URI获取真实文件路径。

```javascript
let path = Files.getPathFromUri("content://media/external/images/media/123");
console.log("真实路径：" + path);
```

## readBytes(path)

**参数：** `path {string}` 文件路径

**返回：** `{number[] | null}` 字节数组，如果失败返回null

从文件读取字节数组。用于读取二进制文件。

```javascript
let bytes = Files.readBytes("/sdcard/image.jpg");
if (bytes !== null) {
    console.log("文件大小：" + bytes.length + " 字节");
}
```

## writeBytes(path, bytes)

**参数：**
- `path {string}` 文件路径
- `bytes {number[]}` 要写入的字节数组

**返回：** `{boolean}` 成功返回true，失败返回false

写入字节数组到文件。用于写入二进制文件。

```javascript
let bytes = [72, 101, 108, 108, 111]; // "Hello" 的字节数组
Files.writeBytes("/sdcard/binary.bin", bytes);
```

## copyFromUri(uriString, destination)

**参数：**
- `uriString {string}` 源URI字符串
- `destination {string}` 目标文件路径

**返回：** `{boolean}` 成功返回true，失败返回false

从URI复制文件到目标路径。

```javascript
Files.copyFromUri("content://media/external/images/media/123", "/sdcard/copied.jpg");
```

## getExternalStoragePath()

**返回：** `{string}` 外部存储路径

获取外部存储根目录路径（通常是/sdcard）。

```javascript
let storagePath = Files.getExternalStoragePath();
console.log("外部存储路径：" + storagePath);
```

## getFilesPath()

**返回：** `{string}` 文件目录路径

获取应用私有文件目录路径。

```javascript
let filesPath = Files.getFilesPath();
console.log("应用文件目录：" + filesPath);
```

## getCachePath()

**返回：** `{string}` 缓存目录路径

获取应用缓存目录路径。

```javascript
let cachePath = Files.getCachePath();
console.log("缓存目录：" + cachePath);
```

## getExternalFilesPath(type)

**参数：** `type {string | null}` 文件目录类型（如"Pictures"、"Documents"），null表示根目录

**返回：** `{string}` 外部文件目录路径

获取应用外部私有文件目录路径。

```javascript
// 获取Pictures目录
let picturesPath = Files.getExternalFilesPath("Pictures");

// 获取根目录
let rootPath = Files.getExternalFilesPath();
```

## getExternalFilesPath()

**返回：** `{string}` 外部文件目录路径

获取应用外部私有文件根目录路径。

```javascript
let externalPath = Files.getExternalFilesPath();
```

## getDownloadPath()

**返回：** `{string}` Download目录路径

获取Download目录路径。

```javascript
let downloadPath = Files.getDownloadPath();
console.log("下载目录：" + downloadPath);
```

## getPicturesPath()

**返回：** `{string}` Pictures目录路径

获取Pictures目录路径。

```javascript
let picturesPath = Files.getPicturesPath();
console.log("图片目录：" + picturesPath);
```

## getDCIMPath()

**返回：** `{string}` DCIM目录路径

获取DCIM目录路径（相机照片存储目录）。

```javascript
let dcimPath = Files.getDCIMPath();
console.log("DCIM目录：" + dcimPath);
```

## getMoviesPath()

**返回：** `{string}` Movies目录路径

获取Movies目录路径。

```javascript
let moviesPath = Files.getMoviesPath();
console.log("视频目录：" + moviesPath);
```

## getMusicPath()

**返回：** `{string}` Music目录路径

获取Music目录路径。

```javascript
let musicPath = Files.getMusicPath();
console.log("音乐目录：" + musicPath);
```

## getDocumentsPath()

**返回：** `{string}` Documents目录路径

获取Documents目录路径。

```javascript
let documentsPath = Files.getDocumentsPath();
console.log("文档目录：" + documentsPath);
```

## readAsset(fileName)

**参数：** `fileName {string}` assets目录中的文件名

**返回：** `{string | null}` 文件内容，如果失败返回null

从assets目录读取文件。

```javascript
let content = Files.readAsset("config.json");
if (content !== null) {
    console.log(content);
}
```

## isExternalStorageWritable()

**返回：** `{boolean}` 可用且可写返回true，否则返回false

检查外部存储是否可用且可写。

```javascript
if (Files.isExternalStorageWritable()) {
    console.log("外部存储可写");
}
```

## isExternalStorageReadable()

**返回：** `{boolean}` 可读返回true，否则返回false

检查外部存储是否可读。

```javascript
if (Files.isExternalStorageReadable()) {
    console.log("外部存储可读");
}
```

## getExtension(path)

**参数：** `path {string}` 文件路径

**返回：** `{string}` 文件扩展名（不含点），如果没有扩展名返回空字符串

获取文件扩展名。

```javascript
let ext = Files.getExtension("/sdcard/test.txt");
console.log(ext); // 输出: txt
```

## getNameWithoutExtension(path)

**参数：** `path {string}` 文件路径

**返回：** `{string}` 不带扩展名的文件名

获取不带扩展名的文件名。

```javascript
let name = Files.getNameWithoutExtension("/sdcard/test.txt");
console.log(name); // 输出: test
```
