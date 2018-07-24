import uuid from "uuid";
// ADD EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    _id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });
// EDIT EXPENSE
const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });
// EXPORT
export {
  addExpense,
  editExpense,
  removeExpense
}