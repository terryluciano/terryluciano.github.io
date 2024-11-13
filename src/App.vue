<script setup>
import { onMounted, watch } from 'vue';
import { useDark } from '@vueuse/core';
import HomeSection from './views/HomeSection.vue';
import NavBar from './components/NavBar.vue';
import SocialSection from './views/SocialSection.vue';
import AboutMeSection from './views/AboutMeSection.vue';
import ProjectsSection from './views/ProjectsSection.vue';
import SkillSection from './views/SkillsSecion.vue';
import ContactSection from './views/ContactSection.vue';

const isDark = useDark();

const changeBgColor = () => {
    document.getElementById('app').style.background = isDark.value ? '#EFF1FB' : '#040610';
    document.documentElement.style.background = !isDark.value ? '#EFF1FB' : '#040610';
};

watch(isDark, () => {
    changeBgColor();
});

onMounted(() => {
    changeBgColor();
    console.log(
        'Hello! Thank you for checking out my portfolio! If you have any questions please email me at terryluciano1@gmail.com',
    );
});
</script>

<template>
    <div
        class="transition-all duration-150 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-Poppins flex flex-col items-center scroll-smooth overflow-x-hidden box-content w-screen"
    >
        <NavBar />
        <div class="flex flex-col items-center w-full h-full px-4 overflow-x-hidden">
            <HomeSection />
            <div
                class="flex flex-col 3xl:gap-40 md:gap-20 gap-10 w-full max-w-[1200px] py-12 overflow-x-hidden"
            >
                <AboutMeSection />
                <SocialSection />
                <ProjectsSection />
                <SkillSection />
                <ContactSection />
            </div>
        </div>
    </div>
</template>

<style>
#app {
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
</style>
