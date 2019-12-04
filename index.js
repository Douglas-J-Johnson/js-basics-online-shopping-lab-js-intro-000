var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random() * 100) + 1)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  var retString = ""
  var cartItem = {}
  
  if(cart.length === 0) {
    retString "Your shopping cart is empty."
  }
  else {
    retString =  "In your cart, you have"
    
    for (var i = 0; i<cart.length; i++) {
      cartItem = cart[i]
      if (i > 0) {
        retString = retString + ","
      }

      retString = retString + `${cartItem.itemName} at ${cartItem.itemPrice}`
    }

    retString = retString + "."
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
