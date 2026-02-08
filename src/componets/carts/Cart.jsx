

import React from 'react'

function Cart() {
  return (
   <>
     <section id ="cart-section">
        <div id="left-section">
            <h1 style={{fontSize: '25px'}}>Bag</h1>
            <div className="box1">
               <div className="img-box">
                 <img src="images/lukadetailimg/imgi_110_5324c8eNike-FD2722-016_1.jpg" alt=""
                style={{width: '110px', objectFit: 'cover'}}
                
        />
               </div>
            <div>Air Jorden
                <li className=" list-style    hover" style={{fontSize: '16px'}} >Men's Shoes</li>
                    <li className=" list-style    hover" style={{fontSize: '16px'}} >Grey</li>
                    <li className=" list-style    hover" style={{fontSize: '16px'}} >!4 Day Return</li>
                    <li className=" list-style    hover" style={{fontSize: '16px'}} >Size UK 8</li> 
            </div>
                       
            </div>
            <div>
                <button>
                    1
                </button>
                <button>H</button>
            </div>
        </div>

        <div id="right-section">
            <h1 style={{fontSize: '25px'}}>Summary</h1>
<div className="box2">
                <div className="box">
                   <i>Subtotal</i>
                    <i>£150.00</i>
                </div>
                <div className="box">
                    <i>Delivery</i>
                    <i>£5.00</i>
                </div>
                <div className="box">
                    <i>Total</i>
                    <i>£155.00</i>
                </div>
               
</div>
<div>
     <button id="checkout-btn">Proceed to Pay</button>
</div>
        </div>
    </section>
   
   </>

  )
}


export default Cart