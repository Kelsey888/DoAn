import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Cart from './cart.js';

function SanPham() {
  const [dsSP, setSP] = useState([]);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({
    size: "M",
    sugar: "50%",
    ice: "50%",
    toppings: [],
  });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('http://localhost:9000/get-data.php')
      .then(response => response.json())
      .then(json => setSP(json))
      .catch(error => console.error(error));
  }, []);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    if (selectedProduct) {
      const product = {
        id: id,
        quantity: quantity,
        ...selectedProduct,
      };
      console.log('Selected Product:', product);
      // Perform other actions like payment
    }
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const product = {
        id: id,
        quantity: quantity,
        ...selectedProduct,
      };
      console.log('Selected Product:', product);

      // Perform action to add to cart
      Cart.addToCart(product);
    }
  };

  const handleOptionChange = (type, value) => {
    setSelectedProduct((prevProduct) => ({
      ...prevProduct,
      [type]: value,
    }));
  };

  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setSelectedProduct((prevProduct) => {
      if (checked) {
        return {
          ...prevProduct,
          toppings: [...prevProduct.toppings, value],
        };
      } else {
        return {
          ...prevProduct,
          toppings: prevProduct.toppings.filter((topping) => topping !== value),
        };
      }
    });
  };

  return (
    <div>
      <div className="product-details">
        <div className="product-container">
          <h1>Product Details</h1><br />
          <div className="image-container">
            <img className="small-image" src={`../${dsSP[id]?.hinhanh}`} alt={dsSP[id]?.tenSP} />
          </div>

          <h2>{dsSP[id]?.tenSP}</h2>
          <h3>Price: {dsSP[id]?.gia}</h3>

          <div className="product-options">
            <div className="option">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={selectedProduct.size}
                onChange={(e) => handleOptionChange("size", e.target.value)}
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>

            <div className="option">
              <label htmlFor="sugar">Sugar:</label>
              <select
                id="sugar"
                value={selectedProduct.sugar}
                onChange={(e) => handleOptionChange("sugar", e.target.value)}
              >
                <option value="0%">0%</option>
                <option value="30%">30%</option>
                <option value="50%">50%</option>
                <option value="70%">70%</option>
                <option value="100%">100%</option>
              </select>
            </div>

            <div className="option">
              <label htmlFor="ice">Ice:</label>
              <select
                id="ice"
                value={selectedProduct.ice}
                onChange={(e) => handleOptionChange("ice", e.target.value)}
              >
                <option value="0%">0%</option>
                <option value="30%">30%</option>
                <option value="50%">50%</option>
                <option value="70%">70%</option>
                <option value="100%">100%</option>
              </select>
            </div>

            <div className="option">
              <label>Toppings:</label>
              <div className="toppings">
                <label>
                  <input
                    type="checkbox"
                    value="Chocolate"
                    checked={selectedProduct.toppings.includes("Chocolate")}
                    onChange={handleToppingChange}
                  />
                  Chocolate
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Caramel"
                    checked={selectedProduct.toppings.includes("Caramel")}
                    onChange={handleToppingChange}
                    />
                  Caramel
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Whipped Cream"
                    checked={selectedProduct.toppings.includes("Whipped Cream")}
                    onChange={handleToppingChange}
                  />
                  Whipped Cream
                </label>
              </div>
            </div>

            <div className="option">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity">
                <button onClick={handleQuantityDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className="buttons">
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="buttons">
        <NavLink to="/cart">
          <button>View Cart</button>
        </NavLink>
      </div>
    </div>
  );
}

export default SanPham;