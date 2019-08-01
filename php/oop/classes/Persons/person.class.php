<?php

namespace Persons;

class Person {

    public static $legalAge = 18;

    private $name;
    private $age;

    public function __construct($name, $age) {
        echo "Constructing a Person";
        $this->setName($name);
        $this->setAge($age);
    }

    public function __destruct() {
        echo "Distructuing a Person";
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function setAge($age) {
        $this->age = $age;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function isAdult() {
        return $this->age >= self::$legalAge;
    }

}