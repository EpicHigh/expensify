import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123acb" });
  expect(action).toEqual({
    //Use for an array or object, toBe method will use with other.
    type: "REMOVE_EXPENSE",
    id: "123acb"
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense(1234, {
    description: "Test",
    note: "some note",
    amount: 10,
    createdAt: 0
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: 1234,
    updates: {
      description: "Test",
      note: "some note",
      amount: 10,
      createdAt: 0
    }
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 19500,
    createdAt: 1000,
    note: "This was last month rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      _id: expect.any(String)
    }
  });
});

test("Should setup ad expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      _id: expect.any(String),
      amount: 0,
      createdAt: 0,
      description: "",
      note: ""
    }
  });
});