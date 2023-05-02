var billSettings = billWithSettings();
var updateBtn = document.querySelector(".updateSettings");
var radioAdd = document.querySelector(".radioAdd");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var callCost = document.querySelector(".callCostSetting").value;
var smsCost = document.querySelector(".smsCostSetting").value;
var warningLevel = document.querySelector(".warningLevelSetting").value;
var criticalLevel = document.querySelector(".criticalLevelSetting").value;
var totalCost = 0;

function updateSettingButton() {
  totalCost = billSettings.setCallCost(callCost);
  billSettings.setSmsCost(smsCost);
  billSettings.setWarningLevel(warningLevel);
  billSettings.setCriticalLevel(criticalLevel);

  billSettings.getCallCost();
  billSettings.getSmsCost();
  billSettings.getWarningLevel();
  billSettings.getCriticalLevel();

  console.log();
}

function addCostButton() {
  var checkedRadio = document.querySelector(
    'input[class="billItemTypeWithSettings"]:checked'
  );

  if (checkedRadio.value === "sms") {
    billSettings.sendSms();
  }

  if (checkedRadio === "call") {
    billSettings.makeCall();
  }

  callTotalSettings.innerHTML = billSettings.getTotalCallCost;
  smsTotalSettings.innerHTML = billSettings.getTotalSmsCost();
  totalSettings.innerHTML = billSettings.getTotalCost();
}

radioAdd.addEventListener("click", addCostButton);
updateBtn.addEventListener("click", updateSettingButton);
