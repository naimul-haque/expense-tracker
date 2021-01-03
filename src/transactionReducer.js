export default function TransactionReducer(state, action) {
  console.log(state);
  switch(action.type) {
    case 'add': {
      state.push({
        desc: action.payload.desc,
        amount: action.payload.amount
      })
      return state;
    }
    default:
      return state;
  }
}