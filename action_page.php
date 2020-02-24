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

    Welcome <?php echo $_POST["first_name"]; ?><br>
    Your email address is: <?php echo $_POST["user_mail"]; ?>
    <?php
    echo "<h2>Your Input:</h2>";
    echo $firstName;
    echo "<br>";
    echo $lastName;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $userMsg;
?>

</body>
  </body>

</html>