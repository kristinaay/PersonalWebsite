document.querySelector(document).ready(function () {
	document.querySelector(".submit").click(function (event) {
		console.log("Clicked Button");

		let email = document.querySelector(".email").val();
		let status = document.querySelector(".status");
		status.empty();

		//validate email
		if (!(email.length > 5 && email.includes("@") && email.includes("."))) {
			event.preventDefault();
			//add html inside the div
			status.append("Email is not valid.");
		}
	});
});
