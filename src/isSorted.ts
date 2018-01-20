/**
 * Returns true or false, indicating whether the given array of numbers is sorted
 * @example
 * isSorted([])                        // true
 * isSorted([3, 9, -3, 10])            // false
 * isSorted([-Infinity, -5, 0, 3, 9])  // true
 * @param array Array of numbers
 * @return Indicating whether the given array of numbers is sorted
 */
export function isSorted(array: number[]): boolean {
	for (let i: number = 1; i < array.length; i++) {
		if (array[i] < array[i - 1]) {
			return false;
		}
	}
	return true;
}
