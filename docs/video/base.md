---
title: base
description: DeekeScript - base
---

<style>
.main2{
    display: flex;
    flex-wrap: wrap;  /* 允许换行 */
    gap: 10px;        /* 元素间距，可选 */
}

.video-container {
    width: 49%; /* 宽度自适应 */
    flex: 0 0 calc(50% - 10px);
    margin-top: 12px;
}

.video-container > div:nth-child(1){
    position: relative;
    width: 100%;
}

.video-container > div:nth-child(2){
    position: relative;
    width: 100%;
    padding-bottom: 56.15%;
    height: 0;
}
.video-container iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
}

.video-container > div:nth-child(1) {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    text-align: center;
}
</style>
<div class="main2">
    <div class="video-container">
        <div>第一讲：DeekeScript介绍</div>
        <div>
            <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115027981898564&bvid=BV11Pb7zyEHH&cid=31698521810&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="video-container"> 
        <div>第二讲：DeekeScript基础说明</div>
        <div>
            <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115028233557530&bvid=BV1fvbjzeEBJ&cid=31699567159&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="video-container"> 
        <div>第三讲：DeekeScript快速入门</div>
        <div>
            <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115033904254990&bvid=BV1Gsbsz5Ewc&cid=31723029664&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
    </div>
    <div class="video-container"> 
        <div>第三讲：DeekeScript功能开发</div>
        <div>
            <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=115186962796734&bvid=BV1S9Hqz4Eet&cid=32320324772&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
        </div>
    </div>
</div>
