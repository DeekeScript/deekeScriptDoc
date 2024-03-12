# 网络请求-Http

Http模块提供一些进行http请求的函数。

## get(url, headers)
> url {string} 请求地址
> 
> headers {json} 请求头 可以为 null

```javascript
let res = Http.get('https://script.deeke.top/api/userInfo');
console.log(res);//输出 {code: 0, msg: "成功", data: {name: "miniphper", weixin: "miniphper"}}
```

## post(url, params, headers)
> url {string} 请求地址
> 
> params {json} 请求参数
> 
> headers {json} 请求头 可以为 null

> post请求的Content-type为"application/json; charset=utf-8"

```javascript
let params = {
    account: "miniphper",
    password: "miniphper"
}

let res = Http.post('https://script.deeke.top/api/login', params, null);
console.log(res);//输出 {code: 0, msg: "成功", data: []}
```


## postFile(url, files, params, callback)
> url {string} 请求地址
> 
> files {File[]}  请求文件列表
> 
> params {json} 请求参数
> 
> headers {json} 请求头 可以为 null

```javascript
let files = [new File("文件地址"), new File("文件地址2")];
let params = {username: "miniphper"};

let res = Http.postFile('https://script.deeke.top/api/fileUpload', files, params, {
    success: (response)=>{
        //处理逻辑
        let js = response.json();
        console.log(js);
    },
    fail: (response)=>{
        //失败逻辑
    }
});
```
