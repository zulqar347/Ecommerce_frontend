import React from "react";
import "../styles/Products.css";
import api from "../api";


const Products = () => {
  const [cartProducts, setCartProducts] = React.useState('')
  const [products, setProducts] = React.useState('') 

  
  React.useEffect(()=>{
    async function getProducts() {
       try{
        const res = await api.get('products/')
        setProducts(res.data)
        }catch (error){
          console.error(error)
        }
    }
    getProducts()
    },[])

    function getCartProduct(product){
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      const exists = cart.some((item)=> item.id ===product.id)
      if(!exists){
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        alert("Product Added to Cart")
      }else{alert("Product is already in the cart")}
    }

    console.log(cartProducts)

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <form>
          <input type="text" placeholder="Search products..." className="product-search"  />
        </form>
        
      </div>

      <div className="products-grid">
        {products && products.map((product) => (<ProductCard key={product.id} image={product.image}
        name = {product.name} price={product.price} addToCart={()=> getCartProduct(product)}/>))}
      </div>
    </div>
  );
};

export default Products;


function ProductCard(props){
  return(
    <div className="product-card">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p className="price">{props.price}</p>
        <button className="add-to-cart" onClick={props.addToCart}>Add to Cart</button>
    </div>
  )
}