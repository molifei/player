let fullScreenHandle = function () {
  let el = document.documentElement
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if (el.mozRequestFullscreen) {
    el.mozRequestFullscreen()
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen()
  }
}

let exitFullScreenHandle = function () {
  var el = document;
  if (el.exitFullscreen) {
    el.exitFullscreen();
  } else if (el.mozCancelFullScreen) {
    el.mozCancelFullScreen();
  } else if (el.webkitCancelFullScreen) {
    el.webkitCancelFullScreen();
  }
}

let isFullScreen = function () {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}
