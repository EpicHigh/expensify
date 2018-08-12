import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import {
  PageHeader,
  ContentContainer,
  PageHeaderTitle
} from "../styles/common";

const AddExpensePage = props => (
  <div>
    <PageHeader>
      <ContentContainer>
        <PageHeaderTitle>Add Expense</PageHeaderTitle>
      </ContentContainer>
    </PageHeader>
    <ContentContainer>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(startAddExpense(expense));
          props.history.push("/");
        }}
      />
    </ContentContainer>
  </div>
);

export default connect()(AddExpensePage);
