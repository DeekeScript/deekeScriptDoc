
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

### 注意：下面这种方式无效，因为setTimeout在另外的线程执行，导致promise.then方法没有执行！
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