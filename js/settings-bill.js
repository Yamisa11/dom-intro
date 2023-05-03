var billSettings = billWithSettings();
var updateBtn = document.querySelector(".updateSettings");
var radioAdd = document.querySelector(".radioAdd");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");

var totalCost = 0;

function updateSettingButton() {
  var callCostValue = parseFloat(document.querySelector(".callCostSetting").value);
  var smsCostValue = parseFloat(document.querySelector(".smsCostSetting").value);
  var warningLevelSetting = parseFloat(document.querySelector(".warningLevelSetting").value)
  var criticalLevelSetting = parseFloat(document.querySelector(".criticalLevelSetting").value)
  

  billSettings.setCallCost(callCostValue);
  billSettings.setSmsCost(smsCostValue);
  billSettings.setWarningLevel(warningLevelSetting);
  billSettings.setCriticalLevel(criticalLevelSetting);

  console.log(
    callCostValue,
    smsCostValue,
    warningLevelSetting,
    criticalLevelSetting
  );
}

function addCostButton() {
  var checkedRadio = document.querySelector(
    'input[class="billItemTypeWithSettings"]:checked'
  );

  if (checkedRadio.value === "sms") {
    billSettings.sendSms();
  }else if (checkedRadio.value === "call") {
    billSettings.makeCall();
  }

  callTotalSettings.innerHTML = billSettings.getTotalCallCost().toFixed(2);
  smsTotalSettings.innerHTML = billSettings.getTotalSmsCost().toFixed(2);
  totalSettings.innerHTML = billSettings.getTotalCost().toFixed(2);
}

radioAdd.addEventListener("click", addCostButton);
updateBtn.addEventListener("click", updateSettingButton);
