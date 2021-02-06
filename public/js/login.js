// async function to handle the signup form
async function signupFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector('#username-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (username && email && password) {
		// fetching the users email, pwd and username

		const response = await fetch('/api/users/signup', {

			method: 'post',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		// check the response status
		if (response.ok) {
			console.log('success');
			document.location.replace('http://localhost:3001/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}

// async function to handle the login form
async function loginFormHandler(event) {
	event.preventDefault();
	const email = document.querySelector('#email-login').value.trim();
	const password = document.querySelector('#password-login').value.trim();
	if (email && password) {
		console.log(email, password);
		const response = await fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify({
				email,
				password
			}),
			headers: { 'Content-Type': 'application/json' }
		});
		console.log(response);
		if (response.ok) {
			document.location.replace('http://localhost:3001/dashboard');
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector('.login-form')
	.addEventListener('submit', loginFormHandler);

document
	.querySelector('.signup-form')
	.addEventListener('submit', signupFormHandler);
