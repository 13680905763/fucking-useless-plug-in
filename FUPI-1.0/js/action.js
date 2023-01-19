const colorBlock = [
  'aliceblue',
  'beige',
  'antiquewhite',
  'bisque',
  'pink',
  'powderblue',
  'aquamarine',
  'mediumpurple'
]
// 工具箱渐变背景色（拿颜色块做渐变）
const linearGradientColor = colorBlock.join()
document.querySelector('body').style.background = `linear-gradient(${linearGradientColor})`

let resultColor = '' // 选中的颜色
// 颜色块
const colorBlockItemElm = document.querySelector('.colorBlock').querySelectorAll('li')
// 颜色展示区域
const colorShowElm = document.querySelector('.colorShow')
// 颜色块初始化
colorBlockItemElm.forEach((item, index) => {
  item.style.background = colorBlock[index]
  // 监听颜色块点击
  item.addEventListener('click', (e) => {
    resultColor = colorBlock[index]
    setColorShow(resultColor)
  })
})

// 设置选中颜色
const setColorShow = (color) => {
  colorShowElm.style.background = color
}
// 提交按钮
const submitElm = document.querySelector('.submit')
// 提交点击
submitElm.addEventListener('click', () => {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { bgColor: resultColor })
    }
  )
})
//反馈按钮
const feedbackBtn = document.getElementById('feedbackBtn')
// 反馈
feedbackBtn.addEventListener('click', () => {
  chrome.tabs.create({
    url: 'https://github.com/13680905763/fucking-useless-plug-in/issues'
  })
})

// #region
// 滑块部分 start 直接扒别人的有空研究
let H = document.querySelector('.colorBar')
let HRect = H.querySelector('rect')
let HSlide = H.querySelector('.colorSlider')
let HFlag = false

let Hval = 0
let Sval = 100
let Vval = 100

HRect.addEventListener('mousedown', () => {
  HFlag = true
})
HRect.addEventListener('mousemove', (ev) => {
  if (!HFlag) return

  // ev.offsetY这个值为鼠标相对于源元素的Y坐标，算出滑块在元素中的定位比例
  let offsetY = ev.offsetY / H.offsetHeight

  HSlide.style.top = ev.offsetY - 8 + 'px'

  // 因为H值的范围是0~360，乘以比例就可以得出一个颜色值了
  Hval = 360 * offsetY

  resultColor = `rgb(${hsvtorgb(Hval, Sval, Vval).join(',')})`
  setColorShow(resultColor)
})
HRect.addEventListener('mouseup', () => {
  HFlag = false
})

function hsvtorgb(h, s, v) {
  s = s / 100
  v = v / 100
  var h1 = Math.floor(h / 60) % 6
  var f = h / 60 - h1
  var p = v * (1 - s)
  var q = v * (1 - f * s)
  var t = v * (1 - (1 - f) * s)
  var r, g, b
  switch (h1) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}
// #滑块部分 end
// #endregion
