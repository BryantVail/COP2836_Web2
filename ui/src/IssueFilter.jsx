/* eslint "react/prefer-stateless-function": "off" */
import React from "react";
import { withRouter } from "react-router-dom";
import URLSearchParams from "url-search-params";

// eslint-disable-next-line no-unused-vars
class IssueFilter extends React.Component {
  constructor({ location: { search } }) {
    super();

    const params = new URLSearchParams(search);
    this.state = {
      status: params.get("status") || "",
      changed: false,
    };

    // associate the 'bind' with 'this' object scope
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.showOriginalFilter = this.showOriginalFilter.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;
    const {
      location: { search },
    } = this.props;

    if (prevSearch !== search) {
      this.showOriginalFilter();
    }
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  showOriginalFilter() {
    const {
      location: { search },
    } = this.props;
    const params = new URLSearchParams(search);

    this.setState({
      status: params.get("status") || "",
      changed: false,
    });
  }

  applyFilter() {
    const { status } = this.state;
    const { history } = this.props;
    history.push({
      pathname: `/issues`,
      search: status ? `?status=${status}` : "",
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const { status, changed } = this.state;

    return (
      <div>
        {/* dropdown list markup */}
        Status: {``}
        <select
          value={status.get("status") || ""}
          onChange={this.onChangeStatus}
        >
          <option value="">{"(All)"}</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>{" "}
        <button type="button" onClick={this.applyFilter}>
          Apply
        </button>
        <button
          type="button"
          onClick={this.showOriginalFilter}
          disabled={!changed}
        >
          Reset
        </button>
      </div>
    );
  }
} // end IssueFilter Component

export default withRouter(IssueFilter);
