/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const IssueRow = withRouter(({ issue, location: { search } }) => {
  const selectLocation = { pathname: `/issues/${issue.id}`, search };

  //test
  console.log(`SelectLocation = ${JSON.stringify(selectLocation)}`);

  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.effort}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.due ? issue.due.toDateString() : " "}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`}>Edit</Link>
        {` | `}
        <NavLink to={selectLocation}>Select</NavLink>
      </td>
    </tr>
  );
});

// eslint-disable-next-line no-unused-vars
export default function IssueTable({ issues }) {
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
          <th>Action</th>
        </tr>
      </thead>
      {/* IssueRows */}
      <tbody>{issueRows}</tbody>
    </table>
  );
}
