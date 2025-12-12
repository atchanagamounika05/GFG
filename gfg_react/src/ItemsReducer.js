export default function itemsReducer(state, action) {
  switch (action.type) {
    case "PRICE":
      return { ...state, amount: action.payload };
    case "DISCOUNT":
      return { ...state, discount: action.payload };
    case "RATING":
      return { ...state, starRating: action.payload };
    default:
      return state;
  }
}
