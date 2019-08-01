<?php
    include 'includes/autoloader.inc.php';

    $person1 = new Persons\Person("Juan", 37);
    echo $person1->name . " is " . $person1->age . " years old.";
    unset($person1);
    echo Persons\Person::$legalAge;
    