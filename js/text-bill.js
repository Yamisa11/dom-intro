//get a reference to the add button
var addBtn = document.querySelector(".addToBillBtn");
var refreshText = document.querySelector(".refreshText");
var totalBill = 0;
    var smsTotal = 0;
    var callTotal = 0;
    
refreshText.addEventListener("click",function() {
  var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var billType = document.querySelector(".billTypeText").value;

callTotalOne.innerHTML = "0.00";
smsTotalOne.innerHTML = "0.00";
totalOne.innerHTML = "0.00";
billType.value = ""
totalBill = 0;
 smsTotal = 0;
callTotal = 0;
totalOne.classList.remove("danger")
totalOne.classList.remove("warning")

})

function textBillTotal(){
// get a reference to the textbox where the bill type is to be entered
var billType= document.querySelector(".billTypeText").value.trim();
var billTypeCapital = billType.toUpperCase();
//create a variable that will keep track of the total bill

var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");

        if (billTypeCapital === "SMS") {
           smsTotal = smsTotal+ 0.75;
          }else if (billTypeCapital === "CALL") {
            callTotal= callTotal + 2.75;
          }else {alert("Please enter sms/call")}
    
    totalBill= (smsTotal+callTotal).toFixed(2)
    callTotalOne.innerHTML = callTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalOne.innerHTML = totalBill;

    if (totalBill>=50) {
        totalOne.classList.add("danger")
      }else if (totalBill>=30) {
        totalOne.classList.add("warning")
      }
}
//add an event listener for when the add button is pressed
addBtn.addEventListener("click", textBillTotal)
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
