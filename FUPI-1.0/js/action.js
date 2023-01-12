const settingBtn = document.getElementById('settingBtn')
const feedbackBtn = document.getElementById('feedbackBtn')
const colorList = document.querySelectorAll('.colorItem')
colorList.forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.dataset.color)
    // 与content_script通信
  })
})

// 设置
// settingBtn.addEventListener('click', () => {
//   window.open(chrome.extension.getURL('../background/dist/index.html'))
// })

// 反馈
// feedbackBtn.addEventListener('click', () => {
//   chrome.tabs.create({
//     url: 'https://github.com/13680905763/fucking-useless-plug-in/issues'
//   })
// })
