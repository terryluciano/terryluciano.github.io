import { defineStore } from 'pinia';
import { ref, getCurrentInstance } from 'vue';
import axios from 'axios';

export const useSkillsStore = defineStore('projects', () => {
	// states
	const skills = ref({
		backend: [],
		frontend: [],
		database: [],
		other: [],
	});
	const skillsRecieved = ref(false);
	const fetchError = ref(null);

	// getters

	// actions
	function fetchSkills() {
		const skillsPath =
			getCurrentInstance().appContext.config.globalProperties.$hostname +
			'/api/skills';
		axios
			.get(skillsPath)
			.then((res) => {
				console.log(res.data);
				skills.value.backend = skills.value.backend.concat(
					res.data.backend
				);
				skills.value.frontend = skills.value.frontend.concat(
					res.data.frontend
				);
				skills.value.database = skills.value.database.concat(
					res.data.database
				);
				skills.value.other = skills.value.other.concat(res.data.other);
				skillsRecieved.value = true;
			})
			.catch((err) => {
				console.error(err);
				fetchError.value = true;
			});
	}

	return { skills, skillsRecieved, fetchError, fetchSkills };
});
