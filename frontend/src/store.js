import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: localStorage.getItem('paymentMethod'),
    // ? JSON.parse(localStorage.getItem('paymentMethod'))
    // : '',
  },
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,

  //shippingAddress???
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item._id === existingItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };

    case 'REMOVE_FROM_CART': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'CLEAR_CART': {
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    }

    case 'USER_SIGNIN': {
      return { ...state, userInfo: action.payload };
    }

    case 'USER_SIGNOUT': {
      return {
        ...state,
        userInfo: null,
        cart: { cartItems: [], shippingAddress: {}, paymentMethod: '' },
      };
    }

    // case 'USER_SIGNUP': {
    //   return {
    //     ...state,
    //     userInfo: null,
    //     cart: { cartItems: [], shippingAddress: {} },
    //   };
    // }

    case 'SAVE_SHIPPING_ADDRESS': {
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };
    }

    case 'SAVE_PAYMENT_METHOD': {
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    }

    case 'REORDER_CART_ITEMS': {
      const cartItems = action.payload;
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

export default Store;
