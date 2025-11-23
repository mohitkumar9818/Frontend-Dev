
const ensureFetch = () => {
  if (typeof fetch === "undefined") {
    throw new Error("fetch is not available. Use Node 18+ or run in a browser.");
  }
};

async function fetchAndLogProducts() {
  ensureFetch();
  const url = "https://fakestoreapi.com/products";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Network response not ok: ${res.status}`);
    const products = await res.json();
    products.forEach((p) => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log("-----");
    });
    if (typeof document !== "undefined") {
      createProductCards(products);
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.");
    console.error(err.message);
  }
}

function createProductCards(products = []) {
  if (typeof document === "undefined") return;
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "12px";
  products.forEach((p) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ddd";
    card.style.padding = "8px";
    card.style.width = "220px";
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.title;
    img.style.maxWidth = "200px";
    const title = document.createElement("h4");
    title.textContent = p.title;
    const price = document.createElement("p");
    price.textContent = `$${p.price}`;
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });
  document.body.appendChild(container);
}

fetchAndLogProducts();
