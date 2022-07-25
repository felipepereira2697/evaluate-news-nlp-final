import { handleSubmit } from '../src/client/js/formHandler';

describe('Validate Handle Submit', () => {
	test('Validate handleSubmit', () => {
		document.body.innerHTML = `
    	<input id="name" type="text" name="input" value="" placeholder="Place URL for the blog">
  		`;
		const eventElement = new CustomEvent('onclick', {
		detail: {
			name: 'Felipe'
		}
		});
		const result = handleSubmit(eventElement);
		expect(result).toBeUndefined();
	});
});