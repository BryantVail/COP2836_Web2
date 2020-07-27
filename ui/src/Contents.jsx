// node_module packages
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// user defined
import IssueList from "./IssueList.jsx";
// eslint-disable-next-line no-named-as-default-member
import IssueReport from "./IssueReport.jsx";
import IssueEdit from "./IssueEdit.jsx";

//
// end import
//

const NotFound = () => <h1>Page Not found</h1>;

export default function Contents() {
  return (
    <Switch>
      <Redirect exact from="/" to="/issues" />
      <Route path="/issues" component={IssueList} />
      <Route path="/edit/:id" component={IssueEdit} />
      <Route path="/report" component={IssueReport} />
      {/* last element within the switch is a 'catch-all' */}
      <Route component={NotFound} />
    </Switch>
  );
}
