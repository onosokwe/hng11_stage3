import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { formatAmount } from "../utils";

const Product = ({ product }) => {
    let price = product.current_price.map((price) =>  price["NGN"] )
    let final_price = price.map((real_price, ) => real_price[0] )
    
    // console.log(product.unique_id)
    let image = product.photos[0]?.url; 
    let imageUrl = `https://api.timbu.cloud/images/${image}`;

    
    const addToCart = (product) => {
        
        // Parse any JSON previously stored in cart
        var cartItems = JSON.parse(localStorage.getItem("futura:cart"));
        if(cartItems == null) cartItems = [];
        
        // Check if product is already in the cart
        const productExists = cartItems.some(item => item.id === product.id);
        
        if (productExists) {
            alert('Item already added to cart');
        } else {
            // Add product to cart and save back to local storage
            cartItems.push(product);
            localStorage.setItem("futura:cart", JSON.stringify(cartItems));
        }

    }


    const isInCart = (product) => {
        var cartItems = JSON.parse(localStorage.getItem("futura:cart"));
        const productExists = cartItems.some(item => item.id === product.id);

        if(productExists) return true;
    }


    return (
        <>
            <div className='col-md-3 col-sm-6 mb-4'>
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
                        <button type="button" onClick={()=> addToCart(product)} disabled={isInCart(product)} className='btn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
