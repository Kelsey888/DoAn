import './pages/bootstrap-4.0.0/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import React from 'react';
function Header() {
  return (
    
<header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>



        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div classNameName="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <NavLink to='/home'className="nav-link px-2 text-secondary">Home</NavLink>
         
          <li><a href="/Features" className="nav-link px-2 text-white"> |  Features  | </a></li>
          <li><a href="/Pricing" className="nav-link px-2 text-white">Pricing | </a></li>
          <li><a href="/FAQs" className="nav-link px-2 text-white">FAQs |</a></li>
          <li><a href="/About" className="nav-link px-2 text-white">About</a></li>
        </ul>
      
      </div>
    </div>
  </header>
  );
}

export default Header;