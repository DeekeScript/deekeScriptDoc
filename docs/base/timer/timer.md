---
title: 定时器
description: DeekeScript - 定时器
---

# 定时器

用于在未来某个未来时间执行函数；计时器函数实现了与 Web 浏览器提供的定时器类似的 API。

`使用定时器的时候，请在不使用的时候手动关闭；如果没有手动关闭，当使用Engines.closeAll()的时候，会关闭当前线程和子线程的定时器。`

> 注意：setInterval和setTimeout均实现了类似于JavaScript（单线程，事件循环）

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
