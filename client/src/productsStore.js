// Coffee: price_1Lv78xI8Ja0J7Wc99jghDQny
// Sunglasses: price_1Lv9kVI8Ja0J7Wc9OGb1R7mo
// Camera: price_1Lv9l3I8Ja0J7Wc9i1umgqMw
// save store here, does not from database
const productsArray = [
  {
    id: "price_1Lv78xI8Ja0J7Wc99jghDQny",
    name: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1Lv9kVI8Ja0J7Wc9OGb1R7mo",
    name: "Sunglasses",
    price: 9.99,
  },
  {
    id: "price_1Lv9l3I8Ja0J7Wc9i1umgqMw",
    name: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
