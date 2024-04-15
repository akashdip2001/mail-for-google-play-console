function sendToWhatsapp() {
	let number = "+917076033011";
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
  
	var url = "https://wa.me/" + number + "?text="
	  + "Name : " +name+ "%0a"
	  + "Number: " +phone+ "%0a"
	  + "Email : " +email+ "%0a"
	  + "Message : " +message+ "%0a%0a";
  
	console.log("Opening WhatsApp:", url);
  
	window.open(url, '_blank').focus();
  
	// Create a div element for the success message
	var successDiv = document.createElement('div');
	successDiv.classList.add('success-message-link'); // Add the desired class
  
	// Create an anchor element for the clickable link
	var link = document.createElement('a');
	link.href = "https://sites.google.com/view/freecadapp-downlod/home"; // Set the link href
	link.innerHTML = "If the WhatsApp does not open<br>update the app 14/02/24<br>Click here";
	//link.style.color = "red"; // Set the color to red
	link.style.textDecoration = "none"; // Remove underline
	link.style.marginTop = "10px"; // Set margin top
	link.style.cursor = "pointer"; // Set cursor to pointer
  
	// Add hover effect
	link.onmouseover = function() {
	  link.style.color = "red";
	};
  
	link.onmouseout = function() {
	  link.style.color = "blue";
	};
  
	// Append the link to the success div
	successDiv.appendChild(link);
  
	// Show the success message with the custom content
	swal({
	  title: "Success",
	  text: "Message sent via WhatsApp!",
	  icon: "success",
	  button: "OK",
	  content: {
		element: successDiv,
	  },
	});
  }
  