function stageCallback(name) {
  return (cb) => {
    setTimeout(() => {
      console.log(name);
      cb(null, `${name} done`);
    }, 1000);
  };
}

function pipelineWithCallbacks() {
  console.log("Starting pipeline (callbacks)...");
  stageCallback("design")((err1) => {
    if (err1) { console.error(err1); return; }
    stageCallback("build")((err2) => {
      if (err2) { console.error(err2); return; }
      stageCallback("test")((err3) => {
        if (err3) { console.error(err3); return; }
        stageCallback("deploy")((err4) => {
          if (err4) { console.error(err4); return; }
          stageCallback("celebrate")((err5) => {
            if (err5) { console.error(err5); return; }
            console.log("Pipeline finished (callbacks).");
          });
        });
      });
    });
  });
}

function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(`${name} done`);
    }, 1000);
  });
}

async function pipelineAsyncAwait() {
  console.log("Starting pipeline (async/await)...");
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline finished (async/await).");
  } catch (err) {
    console.error("Pipeline failed:", err);
  }
}

pipelineWithCallbacks();
setTimeout(() => pipelineAsyncAwait(), 6500);


