import React from "react";
import "../styles/Home.css";
import api from "../api";
import axios from "axios";
import { ACCESS_TOKEN } from "../LoginLogout";

const Home = () => {
    const [products, setProducts] = React.useState('') 
    function addToCart(){
      pass
    }

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ECOMMERCE</h1>
          <p>Discover the best products at unbeatable prices!</p>
          <button className="shop-now"><a href="/products">Shop Now</a></button>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products && products.slice(0,4).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
