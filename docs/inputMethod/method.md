---
title: 输入法-KeyBoards
description: DeekeScript - 输入法-KeyBoards
---

# 输入法-KeyBoards

## 输入法的作用

各大平台（如微信、支付宝、抖音、小红书等）通常会检测以下行为，安全性和平台推荐度：

| 场景           | 推荐输入方式               |
| ------------ | -------------------- |
| 一般文本输入       | ✅ **输入法更优**          |
| 需要频繁改文本、填表等  | ⚠️ 输入法优先，避免用 setText |
| 自动化模拟输入      | ✅ 输入法更隐蔽、更稳定         |
| 被平台反作弊监控的场景  | ✅ 输入法更安全             |
| 不可编辑字段或非标准节点 | ⚠️ 必须用无障碍            |


`总的来说，输入法输入内容，安全性更高；如果结合hid点击滑动，将会导致平台更难监控软件行为。`

## canInput()
判断当前输入法是不是默认输入法，如果不是则不能输入

> 返回 {boolean}  是否可以输入

```js

if(KeyBoards.canInput()){
    KeyBoards.input("文本框新增内容");
}
```

## isEnabled()
判断当前输入法是不是启用

> 返回 {boolean}  是否启用（注意，输入法启用之后，没有设置为默认输入法，此时不能输入，但是启用状态为true

```js

if(!KeyBoards.isEnabled()){
    //输入法没有启用
}
```


## input(info)
往文本框尾部输入文字（注意输入前，请先确认文本框获取焦点，否则输入失败，但是也会返回true）

> info {string}  输入的内容
> 返回 {boolean}  输入是否成功
>

```js
KeyBoards.input("文本框新增内容");
```

## delete()
删除获取焦点的文本框中的内容

> 返回 {boolean}  删除指令是否发送成功（注意，文本框内容删除完成之后，此方法依然返回true）
>

```js
KeyBoards.delete();//删除一个字符，如果需要全部删除，可以先获取文本长度，再循环调用delete方法
```

## hide()
隐藏键盘

> 返回 {boolean}  隐藏是否成功

```js
KeyBoards.hide();//隐藏当前显示的键盘
```

## pressKey(key)
发送按键事件，支持各种按键

> **注意**：输入法只能发送文本输入相关的按键，系统级按键（如HOME、BACK、POWER等）无法通过输入法发送
> 
> key {string|number}  按键代码，可以是字符串（如 "ENTER"）或数字（如 KeyBoards.KEYCODE.ENTER）
> 
> 返回 {boolean}  按键是否发送成功

支持的字符串按键名称（不区分大小写）：
- "ENTER": Enter键（回车）
- "DEL" 或 "DELETE": 删除键（向后删除）
- "TAB": Tab键（制表符）
- "SPACE": 空格键
- "UP": 上方向键（移动光标）
- "DOWN": 下方向键（移动光标）
- "LEFT": 左方向键（移动光标）
- "RIGHT": 右方向键（移动光标）
- "CENTER": 中心键（确认）
- "ESCAPE" 或 "ESC": 退出键
- "FORWARD_DEL": 向前删除键
- "MOVE_HOME": 移动到行首
- "MOVE_END": 移动到行尾
- "PAGE_UP": 向上翻页
- "PAGE_DOWN": 向下翻页

```js
// 使用字符串（推荐，最简单）
KeyBoards.pressKey("ENTER");
KeyBoards.pressKey("SPACE");
KeyBoards.pressKey("DEL");

// 使用常量对象（通过实例访问）
KeyBoards.pressKey(KeyBoards.KEYCODE.ENTER);
KeyBoards.pressKey(KeyBoards.KEYCODE.SPACE);
```

## pressEnter()
发送Enter键（回车键）

> 返回 {boolean}  按键是否发送成功

```js
KeyBoards.pressEnter();//等同于 KeyBoards.pressKey("ENTER")
```

## pressTab()
发送Tab键（制表符）

> 返回 {boolean}  按键是否发送成功

```js
KeyBoards.pressTab();//等同于 KeyBoards.pressKey("TAB")
```

## pressSpace()
发送空格键

> 返回 {boolean}  按键是否发送成功

```js
KeyBoards.pressSpace();//等同于 KeyBoards.pressKey("SPACE")
```

## showInputMethodPicker()
智能方法：根据当前状态自动跳转到合适的页面
- 如果已经是默认输入法，返回 true
- 如果未启用，跳转到启用页面（用户需要先启用）
- 如果已启用但未设为默认，弹出输入法选择界面（用户可以选择为默认）

> 返回 {boolean}  返回当前输入法是否已设为默认（true表示已是默认，false表示需要用户操作）

```js
// 检查并引导用户设置输入法
if (!KeyBoards.showInputMethodPicker()) {
    console.log("需要用户手动设置输入法为默认");
    // 等待用户操作
    System.sleep(2000);
    
    // 再次检查
    if (KeyBoards.canInput()) {
        console.log("输入法已设置为默认");
    }
}
```