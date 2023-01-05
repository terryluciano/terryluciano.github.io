<template>
	<nav>
		<a href="#home">Home</a>
		<a href="#skills">Skills</a>
		<a href="#projects">Projects</a>
		<a href="#contact">Contact</a>
		<a href="#">Resume</a>
		<a href="#">GitHub</a>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style>
nav {
	z-index: 2;
	position: fixed;
	width: 100%;
	background-color: #8a84e2;
	top: 0%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 20px;
}

nav a {
	color: #070600;
	text-decoration: none;
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 600;
	font-size: 1.25em;
}
</style>
