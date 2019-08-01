<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PHP Test</title>
</head>
<body>

  <form action="index.php" method="get">
    <input type="text" name="person" id="person">
    <button>Summit</button>
  </form>

  <?php
    $name = $_GET['person'];
    echo "Welcome " .  $name . " to the Test.";
  ?>

  <hr>

  <?php
    // service name from docker-compose.yml
    $host = 'db';

    $user = 'devuser';
    $password = 'devpass';
    $db = 'test_db';

    $conn = new mysqli($host, $user, $password, $db);

    if($conn->connect_error){
      echo 'Connection failed - ' . $conn->connect_error;
    } else {
      echo 'Sucessfully connected to MySQL Conatiner';
    }
  ?>

</body>
</html>

