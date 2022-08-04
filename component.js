const { useState, useCallback, memo } = React;
var COUNT = 1000;
var COUNT2 = 1;
var time = 0;

const MyApp = () => {
  let [state, setState] = useState([]);
  let addDivs = useCallback(() => {
    let arr = new Uint16Array(COUNT);
    for (let i = 0; i < COUNT; i++) arr[i] = i;
    globalThis.counter = Date.now();
    return arr;
  });
  let add20 = useCallback(() => {
    let arr = new Array().fill(COUNT2);
    for (let i = 0; i < COUNT2; i++) arr[i] = "New Div";
    globalThis.counter = Date.now();
    return arr;
  });
  let randomDiv = () => {
    let r = getRandomInt();
    globalThis.counter = Date.now();
    const myNewArray = Object.assign([...state], { [r]: "UPDATE" });
    setState(myNewArray);
  };
  const getRandomInt = useCallback(() => Math.floor(Math.random() * COUNT));
  console.log("re-render");
  const Nav = memo(() => {
    return (
      <>
        <h2>React JS</h2>
        <button onClick={() => setState((state) => [...state, ...addDivs()])}>
          {COUNT}
        </button>
        <button onClick={() => setState((state) => [...add20(), ...state])}>
          Add to the top
        </button>
        <button onClick={() => setState((state) => [...state, ...add20()])}>
          Add to the bottom
        </button>
        <button onClick={() => randomDiv(state)}>Update random div</button>
      </>
    );
  });
  return (
    <>
      <Nav />
      <div id="container">
        {state?.map((v, k) => (
          <div key={k}>{v}</div>
        ))}
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);