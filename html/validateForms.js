function validateForms() {
  var x = document.forms["RegisterForm"]["Uname"].value;
  var y = document.forms["RegisterForm"]["email"].value;
  var p = document.forms["RegisterForm"]["password"].value;
  if (x == "") {
    alert("User name must be filled out!");
    return false;
  }
    else if (y == "") {
    alert("Email must be filled out!");
    return false;
  }
    else if (p == "") {
    alert("Password must be filled out!");
    return false;
  }
}

