import { defineStore } from 'pinia';
import { ref, getCurrentInstance } from 'vue';
import axios from 'axios';

export const useProjectsStore = defineStore('projects', () => {
	// states
	const projects = ref([]);
	const fetchError = ref(null);

	// getters

	// actions
	function fetchProjects() {
		const projectsPath =
			process.env.NODE_ENV === 'production'
				? '/api/projects'
				: getCurrentInstance().appContext.config.globalProperties
						.$hostname + '/api/projects';

		axios
			.get(projectsPath)
			.then((res) => {
				projects.value = res.data;
			})
			.catch((err) => {
				console.error(err);
				fetchError.value = true;
			});
	}

	return { projects, fetchError, fetchProjects };
});

export const useSkillsStore = defineStore('skills', () => {
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
			process.env.NODE_ENV === 'production'
				? '/api/projects'
				: getCurrentInstance().appContext.config.globalProperties
						.$hostname + '/api/skills';
		axios
			.get(skillsPath)
			.then((res) => {
				skills.value.backend = res.data.backend;
				skills.value.frontend = res.data.frontend;
				skills.value.database = res.data.database;
				skills.value.other = res.data.other;
				skillsRecieved.value = true;
			})
			.catch((err) => {
				console.error(err);
				fetchError.value = true;
			});
	}

	return { skills, skillsRecieved, fetchError, fetchSkills };
});
