function checkEmail() {
  var email = document.querySelector("#user-input");
  var emailTest =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!emailTest.test(email.value)) {
    alert("Email address apears invalid, please provide your email address.");
    email.focus;
    return false;
  }
}
