<template>
  <section class="menu-section" id="menu">
    <div class="menu-inner">

      <div class="menu-header fade-up">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Our <em>Menu</em></h2>
        <div class="divider divider-center" />
        <p class="section-desc">
          From light bites to full meals — explore our entire selection below.
          All prices in ₹. Parcel charges extra.
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="tabs fade-up">
        <button
          v-for="cat in CATEGORIES" :key="cat"
          class="tab"
          :class="{ active: activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Menu Grid -->
      <TransitionGroup name="cards" tag="div" class="cards-grid">
        <div
          v-for="item in filteredMenu"
          :key="item.name"
          class="menu-card"
        >
          <span class="card-badge" :class="badgeClass(item.type)">
            {{ badgeLabel(item.type) }}
          </span>
          <div class="card-body">
            <div class="card-name">{{ item.name }}</div>
            <div class="card-price"><span class="rupee">₹</span>{{ item.price }}</div>
          </div>
          <p class="card-desc">{{ item.desc }}</p>
        </div>
      </TransitionGroup>

      <!-- Pizza note -->
      <div v-if="activeCategory === 'Pizza'" class="note fade-up">
        🍕 All pizzas are 7" personal size &nbsp;|&nbsp; Parcel charges: ₹10
      </div>

      <!-- Item count -->
      <div class="item-count fade-up">
        Showing {{ filteredMenu.length }} items
        <span v-if="activeCategory !== 'All'">in {{ activeCategory }}</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, MENU } from '../data/menu.js'

const activeCategory = ref('All')

const filteredMenu = computed(() =>
  activeCategory.value === 'All'
    ? MENU
    : MENU.filter(i => i.cat === activeCategory.value)
)

function badgeClass(type) {
  return {
    'badge-veg':    type === 'veg',
    'badge-egg':    type === 'egg',
    'badge-nonveg': type === 'nonveg',
  }
}
function badgeLabel(type) {
  if (type === 'veg')    return '🟢 Veg'
  if (type === 'egg')    return '🟡 Egg'
  return '🔴 Non-Veg'
}
</script>

<style scoped>
.menu-section {
  background: var(--dark);
  padding: 100px 40px;
}
.menu-inner { max-width: 1200px; margin: 0 auto; }

.menu-header {
  text-align: center;
  margin-bottom: 48px;
}
.menu-header .section-desc { margin: 0 auto; }

/* ── Tabs ── */
.tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 48px;
}
.tab {
  background: transparent;
  border: 1.5px solid rgba(212,168,67,0.18);
  color: var(--cream-dim);
  padding: 9px 22px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all var(--transition);
  white-space: nowrap;
}
.tab:hover { border-color: var(--gold); color: var(--gold); }
.tab.active {
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  border-color: transparent;
  color: var(--dark);
  font-weight: 700;
}

/* ── Cards Grid ── */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
  gap: 18px;
}

.menu-card {
  background: var(--dark2);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: var(--radius);
  padding: 18px 20px 20px;
  position: relative;
  overflow: hidden;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}
.menu-card::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(212,168,67,.06), transparent 60%);
  opacity: 0;
  transition: opacity var(--transition);
}
.menu-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212,168,67,0.22);
  box-shadow: 0 12px 40px rgba(0,0,0,0.35);
}
.menu-card:hover::before { opacity: 1; }

.card-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 50px;
  margin-bottom: 10px;
}
.badge-veg    { background: rgba(34,197,94,.12);  color: #4ade80; border: 1px solid rgba(34,197,94,.25); }
.badge-egg    { background: rgba(234,179,8,.12);  color: #fbbf24; border: 1px solid rgba(234,179,8,.25); }
.badge-nonveg { background: rgba(248,113,113,.12); color: #f87171; border: 1px solid rgba(248,113,113,.25); }

.card-body {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
}
.card-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.3;
  flex: 1;
}
.card-price {
  font-size: 1.2rem;
  font-weight: 900;
  color: var(--gold);
  white-space: nowrap;
}
/* .rupee { font-size: 0.78rem; vertical-align: super; } */
.card-desc { font-size: 0.77rem; color: var(--cream-dim); line-height: 1.5; }

.note {
  text-align: center;
  margin-top: 28px;
  font-size: 0.8rem;
  color: var(--cream-dim);
  background: rgba(212,168,67,0.06);
  border: 1px solid rgba(212,168,67,0.12);
  padding: 12px 24px;
  border-radius: 8px;
  display: inline-block;
  width: 100%;
}
.item-count {
  text-align: center;
  margin-top: 20px;
  font-size: 0.75rem;
  color: rgba(200,185,154,0.45);
  letter-spacing: 0.1em;
}

/* TransitionGroup */
.cards-enter-active, .cards-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.cards-enter-from, .cards-leave-to {
  opacity: 0; transform: scale(0.95) translateY(8px);
}

@media (max-width: 900px) {
  .menu-section { padding: 64px 20px; }
  .tabs { gap: 6px; }
  .tab { padding: 7px 16px; font-size: 0.75rem; }
}
@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr; }
}
</style>
