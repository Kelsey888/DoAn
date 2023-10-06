import React from 'react';
import './App.css';

import Footer from './components/footer';
import Homepage from './components/pages/home';
import ImageSlider from './components/ef_hinhanh.js';
import ProDuct from './components/pages/product';
import Baner from './components/banner';
import { Route, Routes } from 'react-router';

import { NavLink } from 'react-router-dom';
import SanPham from './components/thongtinsp';
import CTSP from './components/pages/ct_sp';

function Product() {
  return (
    <>
      <Homepage />
      <ImageSlider />
      <br />
      <h5>Loại Sản Phẩm</h5>
      <NavLink to="/product" className='xemall'>Xem Tất cả</NavLink>
      {/* <Baner/> */}
      {/* <SanPham/> */}
      {/* <Routes>
        <Route path='/CTSP/:tenSP' element={<CTSP/>} />
      </Routes> */}
       <CTSP/> 
      <Routes>
        <Route path='/ProDuct' element={<ProDuct />} />
      </Routes>
      <Footer />

     
    </>
  );
}

export default Product;