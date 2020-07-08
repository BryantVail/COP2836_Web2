/* eslint "react/react-in-jsx-scopt": "off" */
/* globals React ReactDOM */
/* eslint "react/jsx-no-undef": "off" */

// app.jsx

import graphQLFetch from "./graphQLFetch.js";

// eslint-disable-next-line react/prefer-stateless-function
class IssueFilter extends React.Component {
  render() {
    return <div>"This is a placeholder for the IssueFilter"</div>;
  }
}

function IssueRow({ issue }) {
  // reading from the component's properties
  const issueLocal = issue;
  return (
    <tr>
      <td>{issueLocal.id}</td>

      <td>{issueLocal.status}</td>
      <td>{issueLocal.owner}</td>
      <td>{issueLocal.effort}</td>
      <td>{issueLocal.created.toDateString()}</td>
      <td>{issueLocal.due ? issueLocal.due.toDateString() : ""}</td>
      <td>{issueLocal.title}</td>
    </tr>
  );
}

// class IssueRow extends React.Component {
//   render() {
//
//   }
// }

function IssueTable({ issues }) {
  // issues passed in from the 'IssuesList' as a prop
  // > map(issue => 'as' <IssueRow issue={issue} />)
  const issueRows = issues.map((issue) => {
    return <IssueRow key={issue.id} issue={issue} />;
  });

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
    // constructor from React.Component
    super();

    // setTimeout(() => {
    //   this.setState({ issues: sampleIssue });
    // }, 2000);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      // 1000(milisecs/sec)*60(secs/min)*60(min/hr)*24(hrs/day)*10(days) => default due date is 10days from now
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
      // status now handled by the addFunction in DB
      // status: "New",
    };
    this.props.createIssue(issue);

    const { createIssue } = this.props;
    createIssue(issue);

    // clear form
    form.owner.value = "";
    form.title.value = "";
  }

  render() {
    return (
      <form name="issueAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="owner" id="owner" placeholder="Owner" />
        <input type="text" name="title" id="title" placeholder="Title" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

// IssueList
class IssueList extends React.Component {
  constructor() {
    super(); // calls constructor of React.Component

    // constructor is the only place where state can directly
    // > be set on the entity through 'this.state'

    this.state = { issues: [] };

    // createIssue binding to 'this'; when fn is called => 'this' will refer to
    // > IssueList, otherwise the 'lexical scope' will refer to the function caller
    this.createIssue = this.createIssue.bind(this);
  }

  // lifecycle method
  componentDidMount() {
    this.loadData();
  }

  // eslint-disable-next-line async
  async loadData() {
    const query = `
      query{
        issueList{
          id title created status owner
        }
      }
    `;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ issues: data.issueList });
    }
  }

  async createIssue(issue) {
    const query = `mutation issueAdd($issue: IssueInputs!){
      issueAdd(issue: $issue){
        id
      }
    }`;

    const data = await graphQLFetch(query, { issue });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { issues } = this.state;
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

// create instance of helloWorld
const element = <IssueList />;

// pass in instance of helloWorld as 'element'
ReactDOM.render(element, document.querySelector("#contents"));
