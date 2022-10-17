const soldiers = document.getElementById("soldiers").value;
let postion = document.getElementById("postion").value;
const calButton = document.getElementById("calculate");
const result = document.getElementById("result");

calButton.addEventListener("click", () => {
  let a = new Array(soldiers);

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
});
