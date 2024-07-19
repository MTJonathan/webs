const menu = document.querySelector(".iconoMenu");
const nav = document.querySelector(".nav ul");
menu.addEventListener("click", () => {
    nav.classList.toggle("activeMenu");
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener("click", (e) => {
    if (nav.classList.contains("activeMenu") && e.target != menu && e.target != nav) {
        nav.classList.toggle("activeMenu");
    }
})