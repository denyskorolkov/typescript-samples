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

/**
 * Takes a string and returns true or false indicating whether its curly braces are balanced.
 * supports 3 types of braces: curly {}, square [], and round ().
 * A string with interleaving braces should return false.
 *
 * @example
 *
 * isBalancedAdvanced('(foo { bar (baz) [boo] })') // true
 * isBalancedAdvanced('fo{s{}s}o { bar { baz }')   // false
 * isBalancedAdvanced('foo { (bar [baz] } )')      // false
 *
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function isBalancedAdvanced(str: string): boolean {
	let prev: string = '';
	str = str.replace(/[^{}()\[\]]/g, '');
	while (str != prev) {
		str = (prev = str).replace(/\{\}|\[\]|\(\)/g, '');
	}
	return !str.length;
}
