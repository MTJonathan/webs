const hamburger = document.querySelector(".menu");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})
//desactivar el menu al hacer click en la pantalla
window.addEventListener("click", (e) => {
    if (hamburger.classList.contains("active") && e.target != hamburger && e.target != nav) {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    }
})