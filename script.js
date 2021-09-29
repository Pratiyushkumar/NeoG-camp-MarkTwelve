let angle1Input = document.querySelector("#angle1");
let angle2Input = document.querySelector("#angle2");
let angle3Input = document.querySelector("#angle3");
const btnClicked = document.querySelector("#btn-Triangle-check");
const output = document.querySelector(".triangle-output");

btnClicked.addEventListener("click", () => {
  let angle1 = parseInt(angle1Input.value);
  let angle2 = parseInt(angle2Input.value);
  let angle3 = parseInt(angle3Input.value);
  isTriangle(angle1, angle2, angle3);
});

function calculateSumOfAngles(a, b, c) {
  console.log(a, b, c);
  let sum = a + b + c;
  return sum;
}

function isTriangle(angle1, angle2, angle3) {
  let sum = calculateSumOfAngles(angle1, angle2, angle3);
  if (sum === 180) {
    console.log("Yay!!! the angles are of the triangle");
    output.innerText = "Yay!!! the angles are of the triangle";
  } else {
    output.innerText = "oops! the angles are not of the triangle";
  }
}
