// Form validation
function validateForm() {
	// Validate
	var position = document.forms["cvForm"]["position"].value;
	if (position == "") {
		alert("Position must be filled out");
	}

	// Validate input salary value
	var salary = document.forms["cvForm"]["salary"].value;
    if (isNaN(salary) || (salary < 1) ) {
		alert("Please provide a valid Desired Salary");
    }

	// Validate programming language(s)
	if (!document.getElementById("java_id").checked &&
		!document.getElementById("swift_id").checked &&
		!document.getElementById("c_id").checked &&
		!document.getElementById("lnone_id").checked) {
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