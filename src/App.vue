<script setup>
import { onMounted, watch } from 'vue';
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
import ProjectsView from './views/ProjectsView.vue';
import SkillsView from './views/SkillsView.vue';
import ContactView from './views/ContactView.vue';
import FooterComponent from './components/FooterComponent.vue';

import { useDark } from '@vueuse/core';

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
    <main
        class="bg-light-bg dark:bg-dark-bg flex flex-col gap-10 w-full h-full text-light-text dark:text-dark-text font-Poppins"
    >
        <div class="flex flex-col gap-0 w-full h-auto">
            <NavBar />
            <HomeView />
        </div>
        <SkillsView />
        <ProjectsView />
        <ContactView />
        <FooterComponent />
    </main>
</template>

<style>
body {
    width: 100%;
    height: 100%;
    margin: 0px 0px 20px 0px;
}
</style>
