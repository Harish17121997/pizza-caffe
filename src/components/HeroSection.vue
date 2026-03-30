<template>
  <section class="hero" id="home">
    <div class="hero-bg" />
    <div class="hero-grid" />

    <!-- Decorative floating elements -->
    <div class="float float-1">☕</div>
    <div class="float float-2">🍕</div>
    <div class="float float-3">🍔</div>

    <div class="hero-content">
      <div class="eyebrow">☕ Invigorate Yourself With Our Coffee</div>

      <h1 class="hero-title">
        Cafe<br />
        <em>Eatitude</em>
      </h1>

      <p class="hero-sub">Sandwiches · Burgers · Pizza · Coffee & More</p>

      <div class="hero-btns">
        <button class="btn-primary" @click="scrollTo('#menu')">Explore Menu</button>
        <button class="btn-outline" @click="scrollTo('#contact')">Book an Order</button>
      </div>

      <div class="hero-stats">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat-num">{{ s.num }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>
    </div>

    <div class="scroll-hint">
      <div class="scroll-line" />
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: '80+',  label: 'Menu Items'    },
  { num: '₹30',  label: 'Starts From'  },
  { num: '3',    label: 'Delivery Apps' },
  { num: '100%', label: 'Fresh Daily'  },
]

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 32px 80px;
}

.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,168,67,.14) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 15% 75%, rgba(192,57,43,.08) 0%, transparent 50%),
    radial-gradient(ellipse 30% 30% at 85% 20%, rgba(212,168,67,.06) 0%, transparent 50%),
    var(--dark);
}

.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(212,168,67,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212,168,67,.04) 1px, transparent 1px);
  background-size: 64px 64px;
}

/* Floating emojis */
.float {
  position: absolute;
  font-size: 3rem;
  opacity: 0.06;
  pointer-events: none;
  animation: floatAnim 8s ease-in-out infinite;
}
.float-1 { top: 15%; left: 8%;  animation-delay: 0s;   font-size: 4rem; }
.float-2 { top: 20%; right: 8%; animation-delay: -3s;  font-size: 3.5rem; }
.float-3 { bottom: 20%; left: 12%; animation-delay: -5s; }

@keyframes floatAnim {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-20px) rotate(5deg); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 820px;
}

.eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 600;
  border: 1px solid rgba(212,168,67,.3);
  padding: 7px 22px;
  border-radius: 50px;
  margin-bottom: 28px;
  animation: fadeUp 0.9s ease both;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 12vw, 8rem);
  line-height: 0.92;
  font-weight: 900;
  color: var(--white);
  margin-bottom: 16px;
  animation: fadeUp 0.9s 0.1s ease both;
}
.hero-title em {
  font-style: italic;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  font-family: var(--font-hand);
  font-size: 1.7rem;
  color: var(--cream-dim);
  margin-bottom: 40px;
  animation: fadeUp 0.9s 0.2s ease both;
}

.hero-btns {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.9s 0.3s ease both;
}

.hero-stats {
  display: flex;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 64px;
  animation: fadeUp 0.9s 0.45s ease both;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  display: block;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cream-dim);
  margin-top: 4px;
}

.scroll-hint {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--cream-dim);
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  animation: fadeUp 0.9s 0.6s ease both;
}
.scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s infinite;
}

@media (max-width: 600px) {
  .hero { padding: 100px 20px 64px; }
  .hero-stats { gap: 24px; }
  .stat-num { font-size: 1.8rem; }
}
</style>
