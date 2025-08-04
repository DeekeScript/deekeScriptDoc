---
title: 动态配置
description: DeekeScript - 动态配置
---

# 🔄 动态配置

很多时候，开发者需要控制app主页的功能模块，比如年会员展示所有功能图标，试用会员只展示部分图标等；同时，有时候还需要根据不同等级的用户来设置不同的功能配置参数。这样更加细化盈利策略。

## 📋 DeekeScriptJson

**DeekeScript** 给开发者提供了 **DeekeScriptJson** 对象，可以使用此对象来进行主界面功能模块设置、功能参数设置、设置页面的动态配置等。

### ⚙️ setDeekeScriptJsonGroup(str)

> **参数**：str {string}
> 
> **返回**：{boolean} 如果出错，会抛出异常

```javascript
// 这里可以调用远程接口来获取数据
let obj = {
    "groups": [
        {
            "title": "DY·万能引流",
            "titleHidden": false,
            "hidden": false,
            "methods": [
                {
                    "title": "点赞功能",
                    "icon": "img/finger.png",
                    "jsFile": "tasks/task_dy_toker.js",
                    "settingPage": {
                        "params": [
                            {
                                "type": "numberRange",
                                "label": "观看时长（秒）",
                                "name": "toker_view_video_second",
                                "max": 60,
                                "min": 5,
                                "value": 12,
                                "step": 1
                            },
                            {
                                "type": "textArea",
                                "label": "关键词筛选（多个使用逗号隔开）",
                                "name": "toker_view_video_keywords",
                                "value": "",
                                "notice": "* 关键词不填则操作所有"
                            },
                            {
                                "type": "numberRange",
                                "label": "点赞频率（%）",
                                "name": "toker_zan_rate",
                                "max": 100,
                                "min": 0,
                                "step": 1,
                                "value": 100
                            }
                        ]
                    }
                }
            ]
        }
    ]
}

let str = JSON.stringify(obj);
DeekeScriptJson.setDeekeScriptJsonGroup(str);
```

### 🔧 setSettingLists(str)

> **功能**：设置"系统设置"界面功能模块
> 
> **参数**：str {string}
> 
> **返回**：{boolean} 如果出错，会抛出异常

```javascript
// 这里可以调用远程接口来获取数据
let obj = {
    "settingLists": [
        {
            "title": "联系客服",
            "icon": "img/kefu.png",
            "type": "customerService",
            "description": "客服微信：DeekeScript",
            "hidden": false
        },
        {
            "title": "功能说明",
            "icon": "img/manual.png",
            "type": "notice",
            "file": "task.html"
        }
    ]
}
```

### toJson()

> 获取最新的deekeScript.json文件内容
> 
> 返回 {json对象}
