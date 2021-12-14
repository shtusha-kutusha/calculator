export function add(summand1, summand2) {
	return summand1 + summand2;
}

export function subtract(reduced, deductible) {
	return reduced - deductible;
}

export function multiply(multiplier, multipliable) {
	return multiplier * multipliable;
}

export function divide(divisible, divider) {
	return divisible / divider;
}

export function calculatePercentage(multiplier, percents) {
	return multiplier / 100 * percents;
}

export function opposite(number) {
	return (-number);
}

export function extractSquareRoot(number) {
	return Math.sqrt(number);
}

export function calculateAbsolute(number) {
	return Math.abs(number);
}

export function calculateSquare(base, exponent) {
	let result = base;
	for (let i = 1; i < exponent; i++) {
		result *= base;
	}
	return result;
}

export function calculateEulers() {
	return Math.E;
}

export function calculatePi() {
	return Math.PI;
}

export function calculateLogarithm(number) {
	return Math.log(number) / Math.log(10);
}

export function calculateNaturalLogarithm(number) {
	return Math.log(number) / Math.log(Math.E);
}

export function calculateSin(number, rad) {
	const angle = rad ? number : degreesToRadians(number);
	return Math.sin(angle);
}

export function calculateCos(number, rad) {
	const angle = rad ? number : degreesToRadians(number);
	return Math.cos(angle);
}

export function calculateTan(number, rad) {
	const angle = rad ? number : degreesToRadians(number);
	return Math.tan(angle);
}

export function radiansToDegrees(radians) {
	return radians * (180/Math.PI);
}

export function degreesToRadians(degrees) {
	return degrees * (Math.PI/180);
}

export function calculateExp(number) {
	return Math.exp(number);
}

export function factorial(number) {
	let result = 1;
	while (number) {
		result *= number--;
	}
	return result;
}