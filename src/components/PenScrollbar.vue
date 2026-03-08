<template>
  <div class="pen-track">
    <!-- Track line -->
    <div class="track-line">
      <div class="track-fill" :style="{ height: scrollPercent + '%' }" />
    </div>

    <!-- Pen SVG that slides along the track -->
    <div class="pen-wrap" :style="{ top: penTop + 'px' }">
      <svg
        width="28"
        height="80"
        viewBox="0 0 28 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Clip / cap top -->
        <rect x="9" y="0" width="10" height="6" rx="3" :fill="dark ? '#c8b08a' : '#b8946a'" />
        <!-- Cap band -->
        <rect x="7" y="5" width="14" height="4" rx="1" :fill="dark ? '#e8c98a' : '#d4a85a'" />
        <!-- Barrel -->
        <rect x="8" y="9" width="12" height="44" rx="3" :fill="dark ? '#e8e0d4' : '#2d2118'" />
        <!-- Barrel shine -->
        <rect x="10" y="12" width="3" height="36" rx="1.5" :fill="dark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.07)'" />
        <!-- Grip section -->
        <rect x="8" y="53" width="12" height="10" rx="2" :fill="dark ? '#c8a87a' : '#d4845a'" />
        <!-- Grip lines -->
        <line x1="8" y1="56" x2="20" y2="56" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
        <line x1="8" y1="59" x2="20" y2="59" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
        <line x1="8" y1="62" x2="20" y2="62" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
        <!-- Taper -->
        <path d="M8 63 L14 78 L20 63 Z" :fill="dark ? '#bfa882' : '#3d2e1e'" />
        <!-- Nib tip -->
        <path d="M12 76 L14 80 L16 76 Z" :fill="dark ? '#e8956d' : '#d4845a'" />
        <!-- Ink drop hint -->
        <circle cx="14" cy="80" r="1.5" :fill="dark ? '#e8956d' : '#d4845a'" opacity="0.7" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  dark: { type: Boolean, default: false }
})

const scrollPercent = ref(0)
const trackHeight = ref(0)
const PEN_HEIGHT = 80

const penTop = computed(() => {
  const maxTop = trackHeight.value - PEN_HEIGHT
  return Math.max(0, (scrollPercent.value / 100) * maxTop)
})

function onScroll() {
  const el = document.documentElement
  const scrolled = el.scrollTop
  const total = el.scrollHeight - el.clientHeight
  scrollPercent.value = total > 0 ? (scrolled / total) * 100 : 0
}

function onResize() {
  trackHeight.value = window.innerHeight - 48 // account for top/bottom margin
}

onMounted(() => {
  onResize()
  onScroll()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.pen-track {
  position: fixed;
  right: 0px;
  top: 24px;
  bottom: 24px;
  width: 28px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.track-line {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: rgba(140, 123, 110, 0.15);
  border-radius: 1px;
  overflow: hidden;
}

.track-fill {
  width: 100%;
  background: var(--accent);
  opacity: 0.5;
  border-radius: 1px;
  transition: height 0.1s linear;
}

.pen-wrap {
  position: absolute;
  left: 0;
  transition: top 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>