/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

//support vuex
import Vuex from 'vuex';
Vue.use(Vuex);
import storeData from "./store/index";
const store = new Vuex.Store(
    storeData
)
//support moment
import { filter } from './filter'

import { routes } from './routes';

// editor support
import tinymce from 'vue-tinymce-editor'

Vue.component('tinymce', tinymce)
//tinymce.init({
    //selector: "textarea",  // change this value according to your HTML
    //plugins: "fullpage",
    //fullpage_default_doctype: "text"
//})
  

import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);

//V-form
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;

// sweetalert
import Swal from 'sweetalert2'

window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})
window.Toast = Toast
//Toast.fire({
  //  type: 'success',
    //title: 'Signed in successfully'
//})

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

const router = new VueRouter({
    mode: 'hash',
    routes // short for `routes: routes`

})

const app = new Vue({
    el: '#app',
    router,
    store
});
