/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * @example
 * indexOf([1, 2, 3], 1) // 0
 * indexOf([1, 2, 3], 4) // -1
 *
 * @export
 * @param {any[]} arr Given array
 * @param {*} searchElement
 * @returns {number}
 */
export function indexOf<T>(arr: Array<T>, searchElement: T): number {
	for (let i: number = 0; i < arr.length; i++) {
		if (searchElement === arr[i]) {
			return i;
		}
	}
	return -1;
}
