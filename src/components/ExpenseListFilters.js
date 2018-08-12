import React, { Component } from "react";
import { connect } from "react-redux";
import { ContentContainer } from "../styles/common";
import styled from "styled-components";
import { lSize, sSize, desktopBreakPoint, TextInput, Selector } from "../styles/common";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setEndDate,
  setStartDate
} from "../actions/filters";

const InputGroup = styled.div`
  display: flex;
  margin-bottom: ${lSize};
  flex-direction: column;
  margin-bottom: ${lSize};
  @media only screen and (min-width: ${desktopBreakPoint}) {
    flex-direction: row;
  }
`;

const InputGroupItems = styled.div`
  margin-right: ${sSize};
  margin-bottom: ${sSize};
  @media only screen and (max-width: ${desktopBreakPoint}) {
    margin-right: ${sSize};
    margin: 0 ${sSize} 0 0;
  }
`;

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDateChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState({ calendarFocused });
  };

  render() {
    return (
      <ContentContainer>
        <InputGroup>
          <InputGroupItems>
            <TextInput
              type="text"
              value={this.props.filters.text}
              onChange={event =>
                this.props.dispatch(setTextFilter(event.target.value))
              }
              placeholder="Search expenses"
            />
          </InputGroupItems>
          <InputGroupItems>
            <Selector
              value={this.props.filters.sortBy}
              onChange={event =>
                event.target.value === "date"
                  ? this.props.dispatch(sortByDate())
                  : this.props.dispatch(sortByAmount())
              }
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </Selector>
          </InputGroupItems>
          <InputGroupItems>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDateChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              startDateId={"startDateId"}
              endDateId={"endDateId"}
              numberOfMonths={1}
              showClearDates={true}
              isOutsideRange={() => false}
            />
          </InputGroupItems>
        </InputGroup>
      </ContentContainer>
    );
  }
}

const mapStateToProp = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProp)(ExpenseListFilters);
