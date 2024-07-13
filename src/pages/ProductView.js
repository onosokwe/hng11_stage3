import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { getOneProduct } from "./utils";

export default function ProductView(props) {
    // let { id } = props.match;

    console.log(props)

    const [loading, setLoading] = useState(true);
    const [item, setItems] = useState({});

    useEffect(() => {
        getOneProduct()
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
    
    return (
        <>
            <Header />

            <section className='container recently' style={{marginTop:100}}>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Discover new brands <i className='fas fa-chevron-right'></i></h1>
                    </div>
                    
                    {/* <Product product={item} /> */}
                
                </div>
            </section>


            <Footer />
        </>
    );
};
