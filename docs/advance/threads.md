---
title: 多线程 - Threads
description: DeekeScript - 多线程 - Threads
---

# 多线程 - Threads

Threads对象提供了多线程操作的接口，允许你在JavaScript中创建和管理线程。

## create(runnable)

创建一个新线程并执行指定的任务。

**参数：**
- `runnable {function|object}` - 要执行的任务。可以是：
  - 一个函数
  - 一个包含 `run` 方法的对象

**返回：** `{ThreadWrapper}` 返回ThreadWrapper对象，用于管理创建的线程

**示例：**

```javascript
// 使用函数创建线程
let thread = Threads.create(() => {
    console.log('在子线程中执行');
    for (let i = 0; i < 10; i++) {
        console.log('子线程:', i);
        Threads.sleep(100);
    }
});

// 等待线程完成
thread.join();

// 使用对象创建线程
let thread2 = Threads.create({
    run: function() {
        console.log('使用对象方式创建线程');
    }
});
```

## sleep(millis)

休眠当前线程指定的毫秒数。

**参数：**
- `millis {number}` - 休眠的毫秒数

**抛出：** `InterruptedException` 如果线程在休眠时被中断

**示例：**

```javascript
console.log('开始休眠');
Threads.sleep(1000); // 休眠1秒
console.log('休眠结束');
```

## yield()

让出当前线程的CPU时间片，允许其他线程执行。

**示例：**

```javascript
// 在循环中让出CPU时间片，避免占用过多CPU资源
for (let i = 0; i < 1000; i++) {
    // 执行一些操作
    if (i % 100 === 0) {
        Threads.yield(); // 每100次迭代让出CPU时间片
    }
}
```

## currentThread()

获取当前线程的ThreadWrapper对象。

**返回：** `{ThreadWrapper}` 当前线程的ThreadWrapper对象

**示例：**

```javascript
let current = Threads.currentThread();
console.log('当前线程名称:', current.getName());
console.log('当前线程优先级:', current.getPriority());
```

## ThreadWrapper 对象

ThreadWrapper是Threads.create()方法返回的对象，提供了管理线程的方法。

### start()

启动线程（使用线程池时，任务会自动启动，此方法主要用于兼容性）。

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('线程启动');
});
thread.start(); // 使用线程池时通常不需要调用
```

### join()

等待线程任务完成。

**抛出：** `InterruptedException` 如果等待过程中线程被中断

**示例：**

```javascript
let thread = Threads.create(() => {
    Threads.sleep(1000);
    console.log('任务完成');
});

thread.join(); // 等待任务完成
console.log('所有任务完成');
```

### join(millis)

等待线程任务完成，最多等待指定的毫秒数。

**参数：**
- `millis {number}` - 最多等待的毫秒数

**抛出：** `InterruptedException` 如果等待过程中线程被中断

**示例：**

```javascript
let thread = Threads.create(() => {
    Threads.sleep(5000); // 任务需要5秒
    console.log('任务完成');
});

thread.join(2000); // 最多等待2秒
console.log('继续执行'); // 2秒后继续执行，不等待任务完成
```

### interrupt()

中断线程。

**示例：**

```javascript
let thread = Threads.create(() => {
    try {
        Threads.sleep(10000); // 休眠10秒
    } catch (e) {
        console.log('线程被中断');
    }
});

Threads.sleep(1000);
thread.interrupt(); // 中断线程
```

### isAlive()

检查线程是否存活。

**返回：** `{boolean}` 如果线程正在运行返回true，否则返回false

**示例：**

```javascript
let thread = Threads.create(() => {
    Threads.sleep(2000);
});

console.log('线程是否存活:', thread.isAlive()); // true
Threads.sleep(3000);
console.log('线程是否存活:', thread.isAlive()); // false
```

### isInterrupted()

检查线程是否被中断。

**返回：** `{boolean}` 如果线程被中断返回true，否则返回false

**示例：**

```javascript
let thread = Threads.create(() => {
    Threads.sleep(5000);
});

thread.interrupt();
console.log('线程是否被中断:', thread.isInterrupted()); // true
```

### setName(name)

设置线程名称。

**参数：**
- `name {string}` - 线程名称

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('线程执行中');
});
thread.setName('我的工作线程');
```

### getName()

获取线程名称。

**返回：** `{string}` 线程名称

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('线程执行中');
});
thread.setName('工作线程');
console.log('线程名称:', thread.getName()); // 输出: 工作线程
```

### setPriority(priority)

设置线程优先级。

**参数：**
- `priority {number}` - 线程优先级（1-10），数字越大优先级越高

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('高优先级线程');
});
thread.setPriority(10); // 设置最高优先级
```

### getPriority()

获取线程优先级。

**返回：** `{number}` 线程优先级（1-10）

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('线程执行中');
});
console.log('线程优先级:', thread.getPriority()); // 默认优先级通常是5
```

### getThread()

获取底层的Java Thread对象（通常不需要使用）。

**返回：** `{Thread}` Java Thread对象

**示例：**

```javascript
let thread = Threads.create(() => {
    console.log('线程执行中');
});
let javaThread = thread.getThread(); // 获取Java Thread对象
```

## 使用示例

### 示例1：创建多个线程并发执行

```javascript
// 创建3个线程并发执行
let threads = [];
for (let i = 0; i < 3; i++) {
    let thread = Threads.create(() => {
        console.log('线程' + i + '开始执行');
        Threads.sleep(1000);
        console.log('线程' + i + '执行完成');
    });
    threads.push(thread);
}

// 等待所有线程完成
for (let thread of threads) {
    thread.join();
}
console.log('所有线程执行完成');
```

### 示例2：使用线程处理耗时任务

```javascript
let thread = Threads.create(() => {
    // 模拟耗时操作
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
        if (i % 100000 === 0) {
            Threads.yield(); // 定期让出CPU时间片
        }
    }
    console.log('计算结果:', sum);
});

console.log('主线程继续执行其他操作');
thread.join();
console.log('耗时任务完成');
```

### 示例3：中断长时间运行的线程

```javascript
let thread = Threads.create(() => {
    let count = 0;
    while (true) {
        count++;
        if (Threads.currentThread().isInterrupted()) {
            console.log('线程被中断，当前计数:', count);
            break;
        }
        Threads.sleep(100);
    }
});

Threads.sleep(2000); // 让线程运行2秒
thread.interrupt(); // 中断线程
thread.join(); // 等待线程结束
```

