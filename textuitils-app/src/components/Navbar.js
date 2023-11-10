import React,{useState} from 'react'


function Navbar({mode,colormode,darkmode}) {

  return (

    <>
      <nav className={`navbar navbar-expand-lg bg-${mode} text-${colormode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${colormode}`} href="#">Textuitils</a>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className={`nav-link active  text-${colormode}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${colormode}`} href="./About.js">About</a>
        </li>
        
        
      </ul>

      
    </div>
      
  </div>
 
</nav>


<div className="form-check form-switch position-absolute top-20 end-0">
  <input className="form-check-input" type="checkbox" onClick={darkmode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
</div>






    </>
  )
}

export default Navbar;
