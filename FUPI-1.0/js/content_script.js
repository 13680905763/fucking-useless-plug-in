// 往掘金插入运行js按钮
// const jsElm = document.querySelectorAll('.language-javascript')
// console.log(jsElm);
// const createRunElm = () => {
//   const runElm = document.createElement('span')
//   runElm.innerText = '运行代码'
//   runElm.className = 'copy-code-btn'
//   runElm.style = 'right: 150px'
//   runElm.addEventListener('click',(e)=>{
//     console.log(e);
//     // e.preventDefault()
//     // alert('打开控制台')
//   })
//   return runElm
// }

// jsElm.forEach((item) => {
//   item.appendChild(createRunElm())
//   console.log(item);
// })
console.log('注入成功');

const bodyElm = document.querySelector('body')
bodyElm.style = 'background:antiquewhite'
