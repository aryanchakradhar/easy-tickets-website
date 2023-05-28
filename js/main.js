function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("email_error");
  var passwordError = document.getElementById("password_error");
  var mainError = document.getElementById("main_error");

  if (!email) {
    emailError.innerHTML = "Email is required.";
    emailError.style.display = "block";
  } else {
    emailError.innerHTML = "";
    emailError.style.display = "none";
  }

  if (!password) {
    passwordError.innerHTML = "Password is required.";
    passwordError.style.display = "block";
  } else if (password && password.length < 8) {
    passwordError.innerHTML = "Password is too short.";
    passwordError.style.display = "block";
  } else {
    passwordError.innerHTML = "";
    passwordError.style.display = "none";
  }

  if (emailError.innerHTML || passwordError.innerHTML) {
    mainError.innerHTML = "Login unsuccessful. Please check error messages.";
    mainError.classList.add("alert-error");
  } else {
    mainError.innerHTML = "Login successful.";
    mainError.classList.remove("alert-error");
    mainError.classList.add("alert-success");
  }

  mainError.style.display = "block";

  return false;
}
