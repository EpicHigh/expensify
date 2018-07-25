import React, { Component } from "react";

export default class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: 0
  };

  onDescriptionChange = event => {
	  event.persist();
    this.setState({ description: event.target.value });
  };

  onAmountChange = event => {
	  event.persist();
    this.setState({ amount: event.target.value });
  };

  onNoteChange = event => {
    event.persist();
    this.setState({ note: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
