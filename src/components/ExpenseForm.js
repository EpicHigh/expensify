import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import {
  TextInput,
  NoteTextArea,
  StyledForm,
  ErrorArea,
  AddAndEditButton
} from "../styles/common";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = event => {
    event.persist();
    this.setState({ description: event.target.value });
  };

  onAmountChange = event => {
    const amount = String(event.target.value);
    !amount.startsWith(".") &&
      amount.match(/^\d*(\.\d{0,2})?$/) &&
      this.setState({ amount });
  };

  onNoteChange = event => {
    event.persist();
    this.setState({ note: event.target.value });
  };

  onDateChange = createdAt => {
    createdAt && this.setState({ createdAt });
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      description: this.state.description,
      note: this.state.note,
      amount: parseFloat(this.state.amount),
      createdAt: this.state.createdAt.valueOf()
    });
  };

  render() {
    return (
      <div>
        <StyledForm onSubmit={this.onSubmit}>
          {this.state.error && <ErrorArea>{this.state.error}</ErrorArea>}
          <TextInput
            name="description"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            required
          />
          <TextInput
            type="text"
            placeholder="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            required
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <NoteTextArea
            name="note"
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          {this.props.expense ? (
            <AddAndEditButton>Edit Expense</AddAndEditButton>
          ) : (
            <AddAndEditButton>Add Expense</AddAndEditButton>
          )}
        </StyledForm>
      </div>
    );
  }
}
