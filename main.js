const video = document.querySelector('#background-video')
const cubeDiv = document.querySelector('#cube-div')
const content = document.querySelector('#background-div')


video.addEventListener('click', ()=> {
  video.classList.add('display-none')
  cubeDiv.classList.remove('display-none')
  cubeDiv.classList.add('display-flex-center')
})

cubeDiv.addEventListener('click', ()=> {
  cubeDiv.classList.remove('display-flex-center')
  cubeDiv.classList.add('display-none')
  content.classList.remove('display-none')
})
