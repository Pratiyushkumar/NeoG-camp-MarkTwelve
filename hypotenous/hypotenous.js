const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const checkHypoBtn = document.querySelector("#checkHypo-btn");
const output = document.querySelector(".hypo-output");

checkHypoBtn.addEventListener("click", () => {
  if (sideA !== "" || sideB !== "") {
    hypotenousTriangle(sideA, sideB);
  } else {
    alert("Enter the correct value");
  }
});

function hypotenousTriangle(sideA, sideB) {
  let num1 = Number(sideA.value);
  let num2 = Number(sideB.value);
  if (num1 > 0 || num2 > 0) {
    let hypotenous = Math.sqrt(num1 * num1 + num2 * num2);
    output.innerHTML = `Hypotenous of right angled triangle is ${hypotenous}`;
  } else {
    alert("Enter the correct value");
  }
}
