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
    <div class="flex flex-col xs:gap-4 gap-2">
        <h4 class="font-semibold xs:text-[32px] text-2xl font-Inter">
            {{ props.title }}
        </h4>
        <div class="flex flex-row flex-wrap gap-2">
            <SkillCard v-for="skill in props.skills" :key="skill" :skill="skill" />
        </div>
    </div>
</template>

<style></style>
