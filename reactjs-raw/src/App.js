import React from 'react';
import './App.css';
import {  Route ,Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './components/pages/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './components/pages/node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Login from './components/login';

import Footer from './components/footer';
import ImageSlider from './components/ef_hinhanh';
import ProDuct from './components/pages/product';
import Baner from './components/banner';
import DangKy from './components/dang_ky';
import CTSP from './components/pages/ct_sp';
import Homepage from './components/pages/home';

function Product() {

  return (
    <>
 
    <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    {/* <Login/> */}
    {/* <Routes>
        <Route path='/home' element={<Trangchu />} />
      </Routes> */}
    {/* <Trangchu/> */}
                
    <Routes>
        <Route path='/home' element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<ImageSlider />} />
      </Routes>
        {/* <Homepage />
      <ImageSlider /> */}
      <br />

      <Routes>
        <Route path='/home' element={<Baner/>} />
      </Routes>
      
      {/* <SanPham/> */}

      <Routes>
        <Route path='/CTSP/:id' element={<CTSP/>} />
      </Routes>

      <Routes>
        <Route path='/dang_ky' element={<DangKy />} />
      </Routes>
   
      <Routes>
        <Route path='/ProDuct' element={<ProDuct />} />
      </Routes>
             
      <Routes>
        <Route path='/home' element={<Footer />} />
      </Routes>
     
    </>
  );
}

export default Product;