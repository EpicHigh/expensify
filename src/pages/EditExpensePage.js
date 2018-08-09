import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <p>Edit the expense with id of {props.match.params.id}</p>
    <ExpenseForm
      expense={props.expense}
      onSubmit={update => {
        props.dispatch(startEditExpense(props.expense.id, update));
        props.history.push("/dashboard");
      }}
    />
    <button
      onClick={() => {
      	props.dispatch(startRemoveExpense({ id: props.expense.id }));
	      props.history.push("/dashboard");
      }}
    >
      Remove
    </button>
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
