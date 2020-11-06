// a onchange function is made here to automatically cghange the values

document.getElementById('container').onchange = function () {
	// the bill , tip% ,splitBill is taken fro here
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = parseInt(document.getElementById('tipInput').value);
  if (tipPercent===0||tipPercent<0){
	  tipPercent=0;
  }

  var splitBill = parseInt(document.getElementById('splitInput').value);
  var tipValue = bill * (tipPercent / 100);
  if (splitBill===0||splitBill<0){
	  splitBill=1;

  }
  // logic for tip /person and total per person and display on the screen 
  var newBillEach = (bill + tipValue) / splitBill;
  var tipEach = tipValue / splitBill; 
  if (newBillEach<0 ||splitBill<0 ){
	  document.getElementById('newBill').innerHTML = " $" +"0.00";
  } 
	else{
	document.getElementById('newBill').innerHTML = " $" + newBillEach.toFixed(2);}
  if (tipEach<0){
	  document.getElementById('tipAmount').innerHTML = " $" +"0.00";
  }
  else{

  document.getElementById('tipAmount').innerHTML = " $" + tipEach.toFixed(2);}
}
