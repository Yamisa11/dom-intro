function calculateBill() {
  var stringBillArr = [];
  var stringBill;
  var cost = "";
  var billTotalCost = 0;

  function setStringBill(stringBillParam) {
    stringBill = stringBillParam;
  }

  function convertStringBill() {
    stringBillArr = stringBill.split(",");
  }

  function getStringBill() {
    return stringBillArr;
  }

  function calculateBillTotalCost() {
    for (let i = 0; i < stringBillArr.length; i++) {
      cost = stringBillArr[i];

      if (cost === "sms") {
        billTotalCost = billTotalCost + 1.2;
      } else if (cost === "call") {
        billTotalCost = billTotalCost + 2.5;
      }
    }
  }

  function getBillTotalCost() {
    return billTotalCost;
  }

  function totalClass() {
    if (getBillTotalCost() >= 15) {
      return "danger";
    }
    if (getBillTotalCost() >= 10) {
      return "warning";
    }
  }


  return {
    setStringBill,
    getStringBill,
    calculateBillTotalCost,
    getBillTotalCost,
    convertStringBill,
    totalClass,
  };
}
