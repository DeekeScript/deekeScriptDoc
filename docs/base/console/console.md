---
title: 控制台 - console
description: DeekeScript - 控制台 - console
---

# 控制台 - console

控制台模块提供了一个和Web浏览器中相似的用于调试的控制台。用于输出一些调试信息、中间结果等。 console模块中的一些函数也可以直接作为全局函数使用，例如log, info等。
同时，该对象中提供了一些方法，用于控制日志悬浮窗的显示、样式和行为。

> 如果你不仅仅需要打印数据到控制台，还需要记录日志到文件，请使用 __[日志-Log](../log/log.md)__ 相关的方法

> 注意：console是DeekeScript中唯一一个首字母小写的对象（为了适应用户习惯）

## log([data][, ...args])

打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。

```javascript
console.log("输出的内容", 324, {name: "张三"});
```

## info([data][, ...args])

与console.log类似。输出优先级高于log, 用于输出重要信息。

## debug([data][, ...args])

与console.log类似。输出优先级高于log, 用于输出重要信息。

## warn([data][, ...args])

与console.log类似。输出优先级高于info, 用于输出警告信息。

## error([data][, ...args])

与console.log类似。输出优先级高于warn, 用于输出错误信息。

## trace([data][, ...args])


## 日志窗口管理方法

以下方法用于控制日志窗口的显示、样式和行为：

### show()

显示日志窗口。

```javascript
console.show();
```

### hide()

隐藏日志窗口。

```javascript
console.hide();
```

### setWindowSize(width, height)

设置日志窗口的大小。

**参数：**
- `width {number}` - 窗口宽度（像素）
- `height {number}` - 窗口高度（像素）

```javascript
console.setWindowSize(800, 600);
```

### setWindowPosition(x, y)

设置日志窗口的位置。

**参数：**
- `x {number}` - 窗口左上角X坐标（像素）
- `y {number}` - 窗口左上角Y坐标（像素）

```javascript
console.setWindowPosition(100, 200);
```

### setBackgroundColor(color)

设置日志窗口的背景颜色。

**参数：**
- `color {number}` - 颜色值（ARGB格式，如 0xFF000000 表示黑色）

```javascript
console.setBackgroundColor(0xFF000000); // 黑色背景
```

### setTextColor(color)

设置日志文本的颜色。

**参数：**
- `color {number}` - 颜色值（ARGB格式，如 0xFFFFFFFF 表示白色）

```javascript
console.setTextColor(0xFFFFFFFF); // 白色文本
```

### setTextSize(size)

设置日志文本的字体大小。

**参数：**
- `size {number}` - 字体大小（像素）

```javascript
console.setTextSize(14);
```

### setLineHeight(lineHeight)

设置日志文本的行高。

**参数：**
- `lineHeight {number}` - 行高（像素）

```javascript
console.setLineHeight(20);
```

### setButtonColors(closeColor, dragColor, resizeColor)

一次性设置三个按钮的颜色（关闭按钮、拖拽按钮、调整大小按钮）。

**参数：**
- `closeColor {number}` - 关闭按钮颜色（ARGB格式）
- `dragColor {number}` - 拖拽按钮颜色（ARGB格式）
- `resizeColor {number}` - 调整大小按钮颜色（ARGB格式）

```javascript
console.setButtonColors(0xFFFF0000, 0xFF00FF00, 0xFF0000FF);
```

### setAllowMoveToTop(allow)

设置是否允许窗口移动到顶部。

**参数：**
- `allow {boolean}` - 是否允许移动到顶部

```javascript
console.setAllowMoveToTop(true);
```

### setAllowMoveToBottom(allow)

设置是否允许窗口移动到底部。

**参数：**
- `allow {boolean}` - 是否允许移动到底部

```javascript
console.setAllowMoveToBottom(true);
```

### setClickable(clickable)

设置日志窗口是否可点击（穿透）。

**参数：**
- `clickable {boolean}` - 是否可点击

```javascript
console.setClickable(false); // 设置为不可点击，窗口可以穿透
```

### isClickable()

检查日志窗口是否可点击。

**返回：** `{boolean}` 是否可点击

```javascript
let clickable = console.isClickable();
console.log("窗口是否可点击:", clickable);
```

### clearLogs()

清空日志窗口中的所有日志。

```javascript
console.clearLogs();
```

### setMaxLogLines(maxLines)

设置日志窗口显示的最大行数。超过此数量的旧日志会被自动删除。

**参数：**
- `maxLines {number}` - 最大行数

```javascript
console.setMaxLogLines(1000);
```

### getMaxLogLines()

获取日志窗口显示的最大行数。

**返回：** `{number}` 最大行数

```javascript
let maxLines = console.getMaxLogLines();
console.log("最大行数:", maxLines);
```

### setAutoScroll(autoScroll)

设置是否自动滚动到底部（当有新日志时）。

**参数：**
- `autoScroll {boolean}` - 是否自动滚动

```javascript
console.setAutoScroll(true);
```

### setWindowStyle(config)

一次性设置日志窗口的多个样式属性。这是一个便捷方法，可以替代多次调用单独的设置方法。

**参数：**
- `config {object}` - 配置对象，可以包含以下属性：
  - `width {number}` - 窗口宽度
  - `height {number}` - 窗口高度
  - `x {number}` - 窗口X坐标
  - `y {number}` - 窗口Y坐标
  - `backgroundColor {number}` - 背景颜色（ARGB格式）
  - `textColor {number}` - 文本颜色（ARGB格式）
  - `textSize {number}` - 字体大小
  - `lineHeight {number}` - 行高
  - `closeButtonColor {number}` - 关闭按钮颜色（ARGB格式）
  - `dragButtonColor {number}` - 拖拽按钮颜色（ARGB格式）
  - `resizeButtonColor {number}` - 调整大小按钮颜色（ARGB格式）
  - `allowMoveToTop {boolean}` - 是否允许移动到顶部
  - `allowMoveToBottom {boolean}` - 是否允许移动到底部
  - `clickable {boolean}` - 是否可点击

```javascript
console.setWindowStyle({
    width: 800,
    height: 600,
    x: 100,
    y: 200,
    backgroundColor: 0xFF000000, // 黑色背景
    textColor: 0xFFFFFFFF,      // 白色文本
    textSize: 14,
    lineHeight: 20,
    closeButtonColor: 0xFFFF0000,  // 红色关闭按钮
    dragButtonColor: 0xFF00FF00,     // 绿色拖拽按钮
    resizeButtonColor: 0xFF0000FF,  // 蓝色调整大小按钮
    allowMoveToTop: true,
    allowMoveToBottom: true,
    clickable: true
});
```

### getWindowStyle()

获取当前日志窗口的样式配置。

**返回：** `{object}` 包含所有样式配置的对象

```javascript
let style = console.getWindowStyle();
console.log("窗口宽度:", style.width);
console.log("窗口高度:", style.height);
console.log("背景颜色:", style.backgroundColor);
console.log("文本颜色:", style.textColor);
// ... 其他属性
```