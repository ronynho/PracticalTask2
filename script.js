function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').value);
  let secondNum = Number(document.getElementById('secondNum').value);

  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    let total = firstNum + secondNum;
    document.getElementById("answer").textContent = total;
  } else {
    document.getElementById("answer").textContent = "Please enter valid numbers.";
  }
}

document.getElementById('sumButton').addEventListener("click", displaySum);
