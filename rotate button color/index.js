const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const yellowBtn = document.getElementById("yellow");

const clockWise = document.getElementById("clock-rotate");
const antiClock = document.getElementById("Anticlock-rotate");

let colors = ["red", "green", "yellow"];

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

clockWise.addEventListener("click", () => {
  let rotatedArr = rotate(colors, "ltr");
  colors = rotatedArr;
  redBtn.style.backgroundColor = colors[0];
  greenBtn.style.backgroundColor = colors[1];
  yellowBtn.style.backgroundColor = colors[2];
});

antiClock.addEventListener("click", () => {
  let rotatedArr = rotate(colors, "rtl");
  colors = rotatedArr;
  redBtn.style.backgroundColor = colors[0];
  greenBtn.style.backgroundColor = colors[1];
  yellowBtn.style.backgroundColor = colors[2];
});
