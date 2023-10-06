import React from 'react';

function Cart() {
// Get the list of products in the cart from local storage or Redux store (if using Redux)
const cartItems = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: [];

// Calculate the total quantity of products in the cart
const totalQuantity = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

// Calculate the total price of products in the cart
const totalPrice = cartItems.reduce(
(total, item) => total + item.quantity * item.price,
0
);

// Remove a product from the cart
const removeItem = (itemId) => {
const updatedCart = cartItems.filter((item) => item.id !== itemId);
localStorage.setItem('cartItems', JSON.stringify(updatedCart));
// Update the cart in the Redux store (if using Redux)
};

return (
<div>
<h1>Cart</h1>
{cartItems.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<div>
{cartItems.map((item) => (
<div key={item.id}>
<h3>{item.name}</h3>
<p>Price: {item.price}</p>
<p>Quantity: {item.quantity}</p>
<button onClick={() => removeItem(item.id)}>Remove</button>
<hr />
</div>
))}
<p>Total Quantity: {totalQuantity}</p>
<p>Total Price: {totalPrice}</p>
<button>Checkout</button>
</div>
)}
</div>
);
}

export default Cart;