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
                            },
                            {
                                "type": "switch",
                                "value": true,
                                "name": "switch",
                                "label": "开启后，子表单也开启",
                                "childrenParams": [
                                    {
                                        "type": "text",
                                        "label": "子表单1",
                                        "name": "child_text1",
                                        "value": ""
                                    },
                                    {
                                        "type": "number",
                                        "label": "子表单2",
                                        "name": "child_number1",
                                        "value": 0
                                    }
                                ]
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

#### 📝 params 字段说明

`params` 是一个数组，包含表单配置项。每个配置项支持以下字段：

- **type** {string} - 表单类型，支持：text、textArea、password、switch、select、radio、checkbox、checkboxGroup、number、numberRange、digitRange、digit、file、datePicker、timePicker、notice、divider
- **label** {string} - 表单标签（显示文本）
- **name** {string} - 表单字段名（用于Storage存储和获取）
- **value** {any} - 默认值（根据类型不同，可以是string、number、boolean等）
- **hidden** {boolean} - 是否隐藏，默认false
- **notice** {string} - 说明信息（非必须）
- **childrenParams** {array} - 子表单数组（仅switch类型支持）。当switch开启时，子表单才会显示。

更多表单类型和字段说明，请参考[表单示例](../base/ui/form.md)文档。

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
