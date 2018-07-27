import selectExpensesTotal from "../../selectors/expense-total";

const expenses = [
  {
    description: "Rent",
    note: "Last month",
    amount: 12200,
    createdAt: 0
  },
  {
    description: "iPhoneX",
    note: "For brothers",
    amount: 56200,
    createdAt: 0
  },
  {
    description: "New iPad",
    note: "For brothers",
    amount: 18000,
    createdAt: 0
  }
];

test("should return all values", () => {
  const action = selectExpensesTotal(expenses);
  expect(action).toEqual(86400);
});

test("if no expense should return 0", () => {
  const action = selectExpensesTotal([]);
  expect(action).toEqual(0);
});

test("if single expense should return correctly value", () => {
  const action = selectExpensesTotal([expenses[0]]);
  expect(action).toEqual(12200);
});
