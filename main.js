const video = document.querySelector('#background-video')
const content = document.querySelector('#background-div')

video.addEventListener('click', ()=> {
  video.classList.add('display-none')
  content.classList.remove('display-none')
})

