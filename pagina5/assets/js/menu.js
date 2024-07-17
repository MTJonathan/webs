const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener('click',(e)=>{
    if(menu.classList.contains('active') && e.target != menu && e.target != nav){
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    }
})