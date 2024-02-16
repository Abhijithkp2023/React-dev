
const heading = React.createElement("div",{id:"parent"},[
    
React.createElement("div",{id:"child"},
   [React.createElement("h2",{},"I am  h2 tag"),
   React.createElement("h2",{},"I am  h2 tag")
]),
React.createElement("div",{id:"child"},
   [React.createElement("h2",{},"I am  h2 tag"),
   React.createElement("h2",{},"I am  h2 tag")
])
 ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
roo.render(heading);
      
   