var billSettings = BillWithSettings();
var updateBtn = document.querySelector(".updateSettings");
var radioAdd = document.querySelector(".radioAdd");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");


function updateSettingButton() {
  var callCostValue = parseFloat(document.querySelector(".callCostSetting").value);
  var smsCostValue = parseFloat(document.querySelector(".smsCostSetting").value);
  var warningLevelSetting = parseFloat(document.querySelector(".warningLevelSetting").value)
  var criticalLevelSetting = parseFloat(document.querySelector(".criticalLevelSetting").value)
  

  billSettings.setCallCost(callCostValue);
  billSettings.setSmsCost(smsCostValue);
  billSettings.setWarningLevel(warningLevelSetting);
  billSettings.setCriticalLevel(criticalLevelSetting);

  if (billSettings.getTotalCost()< criticalLevelSetting && billSettings.getTotalCost()>warningLevelSetting) {
    totalSettings.classList.remove(billSettings.totalClassNameDanger())
    totalSettings.classList.add(billSettings.totalClassNameWarning())
  }else if (billSettings.getTotalCost()<warningLevelSetting) {
    totalSettings.classList.remove(billSettings.totalClassNameWarning())
    totalSettings.classList.remove(billSettings.totalClassNameDanger())
  }

}

function addCostButton() {
  var warningLevelSetting = parseFloat(document.querySelector(".warningLevelSetting").value)
  
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

  if (billSettings.hasReachedCriticalLevel()) {
    totalSettings.classList.add(billSettings.totalClassNameDanger())
    totalSettings.classList.remove(billSettings.totalClassNameWarning())
  }else if (billSettings.getTotalCost()>= warningLevelSetting) {
    totalSettings.classList.add(billSettings.totalClassNameWarning())
    totalSettings.classList.remove(billSettings.totalClassNameDanger())
  }
}

radioAdd.addEventListener("click", addCostButton);
updateBtn.addEventListener("click", updateSettingButton);
