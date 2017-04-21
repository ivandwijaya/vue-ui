<template>
	<nav class="nav has-shadow">
		<div class="nav-left">
			<a class="nav-item">
				<img src="/dist/logo.png" alt="Main Logo">
			</a>
		</div>

		<!-- This "nav-toggle" hamburger menu is only visible on mobile -->
		<!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
		<span class="nav-toggle">
			<span></span>
			<span></span>
			<span></span>
		</span>

		<!-- This "nav-menu" is hidden on mobile -->
		<!-- Add the modifier "is-active" to display it on mobile -->
		<div class="nav-right nav-menu">
			<router-link class="nav-item" to="/" exact>Home</router-link>
			<router-link class="nav-item" to="/about">About</router-link>
			<router-link class="nav-item" to="/documentation">Documentation</router-link>
			<router-link class="nav-item" to="/faq">FAQ</router-link>
		</div>
	</nav>
</template>

<script>
    export default {
        data: function () {
            return {
                hello: 'hello!'
            }
        }
    }
</script>