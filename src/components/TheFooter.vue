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
          <a href="https://wa.me/919881478959" target="_blank" class="social-link" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.52 3.48A11.8 11.8 0 0 0 12.01 0C5.38 0 .01 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.49-8.52zM12 21.82c-1.8 0-3.56-.48-5.1-1.38l-.36-.21-3.67.96.98-3.58-.23-.37A9.77 9.77 0 0 1 2.18 12c0-5.41 4.41-9.82 9.83-9.82 2.62 0 5.08 1.02 6.94 2.88A9.75 9.75 0 0 1 21.82 12c0 5.41-4.41 9.82-9.82 9.82zm5.39-7.36c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.2.29-.77.95-.94 1.15-.17.2-.34.22-.63.07-.29-.14-1.23-.45-2.35-1.44-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.12-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.51-.07-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.2 3.01.14.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.1-.26-.17-.55-.31z" />
            </svg>
          </a>
          <!-- <a href="#" class="social-link" title="Instagram">📸</a> -->
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
        <!-- <div class="footer-delivery">
          <h5 style="margin-top:20px">Order Via</h5>
          <div class="delivery-chips">
            <span class="chip">🟠 Swiggy</span>
            <span class="chip">🔴 Zomato</span>
            <span class="chip">📍 Pune Eats</span>
          </div>
        </div> -->
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
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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

.footer-logo em {
  font-style: italic;
  color: var(--cream);
}

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
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
}

.social-link:hover {
  background: rgba(212, 168, 67, 0.1);
  border-color: rgba(212, 168, 67, 0.3);
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

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul li a {
  color: var(--cream-dim);
  text-decoration: none;
  font-size: 0.85rem;
  transition: color var(--transition);
}

.footer-col ul li a:hover {
  color: var(--gold);
}

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
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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
  color: rgba(200, 185, 154, 0.4);
}

.franchise-note {
  font-size: 0.78rem;
  color: var(--cream-dim);
}

.franchise-note a {
  color: var(--gold);
  text-decoration: none;
}

.franchise-note a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  footer {
    padding: 48px 20px 28px;
  }

  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand-col {
    grid-column: span 2;
  }
}

@media (max-width: 500px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .footer-brand-col {
    grid-column: span 1;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
