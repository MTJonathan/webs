let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.sliderItem');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('activeIndicator');
        } else {
            indicator.classList.remove('activeIndicator');
        }
    });
  }
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    
    if (currentIndex === 0 && direction === 1) { // Si llegamos al final y queremos avanzar
        slider.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else if (currentIndex === totalSlides - 1 && direction === -1) { // Si llegamos al inicio y queremos retroceder
        slider.scrollTo({
            left: slider.scrollWidth - slider.offsetWidth,
            behavior: 'smooth'
        });
    } else {
        slider.scrollBy({
            left: direction * slider.offsetWidth,
            behavior: 'smooth'
        });
    }
    updateIndicators()
}

// Agregar eventos de clic a los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index; // Actualizar el índice actual
        // Calcular el desplazamiento necesario y mover el slider
        const targetScrollLeft = currentIndex * slider.offsetWidth;
        slider.scrollTo({
            left: targetScrollLeft,
            behavior: 'smooth' // Desplazamiento suave
        });
        updateIndicators(); // Actualizar los indicadores
    });
});
// Variables para rastrear el estado del arrastre
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('activeSlider');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('activeSlider');
});

slider.addEventListener('mouseup', (e) => {
    isDown = false;
    slider.classList.remove('activeSlider');
    const endX = e.pageX - slider.offsetLeft;
    const distance = endX - startX;

    if (distance < -50) { // Arrastrar hacia la izquierda
        moveSlide(1);
    } else if (distance > 50) { // Arrastrar hacia la derecha
        moveSlide(-1);
    }
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.25; // Factor de ajuste para el "arrastre elástico"
    slider.scrollLeft = scrollLeft - walk;
});


// Eventos táctiles para pantallas táctiles
slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('activeSlider');
});

slider.addEventListener('touchend', (e) => {
    isDown = false;
    slider.classList.remove('activeSlider');
    const endX = e.changedTouches[0].pageX - slider.offsetLeft;
    const distance = endX - startX;

    if (distance < -50) { // Deslizar hacia la izquierda
        moveSlide(1);
    } else if (distance > 50) { // Deslizar hacia la derecha
        moveSlide(-1);
    }
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.25; // Factor de ajuste para el "arrastre elástico"
    slider.scrollLeft = scrollLeft - walk;
});

updateIndicators()
    