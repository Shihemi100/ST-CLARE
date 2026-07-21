document.addEventListener("DOMContentLoaded", () => {

  console.log("JS RUNNING ✔");

  const items = document.querySelectorAll(".amenity-item");

  console.log("Items found:", items.length);

  const overlay = document.getElementById("popupOverlay");
  const box = document.getElementById("popupBox");

  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");
  const image = document.getElementById("popupImage");

  items.forEach(item => {

    item.addEventListener("click", () => {

      console.log("Clicked:", item.dataset.title);

      title.innerText = item.dataset.title;
      text.innerText = item.dataset.text;
      image.src = item.dataset.image;

      box.className = "popup-box " + item.dataset.bg;

      overlay.classList.add("active");
    });

  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("projectsContainer");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 350, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -350, behavior: "smooth" });
  });

});

const slideshows = document.querySelectorAll(".amenity-image");

slideshows.forEach(slideshow=>{

let slides=slideshow.querySelectorAll("img");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index=(index+1)%slides.length;

slides[index].classList.add("active");

},3000);

});

function flipCard(card){
    card.classList.toggle("flipped");
}

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        // Close every other FAQ
        document.querySelectorAll(".faq-answer").forEach(item => {
            if(item !== answer){
                item.style.maxHeight = null;
                item.parentElement.classList.remove("active");
            }
        });

        // Toggle current FAQ
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            question.parentElement.classList.remove("active");
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.parentElement.classList.add("active");
        }

    });

});
/* ==========================
   DONATE PAGE JAVASCRIPT
========================== */

/* ---------- COUNTING ANIMATION ---------- */

function countUp(id, end, speed = 20) {
    let value = 0;
    const element = document.getElementById(id);

    const timer = setInterval(() => {
        value++;

        element.innerText = value;

        if (value >= end) {
            clearInterval(timer);
        }

    }, speed);
}

/* Year counts DOWN from 2026 to 2012 */

function countYear() {

    let year = 2026;

    const element = document.getElementById("year");

    const timer = setInterval(() => {

        element.innerText = year;

        if (year <= 2012) {

            clearInterval(timer);

        }

        year--;

    }, 120);

}

/* Start animations */

window.onload = function () {

    countYear();

    countUp("children", 500);

    countUp("ages", 20);
    countUp("children-home",300);
countUp("ages-home",20);

};


/* ---------- DONATION POPUP ---------- */

function openDonate() {

    document.getElementById("donatePopup").style.display = "flex";

}

function closeDonate() {

    document.getElementById("donatePopup").style.display = "none";

}


/* Close popup when clicking outside */

window.onclick = function(event) {

    const popup = document.getElementById("donatePopup");

    if (event.target == popup) {

        popup.style.display = "none";

}

};


/* ---------- COPY ACCOUNT NUMBER ---------- */

function copyAccount() {

    const account = "6940031360";

    navigator.clipboard.writeText(account);

    alert("Account number copied successfully!");

}



/* ---------- VOLUNTEER POPUP ---------- */

function openVolunteer(){

document.getElementById("volunteerPopup").style.display="flex";

}

function closeVolunteer(){

document.getElementById("volunteerPopup").style.display="none";

}
/* ==========================================
   UNIVERSAL HERO SLIDESHOW
========================================== */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentHero = 0;

setInterval(() => {
    console.log("Changing slide...");
    heroSlides[currentHero].classList.remove("active");

    currentHero = (currentHero + 1) % heroSlides.length;

    heroSlides[currentHero].classList.add("active");
}, 3000);

function openItemPopup(item, price){

    document.getElementById("itemDonatePopup").style.display="flex";

    document.getElementById("popupItemTitle").innerText=item;

    document.getElementById("popupItemPrice").innerText=price;

    document.getElementById("paymentItem").innerText=item;

    document.getElementById("paymentAmount").innerText=price;

    document.getElementById("paymentDetails").style.display="none";

}

function closeItemPopup(){

    document.getElementById("itemDonatePopup").style.display="none";

}

function showPayment(){

    document.getElementById("paymentDetails").style.display="block";

}