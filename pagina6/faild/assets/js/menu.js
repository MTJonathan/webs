const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const nav2 = document.querySelector('.navRight');
menu.addEventListener('click',()=>{
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    nav2.classList.toggle('active');
    menu.classList.toggle('activeMenu');
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener('click',(e)=>{
    if(menu.classList.contains('active') && e.target != menu && e.target != nav && e.target != nav2){
        menu.classList.toggle('active');
        nav.classList.toggle('active');
        nav2.classList.toggle('active');
        menu.classList.toggle('activeMenu');
    }
})