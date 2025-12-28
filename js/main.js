

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
document.addEventListener("DOMContentLoaded", () => {
  // Slideshow functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  // Auto-advance every 5 seconds
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  // Initialize first slide
  showSlide(slideIndex);
});
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});

function flipCard(card) {
  card.classList.toggle("flipped");
}
const params = new URLSearchParams(window.location.search);
const project = params.get("project");

const title = document.getElementById("donate-title");
const desc = document.getElementById("donate-description");
const pocketBtn = document.getElementById("donation-pocket-btn");

if (project) {
  if (project === "house") {
    title.textContent = "Support Housing Projects 🏠";
    desc.textContent =
      "Help us provide safe accommodation and shelter for children in need.";
    pocketBtn.href = "donation-pocket.html?item=house";
  }

  if (project === "school") {
    title.textContent = "Support Education Projects 📚";
    desc.textContent =
      "Your donation supports school fees, books, and learning materials.";
    pocketBtn.href = "donation-pocket.html?item=school";
  }

  if (project === "food") {
    title.textContent = "Support Food Programs 🍚";
    desc.textContent =
      "Help us provide daily nutritious meals to the children.";
    pocketBtn.href = "donation-pocket.html?item=food";
  }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

setInterval(() => {
  slides.forEach((slide, index) => {
    slide.style.opacity = '0';
    slide.style.transition = 'opacity 1s';
  });
  slides[currentSlide].style.opacity = '1';
  currentSlide = (currentSlide + 1) % totalSlides;
}, 5000);
