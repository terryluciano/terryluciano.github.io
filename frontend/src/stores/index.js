import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  // states
  const projects = ref({})

  // getters

  // actions

  return { projects }
})
