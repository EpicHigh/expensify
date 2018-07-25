export default (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
	  case "REMOVE_EXPENSE":
      return state.filter(({ _id }) => _id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(
        expense =>
          expense.id === action.id ? { ...expense, ...action.updates } : expense
      );
	  default:
	  	return state
  }
}