export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [...state.transactions, action.paylod],
      };
    default:
      return state;
  }
};
