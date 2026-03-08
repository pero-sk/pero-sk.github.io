<template>
  <button class="theme-toggle" @click="$emit('toggle')" :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'">
    <span class="icon">{{ dark ? '/' : '()' }}</span>
  </button>
</template>

<script setup>
defineProps({ dark: { type: Boolean, default: false } })
defineEmits(['toggle'])
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(140, 123, 110, 0.2);
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
.icon { font-size: 16px; line-height: 1; }
</style>