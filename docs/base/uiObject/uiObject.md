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
let sendButton = UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## click()

**返回：** `{Boolean}` 返回是否点击成功（需要注意的是，返回成功只能说明无障碍已经将点击成功发送到了控件，但是不能确保控件被点击了，返回失败则一定没有点击成功）

点击控件

```javascript
let sendButton = UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## longClick()

**返回：** `{Boolean}` 返回是否点击成功

长按控件

```javascript
let sendButton = UiSelector().text("发送").findOne();
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
let et = UiSelector().className("EditText").findOne();
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
let obj = UiSelector().className("EditText").findOne();
obj.paste();
```

## focus()

**返回：** `{boolean}` 返回是否成功

获取焦点

```javascript
let obj = UiSelector().className("EditText").findOne();
obj.focus();
```


## setText(text)

**参数：** `text {string}` 输入参数

**返回：** `{boolean}` 返回是否成功

设置输入框控件的文本内容

```javascript
let obj = UiSelector().className("EditText").findOne();
obj.setText("DeekeScript");
```

## find(uiSelector)

**参数：** `uiSelector {UiSelector}` 要查找的内容

**返回：** `{UiObject[]|null}` 返回查找到的多个控件

返回当前控件的子控件中所有符合uiSelector条件的控件

```javascript
let obj = UiSelector().className("LinearLayout").findOne();
let children = obj.find(UiSelector().className("TextView"));
for(let i = 0; i < children.length; i++){
    console.log(children[i].text());
}
```

## findOne(uiSelector)

**参数：** `uiSelector {UiSelector}` 要查找的内容

**返回：** `{UiObject|null}` 返回查找到的控件


返回当前控件的子控件中一个符合uiSelector条件的控件

```javascript
let obj = UiSelector().className("TextView").findOne();
let child = obj.findOne(UiSelector().className("TextView"));
if(child){
    console.log(child.text());
}
```

## bounds()

**返回：** `{Rect}`

获取控件在屏幕上的边界信息

```javascript
let obj = UiSelector().text("发送").findOne();
if(obj){
    let bounds = obj.bounds();
    console.log("左边界：" + bounds.left);
    console.log("上边界：" + bounds.top);
    console.log("右边界：" + bounds.right);
    console.log("下边界：" + bounds.bottom);
}
```

## id()

**返回：** `{string}`

获取控件的id

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log(obj.id());
}
```

## text()

**返回：** `{string}`

获取控件的文本内容

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log(obj.text());
}
```

## desc()

**返回：** `{string}`

获取控件的描述信息


```javascript
let obj = UiSelector().className("ImageView").findOne();
if(obj){
    console.log(obj.desc());
}
```

## className()

**返回：** `{string}`

获取控件的类名

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log("控件类名：" + obj.className());
}
```


## getPackageName()

**返回：** `{string}`

获取控件所属的包名

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log("包名：" + obj.packageName());
}
```


## childCount()

**返回：** `{number}`

获取控件的子控件数量

```javascript
let obj = UiSelector().className("LinearLayout").findOne();
if(obj){
    console.log("子控件数量：" + obj.childCount());
}
```

## children()

**返回：** `{number}`

获取控件的子控件

```javascript
let obj = UiSelector().className("LinearLayout").findOne();
if(obj && obj.childCount() > 0){
    //获取当前控件下面的所有TextView控件
    let childs = obj.children().find(UiSelector().className("TextView"));
    //获取当前控件下面的第一个TextView控件
    let child = obj.children().find(UiSelector().className("TextView"));

    //获取第index个子控件
    let indexChild = obj.children().getChildren(index);
}
```

## getChildren()

**返回：** `{UiObject}`

获取控件的子控件

```javascript
//获取第index个子控件
let obj = UiSelector().className("LinearLayout").findOne();
let indexChild = obj.children().getChildren(index);
```

## parent()

**返回：** `{UiObject}`

获取控件的父控件

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    let parent = obj.parent();
    console.log("父控件类名：" + parent.className());
}
```


## getDrawingOrder()

**返回：** `{number}` 绘制顺序

获取控件的绘制顺序

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log("绘制顺序：" + obj.getDrawingOrder());
}
```

## getHintText()

**返回：** `{string}`

获取控件的提示文本


## isSelected()

**返回：** `{boolean}`

判断控件是否已选中

```javascript
let obj = UiSelector().className("RadioButton").findOne();
if(obj){
    console.log("是否已选中：" + obj.isSelected());
}
```


## isClickable()

**返回：** `{boolean}`

判断控件是否可点击

```javascript
let obj = UiSelector().className("Button").findOne();
if(obj){
    console.log("是否可点击：" + obj.isClickable());
}
```

## isLongClickable()

**返回：** `{boolean}`

判断控件是否可长按

```javascript
let obj = UiSelector().className("Button").findOne();
if(obj){
    console.log("是否可长按：" + obj.isLongClickable());
}
```

## isEditable()

**返回：** `{boolean}`

判断控件是否可编辑

```javascript
let obj = UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否可编辑：" + obj.isVisibleToUser());
}
```

## isFocusable()

**返回：** `{boolean}`

判断控件是否可获取焦点

```javascript
let obj = UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否可获取焦点：" + obj.isFocusable());
}
```

## isFocused()

**返回：** `{boolean}`

判断控件是否已获取焦点

```javascript
let obj = UiSelector().className("EditText").findOne();
if(obj){
    console.log("是否已获取焦点：" + obj.isFocused());
}
```

## isCheckable()

**返回：** `{boolean}`

判断控件是否可选中

```javascript
let obj = UiSelector().className("CheckBox").findOne();
if(obj){
    console.log("是否可选中：" + obj.isCheckable());
}
```


## isEnabled()

**返回：** `{boolean}`

判断控件是否已启用

```javascript
let obj = UiSelector().className("Button").findOne();
if(obj){
    console.log("是否已启用：" + obj.isEnabled());
}
```


## isPassword()

**返回：** `{boolean}`

判断控件是否为密码输入框



## isScrollable()

**返回：** `{boolean}`

判断控件是否可滚动

```javascript
let obj = UiSelector().className("ScrollView").findOne();
if(obj){
    console.log("是否可滚动：" + obj.isScrollable());
}
```


## isVisibleToUser()

**返回：** `{boolean}`

判断控件是否对用户可见

```javascript
let obj = UiSelector().className("TextView").findOne();
if(obj){
    console.log("是否对用户可见：" + obj.isVisibleToUser());
}
```

## isChecked()

**返回：** `{boolean}`

判断控件是否已选中

```javascript
let obj = UiSelector().className("CheckBox").findOne();
if(obj){
    console.log("是否已选中：" + obj.isChecked());
}
```
