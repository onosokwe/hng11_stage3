import React, { useEffect, useState } from "react";
import Header from './components/Header';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { getAllProducts } from "./utils";
import Product from "./components/Product";


const HomeCard = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                if(res.status === 200){
                    setItems(res?.data?.items);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err?.response?.data);
                setLoading(false);
            })
    }, []); 

    const data = [
        {
            amount:"N20,000",
            link: image1
        },
        {
            amount:"N20,000",
            link: image2
        },
        {
            amount:"N20,000",
            link: image3
        },
        {
            amount:"N20,000",
            link: image4
        }
    ]
    
    return (
        <>
            <Header />


            <section className='container recently' style={{marginTop:100}}>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Recently Viewed <i className='fas fa-chevron-right'></i></h1>
                    </div>
                    
                    {items && items.map((item, i) => (
                        <Product product={item} key={i} />
                    ))}
                </div>
            </section> 


            <section className='container recently'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>You might also like <i className='fas fa-chevron-right'></i></h1>
                    </div>
                    
                    {data && data.map((item, i) => (
                        <div className='col-md-3 col-sm-6' key={i}>
                            <div className='item'>
                                <div className='item-image'>
                                    <img src={item.link} alt='alpha' style={{height: '100%', width:'100%'}} />
                                    <a href='./#' className='icon-btn'>
                                        <i className='fa fa-heart position-absolute'></i>
                                    </a>
                                </div>
                                <div className='item_desc'>
                                    <h4>{item.amount}</h4>
                                    <div className='item_star'>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star-half'></i>
                                    </div>
                                    <Link to='/cart' className='btn'>Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 

            <section className='container recently'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Discover new brands <i className='fas fa-chevron-right'></i></h1>
                    </div>
                    
                    {data && data.map((item, i) => (
                        <div className='col-md-3 col-sm-6' key={i}>
                            <div className='item'>
                                <div className='item-image'>
                                    <img src={item.link} alt='alpha' style={{height: '100%', width:'100%'}} />
                                    <a href='./#' className='icon-btn'>
                                        <i className='fa fa-heart position-absolute'></i>
                                    </a>
                                </div>
                                <div className='item_desc'>
                                    <h4>{item.amount}</h4>
                                    <div className='item_star'>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star-half'></i>
                                    </div>
                                    <Link to='/cart' className='btn'>Add to Cart</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 


            <Footer />
        </>
    );
};

export default HomeCard;
