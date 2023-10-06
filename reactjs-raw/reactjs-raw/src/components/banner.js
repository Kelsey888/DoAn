import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';

const lsp = [
  {
    hinhanh: "O-Long-xoai-kem-coffee.jpg",
    tenSP: "Ô Long Xoài Kem Coffee",
    gia: "49.000đ",
    mua: ""
  },
  {
    hinhanh: "oolong-kem-pho-mai.png",
    tenSP: "Ô Long Kem Phô Mai",
    gia: "29.000đ",
    mua: ""
  },
  {
    hinhanh: "Tra-dao-buoi-hong-tran-chau-baby.jpg",
    tenSP: "Trà Đào Bưởi Hồng Chân Châu Baby",
    gia: "38.00đ",
    mua: ""
  },
  {
    hinhanh: "tra-sua-3-ae.jpg",
    tenSP: "Trà Sữa Ba anh em",
    gia: "38.000đ",
    mua: ""
  },
  {
    hinhanh: "tra-sua-pada.jpg",
    tenSP: "Trà Sữa Pada",
    gia: "24.000đ",
    mua: ""
  },
  {
    hinhanh: "tra-sua-tran-chau.jpg",
    tenSP: "Trà Sữa Trân châu",
    gia: "24.000đ",
    mua: ""
  },
  {
    hinhanh: "trà-xoài-bưởi-hồng-kem-phô-mai.png",
    tenSP: "Trà Xoài Bưởi Hồng Kem Phô Mai",
    gia: "38.000đ",
    mua: ""
  },
  {
    hinhanh: "trà-xoài-bưởi-hồng.png",
    tenSP: "Trà Xoài Bưởi Hồng",
    gia: "24.000đ",
    mua: ""
  }, 
];

function Baner() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {lsp.map((product, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
              <img src={product.hinhanh} alt="" style={{ width: '100%' }} />
              <span>{product.tenSP}</span>
              <br />
              <span>Giá: {product.gia}<br/></span>
              <span>
                <Link to={`/CTSP/${product.tenSP}`}>Mua</Link>
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div>
          <img src={selectedProduct.hinhanh} alt="" style={{ width: '100%' }} />
          <span>{selectedProduct.tenSP}</span>
          <br />
          <span>Giá: {selectedProduct.gia}<br/></span>
        </div>
      )}
    </div>
  );
}

  

export default Baner; 