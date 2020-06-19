// const initialIssues = [
//   {
//     id: 1,
//     status: "new",
//     owner: "Bryant",
//     effort: 5,
//     created: new Date("2018-08-15"),
//     due: undefined,
//     title: "Error in console when clicking Add",
//   },
//   {
//     id: 2,
//     status: "Assigned",
//     owner: "Stephanie",
//     effort: 3,
//     created: new Date("2020-06-01"),
//     due: new Date("2020-07-04"),
//     title: "Put gum in the Cd tray of the computer",
//   },
//   {
//     id: 3,
//     status: "Assigned",
//     owner: "Stephanie",
//     effort: 6,
//     created: new Date("2020-06-02"),
//     due: new Date("2020-07-04"),
//     title: "Printer is out of ink",
//   },
// ];

// now taking input from user & no longer need the sampleIssue
// const sampleIssue = {
//   id: 29,
//   status: "New",
//   owner: "Stephanie",
//   effort: 11,
//   created: new Date("2020-06-08"),
//   due: new Date("2020-07-05"),
//   title: "Youtube is not rewinding",
// };

class IssueFilter extends React.Component {
  render() {
    return <div>This is a placeholder for the IssueFilter</div>;
  }
}

function IssueRow(props) {
  // reading from the component's properties
  const issue = props.issue;
  return (
    <tr>
      <td>{issue.id}</td>

      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ""}</td>
      <td>{issue.title}</td>
    </tr>
  );
}

// class IssueRow extends React.Component {
//   render() {
//
//   }
// }

function IssueTable(props) {
  //issues passed in from the 'IssuesList' as a prop
  // > map(issue => 'as' <IssueRow issue={issue} />)
  const issueRows = props.issues.map((issue) => (
    <IssueRow key={issue.id} issue={issue} />
  ));

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

// class IssueTable extends React.Component {
//   render() {
//   }
// }

class IssueAdd extends React.Component {
  constructor() {
    //constructor from React.Component
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      status: "New",
    };
    this.props.createIssue(issue);

    //clear form
    form.owner.value = "";
    form.title.value = "";
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" id="owner" placeholder="Owner" />
        <input type="text" name="title" id="title" placeholder="Title" />
        <button>Add</button>
      </form>
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super(); // calls constructor of React.Component

    //constructor is the only place where state can directly
    // > be set on the entity through 'this.state'

    this.state = { issues: [] };

    //createIssue binding to 'this'; when fn is called => 'this' will refer to
    // > IssueList, otherwise the 'lexical scope' will refer to the function caller
    this.createIssue = this.createIssue.bind(this);
  }

  // lifecycle method
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ issues: initialIssues });
    }, 500);
  }

  createIssue(issue) {
    issue.id = this.state.issues.length + 1;
    issue.created = new Date();

    //creates a duplicate of the list
    //constructor is the only place where state can be set directly
    const newIssueList = this.state.issues.slice();

    newIssueList.push(issue);

    //run 'setState' to update 'issues'
    this.setState({ issues: newIssueList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />

        <IssueAdd createIssue={this.createIssue} />
      </React.Fragment>
    );
  }
}

//create instance of helloWorld
const element = <IssueList />;

// pass in instance of helloWorld as 'element'
ReactDOM.render(element, document.querySelector("#contents"));
