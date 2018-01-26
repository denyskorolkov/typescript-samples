/**
 * Takes an array of numbers, and returns the unique numbers.
 *
 * @example
 * uniq([])                    // []
 * uniq([1, 4, 2, 2, 3, 4, 8]) // [1, 4, 2, 3, 8]
 *
 * @export
 * @template T
 * @param {Array<T>} arr
 * @returns {Array<T>}
 */
export function uniq<T extends string | number>(arr: Array<T>): Array<T> {
	let cache: { [index: string]: boolean } = {};

	return arr.filter((value) => {
		let key: string = String(value);
		if (cache[key]) {
			return false;
		} else {
			return (cache[key] = true);
		}
	});
}
