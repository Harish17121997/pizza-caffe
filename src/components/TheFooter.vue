<template>
  <footer>
    <div class="footer-inner">

      <div class="footer-brand-col">
        <span class="footer-logo">Cafe <em>Eatitude</em></span>
        <p class="footer-tagline">
          Invigorate yourself with our coffee. Your favourite cafe in Pune
          for sandwiches, burgers, pizza, cold coffees and more.
        </p>
        <div class="footer-social">
          <a href="tel:+919881478959" class="social-link" title="Call us">📞</a>
          <a href="https://wa.me/919881478959" target="_blank" class="social-link" title="WhatsApp">💬</a>
          <a href="#" class="social-link" title="Instagram">📸</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#menu">Full Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Place Order</a></li>
          <li><a href="#map">Find Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Contact</h5>
        <ul>
          <li><a href="tel:+919881478959">+91 98814 78959</a></li>
          <li><a href="#">Pune, Maharashtra</a></li>
          <li><a href="#">9 AM – 11 PM Daily</a></li>
        </ul>
        <div class="footer-delivery">
          <h5 style="margin-top:20px">Order Via</h5>
          <div class="delivery-chips">
            <span class="chip">🟠 Swiggy</span>
            <span class="chip">🔴 Zomato</span>
            <span class="chip">📍 Pune Eats</span>
          </div>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="footer-copy">© {{ year }} Cafe Eatitude. All rights reserved.</p>
      <p class="franchise-note">
        🏪 Franchise available —
        <a href="tel:+919881478959">Contact Mr. Krushna Kadam</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background: var(--dark);
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 56px 40px 32px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 40px;
}

.footer-logo {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--gold);
  margin-bottom: 12px;
}
.footer-logo em { font-style: italic; color: var(--cream); }
.footer-tagline {
  font-size: 0.85rem;
  color: var(--cream-dim);
  line-height: 1.65;
  max-width: 280px;
  margin-bottom: 20px;
}
.footer-social {
  display: flex;
  gap: 10px;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
}
.social-link:hover {
  background: rgba(212,168,67,0.1);
  border-color: rgba(212,168,67,0.3);
  transform: translateY(-2px);
}

.footer-col h5 {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
  font-weight: 600;
}
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 10px; }
.footer-col ul li a {
  color: var(--cream-dim);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color var(--transition);
}
.footer-col ul li a:hover { color: var(--gold); }

.delivery-chips {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.chip {
  font-size: 0.8rem;
  color: var(--cream-dim);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1100px;
  margin: 0 auto;
}
.footer-copy {
  font-size: 0.75rem;
  color: rgba(200,185,154,0.4);
}
.franchise-note {
  font-size: 0.78rem;
  color: var(--cream-dim);
}
.franchise-note a {
  color: var(--gold);
  text-decoration: none;
}
.franchise-note a:hover { text-decoration: underline; }

@media (max-width: 900px) {
  footer { padding: 48px 20px 28px; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
  .footer-brand-col { grid-column: span 2; }
}
@media (max-width: 500px) {
  .footer-inner { grid-template-columns: 1fr; }
  .footer-brand-col { grid-column: span 1; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
