import { createContext, useEffect, useReducer, useState } from "react";
import { shopReducer, cartActions } from "../reducers/shopReducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const getUserFromLS = () => {
    let user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
  };
  const getCartFromLS = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
  };
  const [user, _setUser] = useState(getUserFromLS() ?? {});
  const [alert, setAlert] = useState({});
  const [cart, dispatch] = useReducer(shopReducer, getCartFromLS() ?? []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    _setUser(user);
  };

  const values = {
    alert,
    setAlert,
    user,
    setUser,
    cart,
    // addToCart:(book)=>{
    //     dispatch({type: cartActions.addToCart, book})
    // },
    addBulkToCart: (book) => {
      dispatch({ type: cartActions.addBulkToCart, book });
    },
    removeFromCart: (book) => {
      dispatch({ type: cartActions.removeFromCart, book });
    },
    removeAllFromCart: (book) => {
      dispatch({ type: cartActions.removeAllFromCart, book });
    },
    emptyCart: () => {
      dispatch({ type: cartActions.emptyCart });
    },
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

// import {createContext, useState} from "react";
// // import LoginForm from './forms/LoginForm';

// export const AppContext = createContext({
//     currentGrid: '',
//     setGrid: null
// });

// const DisplayAllBooksGrid1 = ({children})=>{
//     const currentGrid = localStorage.getItem('appBook') || ''
//     const [bookTitle, _setBookTitle] = useState(currentGrid)
//     const grid = getGrid(bookTitle)

//     const setBookTitle = (title)=>{
//         localStorage.setItem('appBook', title)
//         _setBookTitle(title)
//     }

//     const values = {
//         currentGrid: bookTitle,
//         setGrid: setBookTitle
//     }

//     return{
//         <AppContext.Provider value={values}>
//             {children}
//         </AppContext.Provider>
//     }

// }

// export default DisplayAllBooksGrid1
