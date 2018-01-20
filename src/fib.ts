/**
 * Returns the nth Fibonacci number
 * @example
 * fib(0)  // 0
 * fib(1)  // 1
 * fib(10) // 55
 * fib(20) // 6765
 * @param number
 * @returns number the nth Fibonacci number
 */
export function fibArray(number: number): number {
	if (number === 0) {
		return 0;
	}

	let total: number[] = [0, 1];
	for (let i: number = 0; i < number - 1; i++) {
		total = [total[1], total[0] + total[1]];
	}

	return total[1];
}

/**
 * Returns the nth Fibonacci number
 * @example
 * fib(0)  // 0
 * fib(1)  // 1
 * fib(10) // 55
 * fib(20) // 6765
 * @param number
 * @returns number the nth Fibonacci number
 */
export function fibRecursive(number: number): number {
	switch (number) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return fibRecursive(number - 1) + fibRecursive(number - 2);
	}
}
