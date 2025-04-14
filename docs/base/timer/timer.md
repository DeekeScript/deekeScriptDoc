# 定时器

用于在未来某个未来时间执行函数；计时器函数实现了与 Web 浏览器提供的定时器类似的 API。

> 注意：setInterval和setTimeout均通过多线程实现，与JavaScript（单线程，时间循环实现）的实现有差异。

## setTimeout(callback, delay)

> callback {callback} 要执行的函数
> 
> delay {number} 延时 毫秒数
>

> 示例：

```javascript
setTimeout(()=>{
    console.log('2秒后执行');
}, 2000);
```

## setInterval(callback, delay)

> callback {callback} 要执行的函数
> 
> delay {number} 延时 毫秒数
>

> 示例：

```javascript
setInterval(()=>{
    console.log('每间隔2秒执行一次');
}, 2000);
```

## clearTimeout(id)

取消一个由setTimeout(callback, delay)创建的定时任务

> 示例：

```javascript
let timer = setTimeout(()=>{
    console.log(123);
}, 1000);

clearTimeout(timer);
```

> 关闭所有定时器，请使用[Engines](../../advance/engines/engines.md)相关方法

## clearInterval(id)

取消一个由setInterval(callback, delay)创建的定时任务

> 示例：

```javascript
let timer = setInterval(()=>{
    console.log(123);
}, 1000);

clearInterval(timer);
```

> 关闭所有定时器，请使用[Engines](../../advance/engines/engines.md)相关方法
