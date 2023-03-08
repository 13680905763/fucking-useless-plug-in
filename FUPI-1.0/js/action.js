const color = [
  'aliceblue',
  'beige',
  'antiquewhite',
  'bisque',
  'pink',
  'powderblue',
  'aquamarine',
  'mediumpurple',
  '#ff585852',
  '#7dff5852'
]
// 提交数据
const fupiData = {
  color: '',
  font: ''
}
// 颜色块
const ulEl = document.querySelector('ul')

function colorBlockBtn() {
  document.querySelectorAll('li').forEach((item) => {
    item.style.border = ''
  })
  this.style.border = '2px solid red'
  fupiData.color = this.style.backgroundColor
}

for (let i = 0; i < color.length; i++) {
  const colorBlock = document.createElement('li')
  colorBlock.style.backgroundColor = color[i]
  colorBlock.addEventListener('click', colorBlockBtn)
  ulEl.append(colorBlock)
}

// 字体input
const fontInput = document.querySelector('input')

// 提交按钮
const submitElm = document.querySelector('.submit')

// 提交点击
submitElm.addEventListener('click', () => {
  fupiData.font = fontInput.value
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { fupiData: fupiData })
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
