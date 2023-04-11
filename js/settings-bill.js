var radioAdd = document.querySelector(".radioAdd");
var settingAddBtn = document.querySelector(".updateSettings");
var refreshSettings = document.querySelector(".refreshSettings")

var settingsTotalBill = 0;
var settingsTotalSms = 0;
var settingsTotalCalls = 0;

var callCostSetting;
var smsCostSetting;
var criticalSetting;
var warningSetting;
settingAddBtn.addEventListener("click", function(){
   callCostSetting = document.querySelector(".callCostSetting").value;
   smsCostSetting = document.querySelector(".smsCostSetting").value;
   criticalSetting = document.querySelector(".criticalLevelSetting").value;
   warningSetting = document.querySelector(".warningLevelSetting").value;
 console.log(callCostSetting+smsCostSetting+warningSetting+criticalSetting)
  return callCostSetting, smsCostSetting,criticalSetting,warningSetting
})

function settingsAddCost() {
    
  // get a reference to the textbox where the bill type is to be entered
 
  //create a variable that will keep track of the total bill

  var callTotalSettings = document.querySelector(".callTotalSettings");
  var smsTotalSettings = document.querySelector(".smsTotalSettings");
  var totalSettings = document.querySelector(".totalSettings");
  var checkedSettingBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  
  if (checkedSettingBtn) {
    var billItemTypeOfSetting = checkedSettingBtn.value;
  }

  if (billItemTypeOfSetting === "sms") {
    settingsTotalSms = settingsTotalSms + parseFloat(smsCostSetting);
  }
  if (billItemTypeOfSetting === "call") {
    settingsTotalCalls = settingsTotalCalls + parseFloat(callCostSetting);
  }
console.log(callCostSetting+" "+smsCostSetting+ billItemTypeOfSetting)
  settingsTotalBill = settingsTotalSms + settingsTotalCalls;
  callTotalSettings.innerHTML = settingsTotalCalls.toFixed(2);
  smsTotalSettings.innerHTML = settingsTotalSms.toFixed(2);
  totalSettings.innerHTML = settingsTotalBill.toFixed(2);

  if (settingsTotalBill >= criticalSetting) {
    totalSettings.classList.add("danger");
  } else if (settingsTotalBill >= warningSetting) {
    totalSettings.classList.add("warning");
  }
}
//add an event listener for when the add button is pressed
radioAdd.addEventListener("click", settingsAddCost);

refreshSettings.addEventListener("click",function() {
  // var callCostSetting = document.querySelector(".callCostSetting").value;
  // var smsCostSetting = document.querySelector(".smsCostSetting").value;
  // var criticalSetting = document.querySelector(".criticalLevelSetting").value;
  // var warningSetting = document.querySelector(".warningLevelSetting").value;

  var callTotalSettings = document.querySelector(".callTotalSettings");
  var smsTotalSettings = document.querySelector(".smsTotalSettings");
  var totalSettings = document.querySelector(".totalSettings");

   

   callTotalSettings.innerHTML= "0.00";
   smsTotalSettings.innerHTML= "0.00"
   totalSettings.innerHTML = "0.00"

 settingsTotalBill = 0;
 settingsTotalSms = 0;
 settingsTotalCalls = 0;
 callCostSetting=0;
 smsCostSetting=0;
 criticalSetting=0;
 warningSetting=0;


 totalSettings.classList.remove("danger");
 totalSettings.classList.remove("warning");
    })
    
// settingAddBtn.addEventListener("click", updateSettings);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
