//get a reference to the add button
var radioAddBtn = document.querySelector(".radioBillAddBtn");
var refreshRadio = document.querySelector(".refreshRadio");
var totalBillTwo = 0;
var totalSms = 0;
var totalCalls = 0;

function radioTextBillTotal() {
  // get a reference to the textbox where the bill type is to be entered
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemType']:checked"
  );
  //create a variable that will keep track of the total bill

  var callTotalTwo = document.querySelector(".callTotalTwo");
  var smsTotalTwo = document.querySelector(".smsTotalTwo");
  var totalTwo = document.querySelector(".totalTwo");

  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
  }

  if (billItemType === "sms") {
    totalSms = totalSms + 0.75;
  }
  if (billItemType === "call") {
    totalCalls = totalCalls + 2.75;
  }

  totalBillTwo = (totalSms + totalCalls).toFixed(2);
  callTotalTwo.innerHTML = totalCalls.toFixed(2);
  smsTotalTwo.innerHTML = totalSms.toFixed(2);
  totalTwo.innerHTML = totalBillTwo;

  if (totalBillTwo >= 50) {
    totalTwo.classList.add("danger");
  } else if (totalBillTwo >= 30) {
    totalTwo.classList.add("warning");
  }
}
//add an event listener for when the add button is pressed
radioAddBtn.addEventListener("click", radioTextBillTotal);
