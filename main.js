/*
Citations: Some functions adapted from W3 Schools JavaScript tutorial 
*/


function checkEmailInput() {
  isValidEmail = mail.checkValidity();

    if (isValidEmail) {
      console.log("valid email");
      return true;
    }
    else {
      console.log("invalid email");
      return false;
    }
}



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
//returns number of elements in the form 
function getFormLength() {
  var formLength = document.getElementById("contact_form").elements.length;
  document.getElementById("demo").innerHTML = "Found " + formLength + " elements in the form.";
}

//returns user input of first name 
function getFirstName() {
  var firstName = document.getElementById("contact_form").elements.namedItem("first_name").value;
  return firstName;
}

//displays thank you message to user after submitting a message to Charlie 
function displayThankYouMessage() {
  var name = getFirstName();
  document.getElementById("demo").innerHTML = "Thanks for sending Charlie some love, " + name +"!";
  document.getElementById("demo").style.backgroundColor = "#daf3f4";
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
//
function checkMsgLength() {
  var strLen = document.getElementById("msg").value.length;
  console.log("Message Length: " + strLen);
  
  if (strLen > 500) {
    alert("Charlie cannot receive messages longer than 500 characters.");
  }
} 

function checkFName() {
  var fName = document.forms["contact_form"]["fname"].value;

  if (fName == "") {
    document.getElementById("error_messages").innerHTML = "***First Name must be filled out.<br>" 
    document.getElementById("fname").style.borderColor = "red";
    return false;
  }
  else {
    document.getElementById("fname").style.borderColor = "black";
  }
  return true;
}

function checkEmail() {
  var email = document.forms["contact_form"]["mail"].value;

  if (email == "") {
    //alert("Email must be filled out");
    document.getElementById("mail").style.borderColor = "red";
    document.getElementById("error_messages").innerHTML = "***Email must be filled out.<br>"
  } 
  else {
    document.getElementById("mail").style.borderColor = "black";
  }

}

function checkMsgLength() {
  var strLen = documet.forms["contact_form"]["msg"].length;
  if (strLen > 500) {
    alert("Charlie cannot receive messages longer than 500 characters.");
  } 
}


function checkMsg() {
  if (msg == "" || checkMsgLength() == false) {
   // alert("Message must be filled out with between 1 and 500 characters");
    document.getElementById("msg").style.borderColor = "red";
    document.getElementById("error_messages").innerHTML = "***Message must be between 1-500 characters.<br>"
    return false;
  }
  else {
    document.getElementById("msg").style.borderColor = "black";
    displayThankYouMessage();
    return true; 
  }
}


//validates contact form input on the browser side 
function validateForm() {
  var check1 = checkFName();
  var check2 = checkEmail();
  var check3 = checkMsg();

  if (check3 == false || check2 == false || check1 == false) {
    return false;
  }
  return true;
}




