<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    'projectImage',
    'projectName',
    'companyName',
    'yearStart',
    'yearEnd',
    'position',
    'projectDescription',
    'github',
    'externalLink',
    'techStack',
]);

const projectImage = props.projectImage;

const techStackSrc = props.techStack;
</script>

<template>
    <div class="project-card">
        <img :src="projectImage" class="project-image" />
        <div class="project-information">
            <h3>
                {{ props.projectName }}
                <span v-if="props.companyName != ''">- {{ props.companyName }}</span>
                <span v-if="props.yearStart == props.yearEnd"> ({{ props.yearStart }})</span>
                <span v-else> ({{ props.yearStart }} - {{ props.yearEnd }})</span>
            </h3>
            <h4>{{ props.position }}</h4>
            <p>{{ props.projectDescription }}</p>

            <div class="extra-project-links">
                <img
                    v-for="tech in techStackSrc"
                    :key="tech"
                    :src="tech"
                    class="project-information-icon"
                />
                <div
                    v-if="props.github != '' || props.externalLink != ''"
                    class="icon-line-break"
                ></div>
                <!-- <a v-if="props.github != ''" :href="props.github"
          ><img class="project-information-icon" src="@/assets/github-vector.png"
        /></a>
        <a v-if="props.externalLink != ''" :href="props.externalLink" target="_blank"
          ><img class="project-information-icon" src="@/assets/external-link-vector.png"
        /></a> -->
            </div>
        </div>
    </div>
</template>

<style>
.project-card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 1000px;
    margin: 0px 20px;
}
.project-image {
    width: 400px;
    height: 225px;
    object-fit: cover;
    border: 5px solid #8a84e2;
    border-radius: 10px;
    flex-shrink: 0;
}
.project-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0px;
    font-family: 'Open Sans', sans-serif;
}
.project-information h3 {
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Nunito Sans';
    font-style: normal;
    margin: 0px;
}
.project-information h4 {
    font-size: 1.25em;
    font-weight: 400;
    font-family: 'Open Sans';
    font-style: normal;
    margin: 0px;
    opacity: 0.5;
}
.project-information p {
    margin: 10px 0px;
}
.project-information-icon {
    height: 24px;
    margin: 0px;
}
.extra-project-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}
.icon-line-break {
    border-width: 1px;
    border-style: solid;
    border-color: #070600;
    height: 24px;
    opacity: 0.5;
}

@media screen and (max-width: 850px) {
    .project-card {
        flex-direction: column;
    }
    .project-image {
        width: 100%;
        max-width: 100%;
        height: 300px;
    }
    .project-information {
        align-items: center;
    }
    .project-information h3 {
        text-align: center;
    }
}

@media screen and (max-width: 300px) {
    .project-image {
        height: 200px;
    }
}
</style>
