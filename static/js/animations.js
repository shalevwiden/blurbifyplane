const plane = document.querySelector(".plane");

const buttonsdiv = document.querySelector(".buttonsdiv");

const shifthuebutton = buttonsdiv.querySelector("#shifthuebutton");
const gradient2button = buttonsdiv.querySelector("#gradient2button");
const gradient3button = buttonsdiv.querySelector("#gradient3button");

const applyGradient = (newClass) => {
  plane.classList.add(newClass); // apply the new one
};

shifthuebutton.addEventListener("click", () => {
  console.log("applying hue shit");
  plane.classList.toggle("hueshiftclass");
});
gradient2button.addEventListener("click", () => {
  console.log("trying gradient 2");
  applyGradient("gradient2class");
});

gradient3button.addEventListener("click", () => {
  console.log("trying gradient 3");
  applyGradient("gradient3class");
});
