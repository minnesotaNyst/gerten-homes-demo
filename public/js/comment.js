async function commentsOnLoad(event) {
	event.preventDefault();

	if (loggedIn) {
		// fetching the users email, pwd and username

		const response = await fetch('/api/comments', {
			method: 'get',
			body: JSON.stringify({
				user_id,
				comment_text,
				created_at
			}),
			headers: { 'Content-Type': 'application/json' }
		});

		// check the response status
		if (response.ok) {
			console.log(response);
			return response;
		} else {
			alert(response.statusText);
		}
	}
}

async function commentFormHandler(event) {
	event.preventDefault();

	const comment_text = document
		.querySelector('textarea[name="comment-body"]')
		.value.trim();

	// const post_id = window.location.toString().split('/')[
	//     window.location.toString().split('/').length - 1
	// ];

	if (comment_text) {
		const response = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				user_id,
				comment_text
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(response);

		if (response.ok) {
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector('.comment-form')
	.addEventListener('submit', commentFormHandler);
