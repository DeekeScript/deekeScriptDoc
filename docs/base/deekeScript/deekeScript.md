---
title: 杂项 - DeekeScript
description: DeekeScript - 杂项 - DeekeScript
---

# 杂项 - DeekeScript

DeekeScript 对象提供了直接获取无障碍节点原始数据的能力，适合需要自定义节点处理的场景。相比 UiSelector/UiObject，DeekeScript 可以一次性获取所有节点数据，性能更好，适合批量处理。

> 获取单个节点并进行点击、输入等操作，请使用 [UiSelector](../uiSelector/uiSelector.md) 和 [UiObject](../uiObject/uiObject.md)。

## version()

**返回：** `{number}`

获取当前 DeekeScript 框架版本号。

```javascript
console.log(DeekeScript.version());
```

## readFile(path)

**参数：** `path {string}` 相对于 JS 项目根目录的文件路径

**返回：** `{string | null}` 文件内容，失败返回 null

读取 JS 项目目录下的文件内容。

```javascript
let content = DeekeScript.readFile('/config/settings.json');
if (content) {
    console.log(content);
}
```

## getProjectRoot()

**返回：** `{string}`

获取当前 JS 项目的根目录绝对路径。

```javascript
let root = DeekeScript.getProjectRoot();
console.log('项目根目录：' + root);
```

## getNodeFields()

**返回：** `{string[]}` 字段名字符串数组

获取可用于 `getAllAccessibilityNodeInfo()` 的节点字段名列表。

```javascript
let fields = DeekeScript.getNodeFields();
console.log('可用字段：' + fields.join(', '));
// 输出：key, viewIdResourceName, text, contentDescription, className, ...
```

## getAllAccessibilityNodeInfo(bool, fields)

**参数：**
- `bool {boolean}` `true` 为复杂模式（包含所有字段），`false` 为简单模式
- `fields {string[]}` 需要返回的字段名数组，可通过 `getNodeFields()` 获取完整字段列表

**返回：** `{ nodes: DeekeNodeInfo[] } | null` 节点信息对象，无障碍服务未启用时返回 null

一次性获取当前界面所有控件的节点信息。

### 节点字段说明

| 字段名 | 类型 | 说明 |
|--------|------|------|
| key | string | 节点唯一标识 |
| viewIdResourceName | string | 资源 ID |
| text | string | 文本内容 |
| contentDescription | string | 内容描述 |
| className | string | 类名 |
| childCount | number | 子节点数量 |
| packageName | string | 所属包名 |
| hintText | string | 提示文本 |
| inputType | number | 输入类型 |
| drawingOrder | number | 绘制顺序 |
| depth | number | 层级深度 |
| maxTextLength | number | 最大文本长度 |
| isPassword | boolean | 是否是密码框 |
| boundsInScreen | DeekeBounds | 在屏幕中的位置 |
| boundsInParent | DeekeBounds | 在父节点中的位置 |
| isClickable | boolean | 是否可点击 |
| isCheckable | boolean | 是否可勾选 |
| isChecked | boolean | 是否已勾选 |
| isEditable | boolean | 是否可编辑 |
| isEnabled | boolean | 是否启用 |
| isScrollable | boolean | 是否可滚动 |
| isSelected | boolean | 是否已选中 |
| isVisibleToUser | boolean | 对用户是否可见 |
| isFocusable | boolean | 是否可聚焦 |
| isFocused | boolean | 是否已聚焦 |
| isLongClickable | boolean | 是否可长按 |
| isDismissable | boolean | 是否可关闭 |
| children | DeekeNodeInfo[] | 子节点数组 |

### DeekeBounds 对象

| 字段名 | 类型 | 说明 |
|--------|------|------|
| left | number | 左边界 X 坐标 |
| top | number | 上边界 Y 坐标 |
| width | number | 宽度 |
| height | number | 高度 |

### 基础示例

```javascript
// 获取简单模式的所有节点
let result = DeekeScript.getAllAccessibilityNodeInfo(false, DeekeScript.getNodeFields());
if (result && result.nodes) {
    console.log('找到 ' + result.nodes.length + ' 个节点');
    result.nodes.forEach(node => {
        if (node.text) {
            console.log('节点文本：' + node.text + '，类名：' + node.className);
        }
    });
}
```

### 筛选指定字段

```javascript
// 只获取需要的关键字段，提升性能
let fields = ['text', 'className', 'isClickable', 'boundsInScreen'];
let result = DeekeScript.getAllAccessibilityNodeInfo(false, fields);
if (result && result.nodes) {
    result.nodes.forEach(node => {
        if (node.isClickable) {
            console.log('可点击节点：' + node.text + ' (' + node.className + ')');
            if (node.boundsInScreen) {
                console.log('  位置：left=' + node.boundsInScreen.left + 
                    ', top=' + node.boundsInScreen.top +
                    ', width=' + node.boundsInScreen.width +
                    ', height=' + node.boundsInScreen.height);
            }
        }
    });
}
```

### 遍历子节点

```javascript
// 递归遍历节点树
let fields = ['text', 'className', 'children'];
let result = DeekeScript.getAllAccessibilityNodeInfo(true, fields);

function traverseNodes(nodes, depth) {
    if (!nodes) return;
    nodes.forEach(node => {
        let indent = '  '.repeat(depth);
        console.log(indent + '├─ ' + (node.text || node.className || '(无文本)'));
        if (node.children) {
            traverseNodes(node.children, depth + 1);
        }
    });
}

if (result && result.nodes) {
    traverseNodes(result.nodes, 0);
}
```
