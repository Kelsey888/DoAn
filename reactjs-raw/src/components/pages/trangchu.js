
import React from 'react';
import Footer from '../footer.js';
import ImageSlider from '../ef_hinhanh.js';
import ProDuct from './product';
import Baner from '../banner';

import CTSP from './ct_sp';
import Homepage from './home';
import {  Route ,Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Trangchu(){
   

    
    return (
        <>
            
            <Routes>
        <Route path='/home' element={<Homepage />} />
      </Routes>
      <Routes>
        <Route path='/home' element={<ImageSlider />} />
      </Routes>
        {/* <Homepage />
      <ImageSlider /> */}
      <br />
      <h5>Loại Sản Phẩm</h5>
      <NavLink to="/ProDuct" className='xemall'>Xem Tất cả</NavLink>
      <Routes>
        <Route path='/home' element={<Baner/>} />
      </Routes>
      
      {/* <SanPham/> */}

      <Routes>
        <Route path='/CTSP/:id' element={<CTSP/>} />
      </Routes>

    
   
      <Routes>
        <Route path='/ProDuct' element={<ProDuct />} />
      </Routes>
             
      <Routes>
        <Route path='/home' element={<Footer />} />
      </Routes>
{/* 
      <Footer /> */}

           
        </>
    );
}
export default Trangchu;