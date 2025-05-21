# 输入法-Ime

## 输入法的作用

输入法主要有以下作用：

> 部分控件不支持输入文字
> 
> 部分输入框没有确认按钮,需要发送回车指令
>
> 代替粘贴输入文字操作
> 


## isActive
判断输入法是否可用

> 返回 {boolean}  输入法是否可用
>

```js
Ime.isActive();
```


## input(info)
输入文字

> info {string}  输入的内容
> 返回 {boolean}  输入是否成功
>

```js
Ime.input("我正在使用DeekeScript开发工具");
```

## clear()
让输入法清空在焦点内的文字

> 返回 {boolean}  是否清空成功
>

```js
Ime.clear();
```


## keys(keys, duration)
发送按键指令

> keys {Number[]}  需要发送的按键列表
>
> duration {int}  按键的持续时间，单位毫秒
>
> 返回 {boolean}  是否清空成功
>

```js
Ime.keys([66]);//模拟回车按键
```

## Android中的按键码

### 数字键（0–9）
| 键名 | 键码 |
|------|------|
| KEYCODE_0 | 7 |
| KEYCODE_1 | 8 |
| KEYCODE_2 | 9 |
| KEYCODE_3 | 10 |
| KEYCODE_4 | 11 |
| KEYCODE_5 | 12 |
| KEYCODE_6 | 13 |
| KEYCODE_7 | 14 |
| KEYCODE_8 | 15 |
| KEYCODE_9 | 16 |

### 字母键（A–Z）
| 键名 | 键码 |
|------|------|
| KEYCODE_A | 29 |
| KEYCODE_B | 30 |
| KEYCODE_C | 31 |
| KEYCODE_D | 32 |
| KEYCODE_E | 33 |
| KEYCODE_F | 34 |
| KEYCODE_G | 35 |
| KEYCODE_H | 36 |
| KEYCODE_I | 37 |
| KEYCODE_J | 38 |
| KEYCODE_K | 39 |
| KEYCODE_L | 40 |
| KEYCODE_M | 41 |
| KEYCODE_N | 42 |
| KEYCODE_O | 43 |
| KEYCODE_P | 44 |
| KEYCODE_Q | 45 |
| KEYCODE_R | 46 |
| KEYCODE_S | 47 |
| KEYCODE_T | 48 |
| KEYCODE_U | 49 |
| KEYCODE_V | 50 |
| KEYCODE_W | 51 |
| KEYCODE_X | 52 |
| KEYCODE_Y | 53 |
| KEYCODE_Z | 54 |

### 系统功能键
| 键名 | 键码 |
|------|------|
| KEYCODE_HOME | 3 |
| KEYCODE_BACK | 4 |
| KEYCODE_CALL | 5 |
| KEYCODE_ENDCALL | 6 |
| KEYCODE_MENU | 82 |
| KEYCODE_POWER | 26 |
| KEYCODE_VOLUME_UP | 24 |
| KEYCODE_VOLUME_DOWN | 25 |
| KEYCODE_VOLUME_MUTE | 164 |
| KEYCODE_APP_SWITCH | 187 |
| KEYCODE_ASSIST | 219 |
| KEYCODE_ALL_APPS | 284 |

### 导航方向键
| 键名 | 键码 |
|------|------|
| KEYCODE_DPAD_UP | 19 |
| KEYCODE_DPAD_DOWN | 20 |
| KEYCODE_DPAD_LEFT | 21 |
| KEYCODE_DPAD_RIGHT | 22 |
| KEYCODE_DPAD_CENTER | 23 |
| KEYCODE_DPAD_UP_LEFT | 268 |
| KEYCODE_DPAD_UP_RIGHT | 270 |
| KEYCODE_DPAD_DOWN_LEFT | 269 |
| KEYCODE_DPAD_DOWN_RIGHT | 271 |

### 特殊输入符号
| 键名 | 键码 |
|------|------|
| KEYCODE_ENTER | 66 |
| KEYCODE_DEL | 67 |
| KEYCODE_SPACE | 62 |
| KEYCODE_TAB | 61 |
| KEYCODE_ESCAPE | 111 |
| KEYCODE_COMMA | 55 |
| KEYCODE_PERIOD | 56 |
| KEYCODE_SLASH | 76 |
| KEYCODE_BACKSLASH | 73 |
| KEYCODE_SEMICOLON | 74 |
| KEYCODE_APOSTROPHE | 75 |
| KEYCODE_EQUALS | 70 |
| KEYCODE_MINUS | 69 |
| KEYCODE_LEFT_BRACKET | 71 |
| KEYCODE_RIGHT_BRACKET | 72 |
| KEYCODE_AT | 77 |
| KEYCODE_GRAVE | 68 |

## 媒体控制键
| 键名 | 键码 |
|------|------|
| KEYCODE_MEDIA_PLAY | 126 |
| KEYCODE_MEDIA_PAUSE | 127 |
| KEYCODE_MEDIA_PLAY_PAUSE | 85 |
| KEYCODE_MEDIA_STOP | 86 |
| KEYCODE_MEDIA_NEXT | 87 |
| KEYCODE_MEDIA_PREVIOUS | 88 |
| KEYCODE_MEDIA_REWIND | 89 |
| KEYCODE_MEDIA_FAST_FORWARD | 90 |
| KEYCODE_MEDIA_RECORD | 130 |
| KEYCODE_MEDIA_EJECT | 129 |

## 游戏控制按钮
| 键名 | 键码 |
|------|------|
| KEYCODE_BUTTON_A | 96 |
| KEYCODE_BUTTON_B | 97 |
| KEYCODE_BUTTON_C | 98 |
| KEYCODE_BUTTON_X | 99 |
| KEYCODE_BUTTON_Y | 100 |
| KEYCODE_BUTTON_Z | 101 |
| KEYCODE_BUTTON_L1 | 102 |
| KEYCODE_BUTTON_R1 | 103 |
| KEYCODE_BUTTON_L2 | 104 |
| KEYCODE_BUTTON_R2 | 105 |
| KEYCODE_BUTTON_THUMBL | 106 |
| KEYCODE_BUTTON_THUMBR | 107 |
| KEYCODE_BUTTON_START | 108 |
| KEYCODE_BUTTON_SELECT | 109 |
| KEYCODE_BUTTON_MODE | 110 |

