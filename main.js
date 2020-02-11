/*
Citations:Adapted from W3 Schools JavaScript tutorial 
*/




//Mobile Navigation Menu Display->changes class name from menu to responsive 
function myFunction() {
  var x = document.getElementById("myMenu"); 
  if (x.className === "menu") {
    x.className += " responsive";
  } 
  else {
    x.className = "menu";
  }
}

function getFormLength() {
  var formLength = document.getElementById("contact_form").elements.length;
  document.getElementById("demo").innerHTML = "Found " + formLength + " elements in the form.";
}

function getFirstName() {
  var firstName = document.getElementById("contact_form").elements.namedItem("first_name").value;
  return firstName;
}

function displayThankYouMessage() {
  var name = getFirstName();
  document.getElementById("demo").innerHTML = "Thanks, " + name +"!";
}

function getAllElements() {
  var x = document.getElementById("contact_form");
  var txt = "";
  var i;

  for (i = 0; i < x.length; i++) {
    txt = txt + x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}

function validateForm() {
  var fName = document.forms["contact_form"]["fname"].value;
  var lName = document.forms["contact_form"]["lname"].value;
  var email = document.forms["contact_form"]["mail"].value;
  var msg = document.forms["contact_form"]["msg"].value;
  
  if (fName == "") {
    alert("First Name must be filled out");
    return false;
  }
  else if (lName == "") {
    alert("Last Name must be filled out");
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  else if (msg == "") {
    alert("Message must be filled out");
    return false;
  }

  else {
    return true; 
  }
}
