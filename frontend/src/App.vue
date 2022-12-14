<template>
	<NavBar />
	<HomeView />
	<ProjectView />
	<SkillsView />
</template>

<script setup>
import { onMounted } from 'vue';
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
import ProjectView from './views/ProjectsView.vue';
import SkillsView from './views/SkillsView.vue';

onMounted(() => {
	console.log('Hello');
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
</style>
