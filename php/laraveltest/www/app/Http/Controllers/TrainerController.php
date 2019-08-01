<?php

namespace App\Http\Controllers;

use App\Trainer;
use Illuminate\Http\Request;
use App\Http\Requests\TrainerRequest;
use Illuminate\Support\Facades\Storage;

class TrainerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->user()->authorizeRoles('admin');

        $trainers = Trainer::all();
        return view('trainers.index', compact('trainers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('trainers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TrainerRequest $request)
    {
        //$request->validate(['name' => 'required | min:4',
        //                    'nick' => 'required | min:4',
        //                    'description' => 'required']);
        $trainer = new Trainer();
        $trainer->name = $request->input('name');
        $trainer->image = $this->storeImage($request);
        $trainer->nick = $request->input('nick');
        $trainer->description = $request->input('description');
        $trainer->save();
        return redirect()->route('trainers.index')->with('status','Trainer Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*
    public function show($nick)
    {
        $trainer = Trainer::where('nick', '=', $nick)->firstOrFail();
        return view('trainers.show', compact('trainer'));
    }
    
    public function show($id)
    {
        $trainer = Trainer::find($id);
        return view('trainers.show', compact('trainer'));
    }
    */
    public function show(Trainer $trainer)
    {
        return view('trainers.show', compact('trainer'));
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Trainer $trainer)
    {
        return view('trainers.edit', compact('trainer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TrainerRequest $request, Trainer $trainer)
    {
        $trainer->fill($request->except('image'));
        $path = $this->storeImage($request);
        if($path != "") {
            $trainer->image = $path;
        } 
        $trainer->save();
        return redirect()->route('trainers.show', [$trainer])->with('status','Trainer Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trainer $trainer)
    {
        Storage::delete('public/images/'.$trainer->image);
        $trainer->delete();
        return redirect()->route('trainers.index')->with('status','Trainer Deleted Successfully');
    }

    public function storeImage(Request $request) {
        if($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time().$file->getClientOriginalName();
            $file->storeAs('public/images', $filename);
            return $filename;
        }
        return "";
    }
}
