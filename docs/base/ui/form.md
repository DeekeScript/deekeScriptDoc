# 表单

## 基本介绍

当前在DeekeScript框架开发中，form表单是通过deekeScript.json文件来配置的，采用Android内置的Preference Framework。表单主要有以下几种类型，分别是：text、textArea、select、checkboxGroup、checkbox、radio、switch、number、numberRange、digitRange、digit、notice

## 表单提示

> 表单提示，用于提示用户表单的提示信息

```
{
    "type": "notice",
    "title": "帮助你快速取消单向关注（你关注他，他没有关注你）的用户~"
},
```

## 表单属性如下
> "*" 表示属性必填
> 
> "○" 表示非必填
> 
> "-" 表示表单无此属性

|  类型/值  |   text  |textArea|  select  |checkboxGroup| checkbox |  radio  |  switch |  number |numberRange|digitRange| digit  |
| :-------- | :-----: | :----: | :------: | :---------: | :------: | :-----: | :-----: | :-----: | :-------: | :-----: | :-----: |
|   label   |    *    |    *   |    *    |       *      |     *    |    *    |    *    |    *    |     *     |    *    |    *    |
|   name    |    *    |    *   |    *    |       *      |     *    |    *    |    *    |    *    |     *     |    *    |    *    |
|   value   |    ○    |    ○   |    ○    |       ○      |     ○    |    ○    |    ○    |    ○    |     ○     |    ○    |    ○    |
|   notice  |    ○    |    ○   |    -    |       -      |     -    |    -    |    -    |    -    |     -     |    -    |    -    |
|   hidden  |    ○    |    ○   |    ○    |       ○      |     ○    |    ○    |    ○    |    ○    |     ○     |    ○    |    ○    |
|   lines   |    ○    |    ○   |    -    |       -      |     -    |    -    |    -    |    -    |     -     |    -    |    -    |
|  options  |    -    |    -   |    *    |       -      |     *    |    ○    |    -    |    -    |     -     |    -    |    -    |
|    max    |    -    |    -   |    -    |       -      |     -    |    -    |    -    |    -    |     *     |    *    |    -    |
|    min    |    -    |    -   |    -    |       -      |     -    |    -    |    -    |    -    |     *     |    *    |    -    |
|    step   |    -    |    -   |    -    |       -      |     -    |    -    |    -    |    -    |     ○     |    ○    |    -    |
|  dataFrom |    -    |    -   |    -    |       -      |     -    |    ○    |    -    |    -    |     -     |    -    |    -    |
|  children |    -    |    -   |    -    |       *      |     -    |    -    |    -    |    -    |     -     |    -    |    -    |
|  values   |    -    |    -   |    -    |       *      |     -    |    -    |    -    |    -    |     -     |    -    |    -    |
|columnCount|    -    |    -   |    -    |       *      |     -    |    -    |    -    |    -    |     -     |    -    |    -    |


> 需要注意的是，Preference Framework有一个特点，就是当表单的名称和类型确定之后，如果再更改表单类型，可能会出现问题导致崩溃。更改表单的name属性即可解决，或者卸载app重装
>
> dataFrom属性需要与[config接口](../../backendApi/activationCode.md)对应，需要动态渲染的列表，可以使用radio的dataFrom属性。
