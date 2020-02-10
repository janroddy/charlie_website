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
