---
title: Files
description: DeekeScript - Files
---

# Files

> 这里直接使用Java内置的java.nio.file.Files对象

下面提供了Files模块一些常见的文件处理，包括文件读写、移动、复制、删掉等。

> 注：可以使用for循环打印出Files的相关方法：
```
let Files = java.nio.file.Files;
for(let i in Files){
    console.log(i);
}
```

## isDirectory(path)
> path {Path} 路径
> 
> 返回 {boolean}

返回路径path是否是文件夹。

```javascript
let Files = java.nio.file.Files;
let Paths = java.nio.file.Paths;
console.log(Files.isDirectory(Paths.get("/sdcard/文件夹/"))); //返回false
```


## createFile(path)
> path {Path} 路径
> 
> 返回 {boolean}

会尝试创建一个新文件，如果文件已经存在，会抛出FileAlreadyExistsException异常

## createDirectory(path)
> path {Path} 路径
> 
> 返回 {boolean}

会创建一个单独的目录。如果目录的父目录不存在，会抛出 NoSuchFileException，并且如果目录已经存在，它会抛出 FileAlreadyExistsException。


## createDirectories(path)
> path {Path} 路径
> 
> 返回 {boolean}

会确保目标路径的所有父目录存在。如果父目录不存在，它们会一并创建，而不会抛出异常。
如果目录已经存在，它不会抛出异常。

## exists(path)
> path {Path} 路径
> 
> 返回 {boolean}

返回在路径path处的文件是否存在。


## readAllLines(path[, encoding = "utf-8"])
> path {Path} 路径
> 
> encoding {string} 字符编码，可选，默认为utf-8
> 
> 返回 {string}

读取文本文件path的所有行并返回。如果文件不存在，则抛出异常；文件特别大的情况下，不推荐使用这种方式读取文件

## readBytes(path)
> path {string} 路径
> 
> 返回 {byte[]}

读取文件path的所有内容并返回一个字节数组。如果文件不存在，则抛出异常。

## write(path, text[, encoding = "utf-8"][, OpenOption... options])
> path {Path} 路径
> 
> text {string} 要写入的文本内容
> 
> encoding {string} 字符编码
>
> options {java.nio.file.StandardOpenOption.CREATE|java.nio.file.StandardOpenOption.APPEND}可选

把text写入到文件path中。如果文件存在则覆盖，不存在则创建。如果需要追加，则options可以设置为java.nio.file.StandardOpenOption.APPEND

```
let Files = java.nio.file.Files;
let Paths = java.nio.file.Paths;
console.log(Files.write(Paths.get("/sdcard/文件夹/2.txt"), "DeekeScript", java.nio.file.StandardOpenOption.APPEND)); //返回false
```

## write(path, bytes[, OpenOption... options])
> path {Path} 路径
> 
> bytes {byte[]} 字节数组，要写入的二进制数据
>
> options {java.nio.file.StandardOpenOption.CREATE|java.nio.file.StandardOpenOption.APPEND}可选

把bytes写入到文件path中。如果文件存在则覆盖，不存在则创建。

## copy(fromPath, toPath)
> fromPath {Path} 要复制的原文件路径
> 
> toPath {Path} 复制到的文件路径
> 
> 返回 {boolean}

复制文件，返回是否复制成功。

```
let Files = java.nio.file.Files;
let Paths = java.nio.file.Paths;
Files.copy(Paths.get("/sdcard/1.txt"), Paths.get("/sdcard/Download/1.txt"));
```

## move(fromPath, toPath)
> fromPath {Path} 要移动的原文件路径
> 
> toPath {Path} 移动到的文件路径
> 
> 返回 {boolean}

移动文件，返回是否移动成功


## delete(path)
> path {Path} 路径
> 
> 返回 {boolean}

删除文件；文件不存在，它会抛出异常。

## deleteIfExists(path)
> path {string} 路径
> 
> path {string} 路径
> 
> 返回 {boolean}

删除文件，如果文件存在


## list(path)
> path {Path} 路径
> 

返回path下面的所有文件和文件夹。
