# 扩展

DeekeScript将JavaScript运行在Android环境中，很多时候我们需要使用Java的一些类来实现一些能力，
从而弥补JavaScript的一些不足。

默认情况下，DeekeScript已经帮助用户注册了哪些基础的Java类呢？

> 下面的类，都默认导入，可以在JavaScript中直接使用

- import android.content.Intent;
- import java.nio.file.Files;
- import java.io.File;

 ## Files类使用

> 完整例子，请阅读 [文件系统-Files](../../base/files/files.md)

```javascript
console.log(Files.isDir("/sdcard/文件夹/")); //返回false
```

## 如何添加其他扩展？

等待后续更新
