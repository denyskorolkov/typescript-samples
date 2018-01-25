import { fibMemoization } from '../../src/fib';
import { isBalancedAdvanced } from '../../src/isBalanced';

const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('Intermediate', {
	fib() {
		assert.equal(fibMemoization(0), 0);
		assert.equal(fibMemoization(1), 1);
		assert.equal(fibMemoization(10), 55);
		assert.equal(fibMemoization(13), 233);
		assert.equal(fibMemoization(20), 6765);
		assert.equal(fibMemoization(30), 832040);
		assert.equal(fibMemoization(50), 12586269025);
		assert.equal(fibMemoization(100), 354224848179262000000);
	},

	isBalancedAdvanced() {
		assert.equal(isBalancedAdvanced('(foo { bar (baz) [boo] })'), true);
		assert.equal(isBalancedAdvanced('foo { bar { baz }'), false);
		assert.equal(isBalancedAdvanced('foo { (bar [baz] } )'), false);
	}
});
