// Form validation
function validateForm() {
	isValid = true;

	// Validate position
	var position = document.getElementById("position_id").value;
	if (position == "") {
		isValid = false;
		alert("Position must be filled out");
	}

	// Validate input salary value
	var salary = document.forms["cvForm"]["salary"].value;
    if (isNaN(salary) || (salary < 1) ) {
		isValid = false;
		alert("Please provide a valid Desired Salary");
    }

	// Validate programming language(s)
	if (($("#java_id").checked == false) &&
		($("#swift_id").checked == false) &&
		($("#c_id").checked == false) &&
		($("#lnone_id").checked == false)) {
		isValid = false;
		alert("Please check one or more of the Programming Languages boxes");
	}

	// Validate web development
	if ((document.getElementById("html_id").checked == false) &&
		(document.getElementById("css_id").checked == false) &&
		(document.getElementById("js_id").checked == false) &&
		(document.getElementById("jQuery_id").checked == false) &&
		(document.getElementById("wnone_id").checked == false)) {
		isValid = false;
		alert("Please check one or more of the Web Design boxes");
	}

	if (isValid) {
		return confirm("Do you want to submit your CV?");
	}
	else {
		return false;
	}
}

// Wait until DOM is loaded
$(document).ready(validateForm);