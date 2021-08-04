import ReactDOM from "react-dom";
import App from "./App";
import DataProvider from "./GlobalState";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <DataProvider>
    <Router basename="/~2021141/ibdb">
      <App />
    </Router>
  </DataProvider>,
  document.getElementById("root")
);
