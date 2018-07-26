import moment from "moment";
import expenseSelector from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: moment(0)
  },
  {
    id: "2",
    description: "Arrows",
    note: "",
    amount: 3,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Feathers",
    note: "",
    amount: 102,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("Should filter by text value", () => {
  const filters = {
    text: "g",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = expenseSelector(expenses, filters);
  expect(result).toEqual([expenses[0]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: moment(0)
      .add(4, "days")
      .valueOf()
  };
  const result = expenseSelector(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});
