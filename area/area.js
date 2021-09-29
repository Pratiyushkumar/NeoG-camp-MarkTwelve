const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaCheck = document.querySelector("#btn-area-check");
const output = document.querySelector("#area-output");

areaCheck.addEventListener("click", () => {
  let num1 = Number(base.value);
  let num2 = Number(height.value);
  areaOfTrinagle(num1, num2);
});

function areaOfTrinagle(num1, num2) {
  let area = (1 / 2) * (num1 * num2);
  output.innerHTML = `Area of triangle is ${area}`;
}
