
// display answer
var displayNum = document.querySelector('.calculator-screen');

// clear button
var clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearAnswer);

// decimal point
var decimalPoint = document.querySelector('.dot')
decimalPoint.addEventListener('click', addDot);

// get the numbers choosed
function getNumber(number) {

	if (displayNum.textContent == '0') {

		displayNum.textContent = number;
	}
	else {
		displayNum.textContent += number;
	}

}


// clear number

function clearAnswer() {

	displayNum.textContent = '0';
}


// display operand
function getOperand(operand) {

	displayNum.textContent += operand;
}


// display dot
function addDot() {
	displayNum.textContent += '.';

}
