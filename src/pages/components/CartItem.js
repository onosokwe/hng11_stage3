import React from "react";
import { formatAmount } from "../utils";

const CartItem = ({ product }) => {
    
    let price = product.current_price.map((price) =>  price["NGN"] )
    let final_price = price.map((real_price, ) => real_price[0] )
    
    let image = product.photos[0]?.url; 
    let imageUrl = `https://api.timbu.cloud/images/${image}`;

    function getCartItems() {
        // Check if cart items exist in localStorage
        let cartItems = localStorage.getItem('futura:cart');
        return cartItems ? JSON.parse(cartItems) : [];
    }


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

    const incrementQuantity = (productId) => {
        let cartItems = getCartItems();
    
        // Find item in cart
        let found = cartItems.find(cartItem => cartItem.id === productId);
        if (found) {
            // Increment quantity
            found.quantity++;
    
            // Save updated cart items back to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }


    return (
        <>
            <div className='col-md-4 col-sm-6 mb-4'>
                <div className='item'>
                    <div className='item-image'>
                        <img src={imageUrl} alt='alpha' style={{height: '100%', minHeight:180, width:'100%'}} />
                        <button type="button" onClick={()=> removeFromCart(product.id)} className='xicon-btn'>
                            <i className='fa fa-times xposition-absolute'></i>
                        </button>
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
                        <div className="text-group">
                            <button 
                                type="button" 
                                style={{float:'left', padding:3, width:40, backgroundColor:'#000', }}
                                // onClick={()=> removeFromCart(product.id)} 
                                className='btn'
                            >
                                <i className="fa fa-plus"></i>    
                            </button>
                            {/* <button className="btn-my" style={{border:'none'}}>
                                <span>{product?.quantity || 1}</span>

                            </button> */}
                            <button 
                                type="button" 
                                style={{float:'right', padding:3, width:40, backgroundColor:'red', }}
                                // onClick={()=> removeFromCart(product.id)} 
                                className='btn pull-right'
                                >
                                <i className="fa fa-minus"></i>  
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
