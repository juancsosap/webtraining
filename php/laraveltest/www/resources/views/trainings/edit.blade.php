@extends('layouts.app')

@section('title', $training->name.' Editing')

@section('content')
    <div class="container">
        @include('global._errors')
        <h1>Training Editing</h1>
        <form action="/trainings/{{$training->code}}" method="post">
            @method('PUT')
            @csrf
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control"
                value="{{$training->name}}">
            </div>
            <div class="form-group">
                <label for="code">Code</label>
                <input type="text" name="code" id="code" class="form-control"
                value="{{$training->code}}">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" id="description" class="form-control"
                value="{{$training->description}}">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            <a href="/trainings/{{$training->code}}" class="btn btn-success">Cancel</a>
        </form>
    </div>
@endsection
