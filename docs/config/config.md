---
title: 配置
description: DeekeScript - 配置
---


# ⚙️ 配置

> **重要提示**：磨刀不误砍柴工，如果您需要打包脚本，请务必认真阅读本节内容，确保每个必填参数都正确配置，这将会解决您遇到的大部分问题。

## 📋 deekeScript.json文件说明

[示例](#demo)请查看本页末尾部分

### 🎯 主体参数

|     参数名    |  类型   | 必填|  示例   |    说明    |
| ------------ | ------- | ------ | -------| ----------|
|     name     | String  |    是   |         Deeke                    | App安装成功之后，在手机上的名称                        |
| versionCode  | String  |    是   |      100               | 版本号（软件自动升级凭证，当前版本号大于或者等于后台上传的版本号，则无法升级）                  |
| versionName  | String  |    是   |      1.0.0               | 版本名称，尽量和版本号统一（版本号100，则配置为1.0.0）                 |
|     icon     | String  |    是   |      logo/dke.png               | 图标建议采用200*200像素的，清晰度大的                  |
|     head     | String  |    是   |      img/root.png               | App中用户设置页面的头像，无设置页可以不填               |
|     debug    | Boolean |    否   |      true               | 默认为true（不需要激活码也可以启动脚本），如果需要激活才能使用APP，请设置为false               |
|      host    | String  |    是   |    https://xx.xxx.xxx          | 接口请求域名，<font color="red">请同时完成apis配置，否则可能无法运行脚本或者APP</font>      |
| switchSetting|  Json   |    是   |[switchSetting参数](#switchsetting参数)    | 功能开关设置      |
| bottomMenusHidden|  Boolean   |    否   | true  | 隐藏底部菜单，默认为false      |
|    groups    |  Array   |    是   |[groups参数](#groups参数)         |  主界面的功能组，每组都会包含若干个功能              |
|  bottomMenus |  Array   |    是   |[bottomMenus参数](#bottommenus参数)      | App中底部菜单，可以使用系统内置的，也可以自定义          |
| settingLists |  Array   |    是   |[settingLists参数](#settinglists参数)    | App中设置页的列表项，可以使用系统内置的，也可以自定义     |
|     apis     |  Array   |    是   |    [apis参数](#api参数)              | 设置相关api，比如激活码api，验证激活码是否有效api等，否则可能导致无法运行脚本或者APP      |

### 🔧 switchSetting参数

|     参数名    |   类型   | 必填 |  示例  |     说明       |
| ------------ | ------- | --- | ------ | --------------|
|   alipay     | Boolean |  是 |  true  | 支持支付宝支付   |


### 📦 groups参数
|     参数名    |  类型   |  必填|   示例   |   说明 |
| ------------ | ------- | -------|-------- | -------|
|     title    | String  |   是    | XX截流  | App主界面的功能名称 |
|  titleHidden | Boolean  |   否    | false  | App主界面功能组标题是否隐藏，默认不隐藏 |
|    hidden    | Boolean |   否    | false  | 是否隐藏当前功能组，默认不隐藏 
|   methods    |  Array   |   是    | [methods参数](#methods参数)  | 当前功能组下的功能列表  |

### ⚡ methods参数

|     参数名    |  类型   | 必填|        示例     |     说明        |
| ------------ | ------- | ------|--------------- | ----------------|
|     title    | String  |   是  |   XX截流        | App主界面的功能名称|
|     icon     | String  |   是  |logo/fans.png   | App主界面的功能图标 |
|    jsFile    | String  |   是  |tasks/task_dy_toker_fans.js  | 功能实际执行的代码所在文件 |
| settingPage  |  Json   |   否  |[settingPage参数](#settingpage参数)| 功能对应的设置页面，如果没有这个参数，则直接执行jsFile脚本 |
|    hidden    | Boolean |   否  |    true  | 属性值，当为true的时候，则界面上不再显示此功能模块 |
|    runType   | String  |   否  | floatSwitch    | 如果为floatSwitch则需要手动点击右侧悬浮窗执行 |
|   packageName| String  |   否  | com.xingin.xhs | 包名，和runType配合使用|
|    columns   | Number  |   否  |        8       |  每行被等分为24,8则表示当前groups一行放3个功能图标| 
|    autoOpen  | Boolean |   否  |       true     | 是否自动打开界面（需要和packageName配合使用）|


### 📝 settingPage参数

|     参数名    |   类型   | 必填 |            示例          |     说明          |
| ------------ | ------- | ------- | ------------------------ | -----------------|
|   params     |   Array  |    是   |  [params参数](#params参数)   | 需要用户设置的参数   |


### 🔍 params参数

> params参数主要用于配置表单。表单设置示例，请参阅[表单示例](../base/ui/form.md)示例

|     参数名    |  类型    | 必填 |      示例    |    说明   |
| ------------ | ------- | ------- | ----------- | ---------|
|     type     | String  |    是   |   text      | Form参数类型，有text、textArea、select、checkboxGroup、checkbox、radio、switch、number、numberRange、digitRange、digit、password、file、timePicker、DatePicker、divider、notice|
|     label    | String  |    否   |   用户账号   | 字段描述，节点的描述，用于告诉用户这个节点输入的内容 |
|    value     |   any   |    否   |   miniphper| 初始值，可以为空 ; number/numberRange/digitRange/digit的时候，value为数字类型，text/textArea/password/file/timePicker/DatePicker的时候，value为字符串类型 |
|     name     | String  |    否   |   account  | 节点名称，后续[获取值](../base/storage/storage.md)的时候，需要这个参数名称  |
|     min      |   int   |    否   |   0  | 最小值，当type为numberRange或者digitRange时必须  |
|     max      |   int   |    否   | 1000  | 最大值，当type为numberRange或者digitRange时必须  |
|     step     |   int   |    否   |  1   | 滑动最小单位，当type为numberRange或者digitRange时必须  |
|    options   |  Json   |    否   |  [options参数](#options参数)  | 属性值，当type为select、checkbox、radio时必须 |
|    hidden    | boolean |    否   |   true    | 属性值，当为true的时候，则界面上不再显示此字段；默认为false   |
|   children   |  array  |    否   |   true    | CheckboxsGroup里面的Checkbox所有值，当type为checkboxGroup时必须|
|     lines    |   int   |    否   |     5     | type为textArea时，控制输入框展示的行数|
|   notice     | String  |    否   |* 注意：用户账号不能为空| 特别注意，当type为text或者textArea的时候，用于表单下方的提示语 |
|   title      | String  |    否   |   * 本功能需要开启图色权限   |  type为notice的时候必须 |
|   dataFrom   | String  |    否   |   role    |  如果你需要动态渲染表单的值（仅支持type为radio的情况），使用方式请查看[表单示例](../base/ui/form.md#表单动态值) |

> 注：type为notice，用于每个设置页面的说明
>
> 注意：type为divider，用于分割线

### 🎛️ options参数

|     参数名    |  类型   |                 示例               |               说明             |
| ------------ | ------- | ---------------------------------- | -------------------------------|
|    selected  | bool    |                 false              | 是否默认选中                    |
|     label    | String  |                   男               | 描述，用于告诉用户这个节点的内容  |
|     value    | String  |                   1                | 值                             |


### 📱 bottomMenus参数

|     参数名    |  类型   |  必填 |     示例      |      说明      |
| ------------ | ------- | --------|------------- | ---------------|
|     title    | String  |   是    | 首页，如果想和name参数保持一致，可以使用"{NAME}" | 底部菜单名称名称  |
|     icon     | String  |   是    | logo/fans.png | 底部菜单图标    |
|    banner    | String  |   否    | banner/banner.png | type为home的时候必填，表示首页顶部图片 |
|     type     | String  |   是    |     home      | 目前支持home、setting、speech，分别表示首页、设置页、话术页 |


#### settingLists参数

|    参数名   |   类型   |  必填 |     示例     |     说明      |
| ---------- | ------- | ------| ------------ | -------------|
|    title   | String  |   是  |   清理缓存   | 设置页标题名称    |
|    icon    | String  |   是  | logo/clear.png| 底部菜单图标  |
|     url    | String  |   否  | /dke/uploadLog | type为uploadLog的时候必须，用于接受上传日志；type为updateApp的时候必须，用于下载apk  |
|    type    | String  |   是  |   clear   | 支持clear、uploadLog、customerService、updateApp、notice、settingService、qiwei，分别表示 清理缓存、上传日志、联系客服、更新App、自定义html页面、设置页、企业微信机器人通知表单 |
|   jsFile   | String  |   否  |   statistics/statistics.js    | type为statistics时候必须，用于统计数据  |
|description | String  |   否  |  确定清理吗？  | type为clear的时候，会弹出提示框，确认后执行清理；type为customerService可以设置为“客服微信：miniphper”  |
|    file    | String  |   否  |  task.html  | type为notice的时候必须  |
|   hidden   | Boolean |   否  |  false  | 默认为false  |
|settingPage |  Json   |   否  |  [settingPage参数](#settingpage参数) | type为qiwei的时候，需要设置，用于往企微机器人表单收集（或者举报）；type为settingService的时候也需要设置，表示系统的一些设置，用于应用其他位置读取|

#### apis参数

> 关于每个接口的使用说明，请参考[后端接口](../backendApi/activationCode.md)

|  参数名  |   类型   |  必填 |    示例     |      说明        |
| ------- | ------- |  ---- | ---------- | -----------------|
|   url   | String  |  是 | /dke/login | 接口地址，type为bind，则为激活码激活地址；type为checkBind，则为激活码验证地址；type为aiSpeechToken表示获取百度AI大模型的token；type为config表示初始化接口；type为getToken表示获取支付宝支付token；type为createOrder表示支付宝下单接口|
|   type  | String  |  是 |     bind  | 目前支持bind、checkBind，bind为首次激活，checkBind用于每次运行功能时执行检查，状态不对则无法运行功能，并会给出提示   |


### deekeScript.json文件内容
<a id="demo"></a>
```json
{
  "name": "Deeke",
  "icon": "logo/dke.png",
  "head": "img/robot.png",
  "versionCode": "100",
  "versionName": "1.0.0",
  "host": "https://home.deeke.top",
  "switchSetting": {
    "alipay": true
  },
  "groups": [
    {
      "title": "DY·万能引流",
      "titleHidden": false,
      "hidden": false,
      "methods": [
        {
          "title": "推荐营销",
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
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "toker_comment_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "toker_focus_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1
              },
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "toker_private_msg_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1
              },
              {
                "type": "numberRange",
                "label": "评论区五连赞频率（%）",
                "name": "toker_comment_area_zan_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "checkboxGroup",
                "label": "性别",
                "name": "toker_run_sex",
                "children": [
                  "女",
                  "男",
                  "未知"
                ],
                "values": [
                  "0",
                  "1",
                  "2"
                ]
              },
              {
                "type": "numberRange",
                "label": "最小年龄",
                "name": "toker_run_min_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 0
              },
              {
                "type": "numberRange",
                "label": "最大年龄",
                "name": "toker_run_max_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 60
              },
              {
                "type": "checkboxGroup",
                "label": "运行时间",
                "name": "toker_run_hour",
                "children": [
                  "0时",
                  "1时",
                  "2时",
                  "3时",
                  "4时",
                  "5时",
                  "6时",
                  "7时",
                  "8时",
                  "9时",
                  "10时",
                  "11时",
                  "12时",
                  "13时",
                  "14时",
                  "15时",
                  "16时",
                  "17时",
                  "18时",
                  "19时",
                  "20时",
                  "21时",
                  "22时",
                  "23时"
                ],
                "values": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23"
                ]
              }
            ]
          }
        },
        {
          "title": "同城营销",
          "icon": "img/city.png",
          "jsFile": "tasks/task_dy_toker_city.js",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "观看时长（秒）",
                "name": "toker_city_view_video_second",
                "max": 30,
                "min": 5,
                "value": 12,
                "step": 1
              },
              {
                "type": "textArea",
                "label": "关键词筛选（多个使用逗号隔开）",
                "name": "toker_city_view_video_keywords",
                "value": "",
                "notice": "* 关键词不填则操作所有"
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "toker_city_zan_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "toker_city_comment_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "toker_city_focus_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1
              },
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "toker_city_private_msg_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1
              },
              {
                "type": "numberRange",
                "label": "评论区五连赞频率（%）",
                "name": "toker_city_comment_area_zan_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "numberRange",
                "label": "同城距离（公里内）",
                "name": "toker_city_distance",
                "max": 100,
                "min": 1,
                "step": 1,
                "value": 100
              },
              {
                "type": "checkboxGroup",
                "label": "性别",
                "name": "toker_city_run_sex",
                "children": [
                  "女",
                  "男",
                  "未知"
                ],
                "values": [
                  "0",
                  "1",
                  "2"
                ]
              },
              {
                "type": "numberRange",
                "label": "最小年龄",
                "name": "toker_city_run_min_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 0
              },
              {
                "type": "numberRange",
                "label": "最大年龄",
                "name": "toker_city_run_max_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 100
              },
              {
                "type": "checkboxGroup",
                "label": "运行时间",
                "name": "toker_city_run_hour",
                "children": [
                  "0时",
                  "1时",
                  "2时",
                  "3时",
                  "4时",
                  "5时",
                  "6时",
                  "7时",
                  "8时",
                  "9时",
                  "10时",
                  "11时",
                  "12时",
                  "13时",
                  "14时",
                  "15时",
                  "16时",
                  "17时",
                  "18时",
                  "19时",
                  "20时",
                  "21时",
                  "22时",
                  "23时"
                ],
                "values": [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23"
                ]
              }
            ]
          }
        },
        {
          "title": "工具箱",
          "hidden": false,
          "icon": "img/tool.png",
          "jsFile": "tasks/tool.js",
          "activity": {
            "notice": "暂无功能~",
            "title": "工具箱",
            "minVersion": 10001,
            "groups": [
              {
                "title": "工具箱",
                "titleHidden": true,
                "methods": [
                  {
                    "title": "一键取赞",
                    "hidden": false,
                    "icon": "img/cancel_zan.png",
                    "jsFile": "tasks/task_dy_cancel_zan.js",
                    "settingPage": {
                      "params": [
                        {
                          "type": "notice",
                          "title": "帮助你快速取消视频点赞~"
                        }
                      ]
                    }
                  },
                  {
                    "title": "一键取关",
                    "hidden": false,
                    "icon": "img/cancel_focus.png",
                    "jsFile": "tasks/task_dy_cancel_focus.js",
                    "settingPage": {
                      "params": [
                        {
                          "type": "notice",
                          "title": "帮助你快速取消单向关注（你关注他，他没有关注你）的用户~"
                        },
                        {
                          "type": "switch",
                          "label": "互相关注取关",
                          "name": "task_dy_cancel_focus_mutual_switch"
                        }
                      ]
                    }
                  },
                  {
                    "title": "粉丝回访",
                    "hidden": false,
                    "icon": "img/view_back.png",
                    "jsFile": "tasks/task_dy_fans_back_view.js",
                    "settingPage": {
                      "params": [
                        {
                          "type": "notice",
                          "title": "粉丝回访，能增加粉丝粘性~"
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "title": "DY·同行截流",
      "methods": [
        {
          "title": "粉丝截流",
          "icon": "img/fans.png",
          "jsFile": "tasks/task_dy_toker_fans.js",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "fansSetting_privateRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "fansSetting_focusRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "fansSetting_zanRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "fansSetting_commentRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "digit",
                "label": "粉丝数（不低于）",
                "name": "fansSetting_fansMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "粉丝数（不超过）",
                "name": "fansSetting_fansMaxCount",
                "value": 10000
              },
              {
                "type": "digit",
                "label": "作品数（不低于）",
                "name": "fansSetting_worksMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "作品数（不超过）",
                "name": "fansSetting_worksMaxCount",
                "value": 10000
              },
              {
                "type": "number",
                "label": "操作次数",
                "name": "fansSetting_opCount",
                "value": 100
              },
              {
                "type": "text",
                "label": "操作账号",
                "name": "fansSetting_account",
                "value": "",
                "notice": "*可以输入UID，需要在UID前面加上“#”"
              }
            ]
          }
        },
        {
          "title": "关注截流",
          "icon": "img/anchor_focus.png",
          "jsFile": "tasks/task_dy_toker_focus.js",
          "hidden": false,
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "focusSetting_privateRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "focusSetting_focusRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "focusSetting_zanRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "focusSetting_commentRate",
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "digit",
                "label": "粉丝数（不低于）",
                "name": "focusSetting_fansMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "粉丝数（不超过）",
                "name": "focusSetting_fansMaxCount",
                "value": 10000
              },
              {
                "type": "digit",
                "label": "作品数（不低于）",
                "name": "focusSetting_worksMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "作品数（不超过）",
                "name": "focusSetting_worksMaxCount",
                "value": 10000
              },
              {
                "type": "number",
                "label": "操作次数",
                "name": "focusSetting_opCount",
                "value": 100
              },
              {
                "type": "text",
                "label": "操作账号",
                "name": "focusSetting_account",
                "value": "",
                "notice": "*可以输入UID，需要在UID前面加上“#”"
              }
            ]
          }
        },
        {
          "title": "评论区截流",
          "hidden": false,
          "icon": "img/speech-say.png",
          "jsFile": "tasks/task_dy_toker_comment.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "输入账号（多账号使用逗号隔开）",
                "name": "task_dy_toker_comment_account",
                "value": "",
                "notice": "*可以输入UID，需要在输入框前面加上“#”"
              },
              {
                "type": "textArea",
                "label": "评论关键词（多关键词使用逗号隔开）",
                "name": "task_dy_toker_comment_kw",
                "value": ""
              },
              {
                "type": "numberRange",
                "label": "每轮休息时间（秒）",
                "name": "task_dy_toker_comment_sleep_second",
                "value": 600,
                "max": 3600,
                "min": 0,
                "step": 1
              }
            ]
          }
        },
        {
          "title": "直播间截流",
          "hidden": false,
          "icon": "img/live.png",
          "jsFile": "tasks/task_dy_toker_live.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "输入账号（正在直播）",
                "value": "",
                "name": "task_dy_toker_live_account",
                "notice": "*可以输入UID，需要在UID前面加上“#”"
              },
              {
                "type": "numberRange",
                "label": "前多少名不操作",
                "name": "task_dy_toker_live_index",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞/评论视频概率",
                "name": "task_dy_toker_live_comment_user_video_rate",
                "value": 0,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "switch",
                "label": "直播间关注用户",
                "name": "task_dy_toker_live_focus_switch"
              },
              {
                "type": "switch",
                "label": "直播间私信用户",
                "name": "task_dy_toker_live_private_switch"
              },
              {
                "type": "numberRange",
                "label": "用户操作间隔（秒）",
                "name": "task_dy_toker_live_focus_rate",
                "value": 0,
                "max": 100,
                "min": 5,
                "step": 5
              }
            ]
          }
        },
        {
          "title": "粉丝群截流",
          "hidden": false,
          "icon": "img/tuandui.png",
          "jsFile": "tasks/task_dy_fans_group.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "群名称|群主账号、昵称（支持模糊搜索）",
                "value": "",
                "name": "task_dy_fans_group"
              },
              {
                "type": "numberRange",
                "label": "搜索结果的第几个群",
                "name": "task_dy_fans_group_index",
                "value": 1,
                "max": 8,
                "min": 1,
                "step": 1
              }
            ]
          }
        },
        {
          "title": "智能询盘",
          "hidden": false,
          "icon": "img/user-get.png",
          "jsFile": "tasks/task_dy_search_inquiry.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "询盘关键词",
                "value": "",
                "name": "task_dy_search_inquiry"
              },
              {
                "type": "textArea",
                "label": "触发关键词（多个使用逗号隔开）",
                "name": "task_dy_search_inquiry_kws",
                "value": ""
              },
              {
                "type": "numberRange",
                "label": "刷视频数量",
                "name": "task_dy_search_inquiry_count",
                "value": 10,
                "max": 1000,
                "min": 1,
                "step": 1
              }
            ]
          }
        }
      ]
    },
    {
      "title": "DY·养号涨粉",
      "methods": [
        {
          "title": "垂直养号",
          "hidden": false,
          "icon": "img/vertical.png",
          "jsFile": "tasks/task_dy_search_vertical.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "关键词",
                "value": "",
                "name": "task_dy_search_vertical"
              },
              {
                "type": "numberRange",
                "label": "点赞概率",
                "name": "task_dy_search_zan_rate",
                "value": 10,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论概率",
                "name": "task_dy_search_comment_rate",
                "value": 10,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "关注概率",
                "name": "task_dy_search_focus_rate",
                "value": 10,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "刷视频数量",
                "name": "task_dy_search_count",
                "value": 10,
                "max": 5000,
                "min": 10,
                "step": 10
              }
            ]
          }
        },
        {
          "title": "快速涨粉",
          "icon": "img/fans-inc.png",
          "jsFile": "tasks/task_dy_fans_inc_main.js",
          "settingPage": {
            "params": [
              {
                "type": "text",
                "label": "输入账号（多账号每行输入一个）",
                "name": "task_dy_fans_inc_accounts",
                "value": "",
                "lines": 5,
                "hidden": false,
                "notice": "*可以输入UID，需要在输入框前面加上“#”"
              },
              {
                "type": "notice",
                "title": "视频赞概率+评论赞概率+收藏概率=100%",
                "hidden": true
              },
              {
                "type": "numberRange",
                "label": "视频赞频率（%）",
                "name": "task_dy_fans_inc_video_zan_rate",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "task_dy_fans_inc_comment_rate",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "收藏频率（%）",
                "name": "task_dy_fans_inc_collection_rate",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "主页停留时长（秒）",
                "name": "task_dy_fans_inc_user_page_wait",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "视频停留时长（秒）",
                "name": "task_dy_fans_inc_user_video_wait",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              }
            ]
          }
        },
        {
          "title": "喜欢截流",
          "hidden": false,
          "icon": "img/precise-user.png",
          "jsFile": "tasks/task_dy_consum_user.js",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "对方账号",
                "value": "",
                "name": "task_dy_consum_account"
              },
              {
                "type": "numberRange",
                "label": "操作视频数",
                "name": "task_dy_consum_account_videoCount",
                "value": 10,
                "max": 5000,
                "min": 10,
                "step": 10
              }
            ]
          }
        }
      ]
    },
    {
      "title": "DY·精准拓客",
      "methods": [
        {
          "title": "轻松拓客",
          "icon": "img/qingsong.png",
          "jsFile": "tasks/task_dy_qingsong_tuoke.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "运行次数",
                "name": "task_dy_qingsong_tuoke_run_count",
                "value": 10,
                "max": 1000,
                "min": 1
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_dy_qingsong_tuoke_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "主页平均停留时间（秒）",
                "name": "task_dy_qingsong_tuoke_home_wait",
                "value": 5,
                "max": 100,
                "min": 1,
                "hidden": true,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "作品平均停留时间（秒）",
                "name": "task_dy_qingsong_tuoke_work_wait",
                "value": 5,
                "max": 100,
                "min": 2,
                "hidden": true,
                "step": 1
              },
              {
                "type": "number",
                "label": "粉丝数量不少于",
                "name": "task_dy_qingsong_tuoke_min_fans",
                "value": 0,
                "hidden": true
              },
              {
                "type": "number",
                "label": "粉丝数量不大于",
                "name": "task_dy_qingsong_tuoke_max_fans",
                "value": 10000,
                "hidden": true
              },
              {
                "type": "number",
                "label": "作品数大于",
                "name": "task_dy_qingsong_tuoke_min_work",
                "value": 1,
                "hidden": true
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_dy_qingsong_tuoke_op",
                "children": [
                  "关注",
                  "私信",
                  "首作品点赞"
                ],
                "values": [
                  "0",
                  "2"
                ],
                "hidden": true
              },
              {
                "type": "checkboxGroup",
                "label": "私信模式",
                "name": "task_dy_qingsong_tuoke_private_type",
                "children": [
                  "对普通用户私信",
                  "对蓝V用户私信"
                ],
                "values": [],
                "hidden": true
              },
              {
                "type": "notice",
                "title": "功能说明：在其他账号的 “粉丝” 或者 “关注” 界面运行，系统会对用户首作品点赞。"
              }
            ]
          }
        },
        {
          "title": "赞回访",
          "icon": "img/zan.png",
          "jsFile": "tasks/task_dy_zan_back.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "运行次数",
                "name": "task_dy_zan_back_run_count",
                "value": 10,
                "max": 300,
                "min": 1
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_dy_zan_back_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "主页平均停留时间（秒）",
                "name": "task_dy_zan_back_home_wait",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1,
                "hidden": true
              },
              {
                "type": "numberRange",
                "label": "作品平均停留时间（秒）",
                "name": "task_dy_zan_back_work_wait",
                "value": 5,
                "max": 100,
                "min": 2,
                "step": 1,
                "hidden": true
              },
              {
                "type": "number",
                "label": "粉丝数量不少于",
                "name": "task_dy_zan_back_min_fans",
                "value": 0,
                "hidden": true
              },
              {
                "type": "number",
                "label": "粉丝数量不大于",
                "name": "task_dy_zan_back_max_fans",
                "value": 10000,
                "hidden": true
              },
              {
                "type": "number",
                "label": "作品数大于",
                "name": "task_dy_zan_back_min_work",
                "value": 1,
                "hidden": true
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_dy_zan_back_op",
                "children": [
                  "关注",
                  "私信",
                  "首作品点赞"
                ],
                "values": [
                  "0",
                  "2"
                ]
              },
              {
                "type": "notice",
                "title": "功能说明：在我的 “作品” -> “评论” 页的 “点赞” 列表界面运行，对列表用户的作品回赞。"
              }
            ]
          }
        },
        {
          "title": "好友转化",
          "icon": "img/friend.png",
          "jsFile": "tasks/task_dy_friend_change.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "运行次数",
                "name": "task_dy_friend_change_run_count",
                "value": 10,
                "max": 300,
                "min": 1
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_dy_friend_change_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "主页平均停留时间（秒）",
                "name": "task_dy_friend_change_home_wait",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "作品平均停留时间（秒）",
                "name": "task_dy_friend_change_work_wait",
                "value": 5,
                "max": 100,
                "min": 2,
                "step": 1
              },
              {
                "type": "number",
                "label": "粉丝数量不少于",
                "name": "task_dy_friend_change_min_fans",
                "value": 0
              },
              {
                "type": "number",
                "label": "粉丝数量不大于",
                "name": "task_dy_friend_change_max_fans",
                "value": 10000
              },
              {
                "type": "number",
                "label": "作品数大于",
                "name": "task_dy_friend_change_min_work",
                "value": 1
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_dy_friend_change_op",
                "children": [
                  "关注",
                  "私信",
                  "首作品点赞"
                ],
                "values": [
                  "0",
                  "2"
                ]
              },
              {
                "type": "checkboxGroup",
                "label": "私信模式",
                "name": "task_dy_friend_change_private_type",
                "children": [
                  "对普通用户私信",
                  "对蓝V用户私信"
                ],
                "values": []
              },
              {
                "type": "notice",
                "title": "功能说明：在其他账号的 “粉丝” 或者 “关注” 界面运行，系统会根据相关筛选条件执行相应的任务。（适用于寻找客户，对同行的精准粉丝进行推广引流）"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "DY·UID拓客",
      "methods": [
        {
          "title": "UID私信",
          "columns": 16,
          "icon": "img/private-2.png",
          "jsFile": "tasks/task_dy_toker_uid.js",
          "settingPage": {
            "params": [
              {
                "type": "text",
                "label": "UID（每行一个）",
                "name": "task_dy_toker_uid_account",
                "value": "",
                "lines": 5
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_dy_toker_uid_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_dy_toker_uid_op",
                "children": [
                  "关注",
                  "私信"
                ],
                "values": [
                  "0",
                  "1"
                ]
              },
              {
                "type": "notice",
                "title": "请确保后台弹窗权限已打开"
              }
            ]
          }
        },
        {
          "title": "UID邀约",
          "icon": "img/invite.png",
          "jsFile": "tasks/task_dy_toker_invite.js",
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "text",
                "label": "UID（每行一个）",
                "name": "task_dy_toker_invite_account",
                "value": "",
                "lines": 5
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_dy_toker_invite_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "notice",
                "title": "功能说明：蓝V账号，需要创建卡片，这个功能将会自动分享第一个卡片"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "DY·其他功能",
      "methods": [
        {
          "title": "精准行业",
          "hidden": false,
          "icon": "img/rocket.png",
          "jsFile": "tasks/task_dy_search_user.js",
          "columns": 16,
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "searchUserSetting_privateRate",
                "max": 100,
                "min": 0,
                "value": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "searchUserSetting_focusRate",
                "max": 100,
                "min": 0,
                "value": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "searchUserSetting_zanRate",
                "max": 100,
                "value": 40,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "searchUserSetting_commentRate",
                "max": 100,
                "value": 25,
                "min": 0,
                "step": 1
              },
              {
                "type": "digit",
                "label": "粉丝数（不低于）",
                "name": "searchUserSetting_fansMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "粉丝数（不超过）",
                "name": "searchUserSetting_fansMaxCount",
                "value": 50000
              },
              {
                "type": "digit",
                "label": "作品数（不低于）",
                "name": "searchUserSetting_worksMinCount",
                "value": 0
              },
              {
                "type": "digit",
                "label": "作品数（不超过）",
                "name": "searchUserSetting_worksMaxCount",
                "value": 10000
              },
              {
                "type": "number",
                "label": "操作次数",
                "name": "searchUserSetting_opCount",
                "value": 2000
              },
              {
                "type": "text",
                "label": "行业关键词",
                "name": "searchUserSetting_keyword",
                "value": ""
              }
            ]
          }
        },
        {
          "title": "团购营销",
          "hidden": false,
          "columns": 8,
          "icon": "img/team-buy.png",
          "jsFile": "tasks/task_dy_team_buy.js",
          "minVersion": 10001,
          "settingPage": {
            "params": [
              {
                "type": "notice",
                "title": "1.团购功能可能需要多次授权位置服务，请先手动操作一遍流程，再使用软件运行~\n\n2.每次启动该功能，请确保DY界面在首页或者团购页~\n\n3.确保用户列表可以被操作"
              },
              {
                "type": "textArea",
                "label": "门店名称",
                "name": "task_dy_team_buy_text",
                "value": ""
              },
              {
                "type": "textArea",
                "label": "操作次数",
                "name": "task_dy_team_buy_op_count",
                "value": "10"
              },
              {
                "type": "numberRange",
                "label": "赞频率（%）",
                "name": "task_dy_team_buy_zan_rate",
                "max": 100,
                "value": 50,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "task_dy_team_buy_comment_rate",
                "max": 100,
                "value": 50,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "task_dy_team_buy_private_rate",
                "max": 100,
                "value": 50,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "操作间隔",
                "name": "task_dy_team_buy_wait",
                "max": 100,
                "value": 5,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "滑动灵敏度",
                "name": "task_dy_team_buy_swipe",
                "max": 100,
                "value": 50,
                "min": 20,
                "step": 1
              }
            ]
          }
        },
        {
          "title": "直播间弹幕",
          "hidden": false,
          "icon": "img/barrage.png",
          "jsFile": "tasks/task_dy_live_barrage.js",
          "columns": 16,
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "输入账号（正在直播中）",
                "name": "task_dy_live_barrage_account",
                "value": "",
                "notice": "*可以输入UID，需要在UID前面加上“#”"
              },
              {
                "type": "numberRange",
                "label": "操作最大间隔时间（秒）",
                "name": "task_dy_live_barrage_second",
                "value": 5,
                "max": 300,
                "min": 5,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "task_dy_live_barrage_zan_rate",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "弹幕频率（%）",
                "name": "task_dy_live_barrage_comment_rate",
                "value": 5,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "textArea",
                "label": "弹幕内容（一行为一条弹幕）",
                "name": "task_dy_live_barrage_comments",
                "value": "六六六\n厉害了\n😄😄"
              },
              {
                "type": "switch",
                "label": "弹幕带表情",
                "name": "task_dy_live_barrage_comment_emoji_switch"
              }
            ]
          }
        },
        {
          "title": "评论截流II",
          "hidden": false,
          "columns": 8,
          "icon": "img/comment-2.png",
          "jsFile": "tasks/task_dy_toker_video.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "textArea",
                "label": "评论关键词（多关键词使用逗号隔开）",
                "value": "",
                "name": "task_dy_toker_live_video_comment_keyword"
              },
              {
                "type": "numberRange",
                "label": "评论赞频率",
                "name": "task_dy_toker_live_video_zan_comment_rate",
                "value": 0,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "关注频率",
                "name": "task_dy_toker_live_video_focus_rate",
                "value": 0,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "回复作品首评概率",
                "name": "task_dy_toker_live_video_comment_first_comment_rate",
                "value": 0,
                "max": 100,
                "min": 0,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "操作间隔（秒）",
                "name": "task_dy_toker_live_video_second",
                "value": 0,
                "max": 100,
                "min": 5,
                "step": 5
              },
              {
                "type": "notice",
                "title": "1.点击“保存并运行”后，请先进入视频搜索页，手动输入关键词、筛选时间，切换到“视频”选项；然后再点击右侧“启动”按钮执行\n\n2.关注、评论赞，三者会按照概率执行，并且只执行其中一个"
              }
            ]
          }
        }
      ]
    },
    {
      "title": "小红薯·万能引流",
      "methods": [
        {
          "title": "万能营销",
          "icon": "img/xhs-wanneng.png",
          "jsFile": "tasks/task_xhs_toker.js",
          "columns": 8,
          "settingPage": {
            "params": [
              {
                "type": "switch",
                "label": "同城营销",
                "name": "toker_xhs_is_city",
                "value": false
              },
              {
                "type": "numberRange",
                "label": "操作间隔（秒）",
                "name": "toker_xhs_op_second",
                "max": 60,
                "min": 1,
                "value": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "观看时长（秒）",
                "name": "toker_xhs_view_video_second",
                "max": 60,
                "min": 5,
                "value": 12,
                "step": 1
              },
              {
                "type": "textArea",
                "label": "关键词筛选（多个使用逗号隔开）",
                "name": "toker_xhs_view_video_keywords",
                "value": "",
                "notice": "* 关键词不填则操作所有"
              },
              {
                "type": "numberRange",
                "label": "点赞频率（%）",
                "name": "toker_xhs_zan_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 25
              },
              {
                "type": "numberRange",
                "label": "评论频率（%）",
                "name": "toker_xhs_comment_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 20
              },
              {
                "type": "numberRange",
                "label": "关注频率（%）",
                "name": "toker_focus_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1
              },
              {
                "type": "numberRange",
                "label": "私信频率（%）",
                "name": "toker_xhs_private_msg_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 1,
                "hidden": true
              },
              {
                "type": "numberRange",
                "label": "评论区点赞频率（%）",
                "name": "toker_comment_area_zan_rate",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 25,
                "hidden": true
              },
              {
                "type": "checkboxGroup",
                "label": "性别",
                "name": "toker_xhs_run_sex",
                "hidden": true,
                "children": [
                  "女",
                  "男",
                  "未知"
                ],
                "values": [
                  "0",
                  "1",
                  "2"
                ]
              },
              {
                "type": "numberRange",
                "label": "最小年龄",
                "name": "toker_xhs_run_min_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 18,
                "hidden": true
              },
              {
                "type": "numberRange",
                "label": "最大年龄",
                "name": "toker_xhs_run_max_age",
                "max": 100,
                "min": 0,
                "step": 1,
                "value": 60,
                "hidden": true
              },
              {
                "type": "checkboxGroup",
                "label": "运行时间",
                "name": "toker_xhs_run_hour",
                "children": [
                  "0时",
                  "1时",
                  "2时",
                  "3时",
                  "4时",
                  "5时",
                  "6时",
                  "7时",
                  "8时",
                  "9时",
                  "10时",
                  "11时",
                  "12时",
                  "13时",
                  "14时",
                  "15时",
                  "16时",
                  "17时",
                  "18时",
                  "19时",
                  "20时",
                  "21时",
                  "22时",
                  "23时"
                ],
                "values": [
                  "10",
                  "11",
                  "12",
                  "15",
                  "17",
                  "18",
                  "20",
                  "21",
                  "22"
                ]
              }
            ]
          }
        },
        {
          "title": "同行拓客",
          "icon": "img/xhs-fans.png",
          "jsFile": "tasks/task_xhs_fans.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "columns": 8,
          "packageName": "com.xingin.xhs",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "运行次数",
                "name": "task_xhs_fans_run_count",
                "value": 10,
                "max": 300,
                "min": 1
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_xhs_fans_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "主页平均停留时间（秒）",
                "name": "task_xhs_fans_home_wait",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "作品平均停留时间（秒）",
                "name": "task_xhs_fans_work_wait",
                "value": 5,
                "max": 100,
                "min": 2,
                "step": 1
              },
              {
                "type": "number",
                "label": "粉丝数量不少于",
                "name": "task_xhs_fans_min_fans",
                "value": 0
              },
              {
                "type": "number",
                "label": "粉丝数量不大于",
                "name": "task_xhs_fans_max_fans",
                "value": 10000
              },
              {
                "type": "number",
                "label": "作品数大于",
                "name": "task_xhs_fans_min_work",
                "value": 1
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_xhs_fans_op",
                "children": [
                  "关注",
                  "私信",
                  "首作品点赞"
                ],
                "values": [
                  "0",
                  "2"
                ]
              },
              {
                "type": "notice",
                "title": "功能说明：在其他账号的 “粉丝” 或者 “关注” 界面运行，系统会根据相关筛选条件执行相应的任务。作品数限制，只针对“粉丝”界面。（适用于寻找客户，对同行的精准粉丝进行推广引流）"
              }
            ]
          }
        },
        {
          "title": "赞回访",
          "icon": "img/xhs-zan.png",
          "jsFile": "tasks/task_xhs_zan_back.js",
          "runType": "floatSwitch",
          "autoOpen": true,
          "columns": 8,
          "packageName": "com.xingin.xhs",
          "settingPage": {
            "params": [
              {
                "type": "numberRange",
                "label": "运行次数",
                "name": "task_xhs_zan_back_run_count",
                "value": 10,
                "max": 300,
                "min": 1
              }
            ]
          }
        }
      ]
    },
    {
      "title": "小红薯·其他功能",
      "methods": [
        {
          "title": "USER_ID私信",
          "columns": 16,
          "icon": "img/private-2.png",
          "jsFile": "tasks/task_xhs_toker_uid.js",
          "settingPage": {
            "params": [
              {
                "type": "text",
                "label": "USER_ID（每行一个）",
                "name": "task_xhs_toker_uid_account",
                "value": "",
                "lines": 5
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_xhs_toker_uid_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "checkboxGroup",
                "label": "功能",
                "name": "task_xhs_toker_uid_op",
                "children": [
                  "关注",
                  "私信"
                ],
                "values": [
                  "0",
                  "1"
                ]
              },
              {
                "type": "notice",
                "title": "请确保后台弹窗权限已打开"
              }
            ]
          }
        },
        {
          "title": "垂直养号",
          "columns": 16,
          "icon": "img/vertical.png",
          "jsFile": "tasks/task_xhs_yanghao.js",
          "packageName": "com.ss.android.ugc.aweme",
          "settingPage": {
            "params": [
              {
                "type": "text",
                "label": "关键词",
                "name": "task_xhs_yanghao_keyword",
                "value": "",
                "lines": 1
              },
              {
                "type": "numberRange",
                "label": "操作平均间隔（秒）",
                "name": "task_xhs_yanghao_interval",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "评论概率",
                "name": "task_xhs_yanghao_comment_rate",
                "value": 15,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "点赞概率",
                "name": "task_xhs_yanghao_zan_rate",
                "value": 20,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "收藏概率",
                "name": "task_xhs_yanghao_collect_rate",
                "value": 5,
                "max": 100,
                "min": 1,
                "step": 1
              },
              {
                "type": "numberRange",
                "label": "刷作品总数",
                "name": "task_xhs_yanghao_count",
                "value": 100,
                "max": 3000,
                "min": 1,
                "step": 1
              }
            ]
          }
        }
      ]
    }
  ],
  "bottomMenus": [
    {
      "title": "{NAME}",
      "icon": "img/home.png",
      "banner": "img/home-top.png",
      "type": "home"
    },
    {
      "title": "话术设置",
      "icon": "img/speech.png",
      "type": "speech"
    },
    {
      "title": "系统设置",
      "icon": "img/setting.png",
      "type": "setting"
    }
  ],
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
    },
    {
      "title": "智能话术",
      "icon": "img/ai.png",
      "type": "settingService",
      "settingPage": {
        "params": [
          {
            "type": "switch",
            "label": "开启{NAME}智能AI话术",
            "value": false,
            "name": "setting_baidu_wenxin_switch"
          },
          {
            "type": "radio",
            "label": "请选择角色",
            "name": "setting_baidu_wenxin_role",
            "value": "1",
            "dataFrom": "role",
            "options": []
          },
          {
            "type": "text",
            "label": "{NAME} Key",
            "value": "如：NZmgn5urWoHhKWe8XbGMdbUp",
            "name": "setting_baidu_wenxin_key"
          },
          {
            "type": "text",
            "label": "{NAME} Secret",
            "name": "setting_baidu_wenxin_secret",
            "value": "如：brIq133KaAPNEkn109avxl7MXUHHW0kg"
          },
          {
            "type": "notice",
            "title": "如果开启超级霸屏，请配置账号收藏的表情图",
            "hidden": true
          },
          {
            "type": "numberRange",
            "label": "超级霸屏(%)",
            "name": "setting_comment_with_photo",
            "value": 0,
            "min": 0,
            "max": 100,
            "hidden": false
          },
          {
            "type": "notice",
            "title": "* 开启后，将使用{NAME}官方AI角色（可自定义）进行评论和私信，让拓客变得更简单~"
          }
        ]
      },
      "hidden": false
    },
    {
      "title": "数据统计",
      "icon": "img/statistics.png",
      "type": "statistics",
      "jsFile": "statistics/statistics.js"
    },
    {
      "title": "上传日志",
      "icon": "img/upload.png",
      "type": "uploadLog",
      "url": "/dke/uploadLog"
    },
    {
      "title": "系统升级",
      "icon": "img/update.png",
      "type": "updateApp",
      "url": "/dke/updateApp"
    },
    {
      "title": "清理数据",
      "icon": "img/clear.png",
      "description": "确定清理嘛？",
      "type": "clear"
    },
    {
      "title": "举报中心",
      "icon": "img/jubao.png",
      "type": "qiwei",
      "url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=910d7c7c-d74a-4ce5-a070-0f3383b1f6ee",
      "hidden": false,
      "settingPage": {
        "params": [
          {
            "type": "notice",
            "title": "如果我们的代理商有侵犯到你的权益，请立即举报！",
            "hidden": false
          },
          {
            "type": "text",
            "label": "举报人",
            "value": "",
            "name": "qiwei_name"
          },
          {
            "type": "text",
            "label": "举报人手机号",
            "value": "",
            "name": "qiwei_mobile"
          },
          {
            "type": "text",
            "label": "举报人身份证号码",
            "value": "",
            "name": "qiwei_card_no"
          },
          {
            "type": "text",
            "label": "举报内容",
            "value": "",
            "hint": "请详细描述你举报该软件的原因，请不要恶意举报！",
            "name": "qiwei_content",
            "lines": 3
          }
        ]
      }
    }
  ],
  "apis": [
    {
      "type": "bind",
      "url": "/dke/login"
    },
    {
      "type": "checkBind",
      "url": "/dke/checkBind"
    },
    {
      "type": "aiSpeechToken",
      "url": "/dke/getBaiduToken"
    },
    {
      "type": "config",
      "url": "/dkee/config"
    },
    {
      "type": "getToken",
      "url": "/alipay/getToken"
    },
    {
      "type": "createOrder",
      "url": "/alipay/createOrder"
    }
  ]
}
```