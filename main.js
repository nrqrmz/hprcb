const backVideo = document.querySelector('#background-video')
const video = document.querySelector('#video-div')
const content = document.querySelector('#background-div')
const projects = document.querySelectorAll('.second-half div')
const years = document.querySelectorAll('.first-half p a')
const fairs = document.querySelectorAll('.second-half-fair div')
const yearsFair = document.querySelectorAll('.first-half-fair p a')
const indices = [2, 1, 0, 9, 8, 7]
const fairIndices = [2, 0, 9, 8, 7]

video.addEventListener('click', ()=> {
  video.classList.add('display-none')
  backVideo.classList.add('display-none')
  content.classList.remove('display-none')
})

const clearYears = (arr) => {
  arr.forEach(item => item.classList.remove('active-year'))
}

const clearProjects = (arr) => {
  arr.forEach(project => project.classList.add('display-none'))
}

years.forEach((year) => {
  year.addEventListener('click', (event)=> {
    const index = event.currentTarget.innerText.split('')[3]
    clearYears(years)
    event.currentTarget.classList.add('active-year')
    const yearIndex = indices.indexOf(parseInt(index, 10))
    clearProjects(projects)
    projects[yearIndex].classList.remove('display-none')
  })
})

yearsFair.forEach((year) => {
  year.addEventListener('click', (event)=> {
    const index = event.currentTarget.innerText.split('')[3]
    clearYears(yearsFair)
    event.currentTarget.classList.add('active-year')
    const yearIndex = fairIndices.indexOf(parseInt(index, 10))
    clearProjects(fairs)
    fairs[yearIndex].classList.remove('display-none')
  })
})




// window.addEventListener('keyup', (event)=>{
//   // console.log(event.key === 'ArrowDown')
//   console.log(event.currentTarget)
// })
