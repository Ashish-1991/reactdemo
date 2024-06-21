// const heading = React.createElement("h1",{},"Hello World from react!!");    
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const h1tag = React.createElement("h1",{},"I am an h1 tag");
const h2tag = React.createElement("h2",{},"I am an h2 tag");

const child = React.createElement("div",{id:"child"},h1tag);
const child2 = React.createElement("div",{id:"child"},h2tag);
const parent = React.createElement("div",{id:"parent"},[child,child2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);