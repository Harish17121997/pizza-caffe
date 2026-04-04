<template>
  <section class="gallery-section" id="gallery">
    <div class="gallery-inner">

      <div class="gallery-header fade-up">
        <span class="section-label">Visual Feast</span>
        <h2 class="section-title">Our <em>Gallery</em></h2>
        <div class="divider" />
        <p class="section-desc">
          A glimpse into the Cafe Eatitude experience.
          Replace placeholders with your own photos.
        </p>
      </div>

      <div class="gallery-grid fade-up">
        <div v-for="(item, i) in gallery" :key="i" class="gallery-item" :class="`item-${i}`">

          <img :src="item.src" :alt="item.label" />

          <!-- <div class="gallery-placeholder">
            <span>{{ item.icon }}</span>
            <p>{{ item.label }}</p>
          </div> -->
          <div class="gallery-overlay">
            <span class="overlay-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import coffee from '../../public/images/coffee.png'
import burger from '../../public/images/image02.jpeg'
import pizza from '../../public/images/pizza.jpg'
import maggi from '../../public/images/image5.jpeg'
import sandwich from '../../public/images/image2.jpeg'
import dessert from '../../public/images/image1.jpeg'
const gallery = [
  { icon: '☕', label: 'Cold Coffees', src: coffee },
  { icon: '🍔', label: 'Burgers', src: burger },
  { icon: '🍕', label: 'Pizza', src: pizza },
  { icon: '🍜', label: 'Maggi', src: maggi },
  { icon: '🥪', label: 'Sandwiches', src: sandwich },
  { icon: '🍨', label: 'Desserts', src: dessert },
]
</script>

<style scoped>
.gallery-section {
  background: var(--dark2);
  padding: 100px 40px;
}

.gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-header {
  margin-bottom: 48px;
}

/* ── Mosaic Grid ── */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 220px);
  gap: 12px;
  border-radius: var(--radius);
  overflow: hidden;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--dark3);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mosaic layout */
.item-0 {
  grid-column: span 2;
  grid-row: span 2;
}

.item-3 {
  grid-column: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover img {
  transform: scale(1.06);
}

.gallery-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
}

.gallery-placeholder span {
  font-size: 2.8rem;
  opacity: 0.35;
}

.gallery-placeholder p {
  font-size: 0.7rem;
  color: var(--cream-dim);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.5;
}

.gallery-item:hover .gallery-placeholder {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(14, 13, 11, .75) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-label {
  font-family: var(--font-hand);
  font-size: 1.3rem;
  color: var(--gold-light);
}

.gallery-hint {
  text-align: center;
  margin-top: 20px;
  font-size: 0.78rem;
  color: rgba(200, 185, 154, 0.45);
}

.gallery-hint code {
  background: rgba(212, 168, 67, 0.1);
  color: var(--gold);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.72rem;
}

@media (max-width: 900px) {
  .gallery-section {
    padding: 64px 20px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 180px);
  }

  .item-0 {
    grid-column: span 2;
    grid-row: span 1;
  }

  .item-3 {
    grid-column: span 1;
  }
}

@media (max-width: 500px) {
  .gallery-grid {
    grid-template-rows: repeat(3, 150px);
  }
}
</style>
