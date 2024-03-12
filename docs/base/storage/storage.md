# 本地存储

本地存储模块提供了一些数据写入和读取的功能。

> 存储模块底层使用的<a target="_blank" href="https://developer.android.com/topic/libraries/architecture/datastore?hl=zh-cn">Android DataStore</a>实现


## createDataStore(namespace);
> namespace {string}
> 
> 返回 {boolean}

设置存储文件，不同模块可以设置不同的namespace 【对应Android中的filename】
> 注意：前缀为"deekeScript:XXX"的namespace被系统使用，用户只能读取不能写入

```javascript
Storage.createDataStore(namespace);

```

## put(key, value);
> key {string}
> 
> value {any}
> 
> 返回 {boolean}


```javascript
let user = {
    name: "张三",
    age: 22
};

Storage.put("user", user);
```

## get(key);
> key {string}
> 
> 返回 {any}

输出键为key的值，不存在的时候返回null

```javascript
let user = Storage.get("user");
Log.log(user);//输出json数据  {name: "张三", age: 22}
```

## remove(key);
> key {string}
> 
> 返回 {boolean}

存在则删除，不存在则什么都不做

```javascript
let user = Storage.remove("user");
Log.log(Storage.get("user"));//输出 null
```

## clear();
> 返回 {boolean}

清空所有内容

```javascript
Log.log(Storage.clear());//输出 true
```
