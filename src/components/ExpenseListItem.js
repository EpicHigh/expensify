import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

numeral.register("locale", "th", {
	delimiters: {
		thousands: ',',
		decimal: '.'
	},
  currency: {
    symbol: "฿"
  }
});

numeral.locale("th");

const ExpenseListItem = ({ description, amount, createdAt, _id }) => (
  <div>
    <Link to={`/edit/${_id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount).format("$0,0.00")}
      -
      {moment(createdAt).format("Do MMMM YYYY")}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
