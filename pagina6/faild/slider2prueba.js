//Seleccionar las las propiedades del slider
const slider2 = document.querySelector('.sliderInner');
const slides2 = slider2.querySelectorAll('.itemSlider');
let sliderSectionLast2 = slides2[slides2.length - 1];

//Botones del slider
const btnLeft2 = document.querySelector('.leftArrow');
const btnRight2 = document.querySelector('.rightArrow');

//Avanzar a la derecha
let Next2 = () =>{
    let sliderSection2 = document.querySelectorAll('.itemSlider');
    let sliderSectionFirst2 = sliderSection2[0];
    for(let i = 0; i < sliderSection2.length; i++){
        sliderSection2[i].style.transform="translateX(-100%)";
        sliderSection2[i].style.transition = "all 0.5s";
    }
    setTimeout(function(){
        for(let i = 0; i < sliderSection2.length; i++){
            sliderSection2[i].style.transition = "none";
            sliderSection2[i].style.transform = "translateX(0)"; // Resetear la posición
        }
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
    }, 500);
}

//Avanzar a la izquierda
let Prev2 = () =>{
    let sliderSection2 = document.querySelectorAll('.itemSlider');
    let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];

    // Mover el último elemento al principio y aplicar transformaciones
    slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
    
    for(let i = 0; i < sliderSection2.length; i++){
        sliderSection2[i].style.transition = "none";
        sliderSection2[i].style.transform = "translateX(-100%)";
    }
    // Forzar reflujo para asegurarse de que el navegador reconozca el cambio de posición
    slider2.offsetHeight; // Esto es un truco para forzar el reflujo

    setTimeout(function() {
        for(let i = 0; i < sliderSection2.length; i++){
            sliderSection2[i].style.transition = "all 0.5s";
            sliderSection2[i].style.transform = "translateX(0)";
        }
    }, 0);
}

//Dar dar funciones a los botones
btnRight2.addEventListener('click', function() {
    Next2();
})

btnLeft2.addEventListener('click', function() {
    Prev2();
})