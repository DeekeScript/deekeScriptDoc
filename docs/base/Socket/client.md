---
title: Socket.IO-客户端
description: DeekeScript - Socket.IO-客户端
---

# Socket.IO-客户端

`注意：在使用socket.io客户端的时候，需要手动使用disconnect()方法关闭连接。尤其在设置断开后重连的情况。如果没有手动关闭，当使用Engines.closeAll()的时候，会关闭当前线程和子线程的socket.io客户端`

> 创建socket.io客户端

```javascript
//创建socket.io客户端   自动重连   超时重连延时为5000毫秒
let socketIOClient = SocketIoClient.getInstance("http://192.168.1.106:3000", true, 5000);

socketIOClient.on("connect_error", (error) => {
    console.error("连接错误:", error);
});

socketIOClient.on("error", (error) => {
    console.error("通用错误:", error);
});

socketIOClient.on("connect_timeout", () => {
    console.error("连接超时");
});

socketIOClient.on("connect", function(){
    console.log('是否连接成功：', socketIOClient.isConnected());
    socketIOClient.on("message", function(data) {
        console.log(data);
    });

    //向服务器发送事件和数据
    socketIOClient.emit("message", {
        name: "DeekeScript",
        age: 3,
    });
});

socketIOClient.connect();//放在事件定义之前

let i = 0;
//防止当前脚本关闭，否则当前主线程会立马关闭，导致WebSocket也立即关闭
setInterval(function () {
  console.log('当前线程不关闭');
}, 1000);
```

## getInstance(url, reconnect, timeout)

**参数：**
- `url {string}` 服务器地址
- `reconnect {boolean}` 是否自动重连
- `timeout {number}` 连接超时时间

**描述：** 创建socket.io客户端实例

## connect()

**返回：** `{void}`

```javascript
socketIOClient.connect();//连接服务端
```

## isConnected()

**返回：** `{boolean}`

**描述：** 判断是否连接成功

```javascript
let bool = socketIOClient.isConnected();
```

## setReconnect(reconnect)

**参数：** `reconnect {boolean}` 是否自动重连

**描述：** 设置是否自动重连

## disconnect()

**返回：** `{void}`

```javascript
socketIOClient.disconnect();//关闭连接
```

## on(eventName, callback:function)

**参数：**
- `eventName {string}` 事件名称
- `callback {function}` 回调函数

**描述：** 监听服务端发送的消息

```javascript
socketIOClient.on("message", function(data) {
    console.log(data);
});
```

## emit(eventName, msg)

**参数：**
- `eventName {string}` 事件名称
- `msg {object}` 消息内容

**返回：** `{void}`

**描述：** 向服务端发送事件和数据

```javascript
socketIOClient.emit("message", {
    name: "DeekeScript",
    age: 3,
});
```

## emitWithAck(eventName, msg, callback)

**参数：**
- `eventName {string}` 事件名称
- `msg {object}` 消息内容
- `callback {function}` 服务器确认后的回调函数

**返回：** `{void}`

**描述：** 向服务端发送事件和数据，并等待服务器确认

```javascript
socketIOClient.emitWithAck("message", {
    name: "DeekeScript",
    age: 3,
}, function(data) {
    console.log("服务器确认:", data);
});
```

## off(eventName)

**参数：** `eventName {string}` 事件名称

**描述：** 移除事件监听器

```javascript
socketIOClient.off("message");
```

## off(eventName, callback)

**参数：**
- `eventName {string}` 事件名称
- `callback {function}` 监听函数

**描述：** 移除指定的事件监听器

```javascript
socketIOClient.off("message", callback);
```
