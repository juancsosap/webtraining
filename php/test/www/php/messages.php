<?php

include_once "utils.php";

if(isset($_GET['context']) && isset($_GET['status'])) {
    $message = messages($_GET['context'], $_GET['status']); 
    echo $message;
}
