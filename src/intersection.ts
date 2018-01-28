/**
 * Find the intersection of two arrays.
 *
 * @example
 * intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
 * intersection([1, 5, 4, 2], [7, 12])             // []
 *
 * @export
 * @param {any[]} arr
 * @param {any[]} comparedArr
 * @returns {any[]}
 */
export function intersection(arr1: any[], arr2: any[]): any[] {
	let cache: { [index: string]: boolean } = {};

	arr1.forEach((value) => (cache[value] = true));
	return arr2.filter((value) => (cache[value] ? true : false));
}
