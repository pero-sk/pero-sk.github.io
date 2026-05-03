<template>
  <div class="page" :class="{ dark }">
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />

    <ThemeToggle :dark="dark" @toggle="dark = !dark" />
    <PenScrollbar :dark="dark" />

    <main>
      <AboutSection :shown="shown" />
      <ProjectsSection :shown="shown" />
      <footer>pero-sk · <a href="https://github.com/pero-sk" target="_blank">@pero-sk</a><br>
      pero_sk · <a href="https://modrinth.com/user/pero_sk" target="_blank">/pero_sk</a></footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import PenScrollbar from './components/PenScrollbar.vue'
import './assets/styles/global.css'

const shown = ref(false)
const dark = ref(false)
onMounted(() => setTimeout(() => shown.value = true, 80))
</script>

<style scoped>
.page {
  min-height: calc(100vh - 24px);
  margin: 12px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  background: var(--cream);
  color: var(--ink);
  transition: background 0.3s ease, color 0.3s ease;
}

.page.dark {
  --cream: #0e0e0e;
  --warm: #161616;
  --ink: #f0ebe4;
  --darkness: #c6c6c6;
  --muted: #888080;
  --accent: #e8956d;
  --accent2: #8ecfbc;
  --card-bg: rgba(255, 255, 255, 0.04);
  background: #0e0e0e;
  color: #f0ebe4;
}

main {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  padding: 72px 28px 60px;
}
</style>