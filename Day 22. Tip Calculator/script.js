function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);

  if (isNaN(billAmount) || isNaN(tipPercent)) {
    alert("Please enter valid numbers for bill amount and tip percentage.");
    return;
  }

  const tipAmount = (billAmount * tipPercent) / 100;
  const totalBill = billAmount + tipAmount;

  document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);
  document.getElementById("totalBill").textContent = totalBill.toFixed(2);
}
