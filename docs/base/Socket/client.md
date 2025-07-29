# Socket.IO-客户端

## 创建socket.io客户端

```
//创建socket.io客户端
let socketIOClient = SocketIOClient.getInstance("http://192.168.1.106:3000");

socketIOClient.on("connect_error", (error) => {
    console.error("连接错误:", error);
});

socketIOClient.on("error", (error) => {
    console.error("通用错误:", error);
});

socketIOClient.on("connect_timeout", () => {
    console.error("连接超时");
});

socketIOClient.connect();
System.sleep(3000);
console.log('是否连接成功：', socketIOClient.isConnected());

socketIOClient.on("message", function(data) {
    console.log(data);
});

//向服务器发送事件和数据
socketIOClient.emit("message", {
    name: "DeekeScript",
    age: 3,
});

```

## connect()
> 返回 {void}
> 
```
socketIOClient.connect();//连接服务端
```

## isConnected()
> 返回 {boolean}
>
> 描述：判断是否连接成功

```
let bool = socketIOClient.isConnected();
```

## disconnect()
> 返回 {void}
> 
```
socketIOClient.disconnect();//关闭连接
```

## on(type, callback:function)
> type {string}
> 
> callback {function}
> 
> 描述：监听服务端发送的消息
```
socketIOClient.on("connect", () => {
    console.error("连接成功");
});

socketIOClient.on("connect_error", (error) => {
    console.error("连接错误:", error);
});

socketIOClient.on("error", (error) => {
    console.error("通用错误:", error);
});

socketIOClient.on("connect_timeout", () => {
    console.error("连接超时");
});

//消息监听
socketIOClient.on("message", function(data) {
    console.log(data);
});
```

## emit(eventName, msg)
> eventName {string} 事件名称
> 
> msg {object} 消息内容
> 
> 返回 {void}
>
> 向服务器发送事件和数据

```
socketIOClient.emit("message", {
    name: "DeekeScript",
    age: 3,
});
```

## emit(eventName, msg, callback)
> eventName {string} 事件名称
> 
> msg {object} 消息内容
>
> callback {function} 服务器确认后的回调函数
> 
> 返回 {void}
>
>  向服务器发送事件和数据

```
socketIOClient.emit("message", {
    name: "DeekeScript",
    age: 3,
}, function(response) {
   console.log("收到 ack: " + response);
});
```
