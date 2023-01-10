const video = document.querySelector('#background-video')
const cubeDiv = document.querySelector('#cube-div')
const content = document.querySelector('#background-div')
const items = document.querySelectorAll('ul li a')
const language = document.querySelector('#idioma')

const elements = ['Artists', 'Exhibitions', 'Fairs', 'Press', 'Archive', 'Contact', 'Español']
const elementos = ['Artistas', 'Exhibiciones', 'Ferias', 'Prensa', 'Archivo', 'Contacto', 'English']

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

language.addEventListener('click', (event)=>{
  event.preventDefault()
  if (language.innerText == 'Español') {
    for(let i = 0; i < items.length; i++) {
      items[i].innerText = elementos[i]
    }
  } else {
    for(let i = 0; i < items.length; i++) {
      items[i].innerText = elements[i]
    }
  }
})
