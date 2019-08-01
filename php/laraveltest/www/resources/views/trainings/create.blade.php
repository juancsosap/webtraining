@extends('layouts.app')

@section('title', 'Create')

@section('content')
    <div class="container">
        @include('global._errors')
        <form action="/trainings" method="post">
            @csrf
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="code">Nick</label>
                <input type="text" name="code" id="code" class="form-control">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" name="description" id="description" class="form-control">
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" name="image" id="image">
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <a href="/trainings" class="btn btn-success">Cancel</a>
        </form>
    </div>

@endsection
