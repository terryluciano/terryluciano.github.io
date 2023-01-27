<script setup>
import SectionTitle from '../components/SectionTitle.vue';
import { useProjectsStore } from '@/stores/index.js';
import ProjectCard from '@/components/ProjectCard.vue';

const projectsStore = useProjectsStore();
projectsStore.fetchProjects();

const sectionTitle = 'Projects';
</script>

<template>
	<div id="projects">
		<SectionTitle :title="sectionTitle" />
		<div class="project-container">
			<ProjectCard
				v-for="project in projectsStore.projects"
				:key="project"
				:projectImage="project.projectImage"
				:projectName="project.projectName"
				:companyName="project.companyName"
				:yearStart="project.yearStart"
				:yearEnd="project.yearEnd"
				:position="project.position"
				:projectDescription="project.projectDescription"
				:github="project.github"
				:externalLink="project.externalLink"
				:techStack="project.techStack"
			/>
		</div>
	</div>
</template>

<style>
#projects {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.project-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
}
</style>
