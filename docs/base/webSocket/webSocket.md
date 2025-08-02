# webSocket

## 创建WebSocket

`使用WebSocket的时候，请在不使用的时候手动关闭；如果没有手动关闭，当使用Engines.closeAll()的时候，会关闭当前线程和子线程的WebSocket。`

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

//保持当前线程不关闭，否则当前主线程会立马关闭，导致WebSocket也立即关闭
setInterval(function () {
  console.log('当前线程不关闭');
}, 1000);
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