<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainings extends Model
{
    protected $fillable = ['name', 'code', 'description'];

    public function getRouteKeyName() {
        return 'code';
    }
}
