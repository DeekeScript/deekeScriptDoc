# 定时器

用于在未来某个未来时间执行函数；计时器函数实现了与 Web 浏览器提供的定时器类似的 API。

## setTimeout(callback, delay)
> callback {callback} 要执行的函数
> 
> delay {number} 延时 毫秒数

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

> 示例：

```javascript
setInterval(()=>{
    console.log('每间隔2秒执行一次');
}, 2000);
```

## setImmediate(callback)
> callback {callback} 要执行的函数

在Looper循环的当前回合结束时要调用的函数

> 示例：

```javascript
setImmediate(()=>{
    console.log('脚本最后执行');
});
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

## clearInterval(id)

取消一个由setInterval(callback, delay)创建的定时任务

> 示例：

```javascript
let timer = setInterval(()=>{
    console.log(123);
}, 1000);

clearInterval(timer);
```

## clearImmediate(id)

取消一个由setImmediate(callback, delay)创建的定时任务

> 示例：

```javascript
let timer = setImmediate(()=>{
    console.log(123);
});

clearImmediate(timer);
```
