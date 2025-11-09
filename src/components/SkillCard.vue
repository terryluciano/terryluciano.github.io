<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    skill: String,
});
</script>

<template>
    <div
        class="flex-center bg-light-primary dark:bg-dark-primary py-1 px-2 rounded-lg cursor-pointer group hover:scale-105 transition-all ease-in-out"
    >
        <p class="font-Poppins xs:text-2xl text-lg font-normal">
            {{ props.skill }}
        </p>
    </div>
</template>

<style></style>
