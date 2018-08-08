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
const removeExpense = ({ id }) => ({ type: "REMOVE_EXPENSE", id });
const startRemoveExpense = ({ id }) => {
  return dispatch => {
    database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
      	dispatch(removeExpense({id}))
      })
      .catch(e => {
        console.log("Remove failed: " + e.message);
      });
  };
};
// EDIT EXPENSE
const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });
const startEditExpense = (id, updates) => {
	return dispatch => {
		database.ref(`expenses/${id}`).update(updates).then(() => {
			dispatch(editExpense(id, updates))
		})
	}
};
// SET EXPENSE
const setExpenses = expenses => ({
  type: "SET_EXPENSE",
  expenses
});
const startSetExpenses = () => {
  return dispatch => {
    return database.ref("expenses").once("value", snapshot => {
      const expenses = [];
      snapshot.forEach(childSnapshot => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};
// EXPORT
export {
  editExpense,
  removeExpense,
  startAddExpense,
  setExpenses,
  startSetExpenses,
	startRemoveExpense,
	startEditExpense
};
