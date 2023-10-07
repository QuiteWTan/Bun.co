import { useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { cartReducer } from "./Reducer";
const Cart = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
      Cart: []
    });
  
    return (
      <Cart.Provider value={{ state, dispatch }}>
        {children}
      </Cart.Provider>
    );
  };

export const CartState = () => {
    return useContext(Cart);
  };

  export default CartProvider