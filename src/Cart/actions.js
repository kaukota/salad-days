export const CART_ADD_BOX = 'CART_ADD_BOX'
export const CART_INCREASE_QUANTITY = 'CART_INCREASE_QUANTITY'
export const CART_DECREASE_QUANTITY = 'CART_DECREASE_QUANTITY'
export const CART_REMOVE_BOX = 'CART_REMOVE_BOX'
export const CART_CHECKOUT = 'CART_CHECKOUT'
export const CART_UPDATE_SUBTOTAL = 'CART_UPDATE_SUBTOTAL'

export const addBoxToCart = (box) => {
  var cartInJson = JSON.stringify(box)
  localStorage.setItem('cartValue', cartInJson)
  /* ---------------------------
  To get item from localStorage. Use following command
  var getItem = localStorage.getItem('cartValue');
  */
  return {
    type: CART_ADD_BOX,
    box
  }
}

export const increaseQuantity = (cartId) => {
  return {
    type: CART_INCREASE_QUANTITY,
    cartId
  }
}

export const decreaseQuantity = (cartId) => {
  return {
    type: CART_DECREASE_QUANTITY,
    cartId
  }
}

export const removeItem = (cartId, box) => {
  return {
    type: CART_REMOVE_BOX,
    cartId,
    box
  }
}

export const updateCartSubtotal = () => {
  return {
    type: CART_UPDATE_SUBTOTAL
  }
}
