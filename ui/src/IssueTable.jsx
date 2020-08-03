import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
function IssueRow({ issue }) {
  // reading from the component's properties

  return (
    <tr>
      <td>{issue.id}</td>

      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.effort}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.due ? issue.due.toDateString() : ""}</td>
      <td>{issue.title}</td>
      <td>
        <Link to={`/edit/${issue.id}`}>Edit</Link>
      </td>
    </tr>
  );
}

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
      <tbody>{issueRows}</tbody>
    </table>
  );
}
