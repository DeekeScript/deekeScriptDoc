# webSocket

## 创建WebSocket

```
let client = new WebSocket("ws://192.168.0.100:8080");
client.onMessage = function (msg){
 	console.log('消息来了' + msg); 
}

//连接完成后
client.onOpen = function (){
  client.send("测试");//发送消息
  setTimeout(() => {
    client.close();
  }, 1000);
}

//连接关闭执行
client.onClose = function (code, reason){
    console.log('关闭了',code, reason);
}

//出现错误时执行
client.onError = function (errorMsg){
    console.log('出错了：' + errorMsg);
}
```

## send(msg)
> msg {string}
> 
> 返回 {void}

```
let client = new WebSocket("ws://192.168.0.100:8080");

//连接完成后
client.onOpen = function (){
  client.send("测试");//发送消息
  setTimeout(() => {
    client.close();
  }, 1000);
}
```

## close()
```
let client = new WebSocket("ws://192.168.0.100:8080");
client.close();//关闭当前连接
```

## WebSocket.closeAll()
```
WebSocket.closeAll();//关闭所有的客户端
```