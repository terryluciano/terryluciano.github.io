<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import SkillSection from '../components/SkillSection.vue';
import { ref } from '@vue/reactivity';
import { useProjectStore } from "@/store.js";

const skills = useProjectStore().skills;

const backendCards = ref(null);
const frontendCards = ref(null);
const databaseCards = ref(null);
const otherCards = ref(null);

const sectionTitle = 'Skills';
</script>

<template>
	<div id="skills">
		<SectionTitle :title="sectionTitle" />

		<div class="skills-section">
			<div class="skill-cards" ref="skillCards">
				<SkillSection
					ref="backendCards"
					:skillTitle="'Backend'"
					:skills="skills.backend"
				/>
				<SkillSection
					ref="frontendCards"
					:skillTitle="'Frontend'"
					:skills="skills.frontend"
				/>
				<SkillSection
					ref="databaseCards"
					:skillTitle="'Databases'"
					:skills="skills.database"
				/>
				<SkillSection
					ref="otherCards"
					:skillTitle="'Other'"
					:skills="skills.other"
				/>
			</div>

			<img id="skills-picture" src="@/assets/4380744.png" />
		</div>
	</div>
</template>

<style>
#skills {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0px 20px;
}

#skills-picture {
	width: 512px;
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

/* Transition animation */
.v-enter-active,
.v-leave-active {
	transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

@media screen and (max-width: 1100px) {
	#skills-picture {
		display: none;
	}
}
@media screen and (max-width: 500px) {
	.skill-card-title {
		align-self: center;
	}
	.card-container {
		justify-content: center;
	}
	.skill-section-div {
		align-items: center;
	}
}
</style>
