import axios from "axios"

export default {
    state: {
        category:[],
        post:[],
        blogpost:[]
    },
    getters: {
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getBlogPost(state){
            return state.blogpost
        }
    },
    actions: {
        allCategory(context){
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
                })
        },
        getAllPost(context){
            axios.get('/post')
                .then((response) => {
                    context.commit('posts', response.data.posts)
                })
        },
        getBlogPost(context){
            axios.get('/blogpost')
                .then((response) => {
                    context.commit('getblogPosts', response.data.posts)
                })
        }
    },
    mutations: {
        categories(state,data){
            return state.category = data
        },
        posts(state,payload){
            return state.post = payload
        },
        getblogPosts(state,payload){
            return state.blogpost = payload
        }
    }
}