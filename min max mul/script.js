// On click handler
const Validate = () => {
  let Min = document.getElementById("min");
  let Max = document.getElementById("max");
  let Mul = document.getElementById("mul");
  let MinValue = parseInt(Min.value);
  let MaxValue = parseInt(Max.value);
  let MulValue = parseInt(Mul.value);

  if (MinValue > MaxValue) {
    Min.style.border = "2px solid red";
  } else if (MulValue > MaxValue) {
    Mul.style.border = "2px solid red";
  } else if (MulValue > MinValue) {
    Mul.style.border = "2px solid red";
  } else if (MaxValue % MinValue && MulValue != 0) {
    Mul.style.border = "2px solid red";
    Min.style.border = "2px solid red";
  }
   else if (isNaN(MaxValue) || isNaN(MinValue) || isNaN(MulValue)) {
    alert("Enter A valid Number")
  }
  else {
    alert("All conditions are true");
  }
};

