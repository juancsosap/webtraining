@extends('layouts.app')

@section('title', $training->name.' Details')

@section('content')
    @include('global._status')
    <div class="container">
        <h1>Training Details</h1>
        <div class="col-sm">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{$training->name}}</h5>
                    <h6 class="card-title">{{$training->code}}</h6>
                    <p class="card-text">{{$training->description}}</p>
                    <form action="/trainings/{{$training->code}}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('DELETE')
                        <a href="{{$training->code}}/edit" class="btn btn-primary">Edit</a>
                        <button type="submit" class="btn btn-danging">Drop</button>
                        <a href="/trainings" class="btn btn-success">Back</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection