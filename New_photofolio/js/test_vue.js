
import vueType from '../vue/vue-type.vue'

var app = new Vue({
	el: '#app',
	components: { vueType },
	data: {
		gLink:
		[[
			{ id: 1, text: 'いつか', link: '/' },
			{ id: 2, text: 'このまま', link: '/' }
		],
		[
			{ id: 1, text: 'ででで', link: '/' },
			{ id: 2, text: 'ででででん', link: '/' },
			{ id: 3, text: 'おでん', link: '/' },
		],
		[
			{ id: 1, text: 'ぽっぽ', link: '/' },
		],
	]
	}
});

export default {
}