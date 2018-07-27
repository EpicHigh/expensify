import React from "react";
import ExpenseList from "../components/ExpenseList"
import ExpenseListFilters from "../components/ExpenseListFilters"
import ExpenseTotal from "../components/ExpenseTotal"

const ExpenseDashBoardPage = () => (
  <div>
	  <ExpenseTotal/>
	  <ExpenseListFilters/>
	  <ExpenseList/>
  </div>
);

export default ExpenseDashBoardPage;