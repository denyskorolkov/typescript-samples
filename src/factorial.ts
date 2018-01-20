/**
 * Returns a number that is the factorial of the given number
 * @example
 * factorial(0) // 1
 * factorial(1) // 1
 * factorial(6) // 720
 * @param number Any positive number
 * @return Factorial of the given number
 */
export function factorialArray(number: number): number {
	if (number === 0 || number === 1) {
		return 1;
	}

	let total: number = 1;
	for (let i: number = 1; i <= number; i++) {
		total *= i;
	}

	return total;
}

/**
 * Returns a number that is the factorial of the given number
 * @example
 * factorial(0) // 1
 * factorial(1) // 1
 * factorial(6) // 720
 * @param number Any positive number
 * @return Factorial of the given number
 */
export function factorialRecursive(number: number): number {
	switch (number) {
		case 0:
		case 1:
			return 1;
		default:
			return factorialRecursive(number - 1) * number;
	}
}


