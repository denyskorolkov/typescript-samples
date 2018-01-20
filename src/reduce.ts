/**
 * The reduce() method applies a function against an accumulator and each element
 * in the array (from left to right) to reduce it to a single value
 * @param array
 * @param fn Function to execute on each element in the array, taking four arguments
 * @param value
 * Value to use as the first argument to the first call of the callback.
 * If no initial value is supplied, the first element in the array will be used.
 * Calling reduce() on an empty array without an initial value is an error.
 * @return The value that results from the reduction
 */
export function reduce(array: any[], fn: Function, value: any) {
	for (let i: number = 0; i < array.length; i++) {
		value = fn(array[i], value, i, array);
	}
	return value;
}
