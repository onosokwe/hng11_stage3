// src/MapboxCard.js
import React from 'react';
import Header from './components/Header';
import image1 from '../assets/image1.png';
import Footer from './components/Footer';


const Cart = () => {

 
    return (
        <>
            <Header />

                <section className='container recently' style={{ margin: 100 }}>
                    <div className='row'>
                        <div className='col-12'>
                            
                        </div>

                        <div className='col-md-4 col-sm-12'>
                            <h1>My Basket </h1>
                            <img src={image1} alt='alpha' style={{height: '100%', width:'100%'}} />

                        </div>

                        <div className='col-md-4 col-sm-12'>
                            <h1>Description </h1>

                            <p>It has a diamond stitch pattern and it is soft and light on the skin for easy styling and comfort. Long-lasting and resistant to peeling, scratchiness. Adds to your everyday style</p>

                            <h4>Review (10)</h4>

                            <div className='review'>
                                <p>I love these heels so much. Even though I am not a fan of heels, because of the comfort, these ones seem to differ. It’s so comfortable on the feet and steady on the ground. Great buy!</p>
                                <div className='item_star'>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star-half'></i>
                                </div>
                                <p>Lindsay, Yesterday</p>
                            </div>

                        </div>

                        <div className='col-md-3 col-sm-12'>


                        </div>
                    </div>
                </section> 

            <Footer />
        </>
    );
};

export default Cart;
