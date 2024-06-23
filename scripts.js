const sliderImage = document.querySelector('.slider-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliderCounter = document.querySelector('.slider-counter');

let currentImageIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

function updateSlider() {
    sliderImage.src = images[currentImageIndex];
    sliderCounter.textContent = `Image ${currentImageIndex + 1} of ${images.length}`;
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();

updateSlider();