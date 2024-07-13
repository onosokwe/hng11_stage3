import React from "react";
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.jpg"
import verve from "../../assets/verve.png"
import interswitch from "../../assets/interswitch.png"

function Footer() {

    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="row g-5">
                            <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Side Links</h3>
                                <ul className="footer-links list-unstyled">
                                    <li><a href="/"><i className="bi bi-chevron-right"></i> Home</a></li>
                                    <li><a href="/privacy-policy"><i className="bi bi-chevron-right"></i> Products</a></li>
                                    <li><a href="/contact-us"><i className="bi bi-chevron-right"></i> Support</a></li>
                                    <li><a href="/contact-us"><i className="bi bi-chevron-right"></i> Account</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Shopping Information</h3>
                                <ul className="footer-links list-unstyled">
                                    <li><a href="/jobs"><i className="bi bi-chevron-right"></i> Product categories</a></li>
                                    <li><a href="/cv-review"><i className="bi bi-chevron-right"></i> New arrivals</a></li>
                                    <li><a href="/articles"><i className="bi bi-chevron-right"></i> Best Sellers</a></li>
                                    <li><a href="/contact-us"><i className="bi bi-chevron-right"></i> Gift Cards</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h3 className="footer-heading">Newsletter</h3>
                                <p>Stay up to date with us to get the recent latest updates</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your email address" />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                            <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Join us on </h3>
                                <div className="social-links mb-3 mb-lg-0 text-left">
                                    <a href="https://facebook.com/" rel="noreferrer" target="_blank" ><i className="fab fa-facebook"></i></a>
                                    <a href="https://x.com/" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                                    <a href="https://youtube.com/" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
                                    <a href="https://instagram.com/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-3">
                                <h3 className="footer-heading">Payment method Partners </h3>
                                <div className="d-block text-left">
                                    <img src={mastercard}  alt="mastercard" style={{width: 50, height: 35}} />
                                    <img src={visa}  alt="visa" style={{width: 70, height: 35, marginLeft: 5}} />
                                    <img src={verve}  alt="verve" style={{width: 70, height: 35, marginLeft: 5}} />
                                    <img src={interswitch}  alt="interswitch" style={{width: 80, height: 35, marginLeft: 5}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    );
}

export default Footer;
