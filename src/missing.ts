/**
 * Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n,
 * and returns the missing number in the sequence
 * (there are either no missing numbers, or exactly one missing number).
 *
 * @example
 * missing([])            // undefined
 * missing([1, 4, 3])     // 2
 * missing([2, 3, 4])     // 1
 * missing([5, 1, 4, 2])  // 3
 * missing([1, 2, 3, 4])  // undefined
 *
 * @export
 * @template T
 * @param {Array<number>} arr Unsorted array of unique numbers (ie. no repeats)
 * @returns {number} The missing number in the sequence
 */
export function missing(arr: Array<number>): number | undefined {
	let full: number = 1;
	let partly: number = 1;

	let i: number = 0;
	while (i < arr.length) {
		partly *= arr[i];
		full *= ++i;
	}

	if (full === partly) {
		return;
	}

	return full * (arr.length + 1) / partly;
}
