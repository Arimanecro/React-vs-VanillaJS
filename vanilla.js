const COUNT = 1000;
const btnAdd = document.getElementById("add");
const vanilla = document.getElementById("vanilla");
const appendBtn = document.getElementById("append");
const prependBtn = document.getElementById("prepend");
const updateBtn = document.getElementById("update");
btnAdd.textContent = COUNT;
btnAdd.addEventListener("click", () => add());
appendBtn.addEventListener("click", () => add(1));
prependBtn.addEventListener("click", () => prepend());
updateBtn.addEventListener("click", () => {
  let r = getRandomInt();
  globalThis.counter = Date.now();
  vanilla.childNodes[r].innerText = "UPDATE";
});

const add = (divs = COUNT) => {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < COUNT; i++) {
    let el = document.createElement("div");
    el.innerText = i;
    fragment.append(el);
  }
  globalThis.counter = Date.now();
  vanilla.append(fragment);
};

const prepend = () => {
  globalThis.counter = Date.now();
  let el = document.createElement("div");
  el.innerText = "NEW div";
  vanilla.prepend(el);
};

const getRandomInt = () => Math.floor(Math.random() * COUNT);
