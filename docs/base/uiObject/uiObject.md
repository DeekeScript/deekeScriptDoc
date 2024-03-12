# 控件操作

## 基本介绍

UiObject 即控件对象，可以对控件进行点击、长按等动作。这里需要先简单介绍一下控件的相关知识。

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
> 返回 {Boolean} 返回是否点击成功

点击控件

```javascript
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## longClick()
> 返回 {Boolean} 返回是否点击成功

点击控件

```javascript
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.longClick();
}
```

## scrollForward()
> 返回 {Boolean} 返回是否滑动成功

向前滑动控件，将会让界面下方的节点往上滚动或者右边的节点往左滚动

## scrollBackward()
> 返回 {Boolean} 返回是否滑动成功

向后滑动控件，将会让界面上方的节点往下滚动或者左边的节点往右滚动


## setSelection(startPosition, endPosition)
> startPosition {number} 起始位置
> 
> endPosition {number} 结束位置
>
> 返回 {Boolean} 返回是否成功

选中文本内容

## copy()
> 返回 {Boolean} 返回是否成功

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
> 返回 {boolean} 返回是否成功

对输入框文本的选中内容进行剪切，并返回是否操作成功。

该函数只能用于输入框控件，并且当前输入框控件有选中的文本。可以通过setSelection()函数来设置输入框选中的内容。

## paste()
> 返回 {boolean} 返回是否成功

粘贴内容到文本框

```javascript
System.setClip("DeekeScript");//将字符串“DeekeScript”粘贴到文本框
let obj = new UiSelector().className("EditText").findOne();
obj.paste();
```

## focus()
> 返回 {boolean} 返回是否成功

获取焦点。

```javascript
let obj = new UiSelector().className("EditText").findOne();
obj.focus();
```

## setText(text)
> text {string} 输入参数
> 返回 {boolean} 返回是否成功

将字符串“text”输入到文本框

```javascript
let obj = new UiSelector().className("EditText").findOne();
obj.setText("DeekeScript");//将字符串“DeekeScript”输入到文本框
```

## find(uiSelector)
> uiSelector {UiSelector} 要查找的内容
> 返回 {UiObject[]|null} 返回查找到的控件对象

在当前的控件下查找某些控件，查找条件通过UiSelector定义

```javascript
let obj = new UiSelector().className("name").findOne();
let uiObjects = obj.find(new UiSelector().className("EditText"));//查找obj下面的所有输入框控件
```

## findOne(uiSelector)
> uiSelector {UiSelector} 要查找的内容
> 返回 {UiObject|null} 返回查找到的控件对象

在当前的控件下查找某个控件，查找条件通过UiSelector定义

```javascript
let obj = new UiSelector().className("name").findOne();
let uiObject = obj.findOne(new UiSelector().className("EditText"));//查找obj下面的第一个输入框控件
```

## bounds()
> 返回 {Rect}

返回当前控件的位置信息

```javascript
let obj = new UiSelector().className("EditText").findOne();
let rect = obj.bounds();
//输出  左边距、上边距、右边距、下边距、高度、宽度
console.log(rect.left, rect.top, rect.right, rect.bottom, rect.height(), rec.width());
```


## id()
> 返回 {string}

返回当前控件的id

```javascript
let obj = new UiSelector().id("p2").findOne();
let str = obj.id();//输出p2
```

## text()
> 返回 {string}

返回当前控件的text内容

```javascript
let obj = new UiSelector().id("p2").findOne();
let str = obj.text();//控件的text属性获取
```

## desc()
> 返回 {string}

返回当前控件的contentDescription内容

```javascript
let obj = new UiSelector().id("p2").findOne();
let str = obj.desc();//控件的contentDescription属性获取
```

## children()
> 返回 {UiObject[]|null}

返回当前控件的所有子控件对象

```javascript
let obj = new UiSelector().id("p2").findOne();
let childs = obj.children();//子控件内容
```

## parent()
> 返回 {UiObject}

返回当前控件的父控件对象

```javascript
let obj = new UiSelector().id("p2").findOne();
let childs = obj.parent();//子控件内容
```

## getDrawingOrder()
> 返回 {number} 层级

返回当前控件的 绘制层级

```javascript
let obj = new UiSelector().id("p2").findOne();
let index = obj.getDrawingOrder();//控件绘制层级
```

## isClickable()
> 返回 {boolean}

是否可以点击，相关的方法还有：isFocusable/isScrollable/isLongClickable/isEnable/isPassword/isEditable/isVisibleToUser/isCheckable/isChecked/isSelected

## setClickable(bool)
> 返回 {void}

设置是否可以点击，相关的方法还有：setFocusable/setScrollable/setLongClickable/setEnable/setPassword/setEditable/setVisibleToUser/setCheckable/setChecked/setSelected