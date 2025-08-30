---
title: 控件操作
description: DeekeScript - 控件操作
---

# 控件操作

## 基本介绍

UiObject 即控件对象，可以对控件进行点击、输入文本、长按等动作。这里需要先简单介绍一下控件的相关知识。

Android中的界面是由一个个控件构成的，例如图片部分是一个图片控件(ImageView)，文字部分是一个文字控件(TextView)；同时，通过各种布局来决定各个控件的位置。

> 获取控件后，即可对控件进行点击，滑动，输入文本等操作。获取控件操作请阅读 __[获取控件操作](../uiSelector/uiSelector.md)__ 部分

```javascript
//这里的sendButton就是一个控件对象，可以对控件对象进行各种操作
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## click()

**返回：** `{Boolean}` 返回是否点击成功（需要注意的是，返回成功只能说明无障碍已经将点击成功发送到了控件，但是不能确保控件被点击了，返回失败则一定没有点击成功）

点击控件

```javascript
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## longClick()

**返回：** `{Boolean}` 返回是否点击成功

长按控件

```javascript
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.longClick();
}
```

## scrollForward()

**返回：** `{Boolean}` 返回是否滑动成功

向前滑动控件，将会让界面下方的节点往上滚动或者右边的节点往左滚动。可以通过返回false来判断是否滑动到底。

## scrollBackward()

**返回：** `{Boolean}` 返回是否滑动成功

向后滑动控件，将会让界面上方的节点往下滚动或者左边的节点往右滚动。可以通过返回false来判断是否滑动到顶。

## setSelection(startPosition, endPosition)

**参数：**
- `startPosition {number}` 起始位置
- `endPosition {number}` 结束位置

**返回：** `{Boolean}` 返回是否成功

选中文本内容

## copy()

**返回：** `{Boolean}` 返回是否成功

复制选中的文本内容

```javascript
let et = new UiSelector().className("EditText").findOne();
//选中前两个字
et.setSelection(0, 2);
//对选中内容进行复制
if(et.copy()){
    toast("复制成功");
}else{
    toast("复制失败");
}
```

## cut()

**返回：** `{boolean}` 返回是否成功

对输入框文本的选中内容进行剪切，并返回是否操作成功。

该函数只能用于输入框控件，并且当前输入框控件有选中的文本。可以通过setSelection()函数来设置输入框选中的内容。

## paste()

**返回：** `{boolean}` 返回是否成功

粘贴内容到文本框

```javascript
System.setClip("DeekeScript");//将字符串"DeekeScript"粘贴到文本框
let obj = new UiSelector().className("EditText").findOne();
obj.paste();
```

## focus()
**返回：** `{boolean}` 返回是否成功

获取焦点

```javascript
let obj = new UiSelector().className("EditText").findOne();
obj.focus();
```


## setText(text)

**参数：** `text {string}` 输入参数

**返回：** `{boolean}` 返回是否成功

设置输入框控件的文本内容

```javascript
let obj = new UiSelector().className("EditText").findOne();
obj.setText("DeekeScript");
```

## find(uiSelector)

**参数：** `uiSelector {UiSelector}` 要查找的内容

**返回：** `{UiObject[]|null}` 返回查找到的控件对象

根据选择器查找控件

```javascript
let obj = new UiSelector().className("LinearLayout").findOne();
let children = obj.find(new UiSelector().className("TextView"));
for(let i = 0; i < children.length; i++){
    console.log(children[i].text());
}
```

## findOne(uiSelector)

**参数：** `uiSelector {UiSelector}` 要查找的内容

**返回：** `{UiObject|null}` 返回查找到的控件对象

根据选择器查找控件

```javascript
let obj = new UiSelector().className("LinearLayout").findOne();
let child = obj.findOne(new UiSelector().className("TextView"));
if(child){
    console.log(child.text());
}
```

## bounds()

**返回：** `{Rect}`

获取控件在屏幕上的边界信息

```javascript
let obj = new UiSelector().text("发送").findOne();
if(obj){
    let bounds = obj.bounds();
    console.log("左边界：" + bounds.left);
    console.log("上边界：" + bounds.top);
    console.log("右边界：" + bounds.right);
    console.log("下边界：" + bounds.bottom);
}
```

## text()

**返回：** `{string}`

获取控件的文本内容

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log(obj.text());
}
```

## desc()

**返回：** `{string}`

获取控件的描述信息

## setDesc(desc)

**参数：** `desc {string}` 控件描述内容

**返回：** `{void}`

设置控件的描述信息

```javascript
let obj = new UiSelector().className("ImageView").findOne();
if(obj){
    console.log(obj.desc());
}
```

## id()

**返回：** `{string}`

获取控件的id

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log(obj.id());
}
```

## findChildren(uiSelector)

**返回：** `{UiObject[]|null}`

获取控件的子控件

```javascript
let obj = new UiSelector().className("LinearLayout").findOne();
if(obj){
    let children = obj.findChildren(new UiSelector().className("TextView"));
    for(let i = 0; i < children.length; i++){
        console.log(children[i].text());
    }
}
```

## findChild(uiSelector)

**返回：** `{UiObject|null}`

获取控件的子控件

```javascript
let obj = new UiSelector().className("LinearLayout").findOne();
if(obj){
    let child = obj.findChild(new UiSelector().className("TextView"));
    if(child){
        console.log(child.text());
    }
}
```

## childCount()

**返回：** `{number}`

获取控件的子控件数量

```javascript
let obj = new UiSelector().className("LinearLayout").findOne();
if(obj){
    console.log("子控件数量：" + obj.childCount());
}
```

## parent()

**返回：** `{UiObject}`

获取控件的父控件

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    let parent = obj.parent();
    console.log("父控件类名：" + parent.className());
}
```

## depth()

**返回：** `{number}` 层级

获取控件在布局中的层级

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log("控件层级：" + obj.depth());
}
```

## getDrawingOrder()
**返回：** `{number}` 绘制顺序

获取控件的绘制顺序

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log("绘制顺序：" + obj.getDrawingOrder());
}
```


## isSelected()

**返回：** `{boolean}`

判断控件是否已选中

```javascript
let obj = new UiSelector().className("RadioButton").findOne();
if(obj){
    console.log("是否已选中：" + obj.isSelected());
}
```


## isClickable()

**返回：** `{boolean}`

判断控件是否可点击

```javascript
let obj = new UiSelector().className("Button").findOne();
if(obj){
    console.log("是否可点击：" + obj.isClickable());
}
```

## isLongClickable()

**返回：** `{boolean}`

判断控件是否可长按

```javascript
let obj = new UiSelector().className("Button").findOne();
if(obj){
    console.log("是否可长按：" + obj.isLongClickable());
}
```

## isCheckable()

**返回：** `{boolean}`

判断控件是否可选中

```javascript
let obj = new UiSelector().className("CheckBox").findOne();
if(obj){
    console.log("是否可选中：" + obj.isCheckable());
}
```

## isChecked()

**返回：** `{boolean}`

判断控件是否已选中

```javascript
let obj = new UiSelector().className("CheckBox").findOne();
if(obj){
    console.log("是否已选中：" + obj.isChecked());
}
```

## isEnabled()

**返回：** `{boolean}`

判断控件是否已启用

```javascript
let obj = new UiSelector().className("Button").findOne();
if(obj){
    console.log("是否已启用：" + obj.isEnabled());
}
```

## isFocusable()

**返回：** `{boolean}`

判断控件是否可获取焦点

```javascript
let obj = new UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否可获取焦点：" + obj.isFocusable());
}
```

## isFocused()

**返回：** `{boolean}`

判断控件是否已获取焦点

```javascript
let obj = new UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否已获取焦点：" + obj.isFocused());
}
```

## isScrollable()

**返回：** `{boolean}`

判断控件是否可滚动

```javascript
let obj = new UiSelector().className("ScrollView").findOne();
if(obj){
    console.log("是否可滚动：" + obj.isScrollable());
}
```


## isVisibleToUser()

**返回：** `{boolean}`

判断控件是否对用户可见

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log("是否对用户可见：" + obj.isVisibleToUser());
}
```

## isEditable()

**返回：** `{boolean}`

判断控件是否可编辑

```javascript
let obj = new UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否可编辑：" + obj.isVisibleToUser());
}
```

## isPassword()

**返回：** `{boolean}`

判断控件是否为密码输入框

## className()

**返回：** `{string}`

获取控件的类名

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log("控件类名：" + obj.className());
}
```

## getPackageName()

**返回：** `{string}`

获取控件所属的包名

```javascript
let obj = new UiSelector().className("TextView").findOne();
if(obj){
    console.log("包名：" + obj.packageName());
}
```

## setHintText(hintText)

**参数：** `hintText {string}` 辅助提示文本

**返回：** `{void}`

设置一个 辅助提示文本


## setClickable(clickable)

**参数：** `clickable {boolean}` 是否可以点击

**返回：** `{UiObject}`

设置控件是否可以点击


## setLongClickable(longClickable)

**参数：** `longClickable {boolean}` 是否可以长按

**返回：** `{UiObject}`

设置控件是否可以长按


## setEditable(editable)

**参数：** `editable {boolean}` 是否可以编辑

**返回：** `{UiObject}`

设置控件是否可以编辑


## setEnabled(enabled)

**参数：** `enabled {boolean}` 是否可用

**返回：** `{UiObject}`

设置控件是否可用


## setCheckable(checkable)

**参数：** `checkable {boolean}` 是否可以选中

**返回：** `{UiObject}`

设置控件是否可以选中


## setChecked(checked)

**参数：** `checked {boolean}` 是否选中

**返回：** `{UiObject}`

设置控件是否选中


## setSelected(selected)

**参数：** `selected {boolean}` 是否选中

**返回：** `{UiObject}`

设置控件是否选中


## setFocusable(focusable)

**参数：** `focusable {boolean}` 是否可获得焦点
**返回：** `{UiObject}`

设置控件是否可获得焦点


## setFocused(focusable)

**参数：** `focusable {boolean}` 是否获得焦点

**返回：** `{UiObject}`

设置控件是否获得焦点


## setScrollable(scrollable)

**参数：** `scrollable {boolean}` 是否可以滚动
**返回：** `{UiObject}`

设置控件是否可以滚动


## setPassword(password)

**参数：** `password {boolean}` 是否是密码控件

**返回：** `{UiObject}`

设置控件是否是密码控件


## setVisibleToUser(visibleToUser)

**参数：** `visibleToUser {boolean}` 是否对用户可见

**返回：** `{UiObject}`

设置控件是否对用户可见
