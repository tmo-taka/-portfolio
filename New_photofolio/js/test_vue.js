
import vueType from '../vue/vue-type.vue'

var app = new Vue({
	el: '#app',
	components: { vueType },
	data: {
		gLink: [
			{ text: 'いつか', link: '/' },
			{ text: 'このまま', link: '/' }
		]
	}
});

export default {
}