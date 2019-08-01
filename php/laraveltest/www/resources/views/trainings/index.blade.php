@extends('layouts.app')

@section('title', 'Training List')

@section('content')
    @include('global._status')
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h1>Trainings List</h1>
            </div>
            <div class="col-md-4">
                <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#addTraining">Create Training</button>
            </div>
        </div>
        <training-component></training-component>
        <create-training-modal></create-training-modal>
    </div>
@endsection
