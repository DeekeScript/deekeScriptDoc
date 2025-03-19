# 选择器 - UiSelector

## 基本介绍

UiSelector 即选择器，用于筛选屏幕上的控件，再对控件进行点击、输入文本内容、长按等动作。这里需要先简单介绍一下控件和界面的相关知识。

Android中的界面是由一个个控件构成的，例如图片部分是一个图片控件(ImageView)，文字部分是一个文字控件(TextView)；同时，通过各种布局来决定各个控件的位置，例如，线性布局(LinearLayout)里面的控件都是按水平或垂直一次叠放的，列表布局(AbsListView)则是以列表的形式显示控件。

控件有各种属性，包括文本(text), 描述(desc), 类名(className)，是否可以点击（clickable）, id 等等。我们通常用一个控件的属性来找到这个控件，例如，想要点击某软件聊天窗口的"发送"按钮，我们就可以通过它的文本属性为"发送"来找到这个控件并点击他，具体代码为:

> 获取控件后，即可对控件进行点击，滑动，输入文本等操作。控件操作请阅读 __[控件操作](../uiObject/uiObject.md)__ 部分

```javascript
//这里的sendButton就是一个控件对象，可以对控件对象进行各种操作
let sendButton = new UiSelector().text("发送").findOne();
if(sendButton){
    sendButton.click();
}
```

## id(name)
> name {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"id 等于字符串 name"的筛选条件。【对应节点选择器中的viewIdResourceName】

## className(name)
> name {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"className 等于字符串 name"的筛选条件。

## bounds(left, top, right, bottom)
> left {number} 控件左边缘与屏幕左边的距离
> 
> top {number} 上边距
> 
> right {number} 右边距
> 
> bottom {number} 下边距
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"bounds范围"的筛选条件。

## text(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"text 等于字符串 content"的筛选条件。


## desc(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 等于字符串 content"的筛选条件。【对应节点选择器中的contentDescription】


## clickable(canClick)
> canClick {boolean}  是否可以点击
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"clickable 等于 canClick"的筛选条件。


## selected(isSelected)
> isSelected {boolean} 是否已选择
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"selected 等于 isSelected"的筛选条件。


## checked(isChecked) 
> isChecked {boolean} 是否被选中
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"checked 等于字符串 isChecked"的筛选条件。


## enabled(isEnabled)
> isEnabled {boolean}  是否可以交互（为false的时候表示禁用）
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"enabled 等于字符串 isEnabled"的筛选条件。


## scrollable(canScrollable)
> canScrollable {boolean}  是否可以滚动
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"scrollable 等于字符串 canScrollable"的筛选条件。


## checkable(isCheckable)
> isCheckable {boolean} 是否可以选中
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"checkable 等于字符串 isCheckable"的筛选条件。


## textContains(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"text 包含字符串 content"的筛选条件。


## isVisibleToUser(canVisible)
> canVisible {boolean}  是否对用户可见（控件在屏幕上）
> 返回 {UiSelector} 返回选择器自身以便链式调用

> 注意：因为它判断的是视图本身是否在布局层级中可见（被遮挡了，也会返回true）

为当前选择器附加控件"isVisibleToUser 等于 canVisible"的筛选条件。


## textMatches(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"text 正则匹配 content"的筛选条件。


## descContains(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 正则匹配 content"的筛选条件。


## descMatches(content)
> content {string}
> 
> 返回 {UiSelector} 返回选择器自身以便链式调用

为当前选择器附加控件"contentDescribe 正则匹配 content"的筛选条件。


## filter(callback)
> callback {Callable}
> 
> 返回{UiObject[]} 返回控件对象

对当前查找到的UiObject数组进行过滤，过滤的时候执行callback方法，该方法返回false，则对应的UiObject被过滤掉

```
let ui = UiSelector().filter((v)=>{
    return v && v.bounds() && v.bounds().left > 100 && v.bounds().top > 300;//获取左边距大于100px，上边距大于300px的控件
}).findOne();
```

## exist()
> content {string}
> 
> 返回 {boolean} 返回是否存在

判断当前选择器是否能匹配到UiObject控件信息。


## waitFindOne()
> 返回 {UiObject} 返回控件对象

一直阻塞，直到某个控件对象出现在屏幕上


## find()
> 返回 {UiObject[]}

获取当前选择器筛选的所有UiObject控件。


## findBy(uiSelector)
> uiSelector {UiSelector}
> 
> 返回 {UiObject[]}

获取当前选择器筛选的所有UiObject控件（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子控件、子控件的子控件，直到a下面的所有控件都被查找一遍才结束。



## findBy(timeout)
> timeout {int}
> 
> 返回 {UiObject[]}

获取当前选择器筛选的所有UiObject控件，如果控件一直没有出现，则最大等待timeout毫秒。



## findOne()
> 返回 {UiObject}

获取当前选择器筛选的第一个UiObject控件。


## findOnce()
> 返回 {UiObject}

获取当前选择器筛选的第一个UiObject控件。


## findOne(uiSelector)
> uiSelector {UiSelector}
> 
> 返回 {UiObject}

获取当前选择器筛选的第一个UiObject控件（a）中查找符合uiSelector选择器的UiObject；从a集合查找，然后遍历它们的子控件、子控件的子控件，直到a下面的所有控件都被查找一遍才结束。


## find(timeout)
> timeout {number}
> 
> 返回 {UiObject} 

获取当前选择器筛选的第一个UiObject控件，查找timeout时间，时间结束后不管是否找到，都会结束查找，并且返回。
