const validate = (valueOne, valueTwo) => {
  if (isNaN(valueOne) || isNaN(valueTwo)) {
    alert("Enter Valid Number");
  } else if (
    valueOne === "" ||
    valueTwo === "" ||
    !Number(valueOne) ||
    !Number(valueTwo)
  ) {
    alert("Enter Valid Number");
  } else {
    console.log("Every this is working Fine");
  }
};

const Add = () => {
  let valueOne = document.getElementById("input-1").value;
  let valueTwo = document.getElementById("input-2").value;
  validate(valueOne, valueTwo);
  let output = parseFloat(valueOne) + parseFloat(valueTwo);
  document.getElementById("result").innerHTML =
    !parseFloat(valueOne) && !parseFloat(valueTwo) ? output : output.toFixed(2);
};

const Sub = () => {
  let valueOne = document.getElementById("input-1").value;
  let valueTwo = document.getElementById("input-2").value;
  validate(valueOne, valueTwo);
  let output = parseFloat(valueOne) - parseFloat(valueTwo);
  document.getElementById("result").innerHTML =
    !parseFloat(valueOne) && !parseFloat(valueTwo) ? output : output.toFixed(2);
};

const Div = () => {
  let valueOne = document.getElementById("input-1").value;
  let valueTwo = document.getElementById("input-2").value;
  validate(valueOne, valueTwo);
  let output = parseFloat(valueOne) / parseFloat(valueTwo);
  document.getElementById("result").innerHTML =
    !parseFloat(valueOne) && !parseFloat(valueTwo) ? output : output.toFixed(2);
};

const Mul = () => {
  let valueOne = document.getElementById("input-1").value;
  let valueTwo = document.getElementById("input-2").value;
  validate(valueOne, valueTwo);
  let output = parseFloat(valueOne) * parseFloat(valueTwo);
  document.getElementById("result").innerHTML =
    !parseFloat(valueOne) && !parseFloat(valueTwo) ? output : output.toFixed(2);
};

// Output will be float value it has done.
