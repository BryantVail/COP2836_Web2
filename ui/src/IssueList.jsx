import React from "react";
import URLSearchParams from "url-search-params";
import graphQLFetch from "./graphQLFetch.js";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";

export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  // lifecycle method
  componentDidMount() {
    this.loadData();
  }

  // lifecycle method
  componentDidUpdate(prevProps) {
    const {
      location: { search: prevSearch },
    } = prevProps;

    const {
      location: { search },
    } = this.props;

    if (prevSearch !== search) {
      this.loadData();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async loadData() {
    const {
      location: { search },
    } = this.props;

    const params = new URLSearchParams(search);

    const vars = {};

    // get the value of 'status' from the params query
    if (params.get("status")) {
      vars.status = params.get("status"); // add 'status' param to 'vars'
    }

    // eslint-disable-next-line no-unused-vars
    const query = `query issueList($status: StatusType) {
      issueList (status: $status){
        id title status owner created effort due 
      }
    }`;

    const data = await graphQLFetch(query, vars);
    if (data) {
      // get 'issueList' from data source via graphQLFetch(query)
      // > setState({})
      this.setState({ issues: data.issueList });
    }
  } // end loadData()

  async createIssue(issue) {
    // query
    const query = `
    
      mutation issueAdd($issue: IssueInputs!){
        issueAdd(issue:$issue){
          id
        }
      }
    `;

    const data = await graphQLFetch(query, { issue });

    if (data) {
      this.loadData();
    }
  } // end createIssue(issue)

  render() {
    // eslint-disable-next-line no-unused-vars
    const { issues } = this.state;
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
} // end class React.Component IssueList
