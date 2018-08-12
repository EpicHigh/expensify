import React from "react";
import { connect } from "react-redux";
import selectorExpenseTotal from "../selectors/expense-total";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import {
  ContentContainer,
  PageHeader,
  PageHeaderTitle,
  PageHeaderAction,
  AddExpenseLink
} from "../styles/common";

const ExpenseSummary = props => {
  return (
    <PageHeader>
      <ContentContainer>
        <PageHeaderTitle>
          Viewing {props.expenses.length}{" "}
          {props.expenses.length > 1 ? "expenses" : "expense"} totaling{" "}
          <span className="fw5">
            {numeral(selectorExpenseTotal(props.expenses)).format("$0,0.00")}
          </span>
        </PageHeaderTitle>
        <PageHeaderAction>
          <AddExpenseLink to="/create">Add Expense</AddExpenseLink>
        </PageHeaderAction>
      </ContentContainer>
    </PageHeader>
  );
};

const mapStateToProp = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProp)(ExpenseSummary);
