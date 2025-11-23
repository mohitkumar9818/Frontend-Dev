function loadProfile() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Profile failed") : resolve("Profile Loaded");
    }, 2000)
  );
}
function loadPosts() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Posts failed") : resolve("Posts Loaded");
    }, 1500)
  );
}
function loadMessages() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() < 0.25 ? reject("Messages failed") : resolve("Messages Loaded");
    }, 1000)
  );
}

async function loadAllModules() {
  const start = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const totalTime = Date.now() - start;
  results.forEach((r, i) => {
    const name = ["Profile", "Posts", "Messages"][i];
    if (r.status === "fulfilled") {
      console.log(`${name}: succeeded -> ${r.value}`);
    } else {
      console.log(`${name}: FAILED -> ${r.reason}`);
    }
  });
  console.log(`Total time (ms): ${totalTime}`);
}

loadAllModules();
