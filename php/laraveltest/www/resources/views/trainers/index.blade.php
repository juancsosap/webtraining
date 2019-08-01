@extends('layouts.app')

@section('title', 'List')

@section('content')
    @include('global._status')
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>Trainer List</h1>
            </div>
            <div class="col-md-4">
                <a href="/trainers/create" class="btn btn-success float-right">Create Trainer</a>
            </div>
        </div>
        <div class="row">
            @foreach ($trainers as $trainer)
                <div class="col-sm">
                    <div class="card" style="width: 18rem;">
                        <img src="{{ Storage::url('images/'.$trainer->image) }}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{$trainer->name}}</h5>
                            <h6 class="card-text">{{$trainer->nick}}</h6>
                            <p class="card-text">{{$trainer->description}}</p>
                            <a href="/trainers/{{$trainer->nick}}" class="btn btn-primary">See More</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
