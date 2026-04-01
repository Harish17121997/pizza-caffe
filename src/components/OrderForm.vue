<template>
  <div class="order-form">

    <!-- FORM STATE -->
    <template v-if="!sent">
      <h3 class="form-title">Place an Order</h3>
      <p class="form-sub">Fill in details below — we'll confirm via WhatsApp 🚀</p>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Your Name *</label>
          <input
            v-model="form.name"
            class="form-input"
            type="text"
            placeholder="Rahul Sharma"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input
            v-model="form.phone"
            class="form-input"
            type="tel"
            placeholder="+91 98000 00000"
          />
        </div>
      </div>

      <!-- <div class="form-group">
        <label class="form-label">Order Type *</label>
        <select v-model="form.orderType" class="form-select">
          <option value="">Select type...</option>
          <option>Dine In</option>
          <option>Takeaway</option>
          <option>Delivery</option>
        </select>
      </div> -->

      <div class="form-group">
        <label class="form-label">Your Order / Items *</label>
        <textarea
          v-model="form.items"
          class="form-textarea"
          placeholder="e.g. 2× Paneer Cheese Burger, 1× Irish Cold Coffee, 1× Brownie..."
        />
      </div>

      <!-- <div class="form-group">
        <label class="form-label">Delivery Address</label>
        <input
          v-model="form.address"
          class="form-input"
          type="text"
          placeholder="Street, Area, Pune (for delivery only)"
        />
      </div> -->

      <div class="form-group">
        <label class="form-label">Special Instructions</label>
        <textarea
          v-model="form.notes"
          class="form-textarea short"
          placeholder="Extra cheese, less spicy, etc."
        />
      </div>

      <button
        class="submit-btn"
        :disabled="!canSubmit"
        @click="submitOrder"
      >
        <span class="submit-icon"></span>
        Send Order via WhatsApp
      </button>

      <p class="form-note">
        ⚡ You'll be redirected to WhatsApp to confirm your order directly with us.
      </p>
    </template>

    <!-- SUCCESS STATE -->
    <div v-else class="success">
      <div class="success-icon">🎉</div>
      <h3 class="success-title">Order Sent!</h3>
      <p class="success-desc">
        Opening WhatsApp to confirm your order. We'll be in touch shortly!
      </p>
      <a :href="waLink" target="_blank" class="wa-btn">
        <span>💬</span> Open WhatsApp
      </a>
      <button class="reset-btn" @click="resetForm">
        Place Another Order
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sent  = ref(false)
const waLink = ref('')

const form = ref({
  name: '', phone: '', orderType: '',
  items: '', address: '', notes: ''
})

const canSubmit = computed(() =>
  form.value.name.trim() &&
  form.value.phone.trim() &&
  form.value.items.trim()
  // form.value.orderType &&
)

function submitOrder() {
  const f = form.value
  const msg = [
    `Hello Cafe Eatitude! 🍔☕`,
    ``,
    `*New Order Request*`,
    ``,
    `👤 Name: ${f.name}`,
    `📞 Phone: ${f.phone}`,
    `🛍 Type: ${f.orderType}`,
    ``,
    `📋 Items:`,
    f.items,
    f.address ? `\n📍 Address: ${f.address}` : '',
    f.notes   ? `\n📝 Notes: ${f.notes}`     : '',
    ``,
    `Please confirm availability. Thank you! 🙏`,
  ].filter(l => l !== null).join('\n')

  waLink.value = `https://wa.me/919881478959?text=${encodeURIComponent(msg)}`
  sent.value = true

  setTimeout(() => {
    window.open(waLink.value, '_blank')
  }, 400)
}

function resetForm() {
  sent.value = false
  form.value = { name: '', phone: '', orderType: '', items: '', address: '', notes: '' }
}
</script>

<style scoped>
.order-form {
  background: var(--dark2);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 36px;
}

.form-title {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 4px;
}
.form-sub {
  font-size: 0.85rem;
  color: var(--cream-dim);
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.form-group { margin-bottom: 18px; }
.form-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1.5px solid rgba(255,255,255,0.09);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  color: var(--cream);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  transition: border-color var(--transition), background var(--transition);
}
.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--gold);
  background: rgba(212,168,67,0.05);
}
.form-input::placeholder,
.form-textarea::placeholder { color: rgba(200,185,154,0.35); }
.form-textarea {
  resize: vertical;
  min-height: 100px;
}
.form-textarea.short { min-height: 72px; }
.form-select option { background: var(--dark2); color: var(--cream); }

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, var(--gold), var(--gold-light));
  color: var(--dark);
  border: none;
  padding: 14px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity var(--transition), transform var(--transition);
}
.submit-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
.submit-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.submit-icon { font-size: 1.1rem; }

.form-note {
  text-align: center;
  font-size: 0.73rem;
  color: rgba(200,185,154,0.4);
  margin-top: 12px;
}

/* ── Success ── */
.success {
  text-align: center;
  padding: 24px 8px;
  animation: fadeUp 0.5s ease both;
}
.success-icon { font-size: 3rem; margin-bottom: 12px; }
.success-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--gold);
  margin-bottom: 8px;
}
.success-desc {
  font-size: 0.88rem;
  color: var(--cream-dim);
  margin-bottom: 24px;
  line-height: 1.6;
}
.wa-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #25D366;
  color: #fff;
  border: none;
  padding: 13px 32px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: background var(--transition), transform var(--transition);
  margin-bottom: 16px;
}
.wa-btn:hover { background: #1ebe58; transform: translateY(-2px); }
.reset-btn {
  display: block;
  margin: 0 auto;
  background: none;
  border: 1px solid rgba(212,168,67,0.3);
  color: var(--cream-dim);
  padding: 10px 24px;
  border-radius: 50px;
  font-family: var(--font-body);
  font-size: 0.82rem;
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition);
}
.reset-btn:hover { border-color: var(--gold); color: var(--gold); }

@media (max-width: 600px) {
  .order-form { padding: 24px 20px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
