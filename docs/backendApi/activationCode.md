# 后端接口

> 激活码逻辑已经内嵌在DeekeScript中，开发者只需实现对应后端接口即可

## 激活码

需要在DeekeScript.json配置文件中配置Uri请求地址。如果用户不填写激活码，则运行DeekeScript上的业务功能（开发者开发的功能）时会提示输入激活码

DeekeScript请求：

```json
Request Method: POST
Content-Type: application/json

请求参数：
{
    "activeCode": "用户输入的激活码",
    "androidId": "系统生成的唯一ID" //用户卸载App或者恢复出厂设置后，此ID将会变化
}
```

你的接口需要返回如下json内容：

```json
//激活成功
{"code": 0, "status":"success"}

//激活失败
{"code": 1, "status":"fail", "msg": "激活失败"}
```


## 激活状态

需要在DeekeScript.json配置文件中配置Uri请求地址，DeekeScript每次运行业务功能（开发者开发的功能）都会请求一次此接口，如果返回失败，则会提示用户对应的信息

DeekeScript请求：

```json
Request Method: POST
Content-Type: application/json

请求参数：
{
    "androidId": "激活时生成的AndroidId"
}
```

你的接口需要返回如下json内容：

```json
//当前设备具备App使用权限
{"code": 0, "status":"success"}

//当前设备不具备App使用权限
{"code": 1, "status":"fail", "msg": "激活码已过期"}
```
