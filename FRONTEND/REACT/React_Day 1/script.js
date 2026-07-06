let RealDomElement = document.querySelector("#root");

let div = React.createElement("div", { }, React.createElement("h1", {}, "I am Made using react"));

ReactDOM.createRoot(RealDomElement).render(div);