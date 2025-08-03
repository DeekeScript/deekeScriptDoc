---
title: 图片与颜色
description: DeekeScript - 图片与颜色
---

# 图片与颜色

> 本模块提供了图片截图、图片查找图片、图片裁剪、图片缩放、图片识别文字、图片取色、图片查找颜色等方法


## 图片


### capture
> 返回  {string}
>

`如果在截图时，被运行时间悬浮窗遮挡，可以使用System.setTimeWindowShow(false)隐藏时间窗口`

屏幕截图

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
}catch(e){
    console.log("截图异常：" + e.message);
}

```


### getMat(imageFile)
> imageFile  {string} 图片地址
> 
> 返回  {Mat}  矩阵对象

获取图片的矩阵对象

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let mat = Images.getMat(imageFile);
}catch(e){
    console.log("异常：" + e.message);
}

```


### findOne(source, template, threshold)
> source  {Mat} 矩阵对象
> 
> template  {Mat} 矩阵对象
> 
> 返回  {Point}  位置

从source中查找template，返回template在source中的位置

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let mat = Images.getMat(imageFile);

    let template = Images.getMat("/xxx/xxx/template.png");
    let templateMat = Images.getMat(template);
    let point = Images.findOne(mat, templateMat, 0.8);
    if(point != null){
         console.log("位置：" + point.x + "," + point.y);
    }else{
        console.log("未找到");
    }
}catch(e){
    console.log("异常：" + e.message);
}

```

### find(source, template, threshold)
> source  {Mat} 矩阵对象
> 
> template  {Mat} 矩阵对象
> 
> 返回  {Point}  位置

从source中查找template，返回所有template在source中的位置

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let mat = Images.getMat(imageFile);

    let template = Images.getMat("/xxx/xxx/template.png");
    let templateMat = Images.getMat(template);
    let points = Images.find(mat, templateMat, 0.8);
    if(points.length > 0){
        for(let i = 0; i < points.length; i++){
            console.log("位置：" + points[i].x + "," + points[i].y);
        }
    }
}catch(e){
    console.log("异常：" + e.message);
}
```

### crop(imageFile, left: number, top: number, width: number, height: number)
> imageFile  {string} 图片地址
> 
> left  {number} 左边距
> 
> top  {number} 上边距
> 
> width  {number} 采集图片宽度
> 
> height  {number} 裁剪图片高度
> 
> 返回  {string}  裁剪后的图片地址

裁剪图片

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let scopImages = Images.crop(imageFile, 0, 0, 100, 100);
    console.log(scopImages);//裁剪后的图片地址
}catch(e){
    console.log("异常：" + e.message);
}
```


###  scale(imageFile, multiple)
> imageFile  {string} 图片地址
> 
> multiple  {number} 缩放倍数
> 
> 返回  {string} 缩放后的图片地址

裁剪图片

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let scopImages = Images.scale(imageFile, 0.5);
    console.log(scopImages);//缩小2倍后的图片地址
}catch(e){
    console.log("异常：" + e.message);
}
```

## 文字识别

### getTextAndRegion(imageFile)
> imageFile  {string} 本地图片地址
> 
> 返回  {object[]} 文字和区域信息

查找图片中的文字和区域信息

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let result = Images.getText(imageFile);
    for(let i in result){
        //输出 文字和区域信息（左边距、上边距、宽度、高度）
        console.log(result[i].text, result[i].rect.left, result[i].rect.top, result[i].rect.width(), result[i].rect.height())
    }
}catch(e){
    console.log("异常：" + e.message);
}
```

### findTextPosition(imageFile, keyword)
> imageFile  {string} 图片地址
>
> keyword  {string} 关键字
>
> 返回  {Rect[]} 区域数组

查找图片中所有keyword的区域

```javascript
let arr = Images.findTextPosition(imageFile, "百度一下");
for(let i in arr){
    console.log(arr[i].left, arr[i].top, arr[i].width(), arr[i].height());//输出keyword所在区域的坐标以及区域宽高度
}
```

### findTextInRegion(String imageFile, int left, int top, int width, int height)
> imageFile  {string} 图片地址
> 
> left  {int} 区域左上角X坐标
>
> top  {int} 区域左上角Y坐标
>
> width  {int} 区域宽度
>
> height  {int} 区域高度
>
> 返回 {string[]}

获取某个区域内的文字

```javascript
let arr = Images.findTextInRegion(imageFile, 0, 0, 1080, 1920);
for(let i in arr){
    console.log(arr[i]);//输出文字
}
```

## 颜色

### getColor(imageFile, pixelX: number, pixelY: number)
> imageFile  {string} 图片地址
> 
> pixelX  {number} x坐标
> 
> pixelY  {number} y坐标
> 
> 返回  {string} rgba颜色值

查找图片颜色

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let color = Images.getColor(imageFile, 100, 100);//左边距100，上边距100 位置的颜色
    console.log(color);//输出： rgba(255,255,255,1.0)
}catch(e){
    console.log("异常：" + e.message);
}
```


### findColor(imageFile, color)
> imageFile  {string} 图片地址
> 
> color  {string} rgba颜色值
> 
> 返回  {Point[]} 坐标数组

查找图片中颜色与color一致的坐标

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let points = Images.findColor(imageFile, "rgba(255,255,255,1.0)");//左边距100，上边距100 位置的颜色
    for(let i in points){
        console.log(points[i].x, points[i].y);
    }
}catch(e){
    console.log("异常：" + e.message);
}
```


### findColor(imageFile, startColor, endColor)
> imageFile  {string} 图片地址
> 
> startColor  {string} rgba颜色值
> 
> endColor  {string} rgba颜色值
> 
> 返回  {Point[]} 坐标数组

查找图片中颜色介于startColor和endColor的颜色坐标；此方法主要解决不同手机下色彩不一致导致的颜色误差问题。

```
比如：startColor为rgba(252,253,254,0.9)；endColor为rgba(255,255,255,1.0)；
则符合条件的颜色规则如下：
252 <= R <= 255
253 <= G <= 255 
254 <= B <= 255 
0.9 <= A <= 1.0
```

```javascript
try{
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    let points = Images.findColor(imageFile, "rgba(252,253,254,0.9)", "rgba(255,255,255,1.0)");
    for(let i in points){
        console.log(points[i].x, points[i].y);
    }
}catch(e){
    console.log("异常：" + e.message);
}
