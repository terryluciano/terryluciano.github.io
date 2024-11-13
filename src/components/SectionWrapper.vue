<script setup>
import SectionHeader from '../components/SectionHeader.vue';
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    id: String,
});
</script>

<template>
    <div
        :id="props.id"
        class="flex flex-col w-full h-auto items-center justify-start md:gap-12 xs:gap-8 gap-6"
    >
        <SectionHeader :title="props.title" />
        <slot></slot>
    </div>
</template>
