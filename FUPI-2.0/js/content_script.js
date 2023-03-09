// console.log('fupi插件注入成功...')
const bodyElm = document.querySelector('body')
const defaultData =
  localStorage.getItem('fupiData') !== 'undefined'
    ? JSON.parse(localStorage.getItem('fupiData'))
    : ''

const setFupiData = (data) => {
  localStorage.setItem('fupiData', JSON.stringify(data))
  bodyElm.style.backgroundColor = data.color
  bodyElm.style.fontFamily = data.font
}
setFupiData(defaultData)
// 监听action发送过来的颜色
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
  setFupiData(request.fupiData)
})
