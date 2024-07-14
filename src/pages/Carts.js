// src/MapboxCard.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import { Link } from 'react-router-dom';
import { formatAmount } from "./utils";

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const getCartItems = async () => {

            // Parse items in the localStorage
            var itemsInCart = await JSON.parse(localStorage.getItem("futura:cart"));
            if(itemsInCart == null) itemsInCart = [];
            
            if(itemsInCart.length > 0){
                setCartItems(itemsInCart)
            }
        }

        getCartItems()
    },[]);


    useEffect(() => {
        const sumPrices = () => {
            let sum = 0;
            cartItems.forEach(item => {
                const price = item.current_price[0].NGN[0];
                if (price) {
                    sum += price;
                }
            });
            setTotalPrice(sum);
        };

        sumPrices();
    }, [cartItems]);

    const clearCart = () => {
        localStorage.removeItem('futura:cart');
        alert('Cart cleared');
        
        window.location.reload()
    }
    
    console.log(cartItems)

 
    return (
        <>
            <Header />

                <section className='recently' style={{ margin: 100 }}>
                        
                    <div className='row'>    
                        <div className='col-md-8'>
                            {cartItems && cartItems.length > 0 ? 
                                <div className='row'>
                                    {cartItems && cartItems.map((item, i) => (
                                        <CartItem product={item} key={i} />
                                    ))}
                                </div>
                                :  
                                <div className='card text-center p-4'>
                                    <i className='fa fa-shopping-basket fa-8x'></i>

                                    <h4 className='my-5'>Continue shopping</h4>
                                    <Link to='/' className='btn'>Continue shopping</Link>

                                </div> 
                            }
                        </div>


                        <div className='col-md-4'>
                        <div className="card p-3">
                            <h4 className="text-center">  NGN { formatAmount(totalPrice) || 0 } </h4>
                            <button 
                                onClick={clearCart} 
                                className="btn btn-block btn-success"
                                disabled={cartItems.length === 0}
                            >
                                Checkout
                            </button>
                        </div>
                        </div>
                    </div>

                </section> 

            <Footer />
        </>
    );
};

export default Carts;
