---
title: 音频播放 - Audio
description: DeekeScript - 音频播放 - Audio
---

# 音频播放 - Audio

Audio 对象提供音频播放功能，支持本地文件、网络流、项目文件等多种音频源。

## 源路径格式

Audio 支持以下路径格式：

- `http://` 或 `https://` — 网络音频流
- `file://` — 文件 URI
- `content://` — ContentProvider URI
- 绝对路径 — 如 `/sdcard/music/bg.mp3`
- `project://` 前缀 — 项目根目录的相对路径（如 `project://assets/bg.mp3`）
- 相对路径 — 默认按项目根目录解析

## load(source)

**参数：** `source {string}` 音频资源路径

**返回：** `{boolean}` 是否载入成功

载入音频资源，不会自动播放。

```javascript
let success = Audio.load('/sdcard/music/bg.mp3');
if (success) {
    console.log('音频载入成功');
}
```

## play()

**返回：** `{boolean}` 是否播放成功

播放当前已加载的音频。

```javascript
Audio.load('/sdcard/music/bg.mp3');
Audio.play();
```

## play(source)

**参数：** `source {string}` 音频资源路径

**返回：** `{boolean}` 是否成功

加载并播放音频，等同于先调用 `load(source)` 再调用 `play()`。

```javascript
Audio.play('https://example.com/audio/bg.mp3');
```

## pause()

**返回：** `{boolean}` 是否成功

暂停当前播放。

```javascript
Audio.pause();
```

## stop()

**返回：** `{boolean}` 是否成功

停止播放，并将播放位置重置到开头。

```javascript
Audio.stop();
```

## release()

**返回：** `{void}`

释放播放器资源。释放后如需再次播放需重新 `load()`。

```javascript
Audio.release();
```

## seekTo(msec)

**参数：** `msec {number}` 跳转目标位置（毫秒）

**返回：** `{boolean}` 是否成功

跳转到音频的指定位置。

```javascript
Audio.seekTo(30000); // 跳转到第30秒
```

## setLooping(looping)

**参数：** `looping {boolean}` 是否循环播放

**返回：** `{boolean}` 是否成功

设置是否循环播放当前音频。

```javascript
Audio.setLooping(true); // 开启循环播放
```

## setVolume(leftVolume, rightVolume)

**参数：**
- `leftVolume {number}` 左声道音量，取值范围 0.0 ~ 1.0
- `rightVolume {number}` 右声道音量，取值范围 0.0 ~ 1.0

**返回：** `{boolean}` 是否成功

设置左右声道的音量。

```javascript
Audio.setVolume(0.8, 0.8); // 左右声道都设置为80%音量
```

## isPlaying()

**返回：** `{boolean}`

判断当前是否正在播放。

```javascript
if (Audio.isPlaying()) {
    console.log('正在播放');
}
```

## isLoaded()

**返回：** `{boolean}`

判断是否已加载音频资源。

## getDuration()

**返回：** `{number}` 音频总时长（毫秒），未加载时返回 -1

获取当前加载的音频总时长。

```javascript
let duration = Audio.getDuration();
console.log('音频时长：' + duration + 'ms');
```

## getCurrentPosition()

**返回：** `{number}` 当前播放位置（毫秒），未加载时返回 -1

获取当前播放到的位置。

```javascript
let position = Audio.getCurrentPosition();
console.log('当前播放位置：' + position + 'ms');
```

## getCurrentSource()

**返回：** `{string}` 当前加载的音频源路径

获取当前已加载音频的源路径。

## canPlayInBackground()

**返回：** `{boolean}`

检测是否具备后台播放能力（检查前台服务权限）。

## hasForegroundServicePermission()

**返回：** `{boolean}`

是否已声明前台服务权限（Android 9+ 推荐使用前台服务来保持后台播放不被系统杀死）。

## 完整示例

```javascript
// 播放项目内的音频文件
if (Audio.play('project://assets/bg_music.mp3')) {
    Audio.setLooping(true);
    Audio.setVolume(0.5, 0.5);
    console.log('开始播放背景音乐');
}

// 暂停和恢复
System.sleep(5000);
Audio.pause();
console.log('已暂停');

System.sleep(2000);
Audio.play();
console.log('已恢复播放');

// 释放资源
Audio.release();
```
