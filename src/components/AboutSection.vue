<template>
  <section class="about" :class="{ visible: shown }">
    <div class="avatar-wrap">
      <img
        src="https://avatars.githubusercontent.com/u/127430703?v=4"
        alt="pero-sk avatar"
        class="avatar"
      />
      <div class="avatar-ring" />
    </div>
    <div class="about-text">
      <p class="label">hey, i'm</p>
      <h1>pero-sk<span class="dot">.</span></h1>
      <p class="bio">
        Developer with a focus on languages, tooling, and the occasional
        passion project. I build things because I find them interesting —
        and sometimes they turn out to be useful too.
      </p>
      <div class="chips">
        <span v-for="t in tags" :key="t" class="chip">{{ t }}</span>
      </div>
    </div>
    <hr>
  </section>
</template>

<script setup>
defineProps({
  shown: {
    type: Boolean,
    default: false,
  },
})

const tags = ['open source', 'lang design', 'tooling', 'python', 'java']
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.about.visible { opacity: 1; transform: none; }
.about-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-wrap { position: relative; flex-shrink: 0; margin-top: 8px; }
.avatar {
  width: 73px;
  height: 73px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(212, 132, 90, 0.25);
}
.avatar-ring {
  position: absolute;
  width: 80px;
  height: 80px;
  inset: -3.25px;
  border-radius: 50%;
  border: 1.5px dashed rgba(212, 132, 90, 0.4);
  animation: spin 18s linear infinite;
}

h1 {
  font-size: clamp(36px, 6vw, 52px);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 16px;
}
.dot { color: var(--accent); }

.bio {
  font-size: 15px;
  line-height: 1.75;
  color: #3d2e22;
  max-width: 460px;
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
}
.bio em {
  font-style: italic;
  color: var(--accent);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: center;
}
.chip {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(212, 132, 90, 0.1);
  color: var(--accent);
  border: 1px solid rgba(212, 132, 90, 0.25);
}

.links { display: flex; gap: 12px; justify-content: center; }
.btn {
  padding: 9px 22px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  background: var(--accent);
  color: white;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(212, 132, 90, 0.3);
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 132, 90, 0.4);
}

@media (max-width: 560px) {
  .about { flex-direction: column; gap: 24px; }
}
</style>