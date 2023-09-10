const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }

  return [];
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save the cart to local storage
  saveCartToLocalStorage(cart);
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

export { addToLocalStorage, getStoredCart };
