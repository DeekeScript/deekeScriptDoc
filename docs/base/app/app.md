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

## packageInfo(packageName)

**参数：** `packageName {string}` 包名

**返回：** `{PackageInfo}`

返回指定App的包信息，通过包信息你可以获取诸如"版本号，版本名称"等信息，可以遍历查看其属性和值

```javascript
let packageInfo = App.packageInfo("top.deeke.script");
console.log(packageInfo.versionCode); // 版本号
console.log(packageInfo.versionName); // 版本名称
```

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


## isAppInstalled(packageName)

**参数：** `packageName {string}`

判断应用是否已安装

```javascript
let isInstalled = App.isAppInstalled("top.deeke.script");
```

## getAppVersionCode(packageName)

**参数：** `packageName {string}`

获取指定应用的版本号

```javascript
let version = App.getAppVersionCode("top.deeke.script");
```

## getAppVersionName(packageName)

**参数：** `packageName {string}`

获取指定应用的版本名称

```javascript
let versionName = App.getAppVersionName("top.deeke.script");
```

## openAppSetting(packageName)

**参数：** `packageName {string}` 包名

**返回：** `{void}`

打开某个APP的设置页面


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

## notifySuccess(title, content)

**参数：** 
- `title {string}` 通知标题
- `content {string}` 通知内容

**返回：** `{void}`

显示成功通知

```javascript
App.notifySuccess("操作成功", "任务已完成");
```

## openUrl(url, packageName)

**参数：** 
- `url {string}` URL地址
- `packageName {string}` 包名（可选，用于指定打开URL的应用）

**返回：** `{void}`

打开URL地址。如果提供了`packageName`参数，则优先使用指定应用打开，如果应用未安装则使用浏览器打开；如果未提供`packageName`参数，则直接使用浏览器打开。

```javascript
// 使用浏览器打开URL
App.openUrl("https://www.baidu.com");

// 通过指定应用（如抖音）打开URL
App.openUrl("https://www.douyin.com/user/xxx", "com.ss.android.ugc.aweme");

// 如果指定应用未安装，则自动使用浏览器打开
App.openUrl("https://www.douyin.com/user/xxx", "com.ss.android.ugc.aweme");
```
