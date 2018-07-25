import React from "react";
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilters from "../components/ExpenseListFilters"

export default () => (
  <div>
	  <ExpenseListFilters/>
	  <ExpenseList/>
    <p>This is an expense dashboard page</p>
  </div>
);