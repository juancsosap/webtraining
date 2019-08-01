<template>
    <div class="modal fade" id="addTraining" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Training</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> 
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Code</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Create Training Modal Component Mounted');
        }
    }
</script>

<style>
</style>
