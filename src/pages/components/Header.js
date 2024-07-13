import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function Header() {

    var cartItems = JSON.parse(localStorage.getItem("futura:cart"));
        if (cartItems == null) cartItems = [];



    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="/" className="d-flex align-items-center">
                        <img className="logo" src={logo} alt="logo" style={{height: 40}} width={100} />
                    </a>

                    <div style={{marginLeft: 20, }}>
                        <input type="search" className="form-control" placeholder="search" style={{minWidth: 350}}/>
                    </div>


                    <div style={{marginLeft: 20}}>
                        <Link to="/#">
                            <i className='fa fa-heart fa-1x' style={{color:'black', marginRight: 15 }}></i>
                        </Link>
                        <Link to="/cart" style={{padding: 10, backgroundColor: '#999', borderRadius: '50%', width: 15, height: 10}}>
                            <i className='fa fa-shopping-cart' style={{color:'black' }}></i> 
                            <sup className="badge badge-danger ml-1" style={{fontSize: 7}}>{cartItems.length}</sup>
                        </Link>
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;
