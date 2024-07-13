// src/MapboxCard.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartItem from './components/CartItem';

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);

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
    },[])
    
 
    return (
        <>
            <Header />

                <section className='container recently' style={{ margin: 100 }}>
                        
                    <div className='row' style={{minHeight: 450}}>    
                        {cartItems && cartItems.map((item, i) => (
                            <CartItem product={item} key={i} />
                        ))}
                    </div>

                </section> 

            <Footer />
        </>
    );
};

export default Carts;
