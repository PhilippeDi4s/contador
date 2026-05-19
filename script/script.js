const contadorElement = document.getElementById("contador_value");
const nextButton = document.getElementById("next_button");
const previousButton = document.getElementById("previous_button");

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
