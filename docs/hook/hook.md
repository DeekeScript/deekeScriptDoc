# Hook介绍

很多时候，开发者需要在APP运行过程中，加入一些自定义逻辑，比如在进入APP主界面的时候，拉取远程接口，获取一些初始化数据或者上报一些信息等，这个时候就可以使用hook来实现了。


## APP主界面hook

> 在deekeScript.json中配置hooks.start_app字段即可，进入首页后，将会执行配置的脚本。

```
{
    "hooks": {
        "start_app": "scripts/hooks/start_app.js"
    }
}
```
