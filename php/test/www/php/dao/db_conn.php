<?php

// service name from docker-compose.yml
$host = 'db';

$user = 'devuser';
$password = 'devpass';
$db = 'users';

$conn = mysqli_connect($host, $user, $password, $db);
