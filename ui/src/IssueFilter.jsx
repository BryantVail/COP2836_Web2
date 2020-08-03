/* eslint "react/prefer-stateless-function": "off" */
import React from "react";
import { withRouter } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
class IssueFilter extends React.Component {
  constructor() {
    super();

    // associate the 'bind' with 'this' object scope
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  onChangeStatus(e) {
    const status = e.target.value;
    const { history } = this.props;
    history.push({
      pathname: "/issues",
      search: status ? `?status=${status}` : "",
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        {/* dropdown list markup */}
        Status: {``}
        <select onChange={this.onChangeStatus}>
          <option value="">{"(All)"}</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
    );
  }
} // end IssueFilter Component

export default withRouter(IssueFilter);
