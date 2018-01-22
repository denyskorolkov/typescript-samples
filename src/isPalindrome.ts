/**
 * Return true or false indicating whether the given string is a plaindrone (case and space insensitive)
 *
 * @example
 * isPalindrome('')                                // true
 * isPalindrome('abcdcba')                         // true
 * isPalindrome('abcd')                            // false
 * isPalindrome('A man a plan a canal Panama')     // true
 *
 * @export
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str: string): boolean {
	str = str.toLowerCase().replace(/ /g, '');

	let length: number = str.length;

	if (length < 2) {
		return true;
	}

	let i: number = 0;
	let n: number = length - 1;

	while (i < n) {
		if (str[i++] !== str[n--]) {
			return false;
		}
	}
	return true;
}
