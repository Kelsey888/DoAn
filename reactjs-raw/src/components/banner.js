import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Baner() {
  const [dsSP, setSP] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/get-data.php')
      .then(response => response.json())
      .then(json => setSP(json))
      .catch(error => console.error(error));
  }, []);


  const listSanphams = dsSP.map((product) => (
    <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
      <img src={'../' + product.hinhanh} alt={product.tenSP} style={{ width: '100%' }} />
      <span>{product.tenSP}</span>
      <br />
      <span>Giá: {product.gia}</span>
      <br />
      <div className='nut'>
        <div>
          <NavLink to={`/CTSP/${product.id}`}>
            <button>Mua</button>
          </NavLink>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h5>Loại Sản Phẩm</h5>
        <NavLink to="/ProDuct" className='xemall'>Xem Tất cả</NavLink>
      <div className="content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        
          {listSanphams}
        </div>
      </div>
    </div>
  );
}

export default Baner;