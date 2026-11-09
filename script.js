/*
  PENGATURAN STRAVIC:
  Ganti nomor WhatsApp dengan nomor admin toko (format 62, tanpa + atau spasi).
  Harga yang belum ditentukan ditampilkan sebagai TANYA HARGA.
*/
const STORE = {
  whatsapp: "628212288467",
  instagram: "https://instagram.com/stravicworld",
  products: [
    {
      name: "STRAVIC CHEST LOGO TEE",
      category: "GRAPHIC T-SHIRT",
      price: null,
      sizes: "TANYA UKURAN",
      image: "images/stravic-chest-logo.png",
      label: "CORE DROP"
    },
    {
      name: "STRAVIC WORLD TYPO TEE",
      category: "TYPOGRAPHY T-SHIRT",
      price: null,
      sizes: "TANYA UKURAN",
      image: "images/stravic-typography-tee.png",
      label: "NEW DROP"
    },
    {
      name: "CONTROLLED CHAOS — VOL. 01",
      category: "GRAPHIC T-SHIRT",
      price: 149000,
      sizes: "M / L / XL / XXL",
      image: "images/controlled-chaos-tee.png",
      label: "FEATURED"
    },
    {
      name: "STRAVIC WORLD LONG SLEEVE",
      category: "LONG SLEEVE / GRAPHIC",
      price: 175000,
      sizes: "M / L / XL / XXL",
      image: "images/stravic-world-long-sleeve.png",
      label: "LONG SLEEVE"
    },
    {
      name: "STRAVIC MOUTH GRAPHIC TEE",
      category: "GRAPHIC T-SHIRT",
      price: null,
      sizes: "TANYA UKURAN",
      image: "images/stravic-mouth-graphic.png",
      label: "GRAPHIC SERIES"
    }
  ]
};

const formatPrice = n => n == null
  ? "TANYA HARGA"
  : new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const grid = document.getElementById("product-grid");
grid.innerHTML = STORE.products.map((p, i) => {
  const image = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="product-placeholder">STRV<br>0${i + 1}</div>`;
  const message = encodeURIComponent(`Halo STRAVIC, saya ingin memesan ${p.name}. Mohon info harga, stok, dan pilihan ukuran ${p.sizes}.`);
  return `<article class="product-card">
    <div class="product-image">${image}<span class="product-tag">${p.label}</span><span class="product-number">0${i + 1} / 05</span></div>
    <div class="product-info"><div><h3>${p.name}</h3><p>${p.category} · ${p.sizes}</p></div><span class="product-price">${formatPrice(p.price)}</span></div>
    <a class="order-link" href="https://wa.me/${STORE.whatsapp}?text=${message}" target="_blank" rel="noreferrer">ASK / ORDER VIA WHATSAPP ↗</a>
  </article>`;
}).join("");

document.getElementById("contact-wa").href =
  `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent("Halo STRAVIC, saya ingin bertanya tentang produk.")}`;
document.getElementById("instagram-link").href = STORE.instagram;
document.getElementById("instagram-link").textContent =
  "@" + STORE.instagram.split("/").filter(Boolean).pop().toUpperCase();
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);
