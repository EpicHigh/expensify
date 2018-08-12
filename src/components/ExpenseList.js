import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import {
	ContentContainer,
	ShowForDesktop,
	ShowForMobile,
	darkGrey,
	sSize,
	mSize,
	desktopBreakPoint, lSize
} from "../styles/common";
import { NoExpenseListItem } from "./ExpenseListItem";

const ListHeader = styled.div`
  background: floralwhite;
  border: 1.5px solid #fec;
  color: ${darkGrey};
  display: flex;
  justify-content: space-between;
  padding: ${sSize} ${mSize};
`;

const ListBody = styled.div`
	margin-bottom: ${mSize};
	@media only screen and (min-width: ${desktopBreakPoint}) {
		margin-bottom: ${lSize};
	}
`;

const ExpenseList = props => (
  <ContentContainer>
    <ListHeader>
      <ShowForMobile>Expenses</ShowForMobile>
      <ShowForDesktop>Expense</ShowForDesktop>
      <ShowForDesktop>Amount</ShowForDesktop>
    </ListHeader>
	  <ListBody>
    {props.expenses.length === 0 && (
      <NoExpenseListItem>
        <span>No Expenses</span>
      </NoExpenseListItem>
    )}
    {props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
	  </ListBody>
  </ContentContainer>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
