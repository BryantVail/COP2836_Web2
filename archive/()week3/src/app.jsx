const issues = [
  {
    id: 1,
    status: "new",
    owner: "Bryant",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Stephanie",
    effort: 3,
    created: new Date("2020-06-01"),
    due: new Date("2020-07-04"),
    title: "Put gum in the Cd tray of the computer",
  },
  {
    id: 3,
    status: "Assigned",
    owner: "Stephanie",
    effort: 6,
    created: new Date("2020-06-02"),
    due: new Date("2020-07-04"),
    title: "Printer is out of ink",
  },
];

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the IssueFilter</div>;
  }
}

class IssueRow extends React.Component {
  render() {
    // reading from the component's properties
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>

        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.effort}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.due ? issue.due.toDateString() : ""}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = issues.map((issue) => <IssueRow issue={issue} />);

    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Effort</th>
            <th>Created</th>
            <th>Due</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueAdd extends React.Component {
  render() {
    return <div>This is a Placeholder for Adding an Issue</div>;
  }
}

class IssueList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter></IssueFilter>
        <hr />
        <IssueTable></IssueTable>
        <hr />
        <IssueAdd></IssueAdd>
      </React.Fragment>
    );
  }
}

//create instance of helloWorld
const element = <IssueList />;

// pass in instance of helloWorld as 'element'
ReactDOM.render(element, document.querySelector("#contents"));
