import React from "react";
import ReactDOM from "react-dom/client";

import "../src/style.css";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "../src/style.css";

// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );