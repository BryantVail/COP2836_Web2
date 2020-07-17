// node_module packages
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// user defined
import IssueList from "./IssueList.jsx";
// eslint-disable-next-line no-named-as-default-member
import IssueReport from "./IssueReport.jsx";

//
// end import
//

const NotFound = () => <h1>Page Not found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      <Redirect path="/issues" component={IssueList} />
      <Redirect path="/report" component={IssueReport} />
      <Route component={NotFound} />
    </Switch>
  );
}
