<template>
  <section class="projects" :class="{ visible: shown }">
    <div class="ti1">things i've made</div>
    <div class="project-grid">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.name"
        :project="project"
        :style="{ animationDelay: `${0.1 * i}s` }"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects.js'

defineProps({
  shown: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.projects {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}
.projects.visible { opacity: 1; transform: none; }

.ti1 {
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 28px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

@media (max-width: 560px) {
  .project-grid { grid-template-columns: 1fr; }
}
</style>