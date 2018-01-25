/**
 * Returns the nth Fibonacci number
 * @example
 * fib(0)  // 0
 * fib(1)  // 1
 * fib(10) // 55
 * fib(20) // 6765
 * @param number
 * @return number the nth Fibonacci number
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
 * @return number the nth Fibonacci number
 */
function _fibRecursive(this: Function, number: number): number {
	switch (number) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return this.call(this, number - 1) + this.call(this, number - 2);
	}
}

export let fibRecursive: Function = _fibRecursive.bind(_fibRecursive);

/**
 * Memoization or memoisation is an optimization technique used primarily
 * to speed up computer programs by storing the results of expensive function calls
 * and returning the cached result when the same inputs occur again.
 *
 * @export
 * @param {Function} fn
 * @returns {Function}
 */
export function memoize(fn: Function): Function {
	let cache: { [index: string]: number } = {};
	return function memo(number: number): number {
		return typeof cache[number] === 'undefined' ? (cache[number] = fn.call(memo, number)) : cache[number];
	};
}

/**
 * Returns the nth Fibonacci number, able to handle numbers up to 50
 * @example
 * fib(0)  // 0
 * fib(1)  // 1
 * fib(10) // 55
 * fib(20) // 6765
 * fib(50) // 12586269025
 * @param number
 * @return number the nth Fibonacci number
 */
export let fibMemoization: Function = memoize(_fibRecursive);
