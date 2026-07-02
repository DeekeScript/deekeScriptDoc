---
title: 代码加密
description: DeekeScript - 代码加密
---

# 代码加密

JavaScript代码加密，一定程度上达到了保护原代码的目的。DeekeScript打包APP，默认采用了【AES + 随机 IV（推荐）】加密算法进行代码加密。用户无需关心加密过程。



> 加密前的代码

```
const dyApp = {
    getName(){
        return "appName";
    }
}

module.exports = dyApp;

```


> 加密后的代码

```
U2FsdGVkX18fBheHDLwYx8ymlys2OayQV0bmWy4XRFJmDYh+ZOJCjYCCpE1DW3hXmOHKA0imu0cVB7WNdpI8Iy7uNiRsBFsAF7J7hQZ9u+gwjkAqTJPXVa3ePbq45shUdTT5ZEZJxQdNTvzxM/Hwsw==
```