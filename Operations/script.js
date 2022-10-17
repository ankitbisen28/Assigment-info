// let valueOne = parseInt(document.getElementById("input-1"));
// let valueTwo = parseInt(document.getElementById("input-2"));

const validate = (valueOne, valueTwo) => {
  if(isNaN(valueOne) || isNaN(valueTwo)){
    alert("Enter Valid Number");
  }
  else if(valueOne === '-' || valueTwo === '-' || valueOne === '+' || valueTwo === '+' || valueOne === '*' || valueTwo === '*' || valueOne === '/' || valueTwo === '/' ){
    alert("Enter Valid Number");
  }
  else{
    console.log("Every this is working Fine");
  }
}

const Add = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne + valueTwo;
  validate(valueOne, valueTwo);
};

const Sub = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne - valueTwo;
  validate(valueOne, valueTwo);
};

const Div = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne / valueTwo;
  validate(valueOne, valueTwo);
};

const Mul = () => {
  let valueOne = parseInt(document.getElementById("input-1").value);
  let valueTwo = parseInt(document.getElementById("input-2").value);
  document.getElementById("result").innerHTML = valueOne * valueTwo;
  validate(valueOne, valueTwo);
};
