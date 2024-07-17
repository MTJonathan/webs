let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.sliderItem');
const totalSlides = slides.length;

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
  }