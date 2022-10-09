// let valueOne = parseInt(document.getElementById("input-1").value);
// let valueTwo = parseInt(document.getElementById("input-2").value);

const Add = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne + valueTwo;
};

const Sub = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne - valueTwo;
};

const Div = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne / valueTwo;
};

const Mul = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne * valueTwo;
};
