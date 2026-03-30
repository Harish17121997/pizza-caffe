<template>
  <nav :class="{ scrolled }">
    <a href="#home" class="nav-brand">Cafe <em>Eatitude</em></a>

    <ul class="nav-links">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <button class="nav-cta" @click="scrollTo('#contact')">Order Now</button>

    <button class="hamburger" @click="$emit('open-menu')" aria-label="Open menu">
      <span /><span /><span />
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['open-menu'])

const scrolled = ref(false)

const links = [
  { href: '#about',   label: 'About'   },
  { href: '#menu',    label: 'Menu'    },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
  { href: '#map',     label: 'Find Us' },
]

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 18px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(14,13,11,0.97), transparent);
  backdrop-filter: blur(10px);
  transition: padding 0.3s, background 0.3s;
}
nav.scrolled {
  padding: 12px 40px;
  background: rgba(14, 13, 11, 0.97);
  border-bottom: 1px solid rgba(212,168,67,0.1);
}

.nav-brand {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--gold);
  text-decoration: none;
  letter-spacing: 0.03em;
}
.nav-brand em {
  font-style: italic;
  color: var(--cream);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}
.nav-links a {
  color: var(--cream-dim);
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition);
}
.nav-links a:hover { color: var(--gold); }

.nav-cta {
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--dark);
  border: none;
  padding: 10px 24px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: transform var(--transition), opacity var(--transition);
}
.nav-cta:hover { transform: translateY(-1px); opacity: 0.9; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--cream);
  border-radius: 2px;
  transition: 0.3s;
}

@media (max-width: 900px) {
  nav { padding: 14px 20px; }
  nav.scrolled { padding: 10px 20px; }
  .nav-links { display: none; }
  .nav-cta { display: none; }
  .hamburger { display: flex; }
}
</style>
