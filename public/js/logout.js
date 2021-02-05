async function Logout() {
	// const response = await fetch('/api/users/logout', {
	// 	method: 'post',
	// 	headers: { 'Content-Type': 'application/json' }
	// });

	const response = await fetch('/api/users/logout', {
		method: 'post',
		headers: { 'Content-Type': 'application/json' }
	});

	if (response.ok) {
		// document.location.replace('http://localhost:3001/login');
		document.location.replace('/login');
	} else {
		alert(response.statusText);
	}
}

document.querySelector('#logout').addEventListener('click', Logout);
