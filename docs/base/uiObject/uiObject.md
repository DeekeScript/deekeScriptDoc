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
> 返回 {Boolean} 返回是否点击成功（需要注意的是，返回成功只能说明无障碍已经将点击成功发送到了控件，但是不能确保控件被点击了，返回失败则一定没有点击成功）

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

在当前的控件下查找某些控件，查找符合UiSelector过滤器条件的控件

```javascript
let obj = new UiSelector().className("name").findOne();
let uiObjects = obj.find(new UiSelector().className("EditText"));//查找obj下面的所有输入框控件

//查找obj所有子节点中的输入框控件
let uiObjects2 = obj.children().find(new UiSelector().className("EditText"));
```

## findOne(uiSelector)
> uiSelector {UiSelector} 要查找的内容
> 返回 {UiObject|null} 返回查找到的控件对象

同find(uiSelector)，但是findOne只返回一个符合条件的控件

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
console.log(rect.left, rect.top, rect.right, rect.bottom, rect.height(), rect.width());
```


## id()
> 返回 {string}

返回当前控件的id

```javascript
let obj = new UiSelector().id("p2").findOne();
let str = obj.id();//查找viewIdResourceName的值，输出p2
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

返回当前控件的所有子控件对象，需要和length、getChildren方法联合使用

```javascript
let obj = new UiSelector().id("p2").findOne();
let children = obj.children();
for(let i = 0; i < children.length(); i++){
    let c = children.getChildren(i);
    console.log(c.text());
}
```

## getChildren(index)

> 返回 {UiObject|null}

需要和children方法一起使用


## length()

> 返回 {number}

返回子控件数量

## parent()
> 返回 {UiObject}

返回当前控件的父控件对象

```javascript
let obj = new UiSelector().id("p2").findOne();
let parent = obj.parent();//子控件内容
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

是否可以点击，类似的方法还有

| 方法                        | 作用                          |
|-----------------------------|-------------------------------|
| `isSelected()`               | 判断控件是否被选中（如复选框）  |
| `isLongClickable()`          | 判断控件是否支持长按事件       |
| `isClickable()`              | 判断控件是否可点击             |
| `isEditable()`               | 判断控件是否可编辑（如文本框） |
| `isFocusable()`              | 判断控件是否可获得焦点         |
| `isEnabled()`                | 判断控件是否启用               |
| `isPassword()`               | 判断控件是否为密码输入框       |
| `isScrollable()`             | 判断控件是否可滚动             |
| `isVisibleToUser()`          | 判断控件是否对用户可见         |
| `isCheckable()`              | 判断控件是否可选中（如复选框） |
| `isChecked()`                | 判断控件是否已选中（如复选框） |


## setClickable(bool)
> 返回 {void}

设置是否可以点击，类似的方法还有

| 方法                          | 作用                          |
|-------------------------------|-------------------------------|
| `setLongClickable()`           | 设置控件是否支持长按事件       |
| `setEditable()`                | 设置控件是否可编辑（如文本框） |
| `setEnabled()`                 | 设置控件是否启用               |
| `setChecked()`                 | 设置控件是否选中（如复选框）   |
| `setSelected()`                | 设置控件是否被选中（如复选框） |
| `setFocusable()`               | 设置控件是否可获得焦点         |
| `setFocused()`                 | 设置控件是否已获得焦点         |
| `setPassword()`                | 设置控件是否为密码输入框       |
| `setVisibleToUser()`           | 设置控件是否对用户可见         |
