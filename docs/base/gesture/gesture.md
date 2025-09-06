---
title: 手势操作 - Gesture
description: DeekeScript - 手势操作 - Gesture
---

# 手势操作 - Gesture

## click(x, y)

**参数：**
- `x {number}` x轴坐标
- `y {number}` y轴坐标

**返回：** `{boolean}`

点击屏幕位置，注意点击时间为200-300毫秒，如果需要控制点击时间，请使用press方法

```javascript
Gesture.click(100, 200);
```

## longClick(x, y)

**参数：**
- `x {number}` x轴坐标
- `y {number}` y轴坐标

**返回：** `{boolean}`

长按屏幕位置，注意点击时间为600-800毫秒，如果需要控制时间请使用press方法

```javascript
Gesture.longClick(100, 200);
```

## press(x, y, duration)

**参数：**
- `x {number}` x轴坐标
- `y {number}` y轴坐标
- `duration {number}` 按压时间  毫秒

**返回：** `{boolean}`

按压屏幕位置一段时间

```javascript
Gesture.press(100, 200, 10);//每次按压10毫秒
```

## swipe(startX, startY, endX, endY, duration)

**参数：**
- `startX {number}` 开始位置的x轴坐标
- `startY {number}` 开始位置的y轴坐标
- `endX {number}` 结束位置的x轴坐标
- `endY {number}` 结束位置的y轴坐标
- `duration {number}` 滑动时间  毫秒

**返回：** `{boolean}`

滑动手势

```javascript
Gesture.swipe(100, 200, 500, 400, 200);//从坐标（100,200）滑动到（500，400），执行时间为200毫秒
```

## back()

**返回：** `{boolean}`

点击返回按键

```javascript
Gesture.back();
```

## home()

**返回：** `{boolean}`

点击Home按键，返回到主界面

```javascript
Gesture.home();
```

## recents()

**返回：** `{boolean}`

显示最近任务

```javascript
Gesture.recents();
```
