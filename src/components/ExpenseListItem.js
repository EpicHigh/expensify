import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ExpenseListItem = ({ description, amount, createdAt, _id }) => (
  <div>
    <Link to={`/edit/${_id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
