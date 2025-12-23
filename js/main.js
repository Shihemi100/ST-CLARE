// HERO SLIDESHOW
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000); // 5 seconds

// IMPACT SECTION - ROLLING YEAR
let yearElem = document.getElementById('year-started');
let startYear = 2012;
let endYear = 2025;
let currentYear = startYear;

function rollYear() {
    if(currentYear <= endYear) {
        yearElem.textContent = currentYear;
        currentYear++;
        setTimeout(rollYear, 100); // speed of rolling numbers
    }
}

rollYear();
