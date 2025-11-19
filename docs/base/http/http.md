---
title: 网络请求-Http
description: DeekeScript - 网络请求-Http
---

# 网络请求-Http

Http模块提供一些进行http请求的函数，包括文件上传和下载。

## get(url, headers = {})

**参数：** `url {string}` 请求地址
**参数：** `headers {json}` 请求头 不填默认为空


```javascript
let res = Http.get('https://script.deeke.cn/api/userInfo');
console.log(res);//输出 {code: 0, msg: "成功", data: {name: "DeekeScript", weixin: "DeekeScript"}}


let res2 = Http.get('https://script.deeke.cn/api/userInfo', {"Content-type": "application/json; charset=utf-8"});
console.log(res2);//输出 {code: 0, msg: "成功", data: {name: "DeekeScript", weixin: "DeekeScript"}}
```

## post(url, params, headers = {})

**参数：**
- `url {string}` 请求地址
- `params {json}` 请求参数
- `headers {json}` 请求头 不填默认为空

**说明：** post请求的Content-type为"application/json; charset=utf-8"

```javascript
let params = {
    account: "DeekeScript",
    password: "DeekeScript"
}

let res = Http.post('https://script.deeke.cn/api/login', params);
console.log(res);//输出 {code: 0, msg: "成功", data: []}



let res2 = Http.post('https://script.deeke.cn/api/login', params, {"Content-type": "application/json; charset=utf-8"});
console.log(res2);//输出 {code: 0, msg: "成功", data: []}
```

## postFile(url, files, params, callback)

**参数：**
- `url {string}` 请求地址
- `files {File[]}` 请求文件列表
- `params {json}` 请求参数
- `headers {json}` 请求头 可以为 null

文件上传

```javascript
let File = java.io.File;
let files = [new File("文件地址"), new File("文件地址2")];
let params = {username: "DeekeScript"};

let res = Http.postFile('https://script.deeke.top/api/fileUpload', files, params, {
    success: (response)=>{
        //处理逻辑
        let body = response.body().string();
        let code = response.code();
        console.log(js);
    },
    fail: (response)=>{
        //失败逻辑
    }
});
```


## download(url, destPath, headers = {})

**参数：** `url {string}` 文件下载地址（网络地址）
**参数：** `destPath {string}` 目标文件地址
**参数：** `headers {json}` 请求头

下载文件

```javascript
let file = Files.getCachePath() + '/1.png';//文件存储在缓存文件夹
let res = Http.download('https://doc.deeke.cn/logo.png', file, {});
let file2 = MediaStore.saveImage(file);//文件移动到相册

console.log(file, file2);

// 带请求头的下载
let res2 = Http.download('https://doc.deeke.cn/logo.png', file, {"Authorization": "Bearer token"});
```

## setTimeout(connectSeconds, readSeconds, writeSeconds)

**参数：**
- `connectSeconds {number}` 连接超时时间（秒）
- `readSeconds {number}` 读取超时时间（秒）
- `writeSeconds {number}` 写入超时时间（秒）

设置所有超时时间。默认值：连接超时10秒，读取超时30秒，写入超时30秒。

```javascript
// 设置不同的超时时间
Http.setTimeout(5, 20, 20); // 连接5秒，读取20秒，写入20秒
```

## setTimeout(seconds)

**参数：** `seconds {number}` 超时时间（秒），将应用于连接、读取和写入

设置所有超时时间为相同的值。

```javascript
// 设置所有超时时间为60秒
Http.setTimeout(60);
```

## setConnectTimeout(seconds)

**参数：** `seconds {number}` 连接超时时间（秒）

设置连接超时时间。默认值：10秒。

```javascript
Http.setConnectTimeout(5); // 设置连接超时为5秒
```

## setReadTimeout(seconds)

**参数：** `seconds {number}` 读取超时时间（秒）

设置读取超时时间。默认值：30秒。

```javascript
Http.setReadTimeout(60); // 设置读取超时为60秒
```

## setWriteTimeout(seconds)

**参数：** `seconds {number}` 写入超时时间（秒）

设置写入超时时间。默认值：30秒。

```javascript
Http.setWriteTimeout(60); // 设置写入超时为60秒
```

## postStream(url, params, headers, onData, onError)

**参数：**
- `url {string}` 请求地址
- `params {json}` 请求参数
- `headers {json}` 请求头（可选）
- `onData {function}` 数据回调函数，每收到一行数据时调用，参数为数据字符串
- `onError {function}` 错误回调函数，发生错误时调用，参数为错误信息

流式POST请求（支持Server-Sent Events等流式输出）。该方法会逐行读取服务器返回的数据，每收到一行数据就会调用一次`onData`回调函数。

```javascript
Http.postStream('https://api.example.com/stream', 
    {query: "test"}, 
    {"Content-Type": "application/json"},
    (data) => {
        // 每收到一行数据时调用
        console.log("收到数据:", data);
    },
    (error) => {
        // 发生错误时调用
        console.error("错误:", error);
    }
);
```

## postStream(url, params, onData, onError)

**参数：**
- `url {string}` 请求地址
- `params {json}` 请求参数
- `onData {function}` 数据回调函数，每收到一行数据时调用，参数为数据字符串
- `onError {function}` 错误回调函数，发生错误时调用，参数为错误信息

流式POST请求（不带请求头版本）。

```javascript
Http.postStream('https://api.example.com/stream', 
    {query: "test"},
    (data) => {
        console.log("收到数据:", data);
    },
    (error) => {
        console.error("错误:", error);
    }
);
```
