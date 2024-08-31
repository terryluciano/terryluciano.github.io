<script setup>
import { ref } from 'vue'

const mobileNavMenu = ref(null)

function openNavMenu() {
  mobileNavMenu.value.style.top = '0%'
}
function closeNavMenu() {
  mobileNavMenu.value.style.top = '100%'
}
</script>

<template>
  <nav>
    <div class="main-tabs">
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="nav-external-links">
      <a href="https://github.com/terryluciano" target="_blank">
        <img src="@/assets/github-vector.png" />
      </a>
      <a
        href="https://drive.google.com/file/d/1FQpr_OEa2d782MHCi6RXhFF8I4dLt3Lm/view?usp=sharing"
        target="_blank"
      >
        <img src="@/assets/resume-icon.png" />
      </a>
    </div>
  </nav>
  <img id="nav-button" @click="openNavMenu" src="@/assets/stack-menu-icon.png" />
  <div ref="mobileNavMenu" id="mobile-nav">
    <img id="nav-button-close" @click="closeNavMenu" src="@/assets/close-menu-icon.png" />
    <!-- main page tabs -->
    <div class="mobile-nav-tabs">
      <a href="#home" @click="closeNavMenu">Home</a>
      <a href="#skills" @click="closeNavMenu">Skills</a>
      <a href="#projects" @click="closeNavMenu">Projects</a>
      <a href="#contact" @click="closeNavMenu">Contact</a>
    </div>
    <!-- line break -->
    <div class="line-break"></div>
    <!-- external links -->
    <div class="mobile-nav-tabs">
      <a href="https://github.com/TerryLDev" @click="closeNavMenu" target="_blank">Github</a>
      <a
        href="https://drive.google.com/file/d/10GMeR36X5thbS0UBGeuC970UhxWwYLXf/view?usp=sharing"
        target="_blank"
        @click="closeNavMenu"
        >Resume</a
      >
    </div>
  </div>
</template>

<style>
nav {
  z-index: 2;
  position: fixed;
  width: 100%;
  /* background-color: #8a84e2; */
  top: 0%;
  padding: 10px 10px;
  display: grid;
  grid-template: 1fr / 1fr auto 1fr;
}

.main-tabs {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.main-tabs a {
  color: #070600;
  text-decoration: none;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 1.2em;
  transition: all 0.25s linear;
}

.main-tabs a:hover {
  color: #f0effb;
}

.nav-external-links {
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-right: 10px;
}

.nav-external-links img {
  height: 24px;
}

.nav-external-links a {
  color: #070600;
  text-decoration: none;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: all 0.25s linear;
}

.nav-external-links a:hover {
  color: #f0effb;
}

#nav-button {
  display: none;
}

#mobile-nav {
  display: none;
  position: fixed;
  top: 100%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: #8a84e2;
  z-index: 3;
  transition: all 0.5s ease;
}

.mobile-nav-tabs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.mobile-nav-tabs a {
  text-decoration: none;
  color: #070600;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 1.5em;
}

.line-break {
  border: 2px solid #070600;
  width: 50%;
}

#nav-button-close {
  position: absolute;
  top: 0%;
  right: 0%;
  height: 25px;
  width: 25px;
  z-index: 2;
  margin: 10px;
}

@media (max-width: 500px) {
  #mobile-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  nav {
    display: none;
  }
  #nav-button {
    display: block;
    position: fixed;
    top: 0%;
    left: 0%;
    height: 25px;
    width: 25px;
    z-index: 2;
    margin: 10px;
  }
}
</style>
