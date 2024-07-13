import React from "react";
import { formatAmount } from "../utils";

const CartItem = ({ product }) => {
    
    let price = product.current_price.map((price) =>  price["NGN"] )
    let final_price = price.map((real_price, ) => real_price[0] )
    
    let image = product.photos[0]?.url; 
    let imageUrl = `https://api.timbu.cloud/images/${image}`;

    const removeFromCart = (productId) => {
        // Parse any JSON previously stored in cart
        var cartItems = JSON.parse(localStorage.getItem("futura:cart"));
        if (cartItems == null) cartItems = [];
    
        // Filter out the item to be removed
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
    
        // Save the updated cart back to local storage
        localStorage.setItem("futura:cart", JSON.stringify(updatedCartItems));
        
        alert('Item removed from cart');
        
        window.location.reload()
    }


    return (
        <>
            <div className='col-md-4 col-sm-6 mb-4'>
                <div className='item'>
                    <div className='item-image'>
                        <img src={imageUrl} alt='alpha' style={{height: '100%', minHeight:180, width:'100%'}} />
                        <a href='./#' className='icon-btn'>
                            <i className='fa fa-heart position-absolute'></i>
                        </a>
                    </div>
                    <div className='item_desc'>
                        <h4>
                            <a href={`/product/${product.unique_id}`}>{product?.name}</a> 
                            <span className="badge badge-warning">NGN { formatAmount(final_price) }</span>
                        </h4>
                        <div className='item_star'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </div>
                        <button 
                            type="button" 
                            onClick={()=> removeFromCart(product.id)} 
                            className='btn'
                        >
                            Remove from Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
