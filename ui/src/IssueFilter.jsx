/* eslint "react/prefer-stateless-function": "off" */
import React from "react";

// eslint-disable-next-line no-unused-vars
export default class IssueFilter extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <a href="/#/issues">All Issues</a>
        {` | `}
        <a href="/#/issues?status=New">New Issues</a>
        {` | `}
        <a href="/#/issues?status=Assigned">Assigned Issues</a>
      </div>
    );
  }
}
