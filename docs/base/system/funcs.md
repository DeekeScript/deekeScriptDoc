---
title: 系统函数 - System
description: DeekeScript - 系统函数 - System
---

# 系统函数 - System

System对象，提供一些常用的方法。

## sleep(millisecond)

**参数：** `millisecond {number}` 毫秒

休眠millisecond毫秒

```javascript
console.log('立即输出');
System.sleep(1000);
console.log('1秒钟后输出');
```

## time()

**返回：** `{string}`

返回当前系统时间

```javascript
console.log(System.time());//输出：2024-03-07 12:12:12
```

## currentActivity()

**返回：** `{string}`

返回最近一次监测到的正在运行的Activity名称，一般可以认为就是当前正在运行的Activity的名称。
此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

```javascript
console.log(System.currentActivity());//输出：top.deeke.script
```


## currentPackage()

**返回：** `{string}`

返回最近一次监测到的正在运行的Package的名称，一般可以认为就是当前正在运行的Package的名称。
此函数依赖于无障碍服务，如果服务未启动，则抛出异常并提示用户启动。

```javascript
console.log(System.currentPackage());//输出：top.deeke.script
```

## setClip(content)

**参数：** `content {string}`

**返回：** `{void}`

将内容写入到剪切板中

## getClip()

**返回：** `{string|null}`

返回剪切板内容

## toast(message)

**参数：** `msg {string}` 要显示的信息

**返回：** `{void}`

以气泡显示信息message几秒。(具体时间取决于安卓系统，一般都是2秒)

注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。


## toastLong(message)

**参数：** `msg {string}` 要显示的信息

**返回：** `{void}`

比toast(message)显示的更久一些，具体时长以开发机为准

注意，信息的显示是"异步"执行的，并且，不会等待信息消失程序才继续执行。

## waitForActivity(activity, period, timeout)

**参数：**
- `activity {string}` 等待的Activity名称
- `period {number}` 等待的毫秒数
- `timeout {number}` 等待的总毫秒数

**返回：** `{void}`

等待Activity出现，period为检查Activity的间隔。如果timeout毫秒后未出现，则停止等待。


## waitForPackage(package, period, timeout)

**参数：**
- `package {string}` 等待的Package名称
- `period {number}` 等待的毫秒数
- `timeout {number}` 等待的总毫秒数

**返回：** `{void}`

等待Package出现，period为检查Package的间隔。如果timeout毫秒后未出现，则停止等待。


## exit()

**返回：** `{void}`

关闭脚本引擎

## AiSpeechToken(key, secret)

**参数：**
- `key {string}`
- `secret {string}`

**返回：** `{string}`

获取远程AI智能话术的token，通过此token再去调用对应的接口；下面是完整的JavaScript代码。

```javascript
let baiduWenxin = {
    key: 'setting_baidu_wenxin_role',
    dataFrom: 'role',
    getToken(key, secret) {
        key = key || storage.get('setting_baidu_wenxin_key');
        secret = secret || storage.get('setting_baidu_wenxin_secret');

        //查看是否激活了
        let body = System.AiSpeechToken(key, secret);
        Log.log('body', body);
        let aiRes = JSON.parse(body);
        Log.log('aiRes[\'data\']', aiRes['data']);
        if (aiRes['code'] === 0) {
            //开始激活
            return aiRes['data'];
        } else if (aiRes['code'] === 1) {
            FloatDialogs.show('提示', aiRes.msg);
            System.sleep(360000 * 1000);
            return;
        } else {
            Log.log('网络异常了');
            return false;
        }
    },

    getComment(title) {
        let res = this.getToken();
        let access_token = res['access_token'];

        let len = 20 + Math.round(30 * Math.random());

        let tmp = '';
        if (title) {
            tmp = '请你根据短视频标题生成一个有趣的评论内容，标题是：' + title;
        }

        let params = {
            "messages": [
                {
                    "role": "user",
                    "content": "接下来，请你随机帮我生成一条评论，可以是夸别人的视频拍的好、也开始是写一条祝福语、也可以你最想告诉大众的想法"
                }
            ],
            "max_output_tokens": 60,//最大输出长度60
            "system": System.getDataFrom(this.key, this.dataFrom, 'content'),
        }

        if (title) {
            params = {
                "messages": [
                    {
                        "role": "user",
                        "content": "接下来，我会给你一条视频标题，请你帮我生成一条评论，评论内容一定要精简，尽可能能让人看了想和我互动，并且尽可能不要激怒别人；内容字数不要超过" + len + "字，这个很重要"
                    },
                    {
                        "role": "assistant",
                        "content": '好的，我会尽我所能，请给我一条视频标题吧！'
                    },
                    {
                        "role": "user",
                        "content": title
                    },
                ],
                "max_output_tokens": 60,//最大输出长度60
                "system": System.getDataFrom(this.key, this.dataFrom, 'content'),
            }
        }

        //console.log(System.getDataFrom(this.key, this.dataFrom, 'content'));

        res = Http.post('https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions?access_token=' + access_token, params);
        if (res == null) {
            return false;
        }
        let result = JSON.parse(res);
        Log.log('百度文心返回话术-1', title ? '视频的标题是"' + title + '"，请结合你的角色，写一条少于' + len + '字的吸引人的评论内容' : '请你写一条字数小于' + len + '字的吸引人的评论视频内容', result);
        if (result && result['result']) {
            if (result['result'].substring(0, 1) === '"' && result['result'].substring(result['result'].length - 1) === '"') {
                result['result'] = result['result'].substring(1, result['result'].length - 1);
            }
        }
        return result['result'] || false;
    }
}
```


## generateWindowElements()

**返回：** `{void}`

该函数会将当前界面的所有控件记录到日志文件（APP上传日志后，即可拿到界面的控件的信息，一般用于bug定位使用）。

## getDataFrom()

**参数：**
- `key {string}`
- `dataForm {string}`
- `content {string}`

**返回：** `{void}`

dataForm类型的表单数据获取

```javascript
let key = 'setting_baidu_wenxin_role';//deekeScript.json中设置的角色表单的name
//"role"是配置接口（api地址：/dkee/config）中返回的内容
System.getDataFrom(key, 'role', 'content');//获取当前设置的角色的内容
```

## setTimeWindowShow(show)

**参数：** `show {boolean}`

**返回：** `{void}`

设置时间窗的显示状态

```javascript
System.setTimeWindowShow(false);//关闭运行时间悬浮窗
```

## isRunning()

**返回：** `{void}`

判断是否有任务在运行
