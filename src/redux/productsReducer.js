import Bestsellers1 from "../static/images/bestsellers1.jfif";
import Bestsellers2 from "../static/images/bestsellers2.jfif";
import Bestsellers3 from "../static/images/bestsellers3.jfif";
import Bestsellers4 from "../static/images/bestsellers4.jpg";
import { ADD_TO_CART } from "./actionTypes";

const initialState = {
  products: [
    { id: 1, name: "Sofa Francesca", price: "300$", image: Bestsellers1 },
    { id: 2, name: "Sofa Francesca", price: "300$", image: Bestsellers2 },
    { id: 3, name: "Sofa Francesca", price: "300$", image: Bestsellers3 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
    { id: 4, name: "Sofa Francesca", price: "300$", image: Bestsellers4 },
  ],
  cart: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
  return state;
};
