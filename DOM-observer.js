let data;
const targetNode = document.getElementById("vanilla");
const root = document.getElementById("root");

const config = { childList: true, subtree: true, characterData: true };

const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList" || mutation.type === "characterData") {
      data ??= Date.now();
    }
  }
  setTimeout(() => {
    console.log(data, globalThis.counter);
    console.log(`${data - globalThis.counter} ms`);
    globalThis.counter = 0;
    data = undefined;
  });
};

const vanillaJS = new MutationObserver(callback);
vanillaJS.observe(targetNode, config);

const react = new MutationObserver(callback);
setTimeout(() => react.observe(root, config), 700);
