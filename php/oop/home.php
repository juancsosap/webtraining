<?php
    include_once 'person.php';

    $person1 = new Person("Juan", 37);
    echo $person1->name . " is " . $person1->age . " years old.";
    unset($person1);
    