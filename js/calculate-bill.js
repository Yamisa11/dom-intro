var calculateBill = calculateBill()
//get a reference to the calculate button
var calculateButton = document.querySelector(".calculateBtn");


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//get a reference to the billTotal element
var billTotal = document.querySelector(".billTotal");
//get a reference to the billString


function calculateBtnClicked() {
  var billString = document.querySelector(".billString").value;

  calculateBill.setStringBill(billString);
  
billTotal.innerHTML = calculateBill.getBillTotalCost()



}
//link the function to a click event on the calculate button
calculateButton.addEventListener("click", calculateBtnClicked);
