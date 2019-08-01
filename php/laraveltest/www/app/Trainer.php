<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    protected $fillable = ['name', 'nick', 'description', 'image'];
    
    public function getRouteKeyName() {
        return 'nick';
    }
}
