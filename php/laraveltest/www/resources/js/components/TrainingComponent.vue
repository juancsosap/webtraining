<template>
    <div>
        <div class="flex-center" v-show="loading">
            <spinner></spinner>
        </div>
        <div class="row">
            <div class="col-sm" v-for="training in trainings">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title text-primary">{{ training.name }}</h3>
                        <h6 class="card-text">{{ training.code }}</h6>
                        <p class="card-text">{{ training.description }}</p>
                        <a href="/trainings/" class="btn btn-primary">See More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
    export default {
        data() {
            return {
                trainings: [],
                loading: true
            }
        },
        mounted() {
            axios.get('http://localhost:8000/trainings')
                 .then((response) => {
                     this.trainings = response.data
                     this.loading = false
                 })
            console.log('Training Component Mounted');
        }
    }
</script>