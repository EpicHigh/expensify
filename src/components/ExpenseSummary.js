import React from "react";
import { connect } from "react-redux";
import selectorExpenseTotal from "../selectors/expense-total";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";

const ExpenseSummary = props => {
  return (
    <div>
      <h2>
        There are {props.expenses.length}{" "}
        {props.expenses.length > 1 ? "expenses" : "expense"}.
      </h2>
      <h2>
        Total expenses:{" "}
        {numeral(selectorExpenseTotal(props.expenses)).format("$0,0.00")}
      </h2>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProp)(ExpenseSummary);
