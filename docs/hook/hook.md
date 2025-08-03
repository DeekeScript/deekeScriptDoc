---
title: Hook介绍
description: DeekeScript - Hook介绍
---

# Hook介绍

很多时候，开发者需要在APP运行过程中，加入一些自定义逻辑，比如在进入APP主界面的时候，拉取远程接口，获取一些初始化数据或者上报一些信息等，这个时候就可以使用hook来实现了。

`hooks里面不仅仅可以编写短暂的逻辑，也可以编写持续保活的逻辑；如果需要关闭hooks，请使用Engines.closeHook()方法；使用其他方法，不会关闭hooks脚本。`

## APP启动界面hook

> 在deekeScript.json中配置hooks.app_start_before字段即可，这里可以做一些事情，比如：[动态设置首页功能模块](../config/dynamics.md)，每个[功能模块的设置参数](../config/dynamics.md)等。

```
{
    "hooks": {
        "app_start_before": "scripts/hooks/app_start_before.js"
    }
}
```


## APP主界面hook

> 在deekeScript.json中配置hooks.app_start字段即可，进入首页后，将会执行配置的脚本。

```
{
    "hooks": {
        "app_start": "scripts/hooks/app_start.js"
    }
}
```

## APP激活hook

可以在激活之后，刷新主界面功能图标

> 在deekeScript.json中配置hooks.app_active_after字段即可，用户输入激活码，激活成功之后，将会执行配置的脚本。

```
{
    "hooks": {
        app_active_after: "scripts/hooks/app_active_after.js"
    }
}
```
