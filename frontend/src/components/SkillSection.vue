<script setup>
import SkillCard from './SkillCard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  skillTitle: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="skill-section-div">
    <h4 class="skill-card-title">
      {{ props.skillTitle }}
    </h4>
    <div class="card-container">
      <SkillCard v-for="skill in props.skills" :key="skill" :skill="skill" />
    </div>
  </div>
</template>

<style>
.skill-section-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  max-width: 512px;
  margin: 0px;
  width: 100%;
}
</style>
