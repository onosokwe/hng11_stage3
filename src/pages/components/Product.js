import React from "react";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    let price = product.current_price.map((price) =>  price["NGN"] )
    let final_price = price.map((real_price, ) => real_price[0] )
    
    let image = product.photos[0]?.url; 
    let imageUrl = `https://api.timbu.cloud/images/${image}`;

    return (
        <>

            <div className='col-md-3 col-sm-6 mb-4'>
                <div className='item'>
                    <div className='item-image'>
                        <img src={imageUrl} alt='alpha' style={{height: '100%', width:'100%'}} />
                        <a href='./#' className='icon-btn'>
                            <i className='fa fa-heart position-absolute'></i>
                        </a>
                    </div>
                    <div className='item_desc'>
                        <h4>{product?.name} NGN [{ final_price }]</h4>
                        <div className='item_star'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star-half'></i>
                        </div>
                        <Link to='/cart' className='btn'>Add to Cart</Link>
                        {/* <a href='./cart' className='btn'>Add to Cart</a> */}
                    </div>
                </div>
            </div>
                
                
        </>
    );
};

export default Product;
