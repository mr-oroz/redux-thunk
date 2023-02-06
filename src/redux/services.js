import { services } from "../http/services"
import { getProductAction, getCategoryAction } from "./action"

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await services.getProduct()
      dispatch(getProductAction(response.data.products))
    } catch(e) {
      console.log(e)
    }
  } 
}

export const getAllCategory = () => {
  return async (dispatch) => {
    try {
      const response = await services.getCategory();
      dispatch(getCategoryAction(response.data))
    } catch(e) {
      console.log(e)
    }
  }
}

export const searchAllProduct = (value) => {
  return async (dispatch) => {
    try {
      const response = await services.searchProduct(value);
      // console.log(response)
    } catch(e) {
      console.log(e)
    }
  }
}