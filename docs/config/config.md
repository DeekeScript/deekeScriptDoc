
# 配置

## deekeScript.json文件说明

[示例](#demo)请查看本页末尾部分

### 主体参数

|     参数名    |  类型   |                    示例                  |                 说明                                 |
| ------------ | ------- | ---------------------------------------- | ----------------------------------------------------|
|     name     | String  |                  嘀客                    | App安装成功之后，在手机上的名称                        |
|     icon     | String  |               logo/dke.png               | 图标建议采用200*200像素的，清晰度大的                  |
|     head     | String  |               img/root.png               | App中用户设置页面的头像，无设置页可以不填               |
| settingTopBg | String  |              img/sett-top.png            | App中用户设置页面的背景图，可以不设置，但是建议设置      |
|    methods   |  Json   |          [methods参数](#methods)         |  主界面的功能列表，每一个子节点对应一个功能              |
|  bottomMenus |  Json   |     [bottomMenus参数](#bottomMenus)      | App中底部菜单，可以使用系统内置的，也可以自定义          |
| settingLists |  Json   |     [settingLists参数](#settingLists)    | App中设置页的列表项，可以使用系统内置的，也可以自定义     |
|     api      |  Json   |             [api参数](#api)              | 设置相关api，比如激活码api，验证激活码是否有效api登      |


#### methods参数

|     参数名    |  类型   |                 示例               |                 说明                                 |
| ------------ | ------- | ---------------------------------- | ----------------------------------------------------|
|     title    | String  |               XX截流               | App主界面的功能名称                                   |
|     icon     | String  |            logo/fans.png           | App主界面的功能图标                                   |
|    jsFile    | String  |    tasks/task_dy_toker_fans.js     | 功能实际执行的代码所在文件                             |
| settingPage  |  Json   |   [settingPage参数](#settingPage)  | 功能对应的设置页面，如果为空，则直接执行jsFile脚本       |


#### bottomMenus参数

|     参数名    |  类型   |                 示例               |                                      说明                                      |
| ------------ | ------- | ---------------------------------- | -------------------------------------------------------------------------------|
|     title    | String  |                 首页               | 底部菜单名称名称                                                                 |
|     icon     | String  |            logo/fans.png           | 底部菜单图标                                                                    |
|    banner    | String  |         banner/banner.png          | type为home的时候生效，首页顶部图片                                               |
|     type     | String  |                home                | 目前支持home、setting、speech，分别表示首页、设置页、话术页                        |


#### settingLists参数

|     参数名    |  类型   |                 示例                |                                                   说明                                                  |
| ------------ | ------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------|
|     title    | String  |                清理缓存              | 设置页标题名称                                                                                           |
|     icon     | String  |            logo/clear.png           | 底部菜单图标                                                                                             |
|      url     | String  | https://script.deeke.top/upload/log | type为uploadLog的时候，必须，用于接受上传日志                                                              |
|     type     | String  |                clear                | 支持clear、uploadLog、customerService、update、custom，分别表示 清理缓存、上传日志、联系客服、更新App、自定义 |
|    jsFile    | String  |                home                 | type为custom的时候必须，点击的时候，会执行对应的js文件                                                      |
| description  | String  |             确定清理吗？             | type为clear的时候，会弹出提示框，确认后执行清理；type为customerService可以设置为“客服微信：miniphper”         |


#### api参数

|     参数名    |  类型   |                 示例               |                                                         说明                                                 |
| ------------ | ------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------|
|      url     | String  | https://script.deeke.top/api/login | 接口地址，type为login，则为激活码激活地址；type为checkLogin，则为激活码验证地址                                   |
|      type    | String  |                login               | 目前支持login、checkLogin ；其中login用于激活码登录，checkLogin用于每30分钟检查一次状态，状态不对则软件需要重新激活  |


##### settingPage参数

|     参数名    |  类型   |                 示例               |                 说明                                 |
| ------------ | ------- | ---------------------------------- | ----------------------------------------------------|
|    jsFile    |  String |      执行文件，保留字段             |  保留字段                                             |
|   params     |   Json  |       [params参数](#params)        | 需要用户设置的参数                                     |


###### params参数

|     参数名    |  类型   |                 示例               |                                               说明                                                   |
| ------------ | ------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------|
|     type     | String  |               text                 | Form参数类型，有text、textArea、select、checkbox、radio、switch、number、numberRange、digitRange、digit|
|     lable    | String  |              用户账号               | 字段描述，控件的描述，用于告诉用户这个控件输入的内容                                                     |
|    value     | String  |               miniphper            | 初始值，可以为空                                                                                      |
|     name     | String  |              account               | 控件名称，后续[获取值](#getValue)的时候，需要这个参数名称                                                |
|     min      |   int   |              0                     | 最小值，当type为numberRange或者digitRange时生效                                                        |
|     max      |   int   |              1000                  | 最大值，当type为numberRange或者digitRange时生效                                                        |
|     step     |   int   |                 1                  | 滑动最小单位，当type为numberRange或者digitRange时生效                                                  |
|    options   |  Json   |       [options参数](#options)      | 属性值，当type为select、checkbox、radio时生效                                                          |


###### options参数

|     参数名    |  类型   |                 示例               |               说明             |
| ------------ | ------- | ---------------------------------- | -------------------------------|
|    selected  | bool    |                 false              | 是否默认选中                    |
|     lable    | String  |                   男               | 描述，用于告诉用户这个控件的内容  |
|    value     | String  |                   1                | 值                             |

<a id="demo"></a>
```json
{
  "name": "嘀客",
  "icon": "logo/dke.png",
  "head": "img/robot.png",
  "settingTopBg": "img/setting-top.png",
  "methods": [
    {
      "title": "XX截流",
      "icon": "img/fans.png",
      "jsFile": "tasks/task_dy_toker_fans.js",
      "settingPage": {
        "jsFile": "page/fans.js",
        "params": [
            {type:"text", lable:"账号", name:"account", "value":"miniphper"},
            {type:"digit", lable:"执行次数", name:"times", "value":100},
            {type:"numberRange", lable:"最小作品数", name:"works_count", "value":100, min: 0, max: 10000, step: 1},
            {type:"digitRange", lable:"私信评率", name:"pri_msg_rate", "value":0.5, max: 1, min: 0},
            {type:"checkbox", lable:"性别", name:"private_msg_rate", options: [
                {lable: "男", value: 1, selected: true},
                {lable: "女", value: 0, selected: true},
                {lable: "未知", value: 2, selected: false},
            ]},
            {type:"switch", lable:"点赞头像", name:"zan_avatar", value: true},
        ]
      }
    },
    {
      "title": "XXX截流",
      "icon": "img/anchor_focus.png",
      "jsFile": "tasks/task_dy_toker_focus.js"
    }
  ],
  "bottomMenus": [
    {
      "title": "嘀客",
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
      "description": "客服微信：miniphper"
    },
    {
      "title": "上传日志",
      "icon": "img/upload.png",
      "type": "uploadLog",
      "url": "https://top.deeke.script/uploadLog"
    },
    {
      "title": "系统升级",
      "icon": "img/update.png",
      "type": "updateApp",
      "url": "https://top.deeke.script/updateApp"
    },
    {
      "title": "清理数据",
      "icon": "img/clear.png",
      "description": "确定清理嘛？",
      "type": "clear"
    },
    {
      "title": "自定义功能",
      "icon": "img/clear.png",
      "type": "custom",
      "jsFile": "app/custom.js"
    }
  ],
  "api": [
    {
      "type": "login",
      "url": "https://top.deeke.script/login"
    },
    {
      "type": "checkLogin",
      "url": "https://top.deeke.script/isLogin"
    }
  ]
}
```