
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
	loader.style.display = "none";
})

// Get all the elements with the class 'nav-link'
const navLinks = document.getElementsByClassName('nav-link');

// Loop through the elements and add event listeners
for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener('mouseover', function () {
		this.style.height = '55px';
		this.style.width = '130px';
		this.style.textAlign = 'center';
	});

	navLinks[i].addEventListener('mouseout', function () {
		this.style.width = '120px';
		this.style.height = '50px';
		this.style.textAlign = 'center';
	});
}

function highlight() {
	// Get the search term from the input field
	const term = document.getElementById("search").value;

	// Get all the table cells
	const cells = document.getElementsByTagName("td");

	// Loop through each cell and check if it contains the search term
	for (let i = 0; i < cells.length; i++) {
		const cell = cells[i];
		const text = cell.textContent;

		// If the cell contains the search term, highlight it in yellow and scroll to it
		if (text.includes(term)) {
			// Remove highlight from all previously highlighted cells
			for (let j = 0; j < cells.length; j++) {
				cells[j].style.backgroundColor = "";
				cells[j].style.color = "";
			}

			cell.style.backgroundColor = "yellow";
			cell.style.color = "white";
			// Scroll to the first cell that contains the search term
			cell.scrollIntoView({ behavior: "smooth", block: "center" });
			return; // Stop looping once a match is found
		} else {
			cell.style.backgroundColor = "";
			cell.style.color = "";
		}
	}
}

// This function first gets the search term from the input field. Then, it gets all the td elements in the table and loops through
// Each cell to check if it contains the search term. If it does, it highlights the cell in yellow by setting its backgroundColor
//to beige and its color to white.
// Note that this code only highlights the first occurrence of the search term in each cell.

// To send a message if the form has been submitted
function validateFormReserve() {
	// If the form is valid, show a confirmation message
	alert("Your reservation has been successfully submitted");
	return true;
}

function validateFormOrder() {
	// If the form is valid, show a confirmation message
	alert("Your order has been successfully submitted");
	return true;
}

function validateFormOrderContact() {
	// If the form is valid, show a confirmation message
	alert("Your message has been successfully submitted");
	return true;
}

//Get the button
var myButton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		// if the body of the document is greater than 20 in length
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	// It will scroll to the top of the body, length = 0
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function toggleTheme() {
	const html = document.querySelector('html');
	const currentTheme = html.getAttribute('data-theme');

	if (currentTheme === 'light') {
		html.setAttribute('data-theme', 'dark');
		document.querySelector('link').setAttribute('href', 'darkstyle.css');
	//the link links the css to the html file
	//link href= "darkstyle.css"
	//querySelector takes only the first occurrence of the link, but the querySelectorAll turns all the links into the css file
	} else {
		html.setAttribute('data-theme', 'light');
		document.querySelector('link').setAttribute('href', 'style.css');
	}
}

const toggleThemeButton = document.querySelector('#toggle-theme-button');
toggleThemeButton.addEventListener('click', toggleTheme);