function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  var display = document.getElementById("display");
  var result = eval(display.value);
  display.value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    calculate();
  }
});
