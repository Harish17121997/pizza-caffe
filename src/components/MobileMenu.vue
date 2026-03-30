<template>
  <Transition name="menu">
    <div v-if="open" class="mobile-menu">
      <button class="close-btn" @click="$emit('close')">✕</button>
      <div class="menu-brand">
        <span class="brand-name">Cafe <em>Eatitude</em></span>
        <span class="brand-tag">Invigorate Yourself With Our Coffee</span>
      </div>
      <nav class="menu-nav">
        <a v-for="link in links" :key="link.href"
           :href="link.href"
           @click="$emit('close')">
          <span class="link-num">{{ link.num }}</span>
          {{ link.label }}
        </a>
      </nav>
      <div class="menu-footer">
        <a href="tel:+919881478959" class="menu-phone">📞 +91 98814 78959</a>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({ open: Boolean })
defineEmits(['close'])

const links = [
  { href: '#about',   label: 'About',   num: '01' },
  { href: '#menu',    label: 'Menu',    num: '02' },
  { href: '#gallery', label: 'Gallery', num: '03' },
  { href: '#contact', label: 'Order',   num: '04' },
  { href: '#map',     label: 'Find Us', num: '05' },
]
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: var(--dark2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 40px;
}

.close-btn {
  position: absolute;
  top: 24px; right: 28px;
  background: none;
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--cream);
  font-size: 1.2rem;
  cursor: pointer;
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: border-color var(--transition), color var(--transition);
}
.close-btn:hover { border-color: var(--gold); color: var(--gold); }

.menu-brand {
  text-align: center;
  margin-bottom: 40px;
}
.brand-name {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--gold);
}
.brand-name em { font-style: italic; color: var(--cream); }
.brand-tag {
  display: block;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cream-dim);
  margin-top: 4px;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.menu-nav a {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-display);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--cream);
  text-decoration: none;
  padding: 8px 0;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color var(--transition);
}
.menu-nav a:hover { color: var(--gold); }
.link-num {
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--gold);
  letter-spacing: 0.1em;
  opacity: 0.7;
}

.menu-footer {
  margin-top: 32px;
}
.menu-phone {
  color: var(--cream-dim);
  font-size: 0.9rem;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color var(--transition);
}
.menu-phone:hover { color: var(--gold); }

/* Transitions */
.menu-enter-active, .menu-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}
.menu-enter-from, .menu-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
