import React, { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { getAllProducts } from "./utils";
import Product from "./components/Product";

const HomeCard = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let page = params.page || 1;

    useEffect(() => {
        const getItems = async () => {
            await getAllProducts(page)
            .then((res) => {
                if(res.status === 200){
                    setData(res?.data);
                    setItems(res?.data?.items);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err?.response?.data);
                setLoading(false);
            })
        }
        
        getItems();

    }, [page]); 

    console.log(data)
    
    return (
        <>
            <Header />

            <section className='container recently' style={{marginTop:100}}>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Discover new brands <i className='fas fa-chevron-right'></i></h1>
                    </div>
                </div>

                <div className='row' style={{minHeight: 450}}>    
                    {items && items.map((item, i) => (
                        <Product product={item} key={i} />
                    ))}
                </div>


                <div className='row'>
                    <div className="col-md-12">
                        <div className="text-start py-4">
                            <div className="custom-pagination">
                                <a href={`?page=${data.previous_page !== null ? data.previous_page : 1}`} disabled className="prev">
                                    Previous
                                </a>
                                <a href={`?page=${data.page !== null ? data.page : ""}`} className="active">
                                    {data.page ? data.page : 1}
                                </a>
                                <a href={`?page=${data.page !== null ? data.page : (page + 1)}`} className="next">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
};

export default HomeCard;
