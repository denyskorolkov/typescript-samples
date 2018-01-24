/**
 * Takes a string and returns true or false indicating whether its curly braces are balanced
 *
 * @example
 *
 * isBalanced('}{')                      // false
 * isBalanced('{{}')                     // false
 * isBalanced('{}{}')                    // true
 * isBalanced('foo { bar { baz } boo }') // true
 * isBalanced('foo { bar { baz }')       // false
 * isBalanced('foo { bar } }')           // false
 *
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function isBalanced(str: string): boolean {
	let count: number = 0;
	for (let i: number = 0; i < str.length; i++) {
		let char: string = str[i];
		if (char === '{') {
			count++;
		}
		if (char === '}') {
			if (!count) {
				return false;
			}
			count--;
		}
	}

	return !count;
}
