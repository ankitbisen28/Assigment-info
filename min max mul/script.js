let Min = document.getElementById('min');
let Max = document.getElementById('max');
let Mul = document.getElementById('mul');

let MinValue = Number(Min.value);
let MaxValue = Number(Max.value);
let MulValue = Number(Mul.value);
console.log(MinValue)
console.log(MaxValue)
console.log(MulValue)

const Validate = () => {
    if(MinValue > MaxValue){
        alert('Min value cannot bigger than max');
        Min.style.border = "2px solid red";
        Max.style.border = "2px solid red";
    }
    else if(MulValue > MaxValue){
        alert('Mul value cannot bigger than max')
        Mul.style.border = "2px solid red";
        Max.style.border = "2px solid red";
    }
    else if(MulValue > MinValue){
        alert('Mul value cannot bigger than max')
        Mul.style.border = "2px solid red";
        Min.style.border = "2px solid red";
    }
    else if(MaxValue % MinValue && MulValue != 0){
        alert("Isn't factor of Maxvalue")
        Mul.style.border = "2px solid red";
        Min.style.border = "2px solid red";
    }
    else{
        alert("All conditions are true")
    }
}
