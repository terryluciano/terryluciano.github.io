<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import SkillCard from '../components/SkillCard.vue';

const sectionTitle = 'Skills';
const skills = ['React', 'Vue', 'HTML'];
</script>

<template>
	<div id="skills">
		<SectionTitle :title="sectionTitle" />
		<SkillCard v-for="skill in skills" :key="skill" :skill="skill" />
	</div>
</template>

<style>
#skills {
	display: flex;
	flex-direction: column;
}
</style>
