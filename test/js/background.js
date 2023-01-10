const settingBtn = document.getElementById('settingBtn')

settingBtn.addEventListener('click', () => {
  window.open(chrome.extension.getURL('back.html'))
})
