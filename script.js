let angle1Input = document.querySelector("#angle1");
let angle2Input = document.querySelector("#angle2");
let angle3Input = document.querySelector("#angle3");
const btnClicked = document.querySelector("#btn-Triangle-check");
const output = document.querySelector(".triangle-output");

btnClicked.addEventListener("click", () => {
  if (angle1Input !== "" || angle2Input !== "" || angle3Input !== "") {
    isTriangle(angle1Input, angle2Input, angle3Input);
  } else {
    alert("Enter the Correct Value");
  }
});

function calculateSumOfAngles(a, b, c) {
  console.log(a, b, c);
  let sum = a + b + c;
  return sum;
}

function isTriangle(angle1Input, angle2Input, angle3Input) {
  let angle1 = parseInt(angle1Input.value);
  let angle2 = parseInt(angle2Input.value);
  let angle3 = parseInt(angle3Input.value);
  if (angle1 > 0 || angle2 > 0 || angle3 > 0) {
    let sum = calculateSumOfAngles(angle1, angle2, angle3);
    if (sum === 180) {
      console.log("Yay!!! the angles are of the triangle");
      output.innerText = "Yay!!! the angles are of the triangle";
    } else {
      output.innerText = "oops! the angles are not of the triangle";
    }
  } else {
    alert("Enter the correct value");
  }
}
