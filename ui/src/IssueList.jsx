import React from "react";
import IssueFilter from "./IssueFilter.jsx";
import IssueTable from "./IssueTable.jsx";
import IssueAdd from "./IssueAdd.jsx";
import graphQLFetch from "./graphQLFetch.js";

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

  // eslint-disable-next-line class-methods-use-this
  async loadData() {
    // eslint-disable-next-line no-unused-vars
    const query = `
      issueList{
        id title created status owner
      }
    `;

    const data = await graphQLFetch(query);
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
