<script setup>
import { defineProps } from 'vue';
import { useDark } from '@vueuse/core';

const props = defineProps({
    title: String,
    iconLight: String,
    iconDark: String,
    link: String,
    bgImage: String,
});

const isDark = useDark();
</script>

<template>
    <div
        class="relative flex-col flex-center gap-2 bg-light-social-card dark:bg-dark-social-card w-full h-64 rounded-lg"
    >
        <img
            :src="isDark ? props.iconDark : props.iconLight"
            class="size-16"
            :alt="props.title + ` icon`"
        />
        <p class="font-Inter font-medium text-5xl">{{ props.title }}</p>
    </div>
</template>
