<?php

function messages($context, $status) {
    $context = strtocapital($context);
    switch($_GET['status']) {
        case 'created': return $context." Created Successfully!!";
        case 'empty': return "Some fields are empty!!";
        case 'invalid': return "Invalid ".$context."!!";
        case 'sqlerror': return "Database Error!!";
        default: return "Invalid Status!!";
    }    
}

function strtocapital($text) {
    return strtoupper(substr($text,0,1)) . strtolower(substr($text,1));
}
