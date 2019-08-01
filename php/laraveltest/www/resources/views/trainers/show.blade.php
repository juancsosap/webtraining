@extends('layouts.app')

@section('title', $trainer->name.' Details')

@section('content')
    @include('global._status')
    <div class="container">
        <h1>Trainer Details</h1>
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <img src="{{ Storage::url('images/'.$trainer->image) }}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{$trainer->name}}</h5>
                    <h6 class="card-title">{{$trainer->nick}}</h6>
                    <p class="card-text">{{$trainer->description}}</p>
                    <form action="/trainers/{{$trainer->nick}}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('DELETE')
                        <a href="{{$trainer->nick}}/edit" class="btn btn-primary">Edit</a>
                        <button type="submit" class="btn btn-danger">Drop</button>
                        <a href="/trainers" class="btn btn-success">Back</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection