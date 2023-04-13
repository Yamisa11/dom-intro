//get a reference to the add button
var addBtn = document.querySelector(".addToBillBtn");

var totalBill = 0;
var smsTotal = 0;
var callTotal = 0;

  var callTotalOne = document.querySelector(".callTotalOne");
  var smsTotalOne = document.querySelector(".smsTotalOne");
  var totalOne = document.querySelector(".totalOne");


function textBillTotal() {
  var billType = document.querySelector(".billTypeText").value
  var billTypeCapital = billType.toUpperCase();


  if (billTypeCapital === "SMS") {
    smsTotal = smsTotal + 0.75;
  } else if (billTypeCapital === "CALL") {
    callTotal = callTotal + 2.75;
  } else {
    alert("Please enter sms/call");
  }

  totalBill = (smsTotal + callTotal).toFixed(2);
  callTotalOne.innerHTML = callTotal.toFixed(2);
  smsTotalOne.innerHTML = smsTotal.toFixed(2);
  totalOne.innerHTML = totalBill;

  if (totalBill >= 50) {
    totalOne.classList.add("danger");
    totalOne.classList.remove("warning");
  } else if (totalBill >= 30) {
    totalOne.classList.add("warning");
    totalOne.classList.remove("danger");
  } else {
    totalOne.classList.remove("warning");
    totalOne.classList.remove("danger");
  }
}
//add an event listener for when the add button is pressed
addBtn.addEventListener("click", textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
