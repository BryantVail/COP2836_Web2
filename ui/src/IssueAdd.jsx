import React from "react";

// eslint-disable-next-line no-unused-vars
export default class IssueAdd extends React.Component {
  constructor() {
    super();

    // bind 'this' to handleSubmit
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = document.forms.issueAdd;
    const issue = {
      owner: form.owner.value,
      title: form.title.value,
      // set default due date
      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
    };

    const { createIssue } = this.props;
    createIssue(issue); // created from inputs

    // clear inputs
    form.owner.value = "";
    form.title.value = "";
  } // end handleSubmit

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
