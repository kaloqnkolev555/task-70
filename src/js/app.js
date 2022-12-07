import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const image = document.querySelector(".image");
  const img = image.querySelector("img");
  image.addEventListener("click", () => {
    image.style = "transform: scale(2);"
  });
});
