import React from "react";
import { connect } from "react-redux";
import {
  PageHeader,
  ContentContainer,
  PageHeaderTitle,
  RemoveButton
} from "../styles/common";
import ExpenseForm from "../components/ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <PageHeader>
      <ContentContainer>
        <PageHeaderTitle>Edit Expense</PageHeaderTitle>
        <p>Edit the expense with id of {props.match.params.id}</p>
      </ContentContainer>
    </PageHeader>
    <ContentContainer>
      <ExpenseForm
        expense={props.expense}
        onSubmit={update => {
          props.dispatch(startEditExpense(props.expense.id, update));
          props.history.push("/dashboard");
        }}
      />
      <RemoveButton
        onClick={() => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </RemoveButton>
    </ContentContainer>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
