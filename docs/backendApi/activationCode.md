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
 {code: 0, msg: "成功", token_time: "29.99天后过期", success: true, data: []}

//激活失败
{code: 1, success: false, msg: "激活失败"}
```


## 激活状态检查

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

> 每次生成智能话术都会调用一次此接口，接口地址：/dke/getBaiduToken

```
//成功返回如下
{code: 0, msg: "成功",success: true, access_token: "xxxxxxxxxxxxxx", data: []}

//失败返回，可以通过此接口限制调用次数
{code: 1, msg: "智能话术已使用完~",success: false, data: []}
```

### 配置接口

> 请求地址：/dkee/config

```
{
    code: 0, 
    msg: "成功", 
    success: true,
    data: {
    ad: {
        app_open_url => '开屏广告图片地址，如：https://xx.xx.xx/1.png', 
        app_pay_ad_url => '支付宝支付入口广告图片地址，如：https://xx.xx.xx/2.png'
    },
    role: [
        label : "角色名称，如：营销大师",
        value : 1,
        content : "智能体角色属性设定：你的角色是一个营销大师，xxxxxx",
    ]
    }
}
```

### 是否展示支付入口接口

> 接口地址：/alipay/getToken

```
  //返回成功，则不允许调用支付
  {code: 0, msg: '不展示支付入口', success: true, data: []}
  //返回失败，可以支付
  {code: 1, msg: '展示支付入口', success: false, data: []}
```

### 支付宝支付订单创建接口

> 接口地址：/alipay/createOrder

```
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