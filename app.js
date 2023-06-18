const listes = document.querySelector('nav ul')
const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
    listes.classList.toggle('show')
})

// Methode 1
// const image = document.querySelector('.img img')

// function loadImage(source) {
//     image.src = source
// }

// Methode 2
const container = document.querySelector('.container')
const image = document.querySelector('.img img')
const images = document.querySelectorAll(".icons img")

images.forEach(img => {
    img.addEventListener('click', (e) => {
        let source = e.target.src
        let color = e.target.dataset.color
        
        image.src = source
        document.body.style.backgroundColor = `${color}`
    })
})
