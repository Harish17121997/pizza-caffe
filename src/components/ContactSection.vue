<template>
  <section class="contact-section" id="contact">
    <div class="contact-inner">

      <!-- LEFT: Info + QR -->
      <div class="info-col fade-up">
        <span class="section-label">Get in Touch</span>
        <h2 class="section-title">Visit Us or<br /><em>Order Now</em></h2>
        <div class="divider" />

        <div class="contact-list">
          <div class="contact-item" v-for="item in contactItems" :key="item.label">
            <div class="c-icon">{{ item.icon }}</div>
            <div class="c-detail">
              <h4>{{ item.label }}</h4>
              <p v-html="item.value" />
            </div>
          </div>
        </div>

        <!-- UPI QR -->
        <div class="qr-card">
          <h4 class="qr-title">💳 Pay via UPI</h4>
          <div class="qr-frame">
            <img style="width: 140px;height: 140px;" :src="qrUrl" alt="UPI QR Code"/>
            <div class="qr-placeholder">
              <div class="qr-pattern">
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <!-- Finder TL -->
                  <rect x="8"  y="8"  width="26" height="26" fill="#0E0D0B" rx="2"/>
                  <rect x="12" y="12" width="18" height="18" fill="white"/>
                  <rect x="16" y="16" width="10" height="10" fill="#0E0D0B" rx="1"/>
                  <!-- Finder TR -->
                  <rect x="86" y="8"  width="26" height="26" fill="#0E0D0B" rx="2"/>
                  <rect x="90" y="12" width="18" height="18" fill="white"/>
                  <rect x="94" y="16" width="10" height="10" fill="#0E0D0B" rx="1"/>
                  <!-- Finder BL -->
                  <rect x="8"  y="86" width="26" height="26" fill="#0E0D0B" rx="2"/>
                  <rect x="12" y="90" width="18" height="18" fill="white"/>
                  <rect x="16" y="94" width="10" height="10" fill="#0E0D0B" rx="1"/>
                  <!-- Center label -->
                  <rect x="38" y="38" width="44" height="44" fill="#FFF8E7" rx="4"/>
                  <text x="60" y="57" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#0E0D0B">UPI</text>
                  <text x="60" y="70" text-anchor="middle" font-family="sans-serif" font-size="6" fill="#666">Cafe</text>
                  <text x="60" y="79" text-anchor="middle" font-family="sans-serif" font-size="6" fill="#666">Eatitude</text>
                  <!-- Data bits -->
                  <rect x="38" y="10" width="4" height="4" fill="#0E0D0B"/><rect x="44" y="10" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="52" y="10" width="4" height="4" fill="#0E0D0B"/><rect x="60" y="10" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="68" y="10" width="4" height="4" fill="#0E0D0B"/><rect x="76" y="10" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="40" y="16" width="4" height="4" fill="#0E0D0B"/><rect x="48" y="16" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="56" y="16" width="4" height="4" fill="#0E0D0B"/><rect x="64" y="16" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="72" y="16" width="4" height="4" fill="#0E0D0B"/><rect x="80" y="16" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="10" y="38" width="4" height="4" fill="#0E0D0B"/><rect x="10" y="44" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="10" y="52" width="4" height="4" fill="#0E0D0B"/><rect x="10" y="60" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="10" y="68" width="4" height="4" fill="#0E0D0B"/><rect x="10" y="76" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="16" y="40" width="4" height="4" fill="#0E0D0B"/><rect x="16" y="48" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="16" y="56" width="4" height="4" fill="#0E0D0B"/><rect x="16" y="64" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="16" y="72" width="4" height="4" fill="#0E0D0B"/><rect x="16" y="80" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="100" y="38" width="4" height="4" fill="#0E0D0B"/><rect x="100" y="46" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="100" y="54" width="4" height="4" fill="#0E0D0B"/><rect x="100" y="62" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="100" y="70" width="4" height="4" fill="#0E0D0B"/><rect x="100" y="78" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="38" y="100" width="4" height="4" fill="#0E0D0B"/><rect x="46" y="100" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="54" y="100" width="4" height="4" fill="#0E0D0B"/><rect x="62" y="100" width="4" height="4" fill="#0E0D0B"/>
                  <rect x="70" y="100" width="4" height="4" fill="#0E0D0B"/><rect x="78" y="100" width="4" height="4" fill="#0E0D0B"/>
                </svg>
              </div>
            </div>
          </div>
          <p class="qr-upi">0791767A0216055.bqr@kotak</p>
        </div>
      </div>

      <!-- RIGHT: Order Form -->
      <div class="form-col fade-up">
        <OrderForm />
      </div>

    </div>
  </section>
</template>

<script setup>
import OrderForm from './OrderForm.vue'
import { computed } from 'vue'
const upiId = '0791767A0216055.bqr@kotak' // 👈 change dynamically if needed
const name = 'Cafe Eatitude'

const qrUrl = computed(() => {
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&cu=INR`
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`
})


const contactItems = [
  {
    icon: '📍',
    label: 'Address',
    value: 'Cafe Eatitude, Pune, Maharashtra, India',
  },
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: '<a href="tel:+919881478959">+91 98814 78959</a><br/><small>Mr. Krushna Kadam</small>',
  },
  {
    icon: '🕐',
    label: 'Opening Hours',
    value: 'Monday – Sunday: 9:00 AM – 11:00 PM',
  },
  {
    icon: '🏪',
    label: 'Franchise',
    value: 'Franchise available! <a href="tel:+919881478959">Contact us</a> for details.',
  },
]
</script>

<style scoped>
.contact-section {
  background: var(--dark);
  padding: 100px 40px;
}
.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 64px;
  align-items: start;
}

/* ── Contact List ── */
.contact-list {
  margin: 8px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contact-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.c-icon {
  width: 42px; height: 42px;
  background: rgba(212,168,67,0.09);
  border: 1px solid rgba(212,168,67,0.18);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.c-detail h4 {
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 3px;
}
.c-detail p {
  color: var(--cream);
  font-size: 0.88rem;
  line-height: 1.6;
}
.c-detail :deep(a) {
  color: var(--cream);
  text-decoration: none;
  transition: color var(--transition);
}
.c-detail :deep(a):hover { color: var(--gold); }
.c-detail :deep(small) {
  font-size: 0.75rem;
  color: var(--cream-dim);
}

/* ── QR Card ── */
.qr-card {
  background: var(--dark2);
  border: 1px solid rgba(212,168,67,0.14);
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
}
.qr-title {
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--gold);
  margin-bottom: 16px;
}
.qr-frame {
  width: 140px;
  height: 140px;
  margin: 0 auto 12px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qr-placeholder, .qr-pattern {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qr-pattern svg { width: 100%; height: 100%; }

.qr-upi {
  font-family: monospace;
  font-size: 0.8rem;
  background: var(--dark3);
  color: var(--cream);
  padding: 5px 14px;
  border-radius: 6px;
  display: inline-block;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}
.qr-note {
  font-size: 0.68rem;
  color: rgba(200,185,154,0.35);
}

@media (max-width: 900px) {
  .contact-section { padding: 64px 20px; }
  .contact-inner { grid-template-columns: 1fr; gap: 48px; }
}
</style>
