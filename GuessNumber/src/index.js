const number = document.querySelector("#field");
const submit = document.querySelector("#Guess");
const result = document.querySelector("#result");
const randomNumber = Math.floor(Math.random() * 100);
let counter = 0;

console.log(randomNumber);

function guess() {
  const value = +number.value;

  if (value === randomNumber) {
    const p = document.createElement("p")
    p.setAttribute("class","pl-2")
    p.innerHTML=`Great job! You guessed the number in ${counter + 1} attempts.`
    result.append(p)
  } else {
    while (value !== randomNumber) {
      if (value > randomNumber) {
        const p = document.createElement("p")
        p.setAttribute("class","pl-2")
        p.innerHTML=`The number ${value} is higher than the random number.`
        result.append(p)
      } else if (value < randomNumber) {
        const p = document.createElement("p")
        p.setAttribute("class","pl-2")
        p.innerHTML=`The number ${value} is lower than the random number.`
        result.append(p)
      }
      if (counter === 10) {
        alert("too many attempt")
        break
      }
      counter++;
      break;
    }
  }
}

submit.addEventListener("click", () => {
  guess();
});