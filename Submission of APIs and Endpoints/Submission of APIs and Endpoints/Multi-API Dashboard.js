const usersBox = document.getElementById("usersCount");
const ordersBox = document.getElementById("ordersCount");
const productsBox = document.getElementById("productsCount");
const warning = document.getElementById("warning");

Promise.all([
  fetch("http://localhost:3000/users"),
  fetch("http://localhost:3000/orders"),
  fetch("http://localhost:3000/products")
])
  .then(async responses => {
    let error = responses.some(r => !r.ok);

    const data = await Promise.all(responses.map(r => r.ok ? r.json() : []));

    if (!error) {
      usersBox.textContent = data[0].length;
      ordersBox.textContent = data[1].length;
      productsBox.textContent = data[2].length;
    } else {
      warning.style.display = "block";
      usersBox.textContent = data[0].length || "0";
      ordersBox.textContent = data[1].length || "0";
      productsBox.textContent = data[2].length || "0";
    }
  })
  .catch(() => {
    warning.style.display = "block";
    usersBox.textContent = "0";
    ordersBox.textContent = "0";
    productsBox.textContent = "0";
  });
