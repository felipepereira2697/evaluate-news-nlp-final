import { checkInput } from './js/inputChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


export {
    checkInput,
    handleSubmit
}

window.addEventListener("DOMContentLoaded", (e) => {
	// get reference to the form elemet
	const form = document.getElementById("form");
	// Add submit event listener on this form
	form.addEventListener("submit", handleSubmit);
});