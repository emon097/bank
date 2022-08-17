// step-1
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step-2
  const depositinput = document.getElementById("deposit-input");
  const newdepositString = depositinput.value;
  const newdeposit = parseFloat(newdepositString);
  //   step-3
  depositinput.value = "";

  //   step-4
  const deposittotal = document.getElementById("deposit-total");
  const previousdepositString = deposittotal.innerText;
  const previousdeposit = parseFloat(previousdepositString);

  //   step-5
  const currentDeposit = previousdeposit + newdeposit;
  deposittotal.innerText = currentDeposit;
});
