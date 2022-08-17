// step-1
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step-2
  const withdrawinput = document.getElementById("wihdraw-input");
  const newwithdrawString = withdrawinput.value;
  const newwithdraw = parseFloat(newwithdrawString);
  //   step-3
  withdrawinput.value = "";

  //   step-4
  const withdrawtotal = document.getElementById("withdraw-total");
  const previoustotalwithdrawString = withdrawtotal.innerText;
  const previoustotalwithdraw = parseFloat(previoustotalwithdrawString);

  //   step-5
  const currentwithdraw = newwithdraw + previoustotalwithdraw;
  withdrawtotal.innerText = currentwithdraw;

  //   step-6
  const balancetotal = document.getElementById("balance-total");
  const previousbalancetotalString = balancetotal.innerText;
  const previousbalancetotal = parseFloat(previousbalancetotalString);

  //   step-7
  const totallwithdrawbalance = previousbalancetotal - previoustotalwithdraw;
  balancetotal.innerText = totallwithdrawbalance;
});
