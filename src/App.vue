<script setup>
import { onMounted, watch } from 'vue';
import { useDark } from '@vueuse/core';
import HomeSection from './views/HomeSection.vue';
import NavBar from './components/NavBar.vue';
import ProjectsView from './views/ProjectsView.vue';
import SkillsView from './views/SkillsView.vue';
import ContactView from './views/ContactView.vue';
import FooterComponent from './components/FooterComponent.vue';
import SocialSection from './views/SocialSection.vue';
import AboutMeSection from './views/AboutMeSection.vue';

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
        class="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-Poppins flex flex-col items-center"
    >
        <NavBar />
        <div class="flex flex-col w-full h-full max-w-[1200px]">
            <HomeSection />
            <div class="flex flex-col 3xl:gap-40 gap-20 w-full py-12">
                <AboutMeSection />
                <SocialSection />
                <!-- <SkillsView />
                <ProjectsView />
                <ContactView />
                <FooterComponent /> -->
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
    margin: 0px 0px 20px 0px;
}
</style>
