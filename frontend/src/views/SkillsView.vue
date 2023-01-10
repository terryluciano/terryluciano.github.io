<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import SkillCard from '../components/SkillCard.vue';
import axios from 'axios';
import { ref } from '@vue/reactivity';
import { useElementBounding } from '@vueuse/core';

let backendInView = false;
let frontendInView = false;
let databaseInView = false;
let otherInView = false;
let dataReceive = ref(false);

const hostURL =
	process.env.NODE_ENV === 'production'
		? 'https://www.terrenceluciano.com'
		: 'http://localhost:4000';

function getSkills() {
	const apiFetchURL = hostURL + '/api/skills';
	axios
		.get(apiFetchURL)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err);
		});
}

getSkills();

const backendCards = ref(null);
const frontendCards = ref(null);
const databaseCards = ref(null);
const otherCards = ref(null);

function checkInView() {
	const backendPosition = useElementBounding(backendCards);
	const frontendPosition = useElementBounding(frontendCards);
	const databasePosition = useElementBounding(databaseCards);
	const otherPosition = useElementBounding(otherCards);

	if (backendPosition.bottom.value - window.visualViewport.height <= 0) {
		backendInView = true;
	}
	if (frontendPosition.bottom.value - window.visualViewport.height <= 0) {
		frontendInView = true;
	}
	if (databasePosition.bottom.value - window.visualViewport.height <= 0) {
		databaseInView = true;
	}
	if (otherPosition.bottom.value - window.visualViewport.height <= 0) {
		otherInView = true;
	}
	if (
		backendInView == false ||
		frontendInView == false ||
		databaseInView == false ||
		otherInView == false
	) {
		window.requestAnimationFrame(checkInView);
	}
}

window.requestAnimationFrame(checkInView);

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

		<Transition>
			<div class="skills-section" v-if="dataRecieved">
				<div class="skill-cards" ref="skillCards">
					<h4
						class="skill-card-title"
						ref="backendCards"
						v-if="backendInView"
					>
						Backend
					</h4>
					<div class="card-container">
						<SkillCard
							v-for="skill in backendSkills"
							:key="skill"
							:skill="skill"
						/>
					</div>
					<h4 class="skill-card-title" ref="frontendCards">
						Frontend
					</h4>
					<div class="card-container">
						<SkillCard
							v-for="skill in frontendSkills"
							:key="skill"
							:skill="skill"
						/>
					</div>
					<h4 class="skill-card-title" ref="databaseCards">
						Databases
					</h4>
					<div class="card-container">
						<SkillCard
							v-for="skill in databaseSkills"
							:key="skill"
							:skill="skill"
						/>
					</div>
					<h4 class="skill-card-title" ref="otherCards">Other</h4>
					<div class="card-container">
						<SkillCard
							v-for="skill in otherSkills"
							:key="skill"
							:skill="skill"
						/>
					</div>
				</div>

				<img
					id="skills-picture"
					src="@/assets/grapy-coder-workplace.png"
				/>
			</div>

			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
				"
				v-else
			>
				<div class="loading-circle"></div>
			</div>
		</Transition>
	</div>
</template>

<style>
#skills {
	display: flex;
	flex-direction: column;
	align-items: center;
}

#skills-picture {
	width: 512px;
	height: 444px;
}

.skills-section {
	display: flex;
	flex-direction: row;
	gap: 20px;
	justify-content: center;
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

/* Loading Circle */
.loading-circle {
}

/* Transition animation */
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
