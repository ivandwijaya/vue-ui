<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppHeader from './assets/js/components/AppHeader.vue';

    export default {
        name: 'app',
		components: {
            AppHeader
		},
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>