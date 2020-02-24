<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Contact Charlie</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script src="main.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>


  <?php
    // define variables and set to empty values
    $firstName = $lastName = $email = $userMsg = "";

    //check to see if form has been submitted 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $firstName = test_input($_POST["first_name"]);
      $lastName = test_input($_POST["last_name"]);
      $email = test_input($_POST["user_mail"]);
      $userMsg = test_input($_POST["user_message"]);
  
    }
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
  ?>
  
  <body>
    
    <div class="menu" id="myMenu">
        <div id="myLinks">
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="likes.html">Hobbies</a></li>
          <li><a href="friends.html">friends</a></li>
          <li><a href="adventures.html">Adventures</a></li>
          <li><a href="contact.php">Contact</a></li>
          <li><a href="index.html" class="active">Home</a></li>
        </ul> 
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>  
      </div>
      <img src="img/logo.png" alt="Charlie Roddy-Foster logo" class="center" id="logo"> 
      </div>
    
    <h1 class="titles">Send Charlie Some Love</h1>

    <div class ="row">
      <div class="column">
        <img src="img/baby_char.jpg" alt="Yorkie Poodle cross puppy" class="center" id="sweetboy2">
      </div>
      <div  class="column" id="form_box"> 
          
          <div id="error_messages">
            <h2>Fill out the form below to send a message to Charlie </h2>
            <h3>All required fields are indicated with an * </h3>
          </div>

          

          <form onsubmit="validateForm()" id="contact_form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
          
          <ul>
            <li>
              <label for="name">*First Name</label><br>
              <input type="text" id="fname" name="first_name" required>
            </li>

            <li>
              <label for="name">Last Name</label><br>
              <input type="text" id="lname" name="last_name">
            </li>
            
            <li>
              <label for="mail">*E-mail</label><br>
              <input type="email" id="mail" name="user_mail">
            </li>
            
            <li>

              <label for="msg">*Message</label><br>
              <textarea type="text" id="msg" name="user_message" maxlength="500"></textarea>
            </li>
    
          </ul>
            <div id="buttons">
              <input id="submit_button" type="submit" value="Send Message" onsubmit="validateForm()">
            </div>              
          </form>
        
        <div id="demo"></div>

      </div>  
        <div id="input_message" class="column">
        Thanks, <?php echo $firstName . "!"?>
        <br>
        <?php 
          echo "<h2 id='input_title'>Your Input:</h2>";
          echo "Your first name is: "; 
          echo $firstName;
          echo "<br>";
          echo "<br>";
          echo "Your last name is: "; 
          echo $lastName;
          echo "<br>";
          echo "<br>";
          echo "Your email address is: "; 
          echo $email;
          echo "<br>";
          echo "<br>";
          echo "Your message is: "; 
          echo "<br>";
          echo $userMsg;
        ?> 
      </div>
    </div>


  </body>

  <footer class="footer">
  </footer> 
</html>