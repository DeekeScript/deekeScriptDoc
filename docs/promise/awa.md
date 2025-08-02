
# DeekeScript异步

### Promise

```
let promise = new Promise(function (resolve, reject) {
    System.sleep(1000);
    console.log(234);
    resolve('成功');
});

promise.then(resolve => {
    console.log(resolve);//成功
}, reject => {
    console.log(reject);
});

```

### Promise + 定时器
```
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(234);
        resolve('成功');
    }, 1000);
});

promise.then(resolve => {
    console.log(resolve);//成功
}, reject => {
    console.log(reject);
});

```