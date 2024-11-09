// script.js

// Append clicked button's value to the display
function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

// Delete the last character from the display
function deleteLast() {
    const display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1) || "0";
}

// Perform the calculation
function calculate() {
    const display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText) || "0";
    } catch {
        display.innerText = "Error";
    }
}
