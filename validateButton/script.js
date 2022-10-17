const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const SyncAndAdd = document.getElementById("syncandadd");

let btn1Value = 0;
let btn2Value = 0;
let btn3Value = 0;

let btn1clicked = false;
let btn2clicked = false;
let btn3clicked = false;

btn1.addEventListener("click", () => {
  btn1Value = 1 + btn1Value;
  btn1.innerHTML = btn1Value;
   btn1clicked = true; 
});

btn2.addEventListener("click", () => {
  btn2Value = 1 + btn2Value;
  btn2.innerHTML = btn2Value;
   btn2clicked = true;
});

btn3.addEventListener("click", () => {
  btn3Value = 1 + btn3Value;
  btn3.innerHTML = btn3Value;
   btn3clicked = true;
});

const validate = () => {};

SyncAndAdd.addEventListener("click", () => {
  if (!btn1clicked && !btn2clicked && !btn3clicked) {
    let result1 = (btn1Value += 1);
    btn1.innerHTML = result1;
    let result2 = (btn2Value += 1);
    btn2.innerHTML = result2;
    let result3 = (btn3Value += 1);
    btn3.innerHTML = result3;
    console.log(result1);
  } else {
    let result1 = (btn1Value += 1);
    btn1.innerHTML = result1;
    let result2 = (btn2Value += 1);
    btn2.innerHTML = result2;
    let result3 = (btn3Value += 1);
    btn3.innerHTML = result3;
  }

  // let result1 = (btn1Value += 1);
  // let result2 = (btn2Value += 1);
  // let result3 = (btn3Value += 1);
  // btn1.innerHTML = result1;
  // btn2.innerHTML = result2;
  // btn3.innerHTML = result3;
});

/*
let number = 0;
const changeValue = (num, btn, number) => {
  number += num;
  btn.innerHTML = number;
  return number
};

btn1.addEventListener("click", () => {
  changeValue(1, btn1, number);
});

btn2.addEventListener("click", () => {
  changeValue(1, btn2, number);
});

btn3.addEventListener("click", () => {
  changeValue(1, btn3, number);
});

SyncAndAdd.addEventListener("click", () => {
  let result = (number += 1);
  btn1.innerHTML = result;
  btn2.innerHTML = result;
  btn3.innerHTML = result;
});
*/
