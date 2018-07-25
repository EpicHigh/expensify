import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import 'react-dates/initialize';

export default class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
	  calendarFocused: false
  };

  onDescriptionChange = event => {
    event.persist();
    this.setState({ description: event.target.value });
  };

  onAmountChange = event => {
    const amount = String(event.target.value);
    amount.match(/^\d*(\.\d{0,2})?$/) && this.setState({ amount });
  };

  onNoteChange = event => {
    event.persist();
    this.setState({ note: event.target.value });
  };

  onDateChange = createdAt => {
    this.setState({ createdAt });
  };

	onFocusChange = ({ focused }) => {
		this.setState({calendarFocused: focused})
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
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
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
