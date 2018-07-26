import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "../components/ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => (
  <div>
    <h1>Edit Expense</h1>
    <p>Edit the expense with id of {props.match.params.id}</p>
    <ExpenseForm
      expense={props.expense}
      onSubmit={update => {
        props.dispatch(editExpense(props.expense._id, update));
        props.history.push("/");
      }}
    />
    <button
      onClick={() => {
      	props.dispatch(removeExpense({ id: props.expense._id }));
	      props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense._id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
