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
        class="transition-all duration-150 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-Poppins flex flex-col items-center w-full scroll-smooth"
    >
        <NavBar />
        <div class="flex flex-col w-full h-full max-w-[1200px]">
            <HomeSection />
            <div class="flex flex-col 3xl:gap-40 gap-20 w-full py-12">
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
}

body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
</style>
