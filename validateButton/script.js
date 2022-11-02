const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const SyncAndAdd = document.getElementById("syncandadd");

let BtnsValues = [0, 0, 0];

let btn1clicked = false;
let btn2clicked = false;
let btn3clicked = false;
let Intial = null;

btn1.addEventListener("click", () => {
  BtnsValues[0] = 1 + BtnsValues[0];
  btn1.innerHTML = BtnsValues[0];
  btn1clicked = true;
  if (Intial === null) {
    Intial = btn1;
    console.log(Intial);
  }
});

btn2.addEventListener("click", () => {
  BtnsValues[1] = 1 + BtnsValues[1];
  btn2.innerHTML = BtnsValues[1];
  btn2clicked = true;
  if (Intial === null) {
    Intial = btn2;
    console.log(Intial);
  }
});

btn3.addEventListener("click", () => {
  BtnsValues[2] = 1 + BtnsValues[2];
  btn3.innerHTML = BtnsValues[2];
  btn3clicked = true;
  if (Intial === null) {
    Intial = btn3;
    console.log(Intial);
  }
});

const validate = () => {};

SyncAndAdd.addEventListener("click", () => {
  if (!btn1clicked && !btn2clicked && !btn3clicked) {
    let result1 = (BtnsValues[0] += 1);
    btn1.innerHTML = result1;
    let result2 = (BtnsValues[1] += 1);
    btn2.innerHTML = result2;
    let result3 = (BtnsValues[2] += 1);
    btn3.innerHTML = result3;
    console.log(result1);
    btn1clicked = true;
    btn2clicked = true;
    btn3clicked = true;
  } else if (!btn1clicked && !btn2clicked) {
    let result1 = (BtnsValues[0] += 1);
    btn1.innerHTML = result1;
    let result2 = (BtnsValues[1] += 1);
    btn2.innerHTML = result2;
    console.log("btn 1 and btn2 not clicked");
  } else if (!btn2clicked && !btn3clicked) {
    let result2 = (BtnsValues[1] += 1);
    btn2.innerHTML = result2;
    let result3 = (BtnsValues[2] += 1);
    btn3.innerHTML = result3;
    console.log("btn2 and btn3 not clicked");
  } else if (!btn1clicked && !btn3clicked) {
    let result3 = (BtnsValues[2] += 1);
    btn3.innerHTML = result3;
    let result1 = (BtnsValues[0] += 1);
    btn1.innerHTML = result1;
    console.log("btn 1 and btn3 not clicked");
  } else if (!btn1clicked || !btn2clicked) {
    if (!btn1clicked) {
      let result1 = (BtnsValues[0] += 1);
      btn1.innerHTML = result1;
      console.log("btn 1 isnot clicked");
    } else {
      let result1 = (BtnsValues[1] += 1);
      btn2.innerHTML = result1;
      console.log("btn 2 isnot clicked");
    }
  } else if (!btn2clicked || !btn3clicked) {
    if (!btn2clicked) {
      let result1 = (BtnsValues[1] += 1);
      btn2.innerHTML = result1;
      console.log("btn 2 isnot clicked");
    } else {
      let result1 = (BtnsValues[2] += 1);
      btn3.innerHTML = result1;
      console.log("btn 3 isnot clicked");
    }
  } else if (!btn1clicked || !btn3clicked) {
    if (!btn1clicked) {
      let result1 = (BtnsValues[0] += 1);
      btn1.innerHTML = result1;
      console.log("btn 1 isnot clicked");
    } else {
      let result1 = (BtnsValues[2] += 1);
      btn3.innerHTML = result1;
      console.log("btn 3 isnot clicked");
    }
  } else if (btn1clicked && btn3clicked && btn2clicked) {
    if (Intial === btn1) {
      BtnsValues[0] = 1 + BtnsValues[0];
      btn1.innerHTML = BtnsValues[0];
    } else if (Intial === btn2) {
      BtnsValues[1] = 1 + BtnsValues[1];
      btn2.innerHTML = BtnsValues[1];
    } else if (Intial === btn3) {
      BtnsValues[2] = 1 + BtnsValues[2];
      btn3.innerHTML = BtnsValues[2];
    }
    console.log("all btns clicked");
    Intial = null;
  }
  btn1clicked = false;
  btn2clicked = false;
  btn3clicked = false;
});
