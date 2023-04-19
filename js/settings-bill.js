var radioAdd = document.querySelector(".radioAdd");
var settingAddBtn = document.querySelector(".updateSettings");

var settingsTotalBill = 0;
var settingsTotalSms = 0;
var settingsTotalCalls = 0;

var callCostSetting =0;
var smsCostSetting=0;
var criticalSetting=0;
var warningSetting=0;

var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");


settingAddBtn.addEventListener("click", function () {
  var totalSettings = document.querySelector(".totalSettings");
callCostSetting = document.querySelector('.callCostSetting').value;
  smsCostSetting = document.querySelector(".smsCostSetting").value;
  criticalSetting = document.querySelector(".criticalLevelSetting").value;
  warningSetting = document.querySelector(".warningLevelSetting").value;



  if (settingsTotalBill != 0) {
    if (criticalSetting > settingsTotalBill) {
      radioAdd.disabled = false;
      totalSettings.classList.remove("danger");
      
      totalSettings.classList.add("warning");
    } else {
      alert("critical level cannot be lower than current Total");
    }
    if (warningSetting > settingsTotalBill) {
      totalSettings.classList.remove("warning");
    }
  }

  if (warningSetting > criticalSetting) {
    alert("warning level cannot be more than critical level");
    radioAdd.disabled = true;
  }
  return callCostSetting, smsCostSetting, criticalSetting, warningSetting;
});

function settingsAddCost() {
  
  var checkedSettingBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
 



  if (checkedSettingBtn) {
    var billItemTypeOfSetting = checkedSettingBtn.value;
  } else{
    alert("Please click cost type")
  }

  if (billItemTypeOfSetting === "sms") {
    settingsTotalSms = settingsTotalSms + parseFloat(smsCostSetting);
  }
  if (billItemTypeOfSetting === "call") {
    settingsTotalCalls = settingsTotalCalls + parseFloat(callCostSetting);
  }

  
  settingsTotalBill = settingsTotalSms + settingsTotalCalls;
  callTotalSettings.innerHTML = settingsTotalCalls.toFixed(2);
  smsTotalSettings.innerHTML = settingsTotalSms.toFixed(2);
  totalSettings.innerHTML = settingsTotalBill.toFixed(2);

  if (settingsTotalBill >= criticalSetting) {
    totalSettings.classList.add("danger");
    totalSettings.classList.remove("warning");
    radioAdd.disabled = true;
  } else if (settingsTotalBill >= warningSetting) {
    totalSettings.classList.add("warning");
    totalSettings.classList.remove("danger");
  } else {
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
  }
}
//add an event listener for when the add button is pressed
radioAdd.addEventListener("click", settingsAddCost);

// settingAddBtn.addEventListener("click", updateSettings);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
