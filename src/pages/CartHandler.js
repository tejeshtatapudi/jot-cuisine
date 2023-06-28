function addToCart(cartItems, item) {
  if (cartItems && Array.isArray(cartItems)) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCartItems = [];

    if (itemIndex !== -1) {
      updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      return updatedCartItems;
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      return updatedCartItems;
    }
  }
  
  return cartItems
}

function removeOneFromCart(cartItems, item) {
  if (cartItems && Array.isArray(cartItems) && cartItems.length > 0) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let updatedCartItems = [];
    if (itemIndex !== -1) {
      updatedCartItems = [...cartItems];
      if (updatedCartItems[itemIndex].quantity > 1) {
        updatedCartItems[itemIndex].quantity -= 1;
        return updatedCartItems;
      } else {
        updatedCartItems.splice(itemIndex, 1);
        return updatedCartItems;
      }
    }
  }

  return cartItems;
}

function removeFromCart(cartItems, itemId) {
  console.log(
    "🚀 ~ file: CartHandler.js:38 ~ removeFromCart ~ cartItems:",
    cartItems
  );

  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  return updatedCartItems;
}

export { addToCart, removeOneFromCart, removeFromCart };
