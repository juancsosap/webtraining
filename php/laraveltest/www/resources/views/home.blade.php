@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <div class="flex-center position-ref">
        <div class="content">
            <div class="title m-b-md">
                Trainers App
            </div>

            <div class="links">
                <a href="/trainers">Trainers</a>
            </div>
        </div>
    </div>
    @include('layouts._footer')
@endsection
