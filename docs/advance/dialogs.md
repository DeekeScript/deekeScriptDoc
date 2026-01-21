---
title: 弹窗
description: DeekeScript - 弹窗
---

# 弹窗

弹窗主要分为两类，一类当前APP在前台运行，请使用Dialogs弹窗；如果APP已经在后台启动了，Dialogs弹窗将会无法弹出。此时可以使用FloatDialogs弹窗（基于悬浮窗实现，需要开启悬浮窗权限）

## Dialogs弹窗

### show(title, content)
> str {string}  弹窗标题
>
> content {string|undefined}  弹窗内容，可以不填
>
> 返回 void

弹出弹窗

```javascript
Dialogs.show("恭喜你，弹窗成功弹出");

Dialogs.show("温馨提示", "恭喜你，弹窗成功弹出");
```

### input(title, value='')
> str {string}  弹窗标题
>
> value {string|number}  输入框默认值，可以为空
>
> 返回 void

弹出弹窗

```javascript
let count = Dialogs.input("请设置操作次数：", 5);
console.log(count);

let account = Dialogs.input("请设置账号：");
console.log(account);
```

### confirm(title, content, func)
> str {string}  弹窗标题
>
> content {string}  说明
>
> func {function}  点击确定或者取消之后，执行的方法
>
> 返回 void

弹出弹窗

```javascript
Dialogs.confirm("提示", "确定执行吗？", (result) => {
    if(result){
        console.log('点击了确定');
    }else{
        console.log('点击了取消');
    }
});
```


## FloatDialogs弹窗

### show(title, content='')
> str {string}  弹窗标题
>
> content {string}  弹窗内容
>
> 返回 void

后台弹出弹窗，但是需要开启悬浮窗权限（弹窗会保持屏幕常亮）

```javascript
//heart.js主要启动一个定时器setInterval，每间隔几秒钟往服务器发送当前App的状态
FloatDialogs.show("恭喜你，弹窗成功弹出");

FloatDialogs.show("温馨提示", "恭喜你，弹窗成功弹出");
```

## setFloatWindowClickable(clickable)
> clickable {boolean}  是否可点击
>
> 返回 void

设置右侧悬浮窗是否可点击；主要是防止在执行click的时候，点击到右侧悬浮窗，导致点击失败；

```javascript
//下面这行是异步执行的，所以执行后，需要等待几百毫秒
FloatDialogs.setFloatWindowClickable(false);
System.sleep(300);//建议休眠300毫秒，防止上面的设置未生效
Gesture.click(100, 200);
FloatDialogs.setFloatWindowClickable(true);
```

## setFloatWindowVisible(visible)
> visible {boolean}  是否显示
>
> 返回 void

设置右侧悬浮窗显示/隐藏（隐藏后，将不会保持屏幕常亮）

```javascript
// 隐藏悬浮窗
FloatDialogs.setFloatWindowVisible(false);

// 显示悬浮窗
FloatDialogs.setFloatWindowVisible(true);
```

## toast(content)
> 返回 void

显示一个toast，与System.toast()效果相同，此方法在APP后台运行时弹出提示

## toastLong(content)
> 返回 void

显示一个toast，显示时间相对于toast更长，与System.toastLong()效果相同，此方法在APP后台运行时弹出提示

## closeAll()
> 返回 void

关闭所有弹窗

```javascript
FloatDialogs.closeAll();
```

## confirm(title, content, confirmText, cancelText, callback)
> title {string}  弹窗标题
>
> content {string}  弹窗内容
>
> confirmText {string}  确定按钮文字
>
> cancelText {string}  取消按钮文字
>
> callback {function}  回调函数，接收一个dialog对象作为参数，可以通过dialog.setContent()动态修改弹窗内容。如果回调函数返回true，则自动关闭对话框；返回false或不返回值，则继续等待用户点击按钮
>
> 返回 {boolean}  如果用户点击了确定按钮返回true，点击了取消按钮返回false

显示确认对话框，支持动态修改内容和回调函数。此方法会阻塞当前线程，直到用户点击按钮或回调函数返回true。

**注意**：此方法需要在初始化FloatDialogs时传入scope参数才能使用。

```javascript
// 基本用法
let result = FloatDialogs.confirm("提示", "确定执行吗？", "确定", "取消", (dialog) => {
    // dialog对象可以动态修改弹窗内容
    dialog.setContent("内容已更新");
    // 返回true会自动关闭对话框，返回false或不返回值则继续等待用户点击按钮
    return false; // 不自动关闭，等待用户点击
});

if (result) {
    console.log('用户点击了确定');
} else {
    console.log('用户点击了取消');
}

// 动态修改内容的示例
FloatDialogs.confirm("倒计时", "准备开始", "开始", "取消", (dialog) => {
    for (let i = 3; i > 0; i--) {
        dialog.setContent(`倒计时: ${i}秒`);
        System.sleep(1000);
    }
    dialog.setContent("开始执行！");
    return true; // 自动关闭对话框
});
```
