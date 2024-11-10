<script setup>
import SkillCard from './SkillCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <div class="flex flex-col gap-4">
        <h4 class="font-semibold text-[32px] font-Inter">
            {{ props.title }}
        </h4>
        <div class="flex flex-row flex-wrap gap-2">
            <SkillCard v-for="skill in props.skills" :key="skill" :skill="skill" />
        </div>
    </div>
</template>

<style></style>
