// src/MapboxCard.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartItem from './components/CartItem';

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(null);

    useEffect(() => {
        const getCartItems = async () => {

            // Parse items in the localStorage
            var itemsInCart = await JSON.parse(localStorage.getItem("futura:cart"));
            if(itemsInCart == null) itemsInCart = [];
            
            if(itemsInCart.length > 0){
                setCartItems(itemsInCart)

                let total = itemsInCart.reduce((acc, item) => acc + parseFloat(item.price, 2), 0) 
                setCartTotal(total)
            }
        }

        getCartItems()
    },[])

    const clearCart = () => {
        localStorage.removeItem('futura:cart');
        alert('Cart cleared');
        
        window.location.reload()
    }
    
 
    return (
        <>
            <Header />

                <section className='container recently' style={{ margin: 100 }}>
                        
                    <div className='row' style={{minHeight: 450}}>    
                        <div className='col-8'>
                            <div className='row'>
                                {cartItems && cartItems.map((item, i) => (
                                    <CartItem product={item} key={i} />
                                ))}
                            </div>
                        </div>


                        <div className='col-4'>
                        <div className="card p-3 my-5">
                            <h4 className="text-center">  NGN { cartTotal || 0 } </h4>
                            <button 
                                onClick={clearCart} 
                                className="btn btn-block btn-success"
                                disabled={cartItems.length === 0}
                            >
                                Clear Cart
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
