<template>
	<v-app>
		<app-menu />

		<app-toobar />

		<v-content>
			<app-carrosel />
	    </v-content>

		<app-footer />
	</v-app>
</template>

<script>
import Footer from './footer.vue'
import Carrosel from './carolsel.vue'
import Toobar from './toobar.vue'
import Menu from './menu.vue'

export default {
	components: {
		'app-footer': Footer,
		'app-carrosel': Carrosel,
		'app-toobar': Toobar,
		'app-menu': Menu
	}
}
</script>
