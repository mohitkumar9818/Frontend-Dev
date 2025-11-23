function randomDelay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.1; // 10% chance to fail
    setTimeout(() => {
      if (fail) {
        console.log("Boiling water: FAILED");
        reject(new Error("Water heater malfunction"));
      } else {
        console.log("Boiling water: Done");
        resolve("Boiled water");
      }
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.1;
    setTimeout(() => {
      if (fail) {
        console.log("Brewing coffee: FAILED");
        reject(new Error("Coffee grounds missing"));
      } else {
        console.log(`Brewing coffee using ${water}: Done`);
        resolve("Brewed coffee");
      }
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.05;
    setTimeout(() => {
      if (fail) {
        console.log("Pouring into cup: FAILED");
        reject(new Error("Cup broke"));
      } else {
        console.log(`Pouring into cup (${coffee}): Done`);
        resolve("Coffee in cup");
      }
    }, randomDelay());
  });
}

boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => {
    console.log("Coffee ready for the team!");
  })
  .catch((err) => {
    console.error("Coffee process failed:", err.message);
  });
