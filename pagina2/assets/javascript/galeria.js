//Seleccionar las imagenes
const imagenes = document.querySelectorAll(".galeriaItem");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");

//Realizar la accion de mostrar la imagen
imagenes.forEach(imagen => {
    imagen.addEventListener("click", (e) => {
        aparecerImagen(e.target);
        imagen.getAttribute("src");
    })
})

//Aparecer la imagen
const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen.getAttribute("src");
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
}

//Cerrar la imagen
const cerrar = document.querySelector(".close");
cerrar.addEventListener("click", () => {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
})