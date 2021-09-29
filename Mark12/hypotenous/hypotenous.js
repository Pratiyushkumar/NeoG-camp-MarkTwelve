const sideA = document.querySelector("#sideA");
const sideB = document.querySelector("#sideB");
const checkHypoBtn = document.querySelector("#checkHypo-btn");
const output = document.querySelector(".hypo-output");

checkHypoBtn.addEventListener("click", () => {
  let num1 = Number(sideA.value);
  let num2 = Number(sideB.value);
  hypotenousTriangle(num1, num2);
});

function hypotenousTriangle(num1, num2) {
  let hypotenous = Math.sqrt(num1 * num1 + num2 * num2);
  output.innerHTML = `Hypotenous of right angled triangle is ${hypotenous}`;
}
