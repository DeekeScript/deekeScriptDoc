# Socket.IO-客户端

`注意：在使用socket.io客户端的时候，需要手动使用disconnect()方法关闭连接。尤其在设置断开后重连的情况。`

> 创建socket.io客户端

```
//创建socket.io客户端   自动重连   超时重连延时为5000毫秒
let socketIOClient = SocketIOClient.getInstance("http://192.168.1.106:3000", true, 5000);

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
//防止当前脚本关闭
while(true){
    System.sleep(1000);
    i++;

    //这里实现一些断开逻辑
    if(i > 60){
        console.log('断开连接');
    }
}

```

## getInstance(url, reconnect, timeout)

> url {string} 服务器地址
>
> reconnect {boolean} 是否自动重连
>
> timeout {number} 连接超时时间
>
> 创建socket.io客户端实例

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

## setReconnect(reconnect)

> reconnect {boolean} 是否自动重连
> 设置是否自动重连
> 

## disconnect()
> 返回 {void}
> 
```
socketIOClient.disconnect();//关闭连接
```

## on(eventName, callback:function)

> eventName {string}
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


## off(eventName)

> eventName {string} 事件名称
>
> 移除指定事件监听
>

## off(eventName, callback)

> eventName {string} 事件名称
>
> callback {function} 监听函数
>
> 移除指定事件监听

## off()

> 移除所有事件监听
>
