
var displayNum = document.querySelector('.calculator-screen');


function getNumber(number) {

	if (displayNum.textContent == '0') {

		displayNum.textContent = number;
	}
	else {
		displayNum.textContent += number;
	}


}


