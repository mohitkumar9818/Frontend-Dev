function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve("Order submitted") : reject(new Error("Network error"));
    }, 500); 
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
      await new Promise((r) => setTimeout(r, 300));
    }
  }
}

(async () => {
  try {
    await processOrder();
    console.log("Order processed successfully.");
  } catch (err) {
    console.error(err.message);
  }
})();
