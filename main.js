function myFunction() {
  var x = document.getElementById("navMenu");
  console.log(x);
  if (x.className === "menu") {
    x.className += " responsive";
  } 
  else {
    x.className = "menu";
  }
}