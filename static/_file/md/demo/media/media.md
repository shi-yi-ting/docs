## 音频

```
<!-- 注意：在 chrome 浏览器中已经禁用了 autoplay 属性 -->
<!-- <audio src="./media/snow.mp3" controls autoplay></audio> -->

<!-- 因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件 -->
<audio controls>
    <source src="./media/snow.mp3" type="audio/mpeg" />
</audio>
```

## 视频

```
<!-- <video src="./media/video.mp4" controls="controls"></video> -->

<!-- 谷歌浏览器禁用了自动播放功能，如果想自动播放，需要添加 muted 属性 -->
<video controls="controls" autoplay muted loop poster="./media/pig.jpg">
    <source src="./media/video.mp4" type="video/mp4">
    <!-- <source src="./media/video.ogg" type="video/ogg"> -->
</video>
```

## 多媒体标签总结

音频标签与视频标签使用基本一致

多媒体标签在不同浏览器下情况不同，存在兼容性问题

谷歌浏览器把音频和视频标签的自动播放都禁止了

谷歌浏览器中视频添加 muted 标签可以自己播放

注意：重点记住使用方法以及自动播放即可，其他属性可以在使用时查找对应的手册
