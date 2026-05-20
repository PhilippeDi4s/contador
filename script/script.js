const contadorElement = document.getElementById("contador_value");
const nextButton = document.getElementById("next_button");
const previousButton = document.getElementById("previous_button");

let pageTheme = document.documentElement.dataset.theme;
const themeButton = document.getElementById("themeButton");

let contadorValue = 1;

contadorElement.innerText = `${contadorValue}`;

nextButton.addEventListener("click", () => {
  contadorValue += 1;
  contadorElement.innerText = `${contadorValue}`;
});

previousButton.addEventListener("click", () => {
  contadorValue -= 1;
  contadorElement.innerText = `${contadorValue}`;
});

const themeIcons = {
  dark: "<ion-icon name='sunny-outline'></ion-icon>",
  light: "<ion-icon name='moon-outline'></ion-icon>",
};

themeButton.addEventListener("click", () => {
  pageTheme = pageTheme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = pageTheme;
  themeButton.innerHTML = themeIcons[`${pageTheme}`];
});
