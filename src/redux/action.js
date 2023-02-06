import {
  GET_ALL_CATEGORY,
  GET_ALL_PRODUCTS
}
  from "./types";

  export const getProductAction = (data) => {
    return {
      type: GET_ALL_PRODUCTS,
      payload: data
    }
  }
  
  export const getCategoryAction = (list) => {
    return {
      type: GET_ALL_CATEGORY,
      payload: list
    }
  }