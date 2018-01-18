import isPrime from '../../src/isPrime';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');


registerSuite('handlers', {
	isPrime: {
		'0,1'() {
			assert.isTrue(isPrime(0));
			assert.isTrue(isPrime(1));
		},

		'argument is string'() {
			// set(this.name, handler);
			// assert.isTrue(has(this.name));
		}
	}
});
