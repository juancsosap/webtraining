<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Day of Week</title>
    <?php include "func.php"; ?>
</head>
<body>
    <h1>
        Today is 
        <?php
            echo dayOfWeek(date("w"));
        ?>
    </h1>
</body>
</html>