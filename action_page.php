<html>

  <?php
    echo $_POST["first_name"]; 
    echo "<br>";
    echo $_POST["last_name"];
    echo "<br>";
    echo $_POST["user_mail"];
    echo "<br>";
    echo $_POST["user_message"];
    echo "<br>";
  ?>

  <?php
    // define variables and set to empty values
    $name = $email = $gender = $comment = $website = "";

    //check to see if form has been submitted 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = test_input($_POST["name"]);
      $email = test_input($_POST["email"]);
      $website = test_input($_POST["website"]);
      $comment = test_input($_POST["comment"]);
      $gender = test_input($_POST["gender"]);
    }
    function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
  ?>

  <body>

    Welcome <?php echo $_POST["first_name"]; ?><br>
    Your email address is: <?php echo $_POST["user_mail"]; ?>

  </body>

</html>