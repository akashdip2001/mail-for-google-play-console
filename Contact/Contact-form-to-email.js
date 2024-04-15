function emailSend() {
	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var appurl = document.getElementById('URL').value;
	var message = document.getElementById('message').value;
  
	var messageBody = "Name: " + userName +
	  "<br/> Phone: " + phone +
	  "<br/> Email: " + email +
	  "<br/> URL: " + appurl +
	  "<br/> Message: " + message;
  
	Email.send({
		SecureToken: "f1fd93e4-78df-4474-8db5-80daf880c520",
		To: "mail.me.akashdip2001@gmail.com",
		From: email,
		Subject: "mail for public App - google play console",
		Body: messageBody
	}).then(
	  message => {
		if (message === 'OK') {
		  swal("Success", "Email sent!", "success");
		} else {
		  swal("Error", "Email not sent. Please try again later.", "error");
		}
	  }
	);
  }
  
