import instance from "./settings";

const getProduct = () => {
  return instance.get('products')
}

const getCategory = () => {
  return instance.get('products/categories')
}

const getCategoryDetail = (category) => {
  return instance.get(`products/category/${category}`)
}

const searchProduct = (value) => {
  return instance.get(`products/search?q=${value}`)
}

export const services = {
  getProduct,
  getCategory,
  searchProduct,
  getCategoryDetail
}