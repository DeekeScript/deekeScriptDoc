# Hook介绍

很多时候，开发者需要在APP运行过程中，加入一些自定义逻辑，比如在进入APP主界面的时候，拉取远程接口，获取一些初始化数据或者上报一些信息等，这个时候就可以使用hook来实现了。


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
