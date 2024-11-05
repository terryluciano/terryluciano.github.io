<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    projectName: String,
    companyName: String,
    yearStart: Number,
    yearEnd: Number,
    position: String,
    projectImage: String,
    externalLink: String,
    github: String,
    techStack: Array,
});
</script>

<template>
    <div class="project-card">
        <div></div>
    </div>
</template>

<style></style>
