console.log('fupi注入成功')
const bodyElm = document.querySelector('body')
const defaultBgColor = localStorage.getItem('bgColor') || ''

const setBgColor = (color) => {
  localStorage.setItem('bgColor',color)
  bodyElm.style.background = color
}
setBgColor(defaultBgColor)

// 监听action发送过来的颜色
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  setBgColor(request.bgColor)
})
