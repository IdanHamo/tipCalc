const inpVal = document.getElementsByClassName("inpVal")[0];
const inp = document.getElementsByClassName("inp")[0];
inpVal.innerText = inp.value + `%`;

inp.addEventListener("click", () => {
  inpVal.innerText = inp.value + " %";
});

function calc(bill, percent, people) {
  return (bill * percent) / 100 / people;
}

const peoples = document.getElementsByClassName("people-numbers")[0];

const btn = document.getElementsByClassName("calc")[0];
const result = document.getElementsByClassName("result")[0];
const bill = document.getElementsByClassName("inpBill")[0];

btn.addEventListener("click", () => {
  console.dir(peoples);
  result.innerText =
    calc(bill.innerHTML, inp.value, peoples.innerHTML) + " each";
});
