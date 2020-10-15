window.onload = function () {
  let data = {
    // 是否播放
    isPlay: false,
    // 是否全屏
    isFull: false
  }

  // 播放器
  let vd = document.getElementById("video")
  // 快退
  let back = document.getElementById("back")
  // 快进
  let forward = document.getElementById("forward")
  // 播放
  let play = document.getElementById("play")
  // 全屏
  let fullScreen = document.getElementById("full-screen")
  // 总时长
  let total = document.getElementById("total")
  // 当前时间
  let now = document.getElementById("now")
  // 进度条
  let progress = document.getElementById("progress")

  // 点击播放按钮
  play.addEventListener("click", () => {
    data.isPlay = !data.isPlay
    if (data.isPlay) {
      play.innerText = "暂停"
      vd.play()
    } else {
      play.innerText = "播放"
      vd.pause()
    }
  })

  // 视频开始播放
  vd.addEventListener("playing", () => {
    console.log("开始播放")
    setInterval(() => {
      now.innerText = getTime(vd.currentTime.toFixed(0))

      progress.style.width = `${((vd.currentTime / vd.duration) * 100).toFixed(2)}%`

    }, 1000)
  })

  // 视频结束播放
  vd.addEventListener("ended", () => {
    console.log("播放结束")
    data.isPlay = false
    play.innerText = "播放"
  })


  // 获取视频的播放时长
  let totalTime = vd.duration
  // 格式化总时长
  if (totalTime + "" !== "NaN") {
    total.innerText = getTime(totalTime)
  }

  // 快进
  forward.addEventListener("click", () => {
    vd.currentTime += 3
  })

  // 后退
  back.addEventListener("click", () => {
    vd.currentTime -= 3
  })

  // 全屏

  // 样式操作
  let styleHandle = function (isFull) {
    if (isFull) {
      vd.style.width = "500px"
      data.isFull = false
      fullScreen.innerText = "全屏"
      exitFullScreenHandle()
    } else {
      data.isFull = true
      fullScreen.innerText = "退出"
      vd.style.width = "100%"
      fullScreenHandle()
    }
  }

  fullScreen.addEventListener("click", () => {
    console.log(isFullScreen())
    styleHandle(isFullScreen())
  })

  // 退出全屏
  window.onresize = function () {
    // console.log(isFullScreen())
    styleHandle(!isFullScreen())
  }

}
