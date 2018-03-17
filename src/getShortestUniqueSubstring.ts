/**
 * Smallest Substring of All Characters
 * Given an array of unique characters arr and a string str,
 * Implement a function getShortestUniqueSubstring that finds
 * the smallest substring of str containing all the characters in arr.
 * Return "" (empty string) if such a substring doesn’t exist.
 *
 * Come up with an asymptotically optimal solution and analyze the time and space complexities.
 *
 * @example
 * getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx") // "zyx"
 *
 * @export
 * @param {string[]} arr
 * @param {string} str
 */
export function getShortestUniqueSubstring(arr: string[], str: string) {
	let index: number = 0;
	let arrLength: number = arr.length;
	let strLength: number = str.length;
	let diff: number = strLength - arrLength;

	while (index <= diff) {
		let pattern: string = str.substr(index++, arrLength);
		for (let i: number = 0; i < arrLength; i++) {
			if (pattern.indexOf(arr[i]) === -1) {
				break;
			} else {
				if (i === arrLength - 1) {
					return pattern;
				}
			}
		}
	}
	return '';
}
