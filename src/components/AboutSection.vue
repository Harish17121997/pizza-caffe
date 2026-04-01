<template>
  <section class="about" id="about">
    <div class="about-inner">

      <!-- Image Column -->
      <div class="img-col fade-up">
        <div class="img-frame">
          

            <img src="/images/banner.png" alt="Cafe Eatitude" />
         
          <!-- <div class="img-placeholder">
            <span class="placeholder-icon">🏪</span>
            <p class="placeholder-text">Add your cafe photo here</p>
            <code class="placeholder-code">/public/images/your-photo.jpg</code>
          </div> -->
        </div>
        <div class="img-badge">
          <span class="badge-big">100%</span>
          <span class="badge-small">Fresh<br/>Every Day</span>
        </div>
        <div class="img-accent" />
      </div>

      <!-- Text Column -->
      <div class="text-col fade-up">
        <span class="section-label">Our Story</span>
        <h2 class="section-title">
          More Than<br />Just <em>Coffee</em>
        </h2>
        <div class="divider" />
        <p class="section-desc">
          At Cafe Eatitude, we believe food is an experience. From our perfectly
          crafted cold coffees to loaded burgers and artisan pizzas — every bite
          tells a story. Located in the heart of Pune, we're your go-to spot for
          great flavours and good vibes.
        </p>

        <div class="features-grid">
          <div class="feat" v-for="f in features" :key="f.title">
            <span class="feat-icon">{{ f.icon }}</span>
            <div>
              <h4 class="feat-title">{{ f.title }}</h4>
              <p class="feat-desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>

        <div class="about-cta">
          <button class="btn-primary" @click="scrollTo('#menu')">View Full Menu</button>
          <a href="tel:+919881478959" class="call-link">
            <span class="call-icon">📞</span>
            +91 98814 78959
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: '🧑‍🍳', title: 'Freshly Made',    desc: 'Every item prepared fresh on order' },
  { icon: '🚴',   title: 'Fast Delivery',   desc: 'Swiggy, Zomato & Pune Eats' },
  { icon: '🌿',   title: 'Veg & Non-Veg',  desc: 'Wide variety for every appetite' },
  { icon: '✨',   title: 'Quality First',   desc: 'Premium ingredients, always' },
]

function scrollTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.about {
  background: var(--dark2);
  padding: 100px 40px;
}
.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

/* ── Image Column ── */
.img-col { position: relative; }

.img-frame {
  width: 100%;
  aspect-ratio: 4/5;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--dark3);
  border: 1px solid rgba(212,168,67,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}

.img-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  padding: 32px;
}
.placeholder-icon { font-size: 4rem; opacity: 0.4; }
.placeholder-text {
  font-size: 0.85rem;
  color: var(--cream-dim);
  letter-spacing: 0.08em;
}
.placeholder-code {
  font-size: 0.7rem;
  background: rgba(212,168,67,0.1);
  color: var(--gold);
  padding: 4px 12px;
  border-radius: 4px;
  font-family: monospace;
}

.img-badge {
  position: absolute;
  bottom: -20px; right: -20px;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--dark);
  width: 100px; height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: var(--shadow-gold);
}
.badge-big {
  font-family: var(--font-display);
  font-size: 1.7rem; font-weight: 900;
  line-height: 1;
}
.badge-small {
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1.3;
}

.img-accent {
  position: absolute;
  top: -16px; left: -16px;
  width: 80px; height: 80px;
  border-top: 2px solid rgba(212,168,67,0.3);
  border-left: 2px solid rgba(212,168,67,0.3);
  border-radius: 4px 0 0 0;
}

/* ── Text Column ── */
.text-col { padding-top: 8px; }

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 28px;
  margin-bottom: 36px;
}

.feat {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: rgba(212,168,67,0.05);
  border: 1px solid rgba(212,168,67,0.12);
  border-radius: var(--radius-sm);
  padding: 14px;
  transition: background var(--transition), border-color var(--transition);
}
.feat:hover {
  background: rgba(212,168,67,0.1);
  border-color: rgba(212,168,67,0.25);
}
.feat-icon { font-size: 1.4rem; flex-shrink: 0; }
.feat-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 2px;
}
.feat-desc { font-size: 0.75rem; color: var(--cream-dim); line-height: 1.4; }

.about-cta {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.call-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--cream-dim);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}
.call-link:hover { color: var(--gold); }
.call-icon { font-size: 1rem; }

@media (max-width: 900px) {
  .about { padding: 64px 20px; }
  .about-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .img-col { max-width: 400px; margin: 0 auto; }
  .features-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .features-grid { grid-template-columns: 1fr; }
  .about-cta { flex-direction: column; align-items: flex-start; }
}
</style>
