/**
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * @example
 * filter([1, 2, 3, 4], n => n < 3)    // [1, 2]
 * @param array
 * @param fn
 * @return New array
 */
export function filter(array: any[], fn: Function): any[] {
	let destArray: any[] = [];
	for (let i: number = 0; i < array.length; i++) {
		let current: any = array[i];
		if (fn(current)) {
			destArray.push(current);
		}
	}
	return destArray;
}
