import React from 'react'
import '../header/header.css';
import { Link } from 'react-router-dom';
import Regis from '../Registration/Regis';

export default function Header() {
  return (

    <>

<Regis/>



     <div>


       <section id="header" className="sticky">
        <a href="#"><img src="images/nikeL.svg" className="Logo" style={{height: '60px'}} alt=""/> </a>

        <div>
            <ul id="navbar">
               <Link to="/" className='active text'>Home</Link>
   <Link to="/mensprodcts" className="active text">Mens</Link>              
   <Link to="" className="active text">Women</Link>              
   <Link to="" className="active text">Kids</Link>              
   <Link to="" className="active text">Jorden</Link>              
       <Link to="/carts"><i className="fa-brands fa-opencart"></i></Link>
            </ul>
        </div>
    </section>  
    </div>
    
    
    
    </>
   
  )
}
