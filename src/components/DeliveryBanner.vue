<template>
  <div class="delivery-bar">
    <div class="delivery-inner">
      <div class="delivery-text">
        <span class="delivery-label">Order Online</span>
        <p class="delivery-title">Also available on <em>delivery apps</em></p>
      </div>
      <div class="partners">
        <div class="partner swiggy">
          <span class="p-dot">🟠</span> Swiggy
        </div>
        <div class="partner zomato">
          <span class="p-dot">🔴</span> Zomato
        </div>
        <div class="partner puneeats">
          <span class="p-dot">📍</span> Pune Eats
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delivery-bar {
  background: var(--dark2);
  border-top: 1px solid rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  padding: 36px 40px;
}
.delivery-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.delivery-label {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 4px;
}
.delivery-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
}
.delivery-title em { font-style: italic; color: var(--gold); }

.partners {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}
.partner {
  background: var(--dark3);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: border-color var(--transition), transform var(--transition);
  cursor: default;
}
.partner:hover { border-color: rgba(212,168,67,0.3); transform: translateY(-2px); }
.swiggy    { color: #FC8019; }
.zomato    { color: #E23744; }
.puneeats  { color: #E53935; }

@media (max-width: 600px) {
  .delivery-bar { padding: 28px 20px; }
  .delivery-inner { justify-content: center; text-align: center; }
}
</style>
