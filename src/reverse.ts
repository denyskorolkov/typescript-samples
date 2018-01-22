/**
 * Reverses the given string
 *
 * @example
 * reverse('')       // ''
 * reverse('abcdef') // 'fedcba'
 *
 * @export
 * @param {string} str Given string
 * @returns {string} Reversed string
 */
export function reverse(str: string): string {
	let output: string = '';
	for (let i: number = str.length; i > 0; i--) {
		output += str[i - 1];
	}
	return output;
}
