import database from "../db/firebase";
// ADD EXPENSE
const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});
const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};
// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });
// EDIT EXPENSE
const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });
// EXPORT
export { editExpense, removeExpense, startAddExpense };
