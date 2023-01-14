console.log('注入成功')
const bodyElm = document.querySelector('body')
const defaultBgColor = localStorage.getItem('bgColor') || ''
// chrome.runtime.sendMessage({
//     defaultBgColor
// }).catch()
const setBgColor = (color) => {
  localStorage.setItem('bgColor',color)
  bodyElm.style.background = color
  console.log('setBgColor');
}
setBgColor(defaultBgColor)

// 监听action发送过来的颜色
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  setBgColor(request.bgColor)
  console.log('get popup color',request);
})
