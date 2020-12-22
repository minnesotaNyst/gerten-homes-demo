(function ($) {
	$(function () {
		$('.sidenav').sidenav();
		$('.parallax').parallax();
	}); // end of document ready
})(jQuery); // end of jQuery name space

/* load the modal when the page loads */
var displayModal = function () {
	$(document).ready(function () {
		$('.modal').modal();
		$('#modal1').modal('open');
		$('.modal-close').click(function () {
			$('#modal1').modal('close');
		});
		M.updateTextFields();
	});
};

/* function to see if a fName already exists, if not then (and only then) run the displayModal function */
// !would need to update this to check if there is an email for this user in the local storage
var displayDecision = function () {
	fName = JSON.parse(localStorage.getItem('firstName'));

	if (!fName) {
		displayModal();
	} else {
		// displayName();
		return;
	}
};

// call the modal
$('.modal').modal();

displayDecision();
