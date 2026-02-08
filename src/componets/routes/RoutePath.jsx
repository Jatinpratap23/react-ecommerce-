import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Cart from '../carts/Cart'
import ProductDetails from '../producdetails/ProductDetails'

import MensProducts from '../mensprodcts/MensProducts'
import Hero from '../hero/Hero'

export default function RoutePath() {
  return (
    <div>
        <Routes>
          
          <Route path='/' element={<Hero />} />
            <Route path='/carts' element={<Cart />} />
           <Route path='/producdetails/:id' element={<ProductDetails />} />
            <Route path='/mensprodcts' element={<MensProducts />} />
         
        </Routes>
    </div>
  )
}
