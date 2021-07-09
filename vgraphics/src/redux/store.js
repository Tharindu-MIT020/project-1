import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/DigitalReducers";
import {
  getProductsReducer1,
  getProductDetailsReducer1,
} from "./reducers/OffsetReducers";
import {
  getProductsReducer2,
  getProductDetailsReducer2,
} from "./reducers/VcardReducers";


const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProducts: getProductsReducer1,
  getProducts: getProductsReducer2,
  getProductDetails: getProductDetailsReducer,
  getProductDetails: getProductDetailsReducer1,
  getProductDetails: getProductDetailsReducer2,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;