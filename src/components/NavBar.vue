<script setup>
import { useDark, useToggle } from '@vueuse/core';
import darkModeIcon from '@/assets/icons/dark-mode.svg';
import lightModeIcon from '@/assets/icons/light-mode.svg';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <nav class="relative w-full h-24 flex flex-row justify-center items-center">
        <div class="flex flex-row justify-center items-center gap-4">
            <a href="#about-me">About Me</a>
            <a href="#socials">Socials</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div
            class="absolute top-1/2 -translate-y-1/2 right-8 flex justify-center items-center z-10 cursor-pointer"
        >
            <img
                class="size-8"
                :src="isDark ? lightModeIcon : darkModeIcon"
                @click="toggleDark()"
            />
        </div>
    </nav>
</template>

<style></style>
