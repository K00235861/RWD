function validate() {
  var u = document.forms["LogInForm"]["Username"].value;
  var p = document.forms["LogInForm"]["pass"].value;
  if (u == "") {
    alert("User name must be filled out!");
    return false;
  }
    else if (p == "") {
    alert("Password must be filled out!");
    return false;
  }
}

