const sliderContainer = document.querySelectorAll('.sliderContainer');
const buttons = document.querySelectorAll('.btnMenu button');

// Añadir eventos de clic a los botones del menú
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        // Mostrar el slider correspondiente al botón clicado y ocultar los demás
        sliderContainer.forEach(container => {
            if (container.id === target) {
                container.classList.add('active-slider');
                initSlider(container);  // Inicializar el slider para el contenedor activo
            } else {
                container.classList.remove('active-slider');
            }
        });
        // Cambiar el estado activo del botón
        buttons.forEach(btn => btn.classList.remove('activeBtn'));
        button.classList.add('activeBtn');
    });
});
// Cargar el primer slider al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    buttons[0].click(); // Simula un clic en el primer botón
});