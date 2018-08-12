import React from "react";
import moment from "moment";
import numeral from "numeral";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { darkGrey, sSize, mSize, desktopBreakPoint } from "../styles/common";

export const ListItem = styled(Link)`
  border: 1.5px solid #fec;
  display: flex;
  flex-direction: column;
  border-top: none;
  color: ${darkGrey};
  padding: ${sSize};
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: floralwhite;
  }
  @media only screen and (min-width: ${desktopBreakPoint}) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${mSize};
    align-items: center;
  }
`;

const ListItemTitle = styled.h3`
  margin: 0;
  word-break: break-all;
`;

const ListItemSubtitle = styled.span`
  color: grey;
  font-size: small;
`;

const ListItemData = styled.h3`
  margin: ${sSize} 0 0 0;
  @media only screen and (min-width: ${desktopBreakPoint}) {
    margin: 0;
    padding-left: ${sSize};
  }
`;

export const NoExpenseListItem = styled.div`
	border: 1.5px solid #fec;
	display: flex;
	align-items: center;
	justify-content: center;
	color: grey;
	padding: ${mSize};
	text-decoration: none;
	border-top: none;
`;

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <ListItem to={`/edit/${id}`}>
    <div>
      <ListItemTitle>{description}</ListItemTitle>
      <ListItemSubtitle>
        {moment(createdAt).format("Do MMMM YYYY")}
      </ListItemSubtitle>
    </div>
    <ListItemData>{numeral(amount).format("$0,0.00")}</ListItemData>
  </ListItem>
);

export default connect()(ExpenseListItem);
