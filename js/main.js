// HERO SLIDESHOW
console.log("JS is connected");
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

// IMPACT SECTION - CHILDREN COUNT ANIMATION
let childrenElem = document.getElementById('children-count');
let childrenCount = 500; // final count
let currentCount = 0;
let increment = Math.ceil(childrenCount / 100); // smooth increments

function countChildren() {
    if(currentCount < childrenCount) {
        currentCount += increment;
        if(currentCount > childrenCount) currentCount = childrenCount;
        childrenElem.textContent = currentCount;
        setTimeout(countChildren, 30); // adjust speed here
    }
}

countChildren();
let heroText = document.querySelector('.hero-text');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    heroText.style.opacity = 0; // fade out text

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');

    setTimeout(() => {
        heroText.style.opacity = 1; // fade in text
    }, 500); // matches half the slide fade
}
// Make mini navbar items clickable
document.querySelectorAll('.amenity-item').forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;
    alert(`You clicked on ${section}! Replace alert with real navigation.`);
  });
});
// Mini navbar / dropdown not needed here but can animate donation icons
// Floating donation emojis already animated via CSS
