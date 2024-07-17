const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
menu.addEventListener('click', () => {
    nav.classList.toggle('active')
})
//Desactivar el menu al hacer click en la pantalla
window.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && e.target != nav && e.target != menu) {
        nav.classList.toggle('active')
    }
})