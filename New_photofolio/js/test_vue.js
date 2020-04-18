//import {VueTyper} from './vue/vue-typer.vue';
//import Vue from 'vue';

Vue.component('vue-typer', {
  		template:`<div>A custom component!</div>`,
})
console.log('writing');

var app = new Vue({
	el: '#app',
	components: {
		'vue-typer':VueTyper,
	},
});