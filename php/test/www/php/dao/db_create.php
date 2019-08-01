<?php

function create_user($firstname, $lastname, $email, $username, $password) {

    include "db_conn.php";

    $fname = mysqli_real_escape_string($conn, strtolower($firstname));
    $lname = mysqli_real_escape_string($conn, strtolower($lastname));
    $email = mysqli_real_escape_string($conn, strtolower($email));
    $uname = mysqli_real_escape_string($conn, strtolower($username));
    $passw = password_hash($password, PASSWORD_DEFAULT);

    $sql = 'INSERT INTO users (firstname, lastname, email, username, password, register) 
            VALUES (?, ?, ?, ?, ?, NOW());';
    $stmt = mysqli_stmt_init($conn);

    if(mysqli_stmt_prepare($stmt, $sql)) { 
        mysqli_stmt_bind_param($stmt, "sssss", $fname, $lname, $email, $uname, $passw);
        if(mysqli_stmt_execute($stmt)) {
            return "created";
        }
    }

    return "sqlerror";    

}
