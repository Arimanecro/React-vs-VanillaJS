const { useState, useCallback } = React;

var COUNT = 1000;
var COUNT2 = 1;
var time = 0;

const MyApp = () => {
  let [state, setState] = useState([]);
  let addDivs = useCallback(() => {
    let arr = new Uint16Array(COUNT);
    for (let i = 0; i < COUNT; i++) arr[i] = i;
    return arr;
  });
  let add20 = useCallback(() => {
    let arr = new Array().fill(COUNT2);
    for (let i = 0; i < COUNT2; i++) arr[i] = "New Div";
    return arr;
  });
  let randomDiv = useCallback((state) => {
    let r = getRandomInt();
    return (state[r] = "UPDATE");
  });
  const getRandomInt = useCallback(() => Math.floor(Math.random() * COUNT));
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
      <button onClick={() => setState((state) => [...state, randomDiv(state)])}>
        Update random div
      </button>
      <span style={{ display: "none" }}>
        {state.length ? (time = Date.now()) : null}
      </span>
      <div id="container">
        {state?.map((v, k) => (
          <div key={k}>{v}</div>
        ))}
      </div>
      <span style={{ display: "none" }}>
        {state.length && console.log(`${Date.now() - time} ms`)}
        {(time = 0)}
      </span>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);
