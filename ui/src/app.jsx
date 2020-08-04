import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// app.jsx

// eslint-disable-next-line no-unused-vars
import Page from "./Page.jsx";

// create instance of helloWorld
const element = (
  <Router>
    <Page />
  </Router>
);

// pass in instance of helloWorld as 'element'
ReactDOM.render(element, document.querySelector("#contents"));

if (module.hot) {
  module.hot.accept();
}
