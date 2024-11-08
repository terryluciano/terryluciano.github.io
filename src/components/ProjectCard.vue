<script setup>
import { defineProps, ref, watchEffect } from 'vue';
import defaultImage from '@/assets/projects/default.png';
import { useDark } from '@vueuse/core';
import GithubIcon from './icons/GithubIcon.vue';
import LinkIcon from './icons/LinkIcon.vue';

const props = defineProps({
    projectImage: String,
    projectName: String,
    companyName: String,
    monthStart: String,
    yearStart: [Number, String],
    monthEnd: String,
    yearEnd: [Number, String],
    position: String,
    description: String,
    github: String,
    externalLink: String,
    techStack: Array,
});

const isDark = useDark();

const imgArr = ref([]);

watchEffect(() => {
    imgArr.value = props.techStack.map(
        (tech) =>
            `${window.location.origin}/public/icons/${isDark.value ? 'dark' : 'light'}/${tech}.svg`,
    );
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
                    <span> | </span>
                    <span v-if="props.yearEnd" class="font-medium"
                        >{{ props?.monthStart }} {{ props.yearStart }} - {{ props?.monthEnd }}
                        {{ props.yearEnd }}</span
                    >
                    <span v-else class="font-medium"
                        >{{ props?.monthStart }} {{ props.yearStart }}</span
                    >
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
                <div
                    v-show="props.github || props.externalLink"
                    class="w-0.5 h-6 bg-light-text dark:bg-dark-text"
                />
                <a v-show="props?.github" :href="props.github" target="_blank">
                    <GithubIcon :height="24" />
                </a>
                <a v-show="props?.externalLink" :href="props.externalLink" target="_blank">
                    <LinkIcon :height="24" />
                </a>
            </div>
        </div>
    </div>
</template>

<style></style>
