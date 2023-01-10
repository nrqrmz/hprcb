const backVideo = document.querySelector('#background-video')
const video = document.querySelector('#video-div')
const content = document.querySelector('#background-div')

video.addEventListener('click', ()=> {
  video.classList.add('display-none')
  backVideo.classList.add('display-none')
  content.classList.remove('display-none')
})
