const calButton = document.getElementById("calculate");

calButton.addEventListener("click", () => {
  const soldiers = parseInt(document.getElementById("soldiers").value);
  let postion = parseInt(document.getElementById("postion").value);
  const result = document.getElementById("result");

  if (isNaN(soldiers) && isNaN(postion)) {
   alert("Isn't number");
  }
  else if(isNaN(soldiers) || isNaN(postion)){
    alert("Enter valide value");
  }
  else {
    let a = new Array(soldiers);
    postion--;
    for (let i = 0; i < soldiers; i++) {
      a[i] = i + 1;
    }

    while (a.length > 1) {
      postion++;
      postion = postion % a.length;
      a.splice(postion, 1);
    }
    let endresult = a[0];
    result.innerHTML = endresult;
  }
});
