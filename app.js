const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:'child'},React.createElement("h1",{},"hello this is h1 line")));






console.log(parent);











const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"hello this is my first programmm in react")
    console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);