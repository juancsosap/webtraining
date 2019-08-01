<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Register Form</title>
</head>
<body>

  <h1>Register Page</h1>
  <h2><a href="index.php">Home</a></h2>
  <h2><a href="loggin.php">Loggin</a></h2>
  <h2><a href="register.php">Register</a></h2>

  <form action="php/create_user.php" method="post" enctype="multipart/form-data">
    <input type="text" name="firstname" placeholder="Firstname" value="<?php echo $_GET['fn']; ?>"><br>
    <input type="text" name="lastname" placeholder="Lastname" value="<?php echo $_GET['ln']; ?>"><br>
    <input type="text" name="email" placeholder="Email" value="<?php echo $_GET['em']; ?>"><br>
    <input type="text" name="username" placeholder="Username" value="<?php echo $_GET['un']; ?>"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <input type="file" name="image" accept="image/jpeg"><br>
    <button name="submit">Summit</button>
  </form>

  <h3><?php include "php/messages.php"; ?></h3>

</body>
</html>

