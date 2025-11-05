const plane = document.querySelector(".plane");

const buttonsdiv = document.querySelector(".buttonsdiv");

const shifthuebutton = buttonsdiv.querySelector("#shifthuebutton");
const contrastbutton = buttonsdiv.querySelector("#contrastbutton");
const greyscalebutton = buttonsdiv.querySelector("#greyscalebutton");

shifthuebutton.addEventListener("click", () => {
  console.log("applying hue shit");
  plane.classList.toggle("hueshiftclass");
});
contrastbutton.addEventListener("click", () => {
  console.log("contrast stuff now");
  plane.classList.toggle("contrastclass");
});

greyscalebutton.addEventListener("click", () => {
  console.log("adding greyscale stuff");
  plane.classList.toggle("greyscaleclass");
});
