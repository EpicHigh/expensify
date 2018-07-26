import React from "react";
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilters from "../components/ExpenseListFilters"

const ExpenseDashBoardPage = () => (
  <div>
	  <ExpenseListFilters/>
	  <ExpenseList/>
    <p>This is an expense dashboard page</p>
  </div>
);

export default ExpenseDashBoardPage;