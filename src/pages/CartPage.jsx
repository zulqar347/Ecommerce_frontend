import React from "react";
import "../styles/CartPage.css";
import api from "../api";

const CartPage = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart'))
 

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>

      <div className="cart-items">
        {cartItems && cartItems.map((item) => (
          <CartItemBox key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>

      <div className="cart-summary">
        {/* {cartItems && <h3>Total: ${total}</h3>} */}
        <button className="checkout-btn"onClick={()=>{alert("Order Placed!")
          const cart = localStorage.getItem('cart')
          const order = localStorage.setItem('order', cart)
          console.log(JSON.parse(localStorage.getItem('order')))
        }}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;


function CartItemBox(props){
  const [quantity , setQuantity] = React.useState(1)
   function getQuantity(formData){
    const quan= formData.get('quantity')
    setQuantity(quan)
  }
  return( 
    <div className="cart-item">
        <img src={props.image} alt={props.name} />
          <div className="cart-details">
            <h3>{props.name}</h3>
            <p>${props.price}</p>
            <div className="quantity">
              <form action={getQuantity}>
                <input type='text' name="quantity" placeholder={`Quantity: ${quantity}`}/>
              </form>
            </div>
          </div>
          <p className="cart-subtotal">${props.price * quantity}</p>
      </div>
  )
}
