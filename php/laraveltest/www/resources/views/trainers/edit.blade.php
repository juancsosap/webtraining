@extends('layouts.app')

@section('title', $trainer->name.' Editing')

@section('content')
    <div class="container">
        @include('global._errors')
        <h1>Trainer Editing</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <img src="{{ Storage::url('images/'.$trainer->image) }}" class="img-thumbnail">
                </div>
            </div>
            <div class="col-md-8">
                <form action="/trainers/{{$trainer->nick}}" method="post" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" class="form-control"
                        value="{{$trainer->name}}">
                    </div>
                    <div class="form-group">
                        <label for="nick">Nick</label>
                        <input type="text" name="nick" id="nick" class="form-control"
                        value="{{$trainer->nick}}">
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description" class="form-control"
                        value="{{$trainer->description}}">
                    </div>
                    <div class="form-group">
                        <label for="image">Image</label>
                        <input type="file" name="image" id="image">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                    <a href="/trainers/{{$trainer->nick}}" class="btn btn-success">Cancel</a>
                </form>
            </div>
        </div>
    </div>
@endsection
