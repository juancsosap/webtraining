<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class TestController extends Controller {
    public function test() {
        return 'Testing the controller';
    }
    public function testing($name) {
        return 'Testing the controller - '.$name;
    }
}