---
title: App
description: DeekeScript - App
---

# App

App对象提供了一些应用相关的数据获取能力，比如当前App的版本号、获取某个App的版本等。

## currentPackageName()

**返回：** `{string}`

获取当前应用的包名，获取你当前开发的App的包名，比如在DeekeScript中执行这个函数，将获取到"top.deeke.script"

```javascript
console.log(App.currentPackageName());//输出 top.deeke.script
```

## currentVersionCode()

**返回：** `{number}` 整型

返回当前App的版本号，这个在App更新的时候判断当前App的版本号时很有用

## currentVersionName()

**返回：** `{string}`

返回当前App的版本名称

## packageInfo()

**返回：** `{PackageInfo}`

返回当前App的包信息，通过包信息你可以获取诸如"版本号，版本名称"等信息，可以遍历查看其属性和值

## gotoIntent(uri)

**参数：** `uri {string}`

**返回：** `{void}`

根据URI启动Activity

```javascript
//打开抖音用户主页  user_id是抖音的用户ID
 App.gotoIntent('snssdk1128://user/profile/' + user_id);
```

## backApp()

**返回：** `{void}`

返回到执行脚本的APP

```javascript
App.backApp();
```


## launch(packageName)

**参数：** `packageName {string}`

通过包名打开应用

```javascript
App.launch("top.deeke.script");//打开DeekeScript
```

## createNotification(title, content)

**参数：**
- `title {string}` 通知标题
- `content {string}` 通知内容

**返回：** `{Notification}`

创建一个通知

```javascript
let notification = App.createNotification("标题", "内容");
```

## isAppInstalled(packageName)

**参数：** `packageName {string}`

判断应用是否已安装

```javascript
let isInstalled = App.isAppInstalled("top.deeke.script");
```

## getAppVersion(packageName)

**参数：** `packageName {string}`

获取指定应用的版本号

```javascript
let version = App.getAppVersion("top.deeke.script");
```

## getAppVersionName(packageName)

**参数：** `packageName {string}`

获取指定应用的版本名称

```javascript
let versionName = App.getAppVersionName("top.deeke.script");
```

## startActivity(intent)

> 2.0版本即将上线

**参数：** `intent {Intent}`

**返回：** `{void}`

根据intent启动Activity

```javascript
//跳转到目标APP
let intent = new Intent(Intent.ACTION_VIEW, Uri.parse("myapp://second_activity"));
startActivity(intent);
```
