# 后端接口

## 激活码

需要在DeekeScript.json配置文件中配置Uri请求地址

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

需要在DeekeScript.json配置文件中配置Uri请求地址，DeekeScript每5分钟请求一次此接口，如果连续2次返回失败，则会强制退出App
并且会发生一个通知给客户（通知内容为接口返回的msg字段内容）

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
