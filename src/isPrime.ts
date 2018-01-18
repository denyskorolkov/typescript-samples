/**
 * Check primelity of the number
 * @param  {number} number
 * @returns boolean
 */
export default function isPrime(number: number): boolean {
	if (number < 2) {
		return false;
	} else if (number < 4) {
		return true;
	}

	let length = Math.ceil(Math.sqrt(number));

	for (let i = 2; i <= length; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
}
