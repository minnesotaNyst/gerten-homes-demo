async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (username && email && password) {
		// fetching the users email, pwd and username
		const response = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				username,
				email
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		// check the response status
		if (response.ok) {
			console.log('success');
		} else {
			alert(response.statusText);
		}
	}
}

async function loginFormHandler(event) {
	event.preventDefault();

	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();

	if (email && password) {
		const response = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		if (response.ok) {
			document.location.replace('http://localhost:3001/login');
		} else {
			alert(response.statusText);
		}
	}
}

async function renderLogin(event) {
	event.preventDefault();

	const response = await fetch('http://localhost:3001/login');

	// check the response status
	if (response.ok) {
		console.log('success');
	} else {
		alert(response.statusText);
	}
}

document.querySelector('#login').addEventListener('click', renderLogin);

document
	.querySelector('.login-form')
	.addEventListener('submit', loginFormHandler);

document
	.querySelector('.signup-form')
	.addEventListener('submit', signupFormHandler);
