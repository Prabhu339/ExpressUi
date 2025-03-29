import React from 'react'
import { useCart } from './CartContext'

const UserCart = () => {
 const {CartItems,addToCart}=useCart()

  return (
    <div>
        {CartItems.map((item)=>{
            return(
                <div className='cart-section'>
                    <div className='cart-img'>
                        <img src={item.image}/>
                    </div>
                    <div className='card-details'>
                        <h2>{item.name}</h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default UserCart