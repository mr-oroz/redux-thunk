
import { GET_ALL_PRODUCTS, GET_ALL_CATEGORY } from '../types';

const defaultState = {
  data: [],
  category: []
};

export const productReducer = (state = defaultState, action) => {
  const {payload, type} = action;
  const {data, category} = state;

  switch(type) {
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        data: payload // res.data.products
      }
    }
    case GET_ALL_CATEGORY: {
      return {
        ...state,
        category: payload // res.data
      }
    }
    default : 
      return state
  }
}