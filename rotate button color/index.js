const buttonsContainer = document.querySelector(".buttons-container");
const buttons = buttonsContainer.querySelectorAll(".btn");

const clockWise = document.getElementById("clock-rotate");
const antiClock = document.getElementById("Anticlock-rotate");

// ------------------------------------------------
// Stores if a button of particular color is clicked
const buttonsState = {
  red: true,
  green: true,
  yellow: true,
};
let buttonsOrder = ["red", "green", "yellow"];

const rotate = (arr, direction) => {
  if (direction === "ltr") {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  if (direction === "rtl") {
    const firstElement = arr.shift();
    arr.push(firstElement);
  }

  return arr;
};

const buttonClickHandler = function(button) {
  const buttonType = button.dataset.color;
  button.classList.add(buttonType);
  buttonsState[buttonType] = true;
};

const setButtonsContainerHtml = (buttonsArr, state) => {
  let html = "";
  buttonsArr.forEach((button) => {
    html += `<button class="btn btn-secondary mx-3 ${state[button] ? `${button}` : ''}" id="${button}" data-color="${button}" onclick="buttonClickHandler(this)">
      ${button}
    </button>`;
  });

  buttonsContainer.innerHTML = html;
};

buttons.forEach(button => button.addEventListener("click", function() {
  buttonClickHandler(this)
}));

clockWise.addEventListener("click", () => {
  const rotatedArr = rotate(buttonsOrder, "ltr");
  buttonsOrder = rotatedArr;
  setButtonsContainerHtml(rotatedArr, buttonsState);
});

antiClock.addEventListener("click", () => {
  const rotatedArr = rotate(buttonsOrder, "rtl");
  buttonsOrder = rotatedArr;
  setButtonsContainerHtml(rotatedArr, buttonsState);
});