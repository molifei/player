let getTime = function (t) {

  // 向下取整,单位秒
  let time = Math.floor(t)

  let hour, min, sec;


  if (time / 60 / 60 < 1) {
    hour = "00"
  } else if (time / 60 / 60 < 10) {
    hour = `0${Math.floor(time / 60 / 60)}`
  } else {
    hour = `${Math.floor(time / 60 / 60)}`
  }

  let minNum = Math.floor((time / 3600 - Math.floor(time / 60 / 60)) * 60)
  if (minNum < 10) {
    min = `0${minNum}`
  } else {
    min = minNum
  }


  let secNum = time - (60 * 60 * Math.floor(time / 60 / 60))

  if(Math.floor(time / 60 / 60) === 0){
    secNum = time % 60
  }

  if (time % 60 === 0) {
    sec = "00"
  } else if (time % 60 < 60 && secNum >= 10) {
    sec = secNum
  } else {
    sec = `0${secNum}`
  }

  return `${hour}:${min}:${sec}`

}
