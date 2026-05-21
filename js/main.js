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