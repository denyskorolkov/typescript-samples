/**
 * Returns a number that is the factorial of the given number
 * @example
 * factorial(0) // 1
 * factorial(1) // 1
 * factorial(6) // 720
 * @param number Any positive number
 * @returns Factorial of the given number
 */
export default function factorial(number: number): number {
	if (number === 0 || number ===1) {
		return 1;
	}

	let total = 1;
	for (let i = 1; i <= number; i++) {
		total *= i;
	}

	return total;
}
