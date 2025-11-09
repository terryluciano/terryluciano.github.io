<script setup>
import { useDark, useToggle } from '@vueuse/core';
import darkModeIcon from '@/assets/icons/dark-mode.svg';
import lightModeIcon from '@/assets/icons/light-mode.svg';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <nav
        class="relative w-full sm:h-24 h-20 flex flex-row md:justify-center justify-between items-center px-4"
    >
        <div
            class="flex flex-row justify-center items-center md:gap-6 sm:gap-4 gap-2 sm:text-base text-sm"
        >
            <a href="#about-me">About Me</a>
            <a href="#social">Socials</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div
            class="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-8 flex justify-center items-center z-10 cursor-pointer"
        >
            <img
                class="sm:size-8 size-6"
                :src="isDark ? lightModeIcon : darkModeIcon"
                @click="toggleDark()"
            />
        </div>
    </nav>
</template>

<style></style>
