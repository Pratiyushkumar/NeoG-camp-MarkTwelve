const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaCheck = document.querySelector("#btn-area-check");
const output = document.querySelector("#area-output");

areaCheck.addEventListener("click", () => {
  if (base !== "" || height !== "") {
    areaOfTrinagle(base, height);
  } else {
    alert("Enter the correct value");
  }
});

function areaOfTrinagle(base, height) {
  let num1 = Number(base.value);
  let num2 = Number(height.value);
  if (num1 > 0 || num2 > 0) {
    let area = (1 / 2) * (num1 * num2);
    output.innerHTML = `Area of triangle is ${area}`;
  } else {
    alert("Enter the correct value");
  }
}
