# App

App对象提供了一些应用相关的数据获取能力，比如当前App的版本号、获取某个App的版本等。

## currentPackageName()
> 返回 {string} 

获取当前应用的包名，获取你当前开发的App的包名，比如在DeekeScript中执行这个函数，将获取到“top.deeke.script”

```javascript
console.log(App.currentPackageName());//输出 top.deeke.script
```

## currentVersionCode()
> 返回 {number} 整型

返回当前App的版本号，这个在App更新的时候判断当前App的版本号时很有用

## currentVersionName()
> 返回 {string}

返回当前App的版本名称

## packageInfo()
> 返回 {PackageInfo}

返回当前App的包信息，通过包信息你可以获取诸如“版本号，版本名称”等信息，可以遍历查看其属性和值


## gotoIntent(uri)
> uri {string}
> 
> 返回 {void}

根据URI启动Activity

```javascript
//打开抖音用户主页  user_id是抖音的用户ID
 App.gotoIntent('snssdk1128://user/profile/' + user_id);
```


## startActivity(intent)
> 2.0版本即将上线
>
> intent {Intent}
> 
> 返回 {void}

根据intent启动Activity

```javascript
//跳转到目标APP
let intent = new Intent(Intent.ACTION_VIEW, Uri.parse("myapp://second_activity"));
startActivity(intent);
```

## backApp()
> void
>
> 返回 {void}

返回到执行脚本的APP

```javascript
App.backApp();
```

## startService(intent)
> 2.0版本即将上线
>
> options {object}
> 
> 返回 {void}

根据选项构造一个Intent，并启动该服务。


## sendBroadcast(intent)
> 2.0版本即将上线
>
> intent {Intent}
> 
> 返回 {void}

根据选项构造一个Intent，并发送该广播。

## launch(packageName)
> packageName {string}

通过包名打开应用

```javascript
App.launch("top.deeke.script");//打开DeekeScript
```


## notifySuccess(title, content)
> 2.0版本即将上线
>
> title {string}
>
> content {string}
>
> 返回 {Notification}

通过Android的通知来告知用户，当前脚本已经执行完成，并且关闭当前启动的功能
如果只是通知完成，但是不关闭当前脚本，请自定义通知实现

## getAppVersionName(packageName)
> packageName {string}

获取某个APP的版本名称

```javascript
let versionName = App.getAppVersionName("top.deeke.script");
console.log(versionName);
```

## getAppVersionCode(packageName)
> packageName {string}

获取某个APP的版本号

```javascript
let versionName = App.getAppVersionCode("top.deeke.script");
console.log(versionName);
```

## openAppSetting(packageName)
> packageName {string}

通过包名，打开设置页面，在此页面可以无障碍点击卸载和强制停止按钮（停止应用的时候，很管用）
