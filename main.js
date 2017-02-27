// Form validation
function validateForm() {
	// Validate position
	var position = document.getElementById("position_id").value;
	if (position == "") {
		alert("Position must be filled out");
	}

	// Validate input salary value
	var salary = document.forms["cvForm"]["salary"].value;
    if (isNaN(salary) || (salary < 1) ) {
		alert("Please provide a valid Desired Salary");
    }

	// Validate programming language(s)
	if (!$("#java_id").checked &&
		!$("#swift_id").checked &&
		!$("#c_id").checked &&
		!$("#lnone_id").checked) {
		alert("Please check one or more of the Programming Languages boxes");
	}

	// Validate web development
	if (!document.getElementById("html_id").checked &&
		!document.getElementById("css_id").checked &&
		!document.getElementById("js_id").checked &&
		!document.getElementById("jQuery_id").checked &&
		!document.getElementById("wnone_id").checked) {
		alert("Please check one or more of the Web Design boxes");
	}

	return false;
}

// Wait until DOM is loaded
$(document).ready(validateForm);