import { checkInput } from '../src/client/js/inputChecker';

describe('Validate that users inputs a valid URL', () => {
	test('Validate checkInput', () => {
		expect(checkInput('https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/')).toBe(
			true
		);
	});
});

describe('Validate that users inputs an invalid URL', () => {
	test('Validate checkInput', () => {
		expect(checkInput('wrongtestgoeshere')).toBe(
			false
		);
	});
});