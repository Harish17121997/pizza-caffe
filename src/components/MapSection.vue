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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242243.1049568523!2d73.72168145!3d18.5245649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Cafe Eatitude on Google Maps"
        />
      </div>
      <p class="map-hint fade-up">
        💡 Replace the iframe <code>src</code> with your exact Google Maps embed URL for precise pin location
      </p>

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
