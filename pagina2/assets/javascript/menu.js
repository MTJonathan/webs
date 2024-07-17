const hamburguesa = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const menu = document.querySelector(".ulNav");
hamburguesa.addEventListener("click", ()=>{
    nav.classList.toggle("active");
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener("click", (e)=>{
    if(nav.classList.contains("active") && e.target != nav && e.target != hamburguesa && e.target != menu){
        nav.classList.toggle("active");
    }
})