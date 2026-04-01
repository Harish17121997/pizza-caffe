<template>
  <section class="map-section" id="map">
    <div class="map-inner">

      <div class="map-header fade-up">
        <span class="section-label">Find Us</span>
        <h2 class="section-title">We're in <em>Pune</em></h2>
        <div class="divider" />
        <p class="section-desc">
          Come visit us or order through our delivery partners.
        </p>
      </div>

      <div class="map-frame fade-up">
        <!--
          IMPORTANT: Replace the src with your exact Google Maps embed URL.
          Get it from: Google Maps → Share → Embed a map → Copy HTML → grab the src
        -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d472.74655003398146!2d73.76734075528658!3d18.575282994355877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b94912e5bb33%3A0x95d17151b2d3740b!2sCafe%20Eatitude!5e0!3m2!1sen!2sus!4v1775066402280!5m2!1sen!2sus" 
          width="600" height="450" 
          style="border:0;" allowfullscreen="" loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Cafe Eatitude on Google Maps"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-section {
  background: var(--dark3);
  padding: 100px 40px;
}
.map-inner { max-width: 1100px; margin: 0 auto; }
.map-header { margin-bottom: 40px; }

.map-frame {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(212,168,67,0.14);
  height: 420px;
}
.map-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  filter: grayscale(20%) contrast(1.05);
}

.map-hint {
  margin-top: 14px;
  font-size: 0.78rem;
  color: rgba(200,185,154,0.4);
}
.map-hint code {
  background: rgba(212,168,67,0.1);
  color: var(--gold);
  padding: 1px 6px;
  border-radius: 4px;
}

@media (max-width: 900px) {
  .map-section { padding: 64px 20px; }
  .map-frame { height: 320px; }
}
@media (max-width: 480px) {
  .map-frame { height: 260px; }
}
</style>
