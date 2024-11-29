const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories`);
  return await response.json();
};

export const fetchProductsByCategory = async (category) => {
  const response = await fetch(`${BASE_URL}/category/${category}`);
  return await response.json();
};

export const fetchProductDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};
