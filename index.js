let currentIndex = 0; 
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

document.querySelector('.next-button').addEventListener('click', () => {
    goToSlide(currentIndex + 1);    
});

document.querySelector('.prev-button').addEventListener('click', () => {
    goToSlide(currentIndex - 1);    
});

function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + totalSlides) % totalSlides;
    slides[currentIndex].classList.add('active');
}

slides[currentIndex].classList.add('active');

setInterval(() => {
    goToSlide(currentIndex + 1);
}, 5000);