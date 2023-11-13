import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
      const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitem'>
       <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       </div>
       <hr />
       {all_product.map((e)=>{
         if(cartItems[e.id]>0){
         return   <div>
        <div className="cartitems-format cartitem-format-main">
            <img className="carticon-product-icon" src={e.image} alt="" />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className='cart-item-qty'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
           <img className="cartitem-remove-icon" onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
        </div>
        <hr />
       </div>
         }
         return null;
       })}
       <div className='cartitem-down'>
        <div className="cartitem-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>Shipping fee</p>
                    <p>Free</p>
                    <hr />
                </div>
                <div className='cartitem-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>OROCEED TO CHECKOUT</button>
        </div>
        <div className="cartiems-promocode">
            <p>If you have promo code, enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" placeholder='Promo code' name="" id="" />
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems
