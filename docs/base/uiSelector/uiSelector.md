---
title: 选择器 - UiSelector
description: DeekeScript - 选择器 - UiSelector
---

# 选择器 - UiSelector

## 基本介绍

UiSelector 即选择器，用于筛选屏幕上的节点，再对节点进行点击、输入文本内容、长按等动作。这里需要先简单介绍一下节点和界面的相关知识。

Android中的界面是由一个个节点构成的，例如图片部分是一个图片节点(ImageView)，文字部分是一个文字节点(TextView)；同时，通过各种布局来决定各个节点的位置，例如，线性布局(LinearLayout)里面的节点都是按水平或垂直一次叠放的，列表布局(AbsListView)则是以列表的形式显示节点。

节点有各种属性，包括文本(text), 描述(desc), 类名(className)，是否可以点击（clickable）, id 等等。我们通常用一个节点的属性来找到这个节点，例如，想要点击某软件聊天窗口的"发送"按钮，我们就可以通过它的文本属性为"发送"来找到这个节点并点击他，具体代码为:

> 获取节点后，即可对节点进行点击，滑动，输入文本等操作。节点操作请阅读 __[节点操作](../uiObject/uiObject.md)__ 部分

```javascript
//这里的sendButton就是一个节点对象，可以对节点对象进行各种操作
let simpleMode = false;// 默认UiSelector不带参数，则为简单模式；如果simpleMode为false则为复杂模式（能查看到更多节点，包括系统节点，如：状态栏的WiFi、时间等）
let sendButton = UiSelector(simpleMode).text("发送").findOne();
//UiSelector(true) 和 UiSelector()是等同的
if(sendButton){
    sendButton.click();
}
```

## id(name)

**参数：** `name {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"id 等于字符串 name"的筛选条件。【对应节点选择器中的viewIdResourceName】

## className(name)

**参数：** `name {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"className 等于字符串 name"的筛选条件。

## bounds(left, top, right, bottom)

**参数：**
- `left {number}` 节点左边缘与屏幕左边的距离
- `top {number}` 上边距
- `right {number}` 右边距
- `bottom {number}` 下边距

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"bounds范围"的筛选条件。

## text(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"text 等于字符串 content"的筛选条件。

## desc(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"contentDescribe 等于字符串 content"的筛选条件。【对应节点选择器中的contentDescription】

## clickable(canClick)

**参数：** `canClick {boolean}` 是否可以点击

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"clickable 等于 canClick"的筛选条件。

## selected(isSelected)

**参数：** `isSelected {boolean}` 是否已选择

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"selected 等于 isSelected"的筛选条件。

## checked(isChecked)

**参数：** `isChecked {boolean}` 是否被选中

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"checked 等于字符串 isChecked"的筛选条件。

## enabled(isEnabled)

**参数：** `isEnabled {boolean}` 是否可以交互（为false的时候表示禁用）

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"enabled 等于字符串 isEnabled"的筛选条件。

## focusable(canFocus)

**参数：** `canFocus {boolean}` 是否可以获取焦点

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"focusable 等于 canFocus"的筛选条件。

## focused(isFocused)

**参数：** `isFocused {boolean}` 是否可以已获取焦点

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"focused 等于 isFocused"的筛选条件。

## editable(canEdit)

**参数：** `canEdit {boolean}` 是否可以编辑

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"editable 等于 canEdit"的筛选条件。

## scrollable(canScroll)

**参数：** `canScroll {boolean}` 是否可以滚动

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"scrollable 等于 canScroll"的筛选条件。

## isVisibleToUser(isVisibleToUser)

**参数：** `isVisibleToUser {boolean}` 是否对用户可见

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"isVisibleToUser 等于 isVisibleToUser"的筛选条件。

```javascript
// 查找对用户可见的节点
let visibleButton = UiSelector().isVisibleToUser(true).text("发送").findOne();
```

## textContains(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"text 包含字符串 content"的筛选条件。

```javascript
let tag = UiSelector().textContains("点赞").textContains("按钮").findOne();//同时包含“点赞”和“按钮”的节点
```

为当前选择器附加节点"text 以字符串 content 结尾"的筛选条件。

## textMatches(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"text 正则匹配 content"的筛选条件。

```javascript
let tag = UiSelector().textMatches(/点赞/).findOne();//含有"点赞"的节点
let tag2 = UiSelector().textMatches(/\d+/).findOne();//有数字的节点
let tag3 = UiSelector().textMatches('点赞').findOne();//和textContans效果一致
```

## descContains(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"contentDescribe 包含字符串 content"的筛选条件。

```javascript
let tag = UiSelector().descContains("点赞").descContains("按钮").findOne();//同时包含“点赞”和“按钮”的节点
```

## descMatches(content)

**参数：** `content {string}`

**返回：** `{UiSelector}` 返回选择器自身以便链式调用

为当前选择器附加节点"contentDescribe 正则匹配 content"的筛选条件。


```javascript
let tag = UiSelector().descMatches(/点赞/).findOne();//含有"点赞"的节点
let tag2 = UiSelector().descMatches(/\d+/).findOne();//有数字的节点
let tag3 = UiSelector().descMatches('点赞').findOne();//和descContans效果一致
```

## filter(callback)

**参数：** `callback {Callable}`

**返回：** `{UiObject[]}` 返回节点对象

对当前查找到的UiObject数组进行过滤，过滤的时候执行callback方法，该方法返回false，则对应的UiObject被过滤掉

```javascript
let ui = UiSelector().filter((v)=>{
    return v && v.bounds() && v.bounds().left > 100 && v.bounds().top > 300;//获取左边距大于100px，上边距大于300px的节点
}).findOne();
```

## exists()

**返回：** `{boolean}` 返回是否存在

判断当前选择器是否能匹配到UiObject节点信息。

```javascript
if (UiSelector().text("发送").exists()) {
    console.log("发送按钮存在");
}
```

## waitFindOne()

**返回：** `{UiObject}` 返回节点对象

一直阻塞，直到某个节点对象出现在屏幕上

## find()

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject节点。

## findBy(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject节点（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子节点、子节点的子节点，直到a下面的所有节点都被查找一遍才结束。

## findBy(timeout)

**参数：** `timeout {int}`

**返回：** `{UiObject[]}`

获取当前选择器筛选的所有UiObject节点，如果节点一直没有出现，则最大等待timeout毫秒。

## findOne()

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject节点。

## findOnce()

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject节点。

## findOne(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject}`

获取当前选择器筛选的第一个UiObject节点（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子节点、子节点的子节点，直到a下面的所有节点都被查找一遍才结束。

## findOneBy(uiSelector)

**参数：** `uiSelector {UiSelector}`

**返回：** `{UiObject[]}`

与findBy类似，区别是找到一个符合条件的节点，立马返回

## findOneBy(timeout)

**参数：** `timeout {int}`

**返回：** `{UiObject[]}`

与findBy类似，区别是找到一个符合条件的节点，立马返回
