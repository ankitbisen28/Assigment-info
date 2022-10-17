let Min = document.getElementById("min");
let Max = document.getElementById("max");
let Mul = document.getElementById("mul");

// On click handler
const Validate = () => {
  let MinValue = Number(Min.value);
  let MaxValue = Number(Max.value);
  let MulValue = Number(Mul.value);
  if (MinValue > MaxValue) {
    Min.style.border = "2px solid red";
  } else if (MulValue > MaxValue) {
    Mul.style.border = "2px solid red";
  } else if (MulValue > MinValue) {
    Mul.style.border = "2px solid red";
  } else if (MaxValue % MinValue && MulValue != 0) {
    Mul.style.border = "2px solid red";
    Min.style.border = "2px solid red";
  } else {
    alert("All conditions are true");
  }
};
