import isPrime from '../../src/isPrime';
import { factorialArray, factorialRecursive } from '../../src/factorial';
import { fibArray, fibRecursive } from '../../src/fib';
import { isSorted } from '../../src/isSorted';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('Easy', {
	isPrime: {
		'0,1,2,3,4,9,17,73,100'() {
			assert.isFalse(isPrime(0));
			assert.isFalse(isPrime(1));
			assert.equal(isPrime(2), true, '2');
			assert.equal(isPrime(3), true, '3');
			assert.equal(isPrime(4), false, '4');
			assert.equal(isPrime(9), false, '9');
			assert.equal(isPrime(17), true, '17');
			assert.equal(isPrime(73), true, '73');
			assert.equal(isPrime(100), false, '100');
		}
	},

	factorial: {
		'Array method: 0,1,2,3,5,8,12'() {
			assert.equal(factorialArray(0), 1);
			assert.equal(factorialArray(1), 1);
			assert.equal(factorialArray(2), 2);
			assert.equal(factorialArray(3), 6);
			assert.equal(factorialArray(5), 120);
			assert.equal(factorialArray(8), 40320);
			assert.equal(factorialArray(12), 479001600);
			assert.equal(factorialArray(30), 2.6525285981219103e32);
		},

		'Recursive method: 0,1,2,3,5,8,12'() {
			assert.equal(factorialRecursive(0), 1);
			assert.equal(factorialRecursive(1), 1);
			assert.equal(factorialRecursive(2), 2);
			assert.equal(factorialRecursive(3), 6);
			assert.equal(factorialRecursive(5), 120);
			assert.equal(factorialRecursive(8), 40320);
			assert.equal(factorialRecursive(12), 479001600);
			assert.equal(factorialRecursive(30), 2.6525285981219103e32);
		}
	},

	fib: {
		'Array method: 0,1,10,13,20,30'() {
			assert.equal(fibArray(0), 0);
			assert.equal(fibArray(1), 1);
			assert.equal(fibArray(10), 55);
			assert.equal(fibArray(13), 233);
			assert.equal(fibArray(20), 6765);
			assert.equal(fibArray(30), 832040);
		},

		'Recursive method: 0,1,10,13,20,30'() {
			assert.equal(fibRecursive(0), 0);
			assert.equal(fibRecursive(1), 1);
			assert.equal(fibRecursive(10), 55);
			assert.equal(fibRecursive(13), 233);
			assert.equal(fibRecursive(20), 6765);
			assert.equal(fibRecursive(30), 832040);
		}
	},

	isSorted() {
		assert.equal(isSorted([]), true);
		assert.equal(isSorted([-Infinity, -5, 0, 3, 9]), true);
		assert.equal(isSorted([3, 9, -3, 10]), false);
	}
});
