<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="flex-center flex-row w-full h-auto gap-4">
        <div class="w-full bg-light-secondary dark:bg-dark-secondary h-[2px]" />
        <h3 class="xs:text-5xl text-4xl font-medium font-Inter flex-shrink-0">{{ props.title }}</h3>
        <div class="w-full bg-light-secondary dark:bg-dark-secondary h-[2px]" />
    </div>
</template>
