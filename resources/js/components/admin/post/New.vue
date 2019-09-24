<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header text-center">
                            <h3 class="card-title">Add New Post</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" @submit.prevent="addnewPost" enctype="multipart/form-data">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="categoryid">Post Title</label>
                                    <input type="text" name="title" class="form-control" id="postId" 
                                    placeholder="Add Post Title" v-model="form.title" :class="{ 'is-invalid':
                                    form.errors.has('title') }">
                                    <has-error :form="form" field="title"></has-error>
                                </div>

                                <div class="form-group">
                                    <label for="descriptionid">Post Description</label>
                                    <!--textarea type="text" name="description" class="form-control" id="descriptionId" 
                                    placeholder="Add Post Description" v-model="form.description" :class="{ 'is-invalid':
                                    form.errors.has('description') }">
                                    </textarea-->
                                    <tinymce id="text" v-model="form.description"></tinymce>
                                    <has-error :form="form" field="description"></has-error>
                                </div>

                                <div class="form-group">
                                    <label for="categoryid">Select Category</label>
                                    <select class="form-control" :class="{ 'is-invalid':
                                    form.errors.has('cat_id') }" v-model="form.cat_id">
                                        <option disabled value="">Select Category</option>
                                        <option :value="category.id" v-for="category in getAllCategory" :key="category.id">{{category.cat_name}}</option>
                                        <!--option>1</option-->
                                        <has-error :form="form" field="cat_id"></has-error>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="categoryid">Select Image</label>
                                    <input @change="changePhoto($event)" type="file" name="photo" id="" :class="{ 'is-invalid':
                                    form.errors.has('photo') }">
                                    <img :src="form.photo" alt="" width="100" height="100">
                                    <has-error :form="form" field="cat_id"></has-error>
                                </div>
                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer text-center">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-book pr-5 pl-5"> Publish</i>
                            </button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "New",
    data(){
        return {
            form: new Form({
                title:'',
                description:'',
                cat_id:'',
                photo:''
            })
        }
    },
    mounted(){
        this.$store.dispatch("allCategory")
    },
    computed: {
        getAllCategory(){
            return this.$store.getters.getCategory
        }
    },
    methods:{
        changePhoto(event){
            let file = event.target.files[0];
            console.log(file)

            if (file.size>1048576) {
                Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                })
            } else {
                let reader = new FileReader();

                reader.onload = event => {
                    this.form.photo = event.target.result
                };
                
                reader.readAsDataURL(file);
            }
        },
        addnewPost(){
            this.form.post('/add-post')
                .then((response)=>{
                    this.$router.push('/post-list')

                    Toast.fire({
                        type: 'success',
                        title: 'Post Added successfully'
                    })
                })
                .catch((/*error*/)=>{
                    //console.log(error.message)
                })
        }

    }
}
</script>
<style scoped>

</style>