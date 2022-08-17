document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositinput = document.getElementById("deposit-input");
  const newdepositString = depositinput.value;
  const newdeposit = parseFloat(newdepositString);
  //   step-3
  depositinput.value = "";
});
