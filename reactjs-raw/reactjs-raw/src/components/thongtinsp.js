import React, { useState } from 'react';
import '../App.css';

function SanPham() {
  const [quantity, setQuantity] = useState(1);
  const [showTable, setShowTable] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedSugar, setSelectedSugar] = useState('');
  const [selectedIce, setSelectedIce] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    setShowTable(true);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSugarChange = (sugar) => {
    setSelectedSugar(sugar);
  };

  const handleIceChange = (ice) => {
    setSelectedIce(ice);
  };

  const handleToppingChange = (topping) => {
    const updatedToppings = [...selectedToppings];
    if (updatedToppings.includes(topping)) {
      updatedToppings.splice(updatedToppings.indexOf(topping), 1);
    } else {
      updatedToppings.push(topping);
    }
    setSelectedToppings(updatedToppings);
  };

  return (
    <div>
      <div className="product-details">
        
        {showTable ? (
          <table>
            
            <tbody>
              <tr>
                <td>
                  <img className='hinh-main' src="tra-sua-pada.jpg" alt="Product" />
                </td>
                
                <td>
                
                  <h2>Tên sản phẩm</h2>
                  <p>Giá: 28.00đ</p>
                  <p>Số lượng: {quantity}</p>
                  <p>Size: {selectedSize}</p>
                  <p>Đường: {selectedSugar}</p>
                  <p>Đá: {selectedIce}</p>
                  <p>Topping: {selectedToppings.join(', ')}</p>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="product-container">
            <div className="image-container">
              <img className="small-image" src="tra-sua-pada.jpg" alt="Product" />
            </div>
            <div className="info-container">
            <h1>Chi tiết sản phẩm Trà Sữa</h1>
              <h2>Tên sản phẩm</h2>
              <div className="options">
                <div className="size-options">
                  <p>Chọn Size</p>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="M"
                      checked={selectedSize === 'M'}
                      onChange={(e) => handleSizeChange(e.target.value)}
                    />
                    M
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="L"
                      checked={selectedSize === 'L'}
                      onChange={(e) => handleSizeChange(e.target.value)}
                    />
                    L
                  </label>
                </div>
                <div className="sugar-options">
                  <p>Chọn Lượng Đường</p>
                  <label>
                    <input
                      type="radio"
                      name="sugar"
                      value="50%"
                      checked={selectedSugar === '50%'}
                      onChange={(e) => handleSugarChange(e.target.value)}
                    />
                    50%
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sugar"
                      value="100%"
                      checked={selectedSugar === '100%'}
                      onChange={(e) => handleSugarChange(e.target.value)}
                    />
                    100%
                  </label>
                </div>
                <div className="ice-options">
                  <p>Chọn Lượng Đá</p>
                  <label>
                    <input
                      type="radio"
                      name="ice"
                      value="50%"
                      checked={selectedIce === '50%'}
                      onChange={(e) => handleIceChange(e.target.value)}
                    />
                    50%
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="ice"
                      value="100%"
                      checked={selectedIce === '100%'}
                      onChange={(e) => handleIceChange(e.target.value)}
                    />
                    100%
                  </label>
                </div>
                <div className="topping-options">
                  <p>Chọn Topping</p>
                  <label>
                    <input
                      type="checkbox"
                      name="topping"
                      value="Trân Châu Đen"
                      checked={selectedToppings.includes('Trân Châu Đen')}
                      onChange={(e) => handleToppingChange(e.target.value)}
                    />
                    Trân Châu Đen
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="topping"
                      value="Thạch Rau Câu"
                      checked={selectedToppings.includes('Thạch Rau Câu')}
                      onChange={(e) => handleToppingChange(e.target.value)}
                    />
                    Thạch Rau Câu
                  </label>
                </div>
              </div>
              <div className="quantity-container">
                <p>Số lượng: </p>
                <button onClick={handleQuantityDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleQuantityIncrease}>+</button>
              </div>
              <button onClick={handleBuyNow}>Mua ngay</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SanPham;