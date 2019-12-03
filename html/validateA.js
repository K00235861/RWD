function validateA() {
  var a = document.forms["ArticleForm"]["AName"].value;
  var s = document.forms["ArticleForm"]["summ"].value;
  if (a == "") {
    alert("User must fill out the article name!");
    return false;
  }
    else if (s == "") {
    alert("Summary of article must be present!");
    return false;
  }
}

