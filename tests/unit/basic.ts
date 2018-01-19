import isPrime from '../../src/isPrime';
import factorial from '../../src/factorial';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');


registerSuite('Basic level', {
	isPrime: {
		'0,1'() {
			assert.isFalse(isPrime(0));
			assert.isFalse(isPrime(1));
		},

		'2,3'() {
			assert.equal(isPrime(2), true, '2');
			assert.equal(isPrime(3), true, '3');
		},

		'>3'() {
			assert.equal(isPrime(4), false, '4');
			assert.equal(isPrime(9), false, '9');
			assert.equal(isPrime(17), true, '17');
			assert.equal(isPrime(73), true, '73');
			assert.equal(isPrime(100), false, '100');
		}
	},

	factorial: {
		'0,1'() {
			assert.equal(factorial(0), 1);
			assert.equal(factorial(1), 1);
		},

		'>1'() {
			assert.equal(factorial(2), 2);
			assert.equal(factorial(3), 6);
			assert.equal(factorial(5), 120);
			assert.equal(factorial(8), 40320);
			assert.equal(factorial(12), 479001600);
		}
	}
});
