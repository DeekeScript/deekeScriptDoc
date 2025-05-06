# 表单

## 基本介绍

当前在DeekeScript框架开发中，form表单是通过deekeScript.json文件来配置的，采用Android内置的Preference Framework。表单主要有以下几种类型，分别是：text、textArea、select、checkboxGroup、checkbox、radio、switch、number、numberRange、digitRange、digit、notice

## 表单属性如下
> "*" 表示属性必填
> "-" 表示表单无此属性

| 类型/值 |   text  |textArea|  select  |checkboxGroup| checkbox |  radio  |  switch |  number |numberRange|digitRange| digit  | notice  |
|  label  |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |
|  name   |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |
|  value  |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |
|  notice |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |
|  hidden |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |
|  lines  |  label  |  name  |  value  |    notice    |  hidden  |  lines  |  lines  |  lines  |   lines   |  lines  |  lines  |  lines  |

> 需要注意的是，Preference Framework有一个特点，就是当表单的名称和类型确定之后，如果再更改表单类型，可能会出现问题导致崩溃。更改表单的name属性即可解决，或者卸载app重装

## text
```
{
    "type": "text",
    "label": "操作账号",
    "name": "fansSetting_account",
    "lines": 1,
    "hidden": false,
    "value": "",
    "notice": "*可以输入UID，需要在UID前面加上“#”"
}
```
