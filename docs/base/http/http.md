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


## downloadFile(url, destPath, headers = {})

**参数：** `url {string}` 文件下载地址（网络地址）
**参数：** `destPath {string}` 目标文件地址
**参数：** `headers {json}` 请求头

下载文件

```javascript
let file = Files.getCachePath() + '/1.png';//文件存储在缓存文件夹
let res = Http.download('https://doc.deeke.cn/logo.png', file, {});
let file2 = MediaStore.saveImage(file);//文件移动到相册

console.log(file, file2);
```
