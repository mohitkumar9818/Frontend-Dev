function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Server A failed"));
      else resolve("Server A (2s) completed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Server B failed"));
      else resolve("Server B (3s) completed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((err) => {
    console.error("One or more deployments failed:", err.message);
  });
Promise.race([serverA(), serverB()])
  .then((first) => {
    console.log("Fastest response:", first);
  })
  .catch((err) => {
    console.error("Fastest response error:", err.message);
  });
