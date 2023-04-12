    //get a reference to the calculate button
    var calculateButton = document.querySelector(".calculateBtn")
    var refreshCalculate = document.querySelector(".refreshCalculate");
   
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//get a reference to the billTotal element

    

function calculateBtnClicked(){
  var billTotal= document.querySelector(".billTotal");
//get a reference to the billString
var billString= document.querySelector(".billString").value;
var billStringCapital = billString.toUpperCase();
var billList = billStringCapital.split(",");
var totalSumBill=0;

    for (let i = 0; i < billList.length; i++) {
        const element = billList[i].trim();
       
        if (element === "SMS") {
           totalSumBill = totalSumBill+ 0.75;
          }
          if (element === "CALL") {
            totalSumBill= totalSumBill + 2.75;
          }
    }
    totalSumBill= parseFloat(totalSumBill).toFixed(2)
    billTotal.innerHTML = totalSumBill

    if (totalSumBill>=30) {
        billTotal.classList.add("danger")
        billTotal.classList.remove("warning")
      }else if (totalSumBill>=20) {
        billTotal.classList.add("warning")
        billTotal.classList.remove("danger")
      }else{
        billTotal.classList.remove("warning")
        billTotal.classList.remove("danger")
      }
      
}
//link the function to a click event on the calculate button
calculateButton.addEventListener("click", calculateBtnClicked)