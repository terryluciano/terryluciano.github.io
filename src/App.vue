<script setup>
import { onMounted } from 'vue'
import HomeView from './views/HomeView.vue'
import NavBar from './components/NavBar.vue'
import ProjectsView from './views/ProjectsView.vue'
import SkillsView from './views/SkillsView.vue'
import ContactView from './views/ContactView.vue'

onMounted(() => {
  console.log(
    'Hello! Thank you for checking out my portfolio! If you have any questions please email me at terryluciano1@gmail.com'
  )
})
</script>

<template>
  <NavBar />
  <HomeView />
  <SkillsView />
  <ProjectsView />
  <ContactView />
</template>

<style>
#app {
  background-color: #f0effb;
  color: #070600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
html {
  margin: 0;
}
body {
  background-color: #f0effb;
  margin: 0px 0px 20px 0px;
}
</style>
