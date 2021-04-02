

var operandAnswer = '';

// get num
var displayNum = document.querySelector('.calculator-screen');

// clear button
var clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clearAnswer);

// decimal point
var decimalPoint = document.querySelector('.dot')
decimalPoint.addEventListener('click', addDot);

// click equal
var equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', displayAnswer);

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

	if (operand == '+') {
		operandAnswer = '+';
	}
	else if (operand == '-') {
		operandAnswer = '-';
	}
	else if (operand == '*') {
		operandAnswer = '*';
	}
	else if (operand == '÷') {
		operandAnswer = '/';
	}
}


// display dot
function addDot() {
	displayNum.textContent += '.';

}


// display answer
// var lengthOfAnswer = parseInt(displayNum.value)
function displayAnswer() {

	// convert asnwer to integer
	var show = displayNum.textContent;
	var number = parseInt(show);

	// console.log(number + 2);
	// console.log(operandAnswer)

	if (operandAnswer == '+') {
		var testAns = number + 2;
		displayNum.textContent = testAns;
	}
}