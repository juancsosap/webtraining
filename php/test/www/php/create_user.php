<?php

include_once "dao/db_create.php";

function loadfile($image, $destination) {
    $fileext = getfileext($image['name']);

    $allowed = array("jpg", "jpeg");

    if(!in_array($fileext, $allowed)) {
        return "invalid";
    } else {
        if($image['size'] > 1000000) { // 1GB
            return "toobig";
        } else {
            move_uploaded_file($image['tmp_name'], $destination.'.'.$fileext);
        }
    }
}

function getfileext($path) {
    return strtolower(end(explode('.', $path)));
}

if(isset($_POST['submit'])) {

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $image = $_FILES['image'];

    $querystr = "fn=$firstname&ln=$lastname&em=$email&un=$username";

    if(empty($firstname) || empty($lastname) || empty($email) || 
        empty($username)  || empty($password)) {
        header("Location: ../register.php?context=user&status=empty&$querystr");
        exit();    
    }

    if(!preg_match("/^[a-zA-Z '-.]{3,100}$/", $firstname) ||
    !preg_match("/^[a-zA-Z '-.]{3,100}$/", $lastname)) {
        header("Location: ../register.php?context=user&status=invalid&$querystr");
        exit();
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../register.php?context=email&status=invalid&$querystr");
        exit();
    }

    $has_image = ($image['error'] == 0);

    if($has_image) {
        $status = loadfile($image, "../uploads/$username");
        header("Location: ../register.php?context=user&status=$status&$querystr");
        exit();
    }

    $status = create_user($firstname, $lastname, $email, $username, $password, $has_image);

    if($status == "created") {
        header("Location: ../index.php?context=user&status=$status");
    } else {
        header("Location: ../register.php?context=user&status=$status&$querystr");
    }

}

