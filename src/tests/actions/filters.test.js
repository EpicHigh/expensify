import moment from "moment"
import {
  setTextFilter,
  setEndDate,
  sortByAmount,
  sortByDate,
  setStartDate
} from "../../actions/filters";

test("Should generate set start date action object", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	})
});

test("Should generate set end date action object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0)
	})
});

test("setTextFilter should be equal by default values", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: ""
	})
});

test("setTextFilter should set text filter action object", () => {
	const action = setTextFilter("Rent");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "Rent"
	})
});

test("sortByAmount should return SORT_BY_AMOUNT", () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: "SORT_BY_AMOUNT"
	})
});

test("sortByDate should return SORT_BY_DATE", () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: "SORT_BY_DATE"
	})
});