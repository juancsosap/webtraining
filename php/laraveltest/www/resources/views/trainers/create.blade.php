@extends('layouts.app')

@section('title', 'Create')

@section('content')
    <div class="container">
        @include('global._errors')
        <form action="/trainers" method="post" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Nick</label>
                <input type="text" name="nick" id="nick" class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Description</label>
                <input type="text" name="description" id="description" class="form-control">
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" name="image" id="image">
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <a href="/trainers" class="btn btn-success">Cancel</a>
        </form>
    </div>

@endsection
