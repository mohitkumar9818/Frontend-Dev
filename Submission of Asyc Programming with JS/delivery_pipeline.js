function randomDelayMs() {
  return Math.floor(Math.random() * 1000) + 1000; // 1000 - 2000 ms
}
function maybeFail(prob = 0.15) {
  return Math.random() < prob;
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) reject(new Error("Failed to take order"));
      else resolve("Order taken");
    }, randomDelayMs());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.2)) reject(new Error("Kitchen error"));
      else resolve("Food prepared");
    }, randomDelayMs());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.05)) reject(new Error("Packaging issue"));
      else resolve("Package ready");
    }, randomDelayMs());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) reject(new Error("Dispatch failed"));
      else resolve("Out for delivery");
    }, randomDelayMs());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.15)) reject(new Error("Delivery failed"));
      else resolve("Delivery completed");
    }, randomDelayMs());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log(step5);
    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!", err.message);
  }
}


runPipeline();
