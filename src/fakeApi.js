export const products = [
  { id: 'h-1', name: 'Book 1' },
  { id: 'h-2', name: 'Book 2' },
  { id: 'h-3', name: 'Book 3' },
  { id: 's-1', name: 'Book 4' },
  { id: 's-2', name: 'Book 5' },
  { id: 's-3', name: 'Book 6' },
  { id: 's-4', name: 'Book 7' },
  { id: 'p-1', name: 'Book 8' },
  { id: 'p-2', name: 'Book 9' },
  { id: 'p-3', name: 'Book 10' },
  { id: 'p-7', name: 'Book 11' },
  { id: 'p-4', name: 'Book 12' },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(product => product.id === productId);
};
