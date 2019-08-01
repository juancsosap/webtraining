<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = Role::where('name', 'admin')->first();
        $role_oper = Role::where('name', 'oper')->first();

        $user = new User();
        $user->name = "User";
        $user->email = "user@mail.com";
        $user->password = bcrypt("password");
        $user->save();
        $user->roles()->attach($role_oper);

        $user = new User();
        $user->name = "Admin";
        $user->email = "admin@mail.com";
        $user->password = bcrypt("password");
        $user->save();
        $user->roles()->attach($role_admin);
    }
}
