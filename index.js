function checkEmail() {
  var email = document.querySelector(".email-input-field");
  var email_error_text = document.querySelector(".error-message");
  var email_error_icon = document.querySelector(".error-icon");
  var email_input_container = document.querySelector(".email-container");
  var email_input_field = document.querySelector(".email-input-field");

  var emailTest =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  // input reset

  email_error_icon.style.visibility = "hidden";
  email_input_container.style.border = "1px solid #ce9797";

  // email validation

  if (!emailTest.test(email.value)) {
    email_error_text.innerHTML = "Please provide a valid email";
    email_error_text.style.color = " 	#f96262";
    email_error_text.style.visibility = "visible";
    email_error_icon.style.visibility = "visible";
    email_input_container.style.border = "2px solid #f96262";
    email.focus;
    return false;
  } else {
    email_error_text.innerHTML = "Thanks for signing up with us!";
    email_error_text.style.color = "#ce9797";
    email_input_field.value = "";
    email_input_field.trim();
    email_error_icon.style.visibility = "hidden";
    email_input_container.style.border = "1px solid #ce9797";
  }
}
