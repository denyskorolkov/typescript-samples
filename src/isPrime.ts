/**
 * Returns true or false, indicating whether the given number is prime
 * @example
 * isPrime(0) // false
 * isPrime(1) // false
 * isPrime(17) // true
 * isPrime(10000000000000) // false
 * @param number
 * @return Boolean indicating whether the given number is prime
 */
export default function isPrime(number: number): boolean {
	if (number < 2) {
		return false;
	} else if (number < 4) {
		return true;
	}

	let length: number = Math.ceil(Math.sqrt(number));

	for (let i: number = 2; i <= length; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}
