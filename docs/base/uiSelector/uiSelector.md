---
title: 选择器 - UiSelector
description: DeekeScript - 选择器 - UiSelector
---

# 选择器 - UiSelector

## 基本介绍

UiSelector 即选择器，用于筛选屏幕上的控件，再对控件进行点击、输入文本内容、长按等动作。这里需要先简单介绍一下控件和界面的相关知识。

Android中的界面是由一个个控件构成的，例如图片部分是一个图片控件(ImageView)，文字部分是一个文字控件(TextView)；同时，通过各种布局来决定各个控件的位置，例如，线性布局(LinearLayout)里面的控件都是按水平或垂直一次叠放的，列表布局(AbsListView)则是以列表的形式显示控件。

控件有各种属性，包括文本(text), 描述(desc), 类名(className)，是否可以点击（clickable）, id 等等。我们通常用一个控件的属性来找到这个控件，例如，想要点击某软件聊天窗口的"发送"按钮，我们就可以通过它的文本属性为"发送"来找到这个控件并点击他，具体代码为:

> 获取控件后，即可对控件进行点击，滑动，输入文本等操作。控件操作请阅读 __[控件操作](../uiObject/uiObject.md)__ 部分

```javascript
//这里的sendButton就是一个控件对象，可以对控件对象进行各种操作
let simpleMode = false;// 默认UiSelector不带参数，则为简单模式；如果simpleMode为false则为复杂模式（能查看到更多控件，包括系统控件，如：状态栏的WiFi、时间等）
let sendButton = UiSelector(simpleMode).text("发送").findOne();
//UiSelector(true) 和 UiSelector()是等同的
if(sendButton){
    sendButton.click();
}
```

## id(name)

**参数：** `name {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"id 等于字符串 name"的筛选条件。【对应节点选择器中的viewIdResourceName】

## className(name)

**参数：** `name {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"className 等于字符串 name"的筛选条件。

## bounds(left, top, right, bottom)

**参数：**
- `left {number}` 控件左边缘与屏幕左边的距离
- `top {number}` 上边距
- `right {number}` 右边距
- `bottom {number}` 下边距

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"bounds范围"的筛选条件。

## text(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"text 等于字符串 content"的筛选条件。

## desc(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 等于字符串 content"的筛选条件。【对应节点选择器中的contentDescription】

## clickable(canClick)

**参数：** `canClick {boolean}` 是否可以点击

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"clickable 等于 canClick"的筛选条件。

## selected(isSelected)

**参数：** `isSelected {boolean}` 是否已选择

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"selected 等于 isSelected"的筛选条件。

## checked(isChecked)

**参数：** `isChecked {boolean}` 是否被选中

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"checked 等于字符串 isChecked"的筛选条件。

## enabled(isEnabled)

**参数：** `isEnabled {boolean}` 是否可以交互（为false的时候表示禁用）

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"enabled 等于字符串 isEnabled"的筛选条件。

## focusable(canFocus)

**参数：** `canFocus {boolean}` 是否可以获取焦点

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"focusable 等于 canFocus"的筛选条件。

## focused(isFocused)

**参数：** `isFocused {boolean}` 是否可以已获取焦点

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"focused 等于 isFocused"的筛选条件。

## editable(canEdit)

**参数：** `canEdit {boolean}` 是否可以编辑

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"editable 等于 canEdit"的筛选条件。

## scrollable(canScroll)

**参数：** `canScroll {boolean}` 是否可以滚动

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"scrollable 等于 canScroll"的筛选条件。

## isVisibleToUser(isVisibleToUser)

**参数：** `isVisibleToUser {boolean}` 是否对用户可见

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"isVisibleToUser 等于 isVisibleToUser"的筛选条件。

```javascript
// 查找对用户可见的控件
let visibleButton = UiSelector().isVisibleToUser(true).text("发送").findOne();
```

## textContains(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"text 包含字符串 content"的筛选条件。

```javascript
let tag = UiSelector().textContains("点赞").textContains("按钮").findOne();//同时包含“点赞”和“按钮”的控件
```

为当前选择器附加控件"text 以字符串 content 结尾"的筛选条件。

## textMatches(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"text 正则匹配 content"的筛选条件。

```javascript
let tag = UiSelector().textMatches(/点赞/).findOne();//含有"点赞"的控件
let tag2 = UiSelector().textMatches(/\d+/).findOne();//有数字的控件
let tag3 = UiSelector().textMatches('点赞').findOne();//和textContans效果一致
```

## descContains(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 包含字符串 content"的筛选条件。

```javascript
let tag = UiSelector().descContains("点赞").descContains("按钮").findOne();//同时包含“点赞”和“按钮”的控件
```

## descMatches(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 正则匹配 content"的筛选条件。


```javascript
let tag = UiSelector().descMatches(/点赞/).findOne();//含有"点赞"的控件
let tag2 = UiSelector().descMatches(/\d+/).findOne();//有数字的控件
let tag3 = UiSelector().descMatches('点赞').findOne();//和descContans效果一致
```

## filter(callback)

**参数：** `callback {Callable}`

**返回：** `{UiObject[]}` 返回控件对象

对当前查找到的UiObject数组进行过滤，过滤的时候执行callback方法，该方法返回false，则对应的UiObject被过滤掉

```javascript
let ui = UiSelector().filter((v)=>{
    return v && v.bounds() && v.bounds().left > 100 && v.bounds().top > 300;//获取左边距大于100px，上边距大于300px的控件
}).findOne();
```

## exists()

**返回：** `{boolean}` 返回是否存在

判断当前选择器是否能匹配到UiObject控件信息。

```javascript
if (UiSelector().text("发送").exists()) {
    console.log("发送按钮存在");
}
```

## waitFindOne()

**返回：** `{UiObject}` 返回控件对象

一直阻塞，直到某个控件对象出现在屏幕上

## find()

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject控件。

## findBy(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject控件（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子控件、子控件的子控件，直到a下面的所有控件都被查找一遍才结束。

## findBy(timeout)

**参数：** `timeout {int}`

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject控件，如果控件一直没有出现，则最大等待timeout毫秒。

## findOne()

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject控件。

## findOnce()

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject控件。

## findOne(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject控件（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子控件、子控件的子控件，直到a下面的所有控件都被查找一遍才结束。

## findOneBy(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject[]}`

与findBy类似，区别是找到一个符合条件的控件，立马返回

## findOneBy(timeout)

**参数：** `timeout {int}`

**返回：** `{UiObject[]}`

与findBy类似，区别是找到一个符合条件的控件，立马返回
