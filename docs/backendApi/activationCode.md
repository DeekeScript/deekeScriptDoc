---
title: 后端接口
description: DeekeScript - 后端接口
---

# 后端接口

> 激活码逻辑已经内嵌在DeekeScript中，开发者只需实现对应后端接口即可

## 接口验证
> 为了保证接口的安全性，DeekeScript客户端请求接口时，会携带以下字段：

```
$android_id = $_POST['android_id'];
$secret = $_POST['secret'];
$timestamp = $_POST['timestamp'];
$token = $_POST['token'];//仅激活的时候会携带，其他接口不会携带token

//后端拿到参数后，需要做下面的验证
//下面的token激活码是根据android_id在后端数据库中查询的
if ($secret !== md5($android_id . $res->getAttr("token") . $timestamp)) {
    return ['code' => 1, 'msg' => '激活码已失效'];//激活失效了
}

```

## 激活

> type: bind

需要在DeekeScript.json配置文件中配置Uri请求地址。如果用户不填写激活码，则运行DeekeScript上的业务功能（开发者开发的功能）时会提示输入激活码

DeekeScript请求：

```json
Request Method: POST
Content-Type: application/json

请求地址：/dke/login

请求参数：
{
    "token": "djhcn8dhfjwie7dbs9ikqlchdn76shbc",
    "android_id": "sdfsd-dsfdsa-fdasfdas" //用户卸载App或者恢复出厂设置后，此ID将会变化
}
```

你的接口需要返回如下json内容：

```json
//激活成功
 {code: 0, msg: "成功", success: true, data: { token_time: "29.99天后过期"}}

//激活失败
{code: 1, success: false, msg: "激活失败"}
```


## 激活状态检查
> type: checkBind

需要在DeekeScript.json配置文件中配置Uri请求地址，DeekeScript每次运行业务功能（开发者开发的功能）都会请求一次此接口，如果返回失败，则会提示用户对应的信息

DeekeScript请求：

```json
Request Method: POST
Content-Type: application/json

请求地址：/dke/checkBind

请求参数：
{
    "timestamp": 1793293729,
    "secret": "djhcn8dhfjwie7dbs9ikqlchdn76shbc",
    "android_id": "sdfsd-dsfdsa-fdasfdas" //用户卸载App或者恢复出厂设置后，此ID将会变化
}
```

你的接口需要返回如下json内容：

```json
//成功
{code: 0, msg: "成功", success: true, token_time: "29.98天后过期", data: []}

//失败
 {code: 1, msg: "已过期", success: false, data: []}
```


## 下面的接口请求参数同“激活状态检查”

### 百度AI大模型token获取接口
> type: aiSpeechToken
>
> 每次生成智能话术都会调用一次此接口，接口地址：/dke/getBaiduToken

```
//成功返回如下
{code: 0, msg: "成功",success: true, access_token: "xxxxxxxxxxxxxx", data: []}

//失败返回，可以通过此接口限制调用次数
{code: 1, msg: "智能话术已使用完~",success: false, data: []}
```

### 配置接口
> type: config
>
> 请求地址：/dkee/config

```
{
    "code": 0, 
    "msg": "成功", 
    "success": true,
    "data": {
        "ad": {
            "app_open_url" : '开屏广告图片地址，如：https://xx.xx.xx/1.png', 
            "app_pay_ad_url" : '支付宝支付入口广告图片地址，如：https://xx.xx.xx/2.png'
        },
        "payList":{
            "switch" => true,//是否开启扫码支付
            "money" => [499, 199, 39.9, 299, 99, 599, 9.9],//设置为0，则自动隐藏，如只展示【9.9元/天】试用：[0, 0, 0, 0, 0, 0, 9.9]
            "day" => ['1年', '1月', '3天', '3月', '7天', '2年', '1天'] //money和day一一对应
        },
        "role": [
            "label" : "角色名称，如：营销大师",
            "value" : 1,
            "content" : "智能体角色属性设定：你的角色是一个营销大师，xxxxxx",
        ]
    }
}
```

`注意：这里的的role、ad等属性与deekeScript.json配置的dataFrom有联系，如果开发者需要使用类似角色的动态select选择框表单，可以使用此接口实现。`


## APP升级接口
目前DeekeScript内置了软件升级能力，可以通过设置[settinglists参数](../config/config.md#settinglists参数)，type为updateApp的时候，用户点击“系统升级”，会请求配置的url参数地址完成APP下载与安装

```
//升级配置如下：
"settingLists": [
    {
        "title": "系统升级",
        "icon": "img/update.png",
        "type": "updateApp",
        "url": "/dke/updateApp"
    }
]
```

点击“系统升级”后，系统会请求“https://xxx.xx/dke/updateApp?version=100”（注意是post方式请求），接口返回如下json内容如下：
```
//存在更新
{
    code: 0, 
    msg: "成功", 
    success: true, data: {
        "downloadUrl": "https:\/\/xxx.xxx.com\/xxx.apk",
        "newVersion": "101",
        "appCurrentVersion": "100"
    }
}

//不存在最新版
{
    code: 1,
    msg: "暂无更新",
    data: []
}
```
> downloadUrl：下载地址
> newVersion：新版本号
> appCurrentVersion：当前版本号

系统拿到接口结果后，会比对当前版本号是否小于最新版本号，如果是则访问downloadUrl下载apk，最终提示用户安装apk，并完成升级。

## 支付成功接口【成功后，App端将不会展示支付入口】
> type: getToken
>
> 接口地址：/alipay/getToken

本接口，在用户支付完成后，会返回激活码和剩余天数（开发者需要自行实现本接口）。用户在App内支付后，App会调用本接口判断支付是否成功。同时这个接口返回激活码后，支付入口将会关闭。

```
  //返回成功，则不允许调用支付；  用户支付成功后，本接口应该返回下面的数据
  {code: 0, msg: '不展示支付入口', success: true, data: [], "token": "激活码", "token_time": "还剩1天过期"}
  //返回失败，可以支付
  {code: 1, msg: '展示支付入口', success: false, data: []}
```

## 支付宝支付订单创建接口
> type: createOrder
>
> 接口地址：/alipay/createOrder

```
//请求参数如下：
//扫码支付
{
    "type": "scan",
    "goods_name": "一天",
    "total_amount": "9.9"
}

//App支付
{
    "goods_name": "一天",
    "total_amount": "9.9"
}
```

> 注意：这里的goods_name是来自[配置接口](#配置接口)里面的payList参数里面的day字段，total_amount来自payList参数里面的money字段
>


```
//返回数据如下：
//成功
{
    code: 0, 
    msg: '成功', 
    success: true, 
    data: {
        params: '订单信息，字符串形式；支付宝返回的AlipayTradeAppPayResponse->body内容',
        order_no: 'xccxxvxxccxcx',
    }
}
//失败
{code: 1, msg: '支付失败', success: false, data: []}
```