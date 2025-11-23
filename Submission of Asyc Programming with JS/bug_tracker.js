function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failure = Math.random() < 0.2; // 20% failure
      if (failure) {
        reject(new Error("Failed to fetch bugs from server"));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched:");
   console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch((err) => {
    console.error("Error fetching bugs:", err.message);
  });
