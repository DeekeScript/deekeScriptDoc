# 本地存储

本地存储模块提供了一些key-value数据写入和读取的功能。

> 存储模块底层使用的<a target="_blank" href="https://developer.android.com/topic/libraries/architecture/datastore?hl=zh-cn">Android DataStore</a>实现


## create(db);
> db {string}
> 
> 返回 {boolean}

设置存储文件，不同模块可以设置不同的db

```javascript
let storage = Storage.create('myDb');

//下面是使用系统默认的db获取数据的方法
//假设我们deekeScript.json文件中的method的settingPage里面的params有一个name为zan_rate的表单，则可以通过下面的方法获取设置的值
let zanRate = Storage.getInteger('zan_rate');//注意，类型不同使用的方法不同，否则读取的数据会存在问题
```

## put(key, value);
> key {string}
> 
> value {any}
> 
> 返回 {boolean}


```javascript
//storage通过create创建
storage.put("user", "test");
```

## get(key);
> key {string}
> 
> 返回 {any}

输出键为key的值，不存在的时候返回null

```javascript
//storage通过create创建
let myUser = storage.get('user');
Log.log(user);//输出字符串test
```

## putXXX(key, value);
> key {string}
> 
> value {xxx}
> 
> 返回 {boolean}
>
> 注意：这里的putXXX是指一些列方法，请查看下面的案例


```javascript
//storage通过create创建
storage.putInteger("age", 18);
storage.putBoolean("is_success", true);
storage.putDouble("money", 1000000.11);
storage.putObj("obj", {
    name: "DeekeScript",
    age: 22,
    getName: function() {
        return this.name;
    }
});

storage.putArray("arr", [1,2,3, 'a', 'c', {name: 'deekeScript'}]);

//设置deekeScript.json文件中的表单的值（主要修改checkbox类型的表单的值）
Storage.putArray("arr", [1,2,3]);
//特别说明，arr中的元素必须都是字符串，如：Storage.putArray("checkbox_name", ["1","2","3"]);
```

## getXXX(key);
> key {string}
> 
> 返回 {xxx}
>
> 注意：这里的getXXX是指一些列方法，请查看下面的案例

```javascript
//storage通过create创建
storage.getInteger("age");//输出：18
storage.getBoolean("is_success");//输出：true
storage.getDouble("money");//输出：1000000.11
storage.getObj("obj");//输出：【json对象】
storage.getArray("arr");//输出：[1,2,3]
```

## remove(key);
> key {string}
> 
> 返回 {boolean}

存在则删除，不存在则什么都不做

```javascript
//storage通过create创建
let user = storage.remove("user");
Log.log(storage.get("user"));//输出 null
```

## clear();
> 返回 {boolean}

清空所有内容

```javascript
//storage通过create创建
Log.log(storage.clear());//输出 true
```
