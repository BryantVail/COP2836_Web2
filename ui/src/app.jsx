import "babel-polyfill";
import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";

// app.jsx

// eslint-disable-next-line no-unused-vars
import IssueList from "./IssueList.jsx";

// create instance of helloWorld
const element = <IssueList />;

// pass in instance of helloWorld as 'element'
ReactDOM.render(element, document.querySelector("#contents"));

if (module.hot) {
  module.hot.accept();
}
