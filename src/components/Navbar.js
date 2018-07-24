import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <nav>
      <Link to="/">Dashboard</Link>
	    <Link to="/create">Create</Link>
	    <Link to="/edit:id">Expense</Link>
	    <Link to="/help">Help</Link>
    </nav>
  </div>
);
