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
Dialogs.confirm("提示", "确定执行吗？", (result)=>{
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

后台弹出弹窗，但是需要开启悬浮窗权限

```javascript
//heart.js主要启动一个定时器setInterval，每间隔几秒钟往服务器发送当前App的状态
FloatDialogs.show("恭喜你，弹窗成功弹出");

FloatDialogs.show("温馨提示", "恭喜你，弹窗成功弹出");
```