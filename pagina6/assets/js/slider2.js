// Función para inicializar el slider para un contenedor específico
function initSlider(container2) {
    const slider2 = container2.querySelector('.sliderInner');
    const btnLeft2 = document.querySelector('.leftArrow');
    const btnRight2 = document.querySelector('.rightArrow');

    let Next2 = () => {
        let sliderSection2 = slider2.querySelectorAll('.itemSlider');
        let sliderSectionFirst2 = sliderSection2[0];
        for (let i = 0; i < sliderSection2.length; i++) {
            sliderSection2[i].style.transition = "all 0.5s";
            sliderSection2[i].style.transform = "translateX(-100%)";
        }
        setTimeout(() => {
            for (let i = 0; i < sliderSection2.length; i++) {
                sliderSection2[i].style.transition = "none";
                sliderSection2[i].style.transform = "translateX(0)";
            }
            slider2.appendChild(sliderSectionFirst2);
        }, 500);
    }

    let Prev2 = () => {
        let sliderSection2 = slider2.querySelectorAll('.itemSlider');
        let sliderSectionLast2 = sliderSection2[sliderSection2.length - 1];
        slider2.insertBefore(sliderSectionLast2, slider2.firstChild);

        for (let i = 0; i < sliderSection2.length; i++) {
            sliderSection2[i].style.transition = "none";
            sliderSection2[i].style.transform = "translateX(-100%)";
        }
        slider2.offsetHeight; // Forzar reflujo

        setTimeout(() => {
            for (let i = 0; i < sliderSection2.length; i++) {
                sliderSection2[i].style.transition = "all 0.5s";
                sliderSection2[i].style.transform = "translateX(0)";
            }
        }, 0);
    }

    btnRight2.addEventListener('click', Next2);
    btnLeft2.addEventListener('click', Prev2);
}
