import React from "react";
import Contents from "./Contents.jsx";

function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      {" | "}
      <a href="/#/issues">IssueList</a>
      {" | "}
      <a href="/#/report">Report</a>
    </nav>
  );
}
