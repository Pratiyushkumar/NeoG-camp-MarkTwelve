const formSelector = document.querySelector(".form-selector");
const btnClicked = document.querySelector("#btn-Output");
const output = document.querySelector(".triangle-output");

const rightAnswer = [
  "90°",
  "right angled triangle",
  "right angled triangle",
  "one right angle",
  "12, 16, 20",
  "a + b + c",
  "no",
  "45°",
];

btnClicked.addEventListener("click", () => {
  getAnswer();
});

function getAnswer() {
  console.log("there");
  let index = 0;
  let score = 0;
  const formData = new FormData(formSelector);
  console.log(formData);
  for (let iterate of formData.values()) {
    console.log(iterate);
    if (iterate === rightAnswer[index]) {
      score++;
    }
    index++;
  }
  console.log("score", score);
  console.log("index", index);
  printAnswer(score);
}

function printAnswer(score) {
  output.innerHTML = `Score: ${score}`;
}
