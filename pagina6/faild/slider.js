//Seleccionar las propiedades del slider
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.sliderItem');
let sliderSectionLast = slides[slides.length - 1];

//Variables de los indicadores
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

// botonoes del slider 
const btnLeft = document.querySelector('.arrowLeftP');
const btnRight = document.querySelector('.arrowRightP');

//Pasar la ultima imagen al principio
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

// Inicializar el primer indicador como activo
indicators[currentIndex].classList.add('activeIndicator');

// Función para actualizar los indicadores
const updateIndicators = (index) => {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('activeIndicator', i === index);
    });
}

//Avanzar a la derecha
let Next = () =>{
    let sliderSection = document.querySelectorAll('.sliderItem');
    let sliderSectionFirst = sliderSection[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
        //Actualiza el indicador
        currentIndex = (currentIndex + 1) % slides.length;
        updateIndicators(currentIndex);
    }, 500);
}

//Avanzar a la izquierda
let Prev = () =>{
    let sliderSection = document.querySelectorAll('.sliderItem');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
        //Actuliza el indicador
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateIndicators(currentIndex);
    }, 500);
}

//Dar funcion a los botones
btnRight.addEventListener('click', function() {
    Next();
});

btnLeft.addEventListener('click', function() {
    Prev();
});

// Función para navegar a una diapositiva específica
const goToSlide = (index) => {
    if(index === currentIndex) return;
    const diff = index - currentIndex;
    if (diff > 0) {
        for (let i = 0; i < diff; i++) {
            Next();
        }
    } else {
        for (let i = 0; i < Math.abs(diff); i++) {
            Prev();
        }
    }
}

// Añadir evento click a los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Funcionalidad de arrastre
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndexDrag = 0;

slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseup', endDrag);
slider.addEventListener('mouseleave', endDrag);
slider.addEventListener('touchstart', startDrag);
slider.addEventListener('touchmove', drag);
slider.addEventListener('touchend', endDrag);

function startDrag(event) {
    isDragging = true;
    startPos = getPositionX(event);
    slider.classList.add('activeSlider');
    animationID = requestAnimationFrame(animation);
}

function drag(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    slider.classList.remove('activeSlider');
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
        Next();
    } else if (movedBy > 100) {
        Prev();
    } else {
        slider.style.transform = `translateX(${prevTranslate}px)`;
    }
    currentTranslate = 0;
    prevTranslate = 0;
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
}