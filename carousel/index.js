// display modal
const modal = document.getElementById("modal-container");
document.getElementById("open-modal").addEventListener("click", (event) => {
  console.log("clicked");
  modal.style.display = "block";
});

//carousel

console.log(document.querySelectorAll(".carousel-button"));

let slideList = document.querySelectorAll(".slide");
let current = 1;
document.querySelectorAll(".carousel-button").forEach((carouselButton) => {
  carouselButton.addEventListener("click", () => {
    console.log("-------------------------");
    console.log(carouselButton.classList[1]);
    let offset = carouselButton.classList[1] === "prev" ? -1 : 1;

    console.log("slide list length: ", slideList.length);
    console.log("current: ", current);

    let activeSlide = document.getElementById("slide-" + current);
    console.log(activeSlide);
    console.log("-- active current: ", current);

    current = current + offset;

    if (current > slideList.length) {
      console.log("current > slideList.length");
      current = 1;
    } else if (current < 1) {
      console.log(current+ "< 1");
      current = slideList.length;
    } else {
      console.log("--normal--");
    }

    console.log("current: after if: ", current);
    
    let nextSlide = document.getElementById("slide-" + current);
    console.log("-- new active current", current);

    activeSlide.classList.remove("active");
    console.log(activeSlide);
    nextSlide.classList.add("active");
    console.log(nextSlide);
    console.log("current", current);
  });
});
