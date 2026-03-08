<template>
  <div class="card">
    <div class="card-top">
      <span class="card-icon">{{ project.icon }}</span>
      <span
        v-if="project.lang"
        class="card-lang"
        :style="{ background: project.langColor + '22', color: project.langColor }"
      >{{ project.lang }}</span>
    </div>
    <h3>{{ project.name }}</h3>
    <p>{{ project.desc }}</p>
    <div class="card-footer">
      <span v-if="project.stars" class="stars">✦ {{ project.stars }}</span>
      <a :href="project.url" target="_blank" class="card-link">view →</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card {
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  padding: 22px 24px;
  transition: transform 0.25s, box-shadow 0.25s;
  animation: fadeUp 0.5s ease both;
  box-shadow: 0 2px 16px rgba(180, 140, 110, 0.08);
}
.card:hover {
  transform: translateY(-4px) rotate(-0.3deg);
  box-shadow: 0 12px 36px rgba(180, 140, 110, 0.18);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.card-icon { font-size: 22px; }
.card-lang {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: 500;
}

h3 {
  font-family: 'Lora', serif;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 8px;
}
p {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stars { font-size: 12px; color: var(--muted); }
.card-link {
  font-size: 12px;
  color: var(--accent2);
  text-decoration: none;
  font-weight: 500;
  transition: letter-spacing 0.2s;
}
.card-link:hover { letter-spacing: 1px; }
</style>