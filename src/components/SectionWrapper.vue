<script setup>
import SectionHeader from '../components/SectionHeader.vue';
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="flex flex-col w-full h-auto items-center justify-start gap-12">
        <SectionHeader :title="props.title" />
        <slot></slot>
    </div>
</template>
