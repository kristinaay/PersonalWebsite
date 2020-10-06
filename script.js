document.getElementById(document).ready(function () {
	document.getElementById(".submit").click(function (event) {
		console.log("Clicked Button");

		let email = document.getElementById(".email").val();
		let status = document.getElementById(".status");
		status.empty();

		//validate email
		if (!(email.length > 5 && email.includes("@") && email.includes("."))) {
			event.preventDefault();
			//add html inside the div
			status.append("Email is not valid.");
		}
	});
});
