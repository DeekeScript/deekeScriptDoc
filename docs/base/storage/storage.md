---
title: 本地存储
description: DeekeScript - 本地存储
---

# 本地存储

本地存储模块提供了一些key-value数据写入和读取的功能。

> 存储模块底层使用的<a target="_blank" href="https://developer.android.com/topic/libraries/architecture/datastore?hl=zh-cn">Android DataStore</a>实现

## create(db);

**参数：** `db {string}`

**返回：** `{boolean}`

设置存储文件，不同模块可以设置不同的db

```javascript
let storage = Storage.create('myDb');

//下面是使用系统默认的db获取数据的方法
//假设我们deekeScript.json文件中的method的settingPage里面的params有一个name为zan_rate的表单，则可以通过下面的方法获取设置的值
let zanRate = Storage.getInteger('zan_rate');//注意，类型不同使用的方法不同，否则读取的数据会存在问题【注意这里的Storage第一个字母是大写】
```

## put(key, value);

**参数：**
- `key {string}`
- `value {any}`

**返回：** `{boolean}`

```javascript
//storage通过create创建
storage.put("user", "test");
```

## get(key);

**参数：** `key {string}`

**返回：** `{any}`

输出键为key的值，不存在的时候返回null

```javascript
//storage通过create创建
let myUser = storage.get('user');
Log.log(user);//输出字符串test
```

## putXXX(key, value);

**参数：**
- `key {string}`
- `value {xxx}`

**返回：** `{boolean}`

**注意：** 这里的putXXX是指一些列方法，请查看下面的案例

```javascript
//storage通过create创建
storage.putInteger("age", 18);
storage.putBoolean("is_success", true);
storage.putDouble("money", 1000000.11);

//注意putObj只支持标准的json对象，对象里面不能有function类型
storage.putObj("obj", {
    name: "DeekeScript",
    age: 22
});

storage.putArray("arr", [1,2,3, 'a', 'c', {name: 'deekeScript'}]);

//设置deekeScript.json文件中的表单的值（主要修改checkbox类型的表单的值）
Storage.putArray("arr", [1,2,3]);
//特别说明，arr中的元素必须都是字符串，如：Storage.putArray("checkbox_name", ["1","2","3"]);
```

## getXXX(key);

**参数：** `key {string}`

**返回：** `{xxx}`

**注意：** 这里的getXXX是指一些列方法，请查看下面的案例

```javascript
//storage通过create创建
storage.getInteger("age");//输出：18
storage.getBoolean("is_success");//输出：true
storage.getDouble("money");//输出：1000000.11
storage.getObj("obj");//输出：【json对象】
storage.getArray("arr");//输出：[1,2,3]
```

## remove(key);

**参数：** `key {string}`

**返回：** `{boolean}`

删除键为key的数据

```javascript
//storage通过create创建
storage.remove("user");
```

## clear();

**返回：** `{boolean}`

清空所有数据

```javascript
//storage通过create创建
storage.clear();
```

## contains(key);

**参数：** `key {string}`

**返回：** `{boolean}`

判断是否包含键为key的数据

```javascript
//storage通过create创建
let hasUser = storage.contains("user");
```

## 获取“话术设置”列表

```javascript

let data = Storage.get('deekeScript:speech:default');

/**
 {"key":"default","speechLists":[{"content":"太精彩了！👏 每次看你的视频都有新发现！🌟","id":1,"type":0},{"content":"喜欢你的风格！😍 继续加油，期待下一个作品！💪","id":2,"type":0},{"content":"这段真有趣！😂 感谢分享，笑得我肚子疼！🤣","id":3,"type":0},{"content":"视频做得真棒！🎥 你的创意真是无敌！💖","id":4,"type":0},{"content":"超喜欢这内容！✨ 你总是能给我带来灵感！🌈","id":5,"type":0},{"content":"很有意思的视频！😄 期待看到更多这样的作品！🌼","id":6,"type":0},{"content":"嗨！👋 看到你的视频真有趣，想和你聊聊！😊","id":7,"type":1},{"content":"嘿，朋友！🎉 你的视频让我笑了，想和你分享我的感受！🌟","id":8,"type":1},{"content":"你好呀！💖 你的创意真棒，能不能告诉我一些灵感来源？✨","id":9,"type":1},{"content":"嗨，太喜欢你的内容了！😍 想和你讨论一下，怎么拍得这么好！📸","id":10,"type":1},{"content":"嘿，你的风格好特别！🌈 我也喜欢做短视频，想向你请教！🙏","id":11,"type":1},{"content":"你好！🌼 看了你的视频，觉得很有意思，想一起交流一下！😊","id":12,"type":1}]}
 **/

//获取话术列表里面的话术  type为0表示评论、type为1表示私信
console.log(data);
```
