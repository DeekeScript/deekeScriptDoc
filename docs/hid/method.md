---
title: Hid方法
description: DeekeScript - Hid方法
---

# Hid方法

## swipe(x1, y1, x2, y2, step, down_timeout, up_timeout, timeout, up_down_times)

**参数：**
- `x1 {number}` 按下点的X1坐标
- `y1 {number}` 按下点的Y1坐标
- `x2 {number}` 移动到点的X2坐标
- `y2 {number}` 移动到的Y2坐标
- `step {number}` 单步移动距离(5-60建议,越大越快)(可选 默认20-51随机)
- `down_timeout {number}` 按下后等待多久开始滑动(可选 默认100-180随机)
- `up_timeout {number}` 滑动完等多久抬起(可选 默认100-180随机)
- `timeout {number}` 每个步长中间延时(可选 默认8-15随机)
- `up_down_times {number}` 抬起次数(一般不需要)(可选 默认1)

**返回：** `{boolean}`

模拟直线滑动

```javascript
Hid.swipe(10,1000,1000,1050)
```

## swipex(x1, y1, x2, y2, radian, step, down_timeout, up_timeout, timeout, up_down_times)

**参数：**
- `x1 {number}` 按下点的X1坐标
- `y1 {number}` 按下点的Y1坐标
- `x2 {number}` 移动到点的X2坐标
- `y2 {number}` 移动到的Y2坐标
- `radian {number}` 1-500建议,越大弧度越大推荐10-100(可选:默认10-100)
- `step {number}` 单步移动距离(5-60建议,越大越快)(可选 默认20-51随机)
- `down_timeout {number}` 按下后等待多久开始滑动(可选 默认100-180随机)
- `up_timeout {number}` 滑动完等多久抬起(可选 默认100-180随机)
- `timeout {number}` 每个步长中间延时(可选 默认8-15随机)
- `up_down_times {number}` 抬起次数(一般不需要)(可选 默认1)

**返回：** `{boolean}`

仿真曲线滑动

```javascript
Hid.swipex(10,1000,1000,1050)
```

## ver()

**返回：** `{double}` 插件版本号

获取插件版本号

## home()

**返回：** `{boolean}`

模拟按下Home键。

## recents()

**返回：** `{boolean}`

模拟按下任务键。

## back()

**返回：** `{boolean}`

模拟按下返回键。

## back1()

**返回：** `{boolean}`

另一种方式模拟按下返回键。

## touchDown(x, y)

**参数：**
- `x {number}` 触摸点的X坐标
- `y {number}` 触摸点的Y坐标

**返回：** `{boolean}`

模拟手指按下事件。

## touchMove(int x, int y)

**参数：**
- `x {number}` 触摸点的X坐标
- `y {number}` 触摸点的Y坐标

**返回：** `{boolean}`

模拟手指移动事件。

## touchUp(int x, int y)

**参数：**
- `x {number}` 触摸点的X坐标
- `y {number}` 触摸点的Y坐标

**返回：** `{boolean}`

模拟手指抬起事件。

## touchUp()

**返回：** `{boolean}`

模拟手指抬起事件，使用最后一次记录的触摸位置。

## touchUp2()

**返回：** `{boolean}`

模拟手指抬起事件，尝试多次抬起。

## tap(int x, int y)

**参数：**
- `x {number}` 触摸点的X坐标
- `y {number}` 触摸点的Y坐标

**返回：** `{boolean}`

模拟手指点击事件。

## getName()

**返回：** `{String}`

获取已连接蓝牙设备的名称。

## keyDown(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟按键按下事件。

## keyUp(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟按键抬起事件。

## keyPress(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟按键按下和抬起事件。

## keyPress_code(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟特定的按键按下和抬起事件，与keyPress不同。

## keyDown_code(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟特定的按键按下事件，与keyDown不同。

## keyUp_code(code)

**参数：** `code {number}` 键码

**返回：** `{boolean}`

模拟特定的按键抬起事件，与keyUp不同。

## keyUpAll()

**返回：** `{boolean}`

模拟松开所有按键。

## key_select()

**返回：** `{boolean}`

模拟全选操作。

## key_paste()

**返回：** `{boolean}`

模拟粘贴操作。

## key_copy()

**返回：** `{boolean}`

模拟复制操作。

## key_cat()

**返回：** `{boolean}`

模拟剪切操作。

## key_del()

**返回：** `{boolean}`

模拟退格（删除）操作。

## key_delete()

**返回：** `{boolean}`

模拟删除操作。

## key_enter()

**返回：** `{boolean}`

模拟回车操作。

## key_num(n)

**参数：** `n {number}` 数字（0-9）

**返回：** `{boolean}`

模拟数字键按下。

## key_abc(n)

**参数：** `n {char}` 字母

**返回：** `{boolean}`

模拟字母键按下。

## volUp()

**返回：** `{boolean}`

模拟音量增大操作。

## volDown()

**返回：** `{boolean}`

模拟音量减小操作。

## power()

**返回：** `{boolean}`

模拟按下电源键。

## power(time)

**参数：** `time {number}` 持续时间（毫秒）

**返回：** `{boolean}`

模拟按住电源键一段时间。

## reboot()

**返回：** `{boolean}`

模拟重启蓝牙主板。

## setXY(x, y)

**参数：**
- `x {number}` X坐标
- `y {number}` Y坐标

**返回：** `{boolean}`

设置分辨率。

## reg(key)

**参数：** `key {string}` 注册密钥

**返回：** `{boolean}`

注册设备。

## setRnd(x, y)

**参数：**
- `x {number}` 随机数X
- `y {number}` 随机数Y

**返回：** `{boolean}`

设置点击延时随机数。

## setBattery(lv)

**参数：** `lv {number}` 电量百分比

**返回：** `{boolean}`

设置电池电量。

## connect(boolean autoconnect, int index)

**参数：**
- `autoconnect {boolean}` 是否自动连接
- `index {number}` 设备索引

**返回：** `{boolean}`

连接蓝牙设备。

## getConnectedDevices()

**返回：** `{BluetoothDevice|null}`

获取已连接的蓝牙设备。

## getConnectState()

**返回：** `{boolean}`

获取当前蓝牙连接状态，true表示已连接。

## sendData(str)

**参数：** `str {string}` 要发送的数据

**返回：** `{boolean}`

发送数据到蓝牙设备。

## sendDataAwait(str, time)

**参数：**
- `str {string}` 要发送的数据
- `time {number}` 等待时间（毫秒）

**返回：** `{boolean}`

发送数据并等待响应。

## getData(time)

**参数：** `time {number}` 等待时间（毫秒）

**返回：** `{string}`

获取数据。

## waitFor(time, sleep)

**参数：**
- `time {number}` 最大等待时间（毫秒）
- `sleep {number}` 检查间隔（毫秒）

**返回：** `{String}` 数据或超时提示

等待数据并处理超时。

## waitFor(time)

**参数：** `time {number}` 默认最大等待时间（毫秒）

**返回：** `{String}` 数据或超时提示

等待数据并处理超时（默认检查间隔）。

## waitFor()

**返回：** `{String}` 数据或断开连接提示

持续等待数据直到连接断开或数据可用。

## getData()

**返回：** `{String}`

获取最新接收到的数据。

## disconnect()

**返回：** `{boolean}`

断开蓝牙连接。
