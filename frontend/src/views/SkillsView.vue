<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import SkillCard from '../components/SkillCard.vue';

const sectionTitle = 'Skills';
const backendSkills = [
	'Python',
	'Node.js',
	'Express.js',
	'Django',
	'Socket.io',
];
const frontendSkills = ['JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'React'];
const databaseSkills = ['MongoDB', 'MySQL'];
const otherSkills = [
	'Figma',
	'Git',
	'Bash',
	'Arduino',
	'C/C++',
	'C#',
	'Unity',
	'React Native',
	'Heroku',
];
</script>

<template>
	<div id="skills">
		<SectionTitle :title="sectionTitle" />
		<div class="skill-cards">
			<h4 class="skill-card-title">Backend</h4>
			<div class="card-container">
				<SkillCard
					v-for="skill in backendSkills"
					:key="skill"
					:skill="skill"
				/>
			</div>
			<h4 class="skill-card-title">Frontend</h4>
			<div class="card-container">
				<SkillCard
					v-for="skill in frontendSkills"
					:key="skill"
					:skill="skill"
				/>
			</div>
			<h4 class="skill-card-title">Databases</h4>
			<div class="card-container">
				<SkillCard
					v-for="skill in databaseSkills"
					:key="skill"
					:skill="skill"
				/>
			</div>
			<h4 class="skill-card-title">Other</h4>
			<div class="card-container">
				<SkillCard
					v-for="skill in otherSkills"
					:key="skill"
					:skill="skill"
				/>
			</div>
		</div>
	</div>
</template>

<style>
#skills {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.skill-cards {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;
	max-width: 512px;
}

.skill-card-title {
	font-family: 'Nunito Sans', sans-serif;
	font-size: 2em;
	margin: 0px;
}

.card-container {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	flex-wrap: wrap;
}
</style>
