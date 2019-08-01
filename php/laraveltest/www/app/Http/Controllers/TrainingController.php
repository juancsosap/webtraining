<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrainingController extends Controller
{
    private $data = [['id' => 1, 'name' => 'Mathematics', 'code' => 'MAT01', 'description' => 'Mathematics Foundations'],
                     ['id' => 2, 'name' => 'Physics', 'code' => 'PHY01', 'description' => 'Physics Foundations'],
                     ['id' => 3, 'name' => 'Chemical', 'code' => 'CHE01', 'description' => 'Chemical Foundations']];

    public function index(Request $request) {
        if($request->ajax()) {
            return response()->json($this->data, 200);
        }
        return view('trainings.index');
    }

    public function store(Request $request) {
        if($request->ajax()) {
            $training = new Training();
            $training->name = $request->input('name');
            $training->code = $request->input('code');
            $training->description = $request->input('description');
            $training->save();
            return response()->json(['message' => 'Training created Successfully'], 200);
        }
    }

    public function create(Request $request) {}

    public function show(Training $training) {}

    public function edit(Training $training) {}

    public function update(Request $request, Training $training) {}

    public function destroy(Training $training) {}

}
