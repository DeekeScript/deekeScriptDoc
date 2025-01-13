# Files

> 2.0版本即将上线

Files模块提供了一些常见的文件处理，包括文件读写、移动、复制、删掉等。

一次性的文件读写可以直接使用Files.read(), Files.write(), Files.append()等方便的函数;

## isFile(path)
> path {string} 路径
> 
> 返回 {boolean}

返回路径path是否是文件。

```javascript
console.log(Files.isDir("/sdcard/文件夹/")); //返回false
console.log(Files.isDir("/sdcard/文件.txt")); //返回true
```

## isDir(path)
> path {string} 路径
> 
> 返回 {boolean}

返回路径path是否是文件夹。

```javascript
console.log(Files.isDir("/sdcard/文件夹/")); //返回true
console.log(Files.isDir("/sdcard/文件.txt")); //返回false
```

## isEmptyDir(path)
> path {string} 路径
> 
> 返回 {boolean}

返回文件夹path是否为空文件夹。如果该路径并非文件夹，则直接返回false。

## join(parent, child)
> parent {string} 父目录路径
> 
> child {string} 子路径
> 
> 返回 {string}

连接两个路径并返回，例如Files.join("/sdcard/", "1.txt")返回"/sdcard/1.txt"。

## create(path)
> path {string} 路径
> 
> 返回 {boolean}

创建一个文件或文件夹并返回是否创建成功。如果文件已经存在，则直接返回false。

## createWithDirs(path)
> path {string} 路径
> 
> 返回 {boolean}

创建一个文件或文件夹并返回是否创建成功。如果文件所在文件夹不存在，则先创建他所在的一系列文件夹。如果文件已经存在，则直接返回false。

## exists(path)
> path {string} 路径
> 
> 返回 {boolean}

返回在路径path处的文件是否存在。

## ensureDir(path)
> path {string} 路径
> 
> 确保路径path所在的文件夹存在。如果该路径所在文件夹不存在，则创建该文件夹。

例如对于路径"/sdcard/Download/ABC/1.txt"，如果/Download/文件夹不存在，则会先创建Download，再创建ABC文件夹。

## read(path[, encoding = "utf-8"])
> path {string} 路径
> 
> encoding {string} 字符编码，可选，默认为utf-8
> 
> 返回 {string}

读取文本文件path的所有内容并返回。如果文件不存在，则抛出FileNotFoundException。

## readBytes(path)
> path {string} 路径
> 
> 返回 {byte[]}

读取文件path的所有内容并返回一个字节数组。如果文件不存在，则抛出FileNotFoundException。

## write(path, text[, encoding = "utf-8"])
> path {string} 路径
> 
> text {string} 要写入的文本内容
> 
> encoding {string} 字符编码

把text写入到文件path中。如果文件存在则覆盖，不存在则创建。

## writeBytes(path, bytes)
> path {string} 路径
> 
> bytes {byte[]} 字节数组，要写入的二进制数据

把bytes写入到文件path中。如果文件存在则覆盖，不存在则创建。

## append(path, text[, encoding = 'utf-8'])
> path {string} 路径
> 
> text {string} 要写入的文本内容
> 
> encoding {string} 字符编码

把text追加到文件path的末尾。如果文件不存在则创建。

## appendBytes(path, text[, encoding = 'utf-8'])
> path {string} 路径
> 
> bytes {byte[]} 字节数组，要写入的二进制数据

把bytes追加到文件path的末尾。如果文件不存在则创建。

## copy(fromPath, toPath)
> fromPath {string} 要复制的原文件路径
> 
> toPath {string} 复制到的文件路径
> 
> 返回 {boolean}

复制文件，返回是否复制成功。例如Files.copy("/sdcard/1.txt", "/sdcard/Download/1.txt")。

## move(fromPath, toPath)
> fromPath {string} 要移动的原文件路径
> 
> toPath {string} 移动到的文件路径
> 
> 返回 {boolean}

移动文件，返回是否移动成功。例如Files.move("/sdcard/1.txt", "/sdcard/Download/1.txt")会把1.txt文件从sd卡根目录移动到Download文件夹。

## rename(path, newName)
> path {string} 要重命名的原文件路径
> 
> newName {string} 要重命名的新文件名
> 
> 返回 {boolean}

重命名文件，并返回是否重命名成功。例如Files.rename("/sdcard/1.txt", "2.txt")。

## renameWithoutExtension(path, newName)
> path {string} 要重命名的原文件路径
> 
> newName {string} 要重命名的新文件名
> 
> 返回 {boolean}

重命名文件，不包含拓展名，并返回是否重命名成功。例如Files.rename("/sdcard/1.txt", "2")会把"1.txt"重命名为"2.txt"。

## getName(path)
> path {string} 路径
> 
> 返回 {string}

返回文件的文件名。例如Files.getName("/sdcard/1.txt")返回"1.txt"。

## getNameWithoutExtension(path)
> path {string} 路径
> 
> 返回 {string}

返回不含拓展名的文件的文件名。例如## getName("/sdcard/1.txt")返回"1"。

## getExtension(path)
> path {string} 路径
> 
> 返回 {string}

返回文件的拓展名。例如Files.getExtension("/sdcard/1.txt")返回"txt"。

## remove(path)
> path {string} 路径
> 
> 返回 {boolean}

删除文件或空文件夹，返回是否删除成功。

## removeDir(path)
> path {string} 路径
> 
> path {string} 路径
> 
> 返回 {boolean}

删除文件夹，如果文件夹不为空，则删除该文件夹的所有内容再删除该文件夹，返回是否全部删除成功。

## getSdcardPath()
> 返回 {string}

返回SD卡路径。所谓SD卡，即外部存储器。

## cwd()
> 返回 {string}

返回脚本的"当前工作文件夹路径"。该路径指的是，如果脚本本身为脚本文件，则返回这个脚本文件所在目录；否则返回null获取其他设定路径。

例如，对于脚本文件"/sdcard/脚本/1.js"运行Files.cwd()返回"/sdcard/脚本/"。

## path(relativePath)
> relativePath {string} 相对路径
> 
> 返回 {string}

返回相对路径对应的绝对路径。例如Files.path("./1.png")，如果运行这个语句的脚本位于文件夹"/sdcard/脚本/"中，则返回"/sdcard/脚本/1.png"。

## listDir(path[, filter])
> path {string} 路径
> 
> filter {Function} 过滤函数，可选。接收一个string参数（文件名），返回一个boolean值。

列出文件夹path下的满足条件的文件和文件夹的名称的数组。如果不加filter参数，则返回所有文件和文件夹。