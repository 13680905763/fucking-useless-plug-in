const settingBtn = document.getElementById('settingBtn')
const feedbackBtn = document.getElementById('feedbackBtn')

settingBtn.addEventListener('click', () => {
  window.open(chrome.extension.getURL('../background/dist/index.html'))
})
feedbackBtn.addEventListener('click', () => {
  chrome.tabs.create({
    url:'https://github.com/13680905763/fucking-useless-plug-in/issues'
  })
})
