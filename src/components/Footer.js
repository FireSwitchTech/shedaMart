import React from 'react';
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p>CONTACT US</p>
                        <p>+44 345 878 903</p>
                        <p>adobexd@shedamart.com</p>
                        <p>Find a store</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p>CUSTOMER SERVICE</p>
                        <p>Contact US</p>
                        <p>Ordering & Payment</p>
                        <p>Shipping</p>
                        <p>Returns</p>
                        <p>FAQ</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p>INFORMATION</p>
                        <p>About AdobeXD Kit</p>
                        <p>WOrk with Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Press Enquiries</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <p>Subscribe via email</p>
                        <div>
                            <input type="text" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;