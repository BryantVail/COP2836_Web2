//app.jsx

const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

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
      <td>{issue.effort}</td>
      <td>{issue.created.toDateString()}</td>
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
  const issueRows = props.issues.map((issue) => {
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
    //constructor from React.Component
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

async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == "BAD_USER_INPUT") {
        const details = error.extensions.exception.errors.join("\n");
        alert(`${error.message}: \n${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    //return
    return result.data;

    // catch
  } catch (err) {
    alert(`error in sending data to server: ${err.message}`);
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
