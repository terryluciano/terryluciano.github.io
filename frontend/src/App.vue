<template>
	<NavBar />
	<HomeView />
	<SkillsView />
	<ProjectView />
</template>

<script setup>
import { onMounted } from 'vue';
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
import ProjectView from './views/ProjectsView.vue';
import SkillsView from './views/SkillsView.vue';

onMounted(() => {
	console.log(
		'Hello! Thank you for checking out my portfolio! If you have any questions please email me at terryluciano1@gmail.com'
	);
});
</script>

<style>
#app {
	background-color: #f0effb;
	color: #070600;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 100px;
}
html {
	margin: 0;
}
body {
	background-color: #f0effb;
	margin: 0px;
}
</style>
