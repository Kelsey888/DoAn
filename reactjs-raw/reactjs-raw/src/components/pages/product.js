import React from 'react';
import { NavLink } from 'react-router-dom';


function ProDuct() {
  return (
    <>
      

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <NavLink to="/product" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: 'beige', color: 'red' }}>
          Xem thêm(183)
        </NavLink>
      </div>

    </>
  );
}

export default ProDuct;