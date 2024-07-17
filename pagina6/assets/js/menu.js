const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const nav2 = document.querySelector('.navLeft');
menu.addEventListener('click',()=>{
    nav.classList.toggle('active');
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener('click',(e)=>{
    if(nav.classList.contains('active') && e.target != menu && e.target != nav && e.target != nav2){
        nav.classList.toggle('active');
    }
})