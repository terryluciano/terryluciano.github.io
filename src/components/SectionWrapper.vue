<script setup>
import SectionHeader from '../components/SectionHeader.vue';
import { defineProps } from 'vue';

const { id, title } = defineProps({
    title: String,
    id: String,
});
</script>

<template>
    <div
        :id="id"
        class="flex flex-col w-full h-auto items-center justify-start md:gap-12 xs:gap-8 gap-6"
    >
        <SectionHeader :title="title" />
        <slot />
    </div>
</template>
