import React from 'react';
import { NavLink } from 'react-router-dom';
import Baner from '../banner';
import Header from '../heder';
import Footer from '../footer';
import ImageSlider from '../ef_hinhanh';


function ProDuct() {
  return (
    <>
      <Header/>
      <ImageSlider/>
      <Baner/>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <NavLink to="/product" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: 'beige', color: 'red' }}>
          Xem thêm(183)
        </NavLink>
      </div>
      <Footer/>
    </>
  );
}

export default ProDuct;