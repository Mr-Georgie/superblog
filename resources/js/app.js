/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { routes } from './routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

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
    mode: 'history',
    routes // short for `routes: routes`

})

const app = new Vue({
    el: '#app',
    router
});
