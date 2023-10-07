export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItemIndex = state.Cart.findIndex(
          (item) => item.id === action.payload.id && item.size === action.size
        );
  
        if (existingItemIndex !== -1) {
          const updatedCart = [...state.Cart];
          updatedCart[existingItemIndex].qty += action.qty;
          return {
            ...state,
            Cart: updatedCart,
          };
        } else {
          return {
            ...state,
            Cart: [...state.Cart, { ...action.payload, qty: action.qty, size: action.size }],
          };
        }
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          Cart: state.Cart.filter((c) => c.id !== action.payload.id),
        };
      case "EMPTY_CART":
          return { ...state, Cart: [] };
      default:
        return state;
    }
  };
  