<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            "name" => "Juan Alejandro",
            "email" => "alejandro.demetrio13@gmail.com",
            "password" => bcrypt("elcancer"),
        ]);

        /*User::factory()->create([
            "name" => "Juan Alejandro",
            "email" => "alejandro.demetrio13@gmail.com",
            "password" => bcrypt("elcancer"),
        ]);*/

        Project::factory(100)->create();
    }
}
