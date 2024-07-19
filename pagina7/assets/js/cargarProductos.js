const btn = document.querySelectorAll('.btnProducto button');
const productoContainer = document.querySelectorAll('.mostrarContainer');

btn.forEach(buttons => {
    buttons.addEventListener('click', () => {
        const target = buttons.getAttribute('data-target');
        productoContainer.forEach(container => {
            if (container.id === target) {
                container.classList.add('productoMostrar');
            }else{
                container.classList.remove('productoMostrar');
            }
        })
        btn.forEach(button => button.classList.remove('activeBtn'));
        buttons.classList.add('activeBtn');
    });
})

btn[0].click(); // Simula un clic en el primer botón
