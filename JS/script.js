//$ is shortcut for document.getElementById()
$(document).ready(function () {
	$(".submit").click(function (event) {
		console.log("Clicked Button");

		let name = $(".name").val();
		let email = $(".email").val();
		let message = $(".message").val();
		let status = $(".status");
		status.empty();

		//validate email
		if (!(email.length > 5 && email.includes("@") && email.includes("."))) {
			event.preventDefault();
			//add html inside the div
			status.append("Email is not valid.");
		}
	});
});
