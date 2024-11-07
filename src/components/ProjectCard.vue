<script setup>
import { defineProps, computed, watchEffect } from 'vue';
import defaultImage from '@/assets/projects/default.png';

const props = defineProps({
    projectImage: String,
    projectName: String,
    companyName: String,
    yearStart: [Number, String],
    yearEnd: [Number, String],
    position: String,
    description: String,
    github: String,
    externalLink: String,
    techStack: Array,
});

const imgArr = computed(() => props.techStack.map((tech) => `src/assets/icons/${tech}.svg`));

watchEffect(() => {
    console.log(imgArr.value);
});
</script>

<template>
    <div class="flex flex-row gap-6 justify-start items-center w-full">
        <div class="relative w-full max-w-[392px] h-[320px]">
            <div
                class="z-[1] h-full w-[calc(100%-32px)] bg-light-primary dark:bg-dark-primary rounded-lg"
            />
            <div
                class="absolute ml-8 z-[2] top-1/2 -translate-y-1/2 h-[calc(100%-64px)] w-[calc(100%-32px)] bg-cover bg-center rounded-lg"
                :style="{ 'background-image': `url(${props.projectImage || defaultImage})` }"
            />
        </div>
        <div class="flex flex-col gap-3 w-full">
            <!-- Project, company, and year -->
            <div class="flex flex-col gap-1">
                <p class="font-Inter font-semibold text-2xl">
                    <span>{{ props.projectName }}</span>
                    <span v-show="props.companyName"> - {{ props.companyName }}</span>
                    <span v-if="props.yearEnd"> ({{ props.yearStart }} - {{ props.yearEnd }})</span>
                    <span v-else> ({{ props.yearStart }})</span>
                </p>
                <p
                    v-show="props.position"
                    class="font-Inter text-xl text-light-text/75 dark:text-dark-text/75"
                >
                    {{ props.position }}
                </p>
            </div>
            <!-- Description -->
            <p class="font-Poppins">{{ props.description }}</p>
            <div class="flex flex-row gap-2.5 justify-start items-center">
                <img
                    v-for="imgSrc in imgArr"
                    :key="imgSrc"
                    :src="imgSrc"
                    class="size-6 text-light-text dark:text-dark-text"
                />
            </div>
        </div>
    </div>
</template>

<style></style>
