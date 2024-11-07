<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/constants/projects';
import SectionWrapper from '@/components/SectionWrapper.vue';
</script>

<template>
    <SectionWrapper title="Projects" id="projects">
        <ProjectCard v-for="project in projects" :key="project" v-bind="project" />
    </SectionWrapper>
</template>

<style></style>
