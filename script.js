const PLACEHOLDER = "images/placeholder.svg";

// Image avec repli automatique sur l'image de test si le fichier n'existe pas
function img(src, alt, cls = "") {
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">`;
}

// --- Cartes de la gamme ---
document.getElementById("cards").innerHTML = VEHICLES.map(v => `
  <a class="card reveal" href="#${v.id}">
    <div class="card-img">${img(v.images[0], v.name)}</div>
    <div class="card-body">
      <span class="badge">${v.badge}</span>
      <h3>${v.name}</h3>
      <p>${v.tagline}</p>
      <span class="card-link">Découvrir →</span>
    </div>
  </a>
`).join("");

// --- Sections détaillées ---
document.getElementById("details").innerHTML = VEHICLES.map((v, i) => `
  <section class="section vehicle ${i % 2 === 0 ? "" : "alt"}" id="${v.id}">
    <div class="container">
      <p class="eyebrow">${v.tagline}</p>
      <h2>${v.name}</h2>

      <div class="vehicle-top ${i % 2 ? "reverse" : ""}">
        <div class="gallery reveal">
          <div class="gallery-main">${img(v.images[0], v.name, "main-img")}</div>
          <div class="thumbs">
            ${v.images.map((src, k) => `
              <button class="thumb ${k === 0 ? "active" : ""}" data-src="${src}" aria-label="Photo ${k + 1}">
                ${img(src, v.name + " photo " + (k + 1))}
              </button>`).join("")}
          </div>
        </div>
        <div class="vehicle-text reveal">
          <span class="badge">${v.badge}</span>
          <p>${v.description}</p>
        </div>
      </div>

      <div class="highlights reveal">
        ${v.highlights.map(h => `
          <div class="highlight">
            <div class="big">${h.value}<small>${h.unit}</small></div>
            <div class="lbl">${h.label}</div>
          </div>`).join("")}
      </div>

      <h3 class="specs-title">Caractéristiques</h3>
      <dl class="specs reveal">
        ${v.specs.map(([k, val]) => `<div><dt>${k}</dt><dd>${val}</dd></div>`).join("")}
      </dl>
    </div>
  </section>
`).join("");

// --- Tableau comparatif ---
const labels = VEHICLES[0].specs.map(s => s[0]);
document.getElementById("compare").innerHTML = `
  <thead><tr><th></th>${VEHICLES.map(v => `<th>${v.name}</th>`).join("")}</tr></thead>
  <tbody>
    ${labels.map((l, i) => `<tr><td>${l}</td>${VEHICLES.map(v => `<td>${v.specs[i][1]}</td>`).join("")}</tr>`).join("")}
  </tbody>`;

// --- Pied de page ---
document.getElementById("footer-models").innerHTML =
  VEHICLES.map(v => `<a href="#${v.id}">${v.name}</a>`).join("");

// --- Galerie : clic sur une miniature ---
document.querySelectorAll(".gallery").forEach(g => {
  const main = g.querySelector(".main-img");
  g.querySelectorAll(".thumb").forEach(t => {
    t.addEventListener("click", () => {
      g.querySelectorAll(".thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      main.onerror = () => { main.onerror = null; main.src = PLACEHOLDER; };
      main.src = t.dataset.src;
    });
  });
});

// --- Barre de navigation au scroll ---
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll);
onScroll();

// --- Apparition au scroll ---
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
