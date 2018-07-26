import uuid from "uuid";
//PROVIDE THE KEY
const key = () => {
  const key = String(uuid());
  return key.slice(0, key.indexOf(`-`, key.indexOf(`-`) + 1));
};
// ADD EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    _id: key(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({ type: "REMOVE_EXPENSE", id });
// EDIT EXPENSE
const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });
// EXPORT
export { addExpense, editExpense, removeExpense };
