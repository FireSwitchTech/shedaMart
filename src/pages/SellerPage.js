import React from 'react';
const Seller = () => {
    return ( 
        <div className="container">
            <div className="row mt-4">
                <div classname="col-lg-3 col-md-6 col-sm-12">
                    <div className="card text-center p-2">
                        <p>HOME</p>
                        <p>ACTIVITIES</p>
                        <p>CHATS</p>
                        <p>FAVORITES</p>
                        <p>ACCOUNT SETTINGS</p>
                    </div>
                    <div className="card mt-4 p-2">
                        <p className="text-center">WISHLIST</p>
                        <div className="card mb-2 p-2">
                            <div className="wishlist">
                                <div className="mr-2">
                                    img Placeholder
                                </div>
                                <div>
                                    <p>Bag Amber</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-2 p-2">
                            <div className="wishlist">
                                <div className="mr-2">
                                    img Placeholder
                                </div>
                                <div>
                                    <p>Bag Amber</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-2 p-2">
                            <div className="wishlist">
                                <div className="mr-2">
                                    img Placeholder
                                </div>
                                <div>
                                    <p>Bag Amber</p>
                                    <p>$99.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="card ml-3">
                        <p className="text-center mt-4">PRODUCT HISTORY</p>
                        <div className="px-4 row">
                            <div className="col-10">
                                <p>ORDER 123456789</p>
                                <p><i>Cancelled</i></p>
                                <p><i>10 Sept 2020</i></p>
                            </div>
                            <div>
                                <span className="first-dot"></span>
                            </div>
                        </div>
                        <hr/>
                        <div className="px-4 row">
                            <div className="col-10">
                                <p>ORDER 123456789</p>
                                <p><i>Cancelled</i></p>
                                <p><i>10 Sept 2020</i></p>
                            </div>
                            <div>
                                <span className="second-dot"></span>
                            </div>
                        </div>
                        <hr/>
                        <div className="px-4 row">
                            <div className="col-10">
                                <p>ORDER 123456789</p>
                                <p><i>Cancelled</i></p>
                                <p><i>10 Sept 2020</i></p>
                            </div>
                            <div>
                                <span className="third-dot"></span>
                            </div>
                        </div>
                        <hr/>
                        <div className="px-4 row">
                            <div className="col-10">
                                <p>ORDER 123456789</p>
                                <p><i>Cancelled</i></p>
                                <p><i>10 Sept 2020</i></p>
                            </div>
                            <div>
                                <span className="second-dot"></span>
                            </div>
                        </div>
                        <hr/>
                        <div className="px-4 row">
                            <div className="col-10">
                                <p>ORDER 123456789</p>
                                <p><i>Cancelled</i></p>
                                <p><i>10 Sept 2020</i></p>
                            </div>
                            <div >
                                <span className="first-dot justify-content-center"></span>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card align-items-center p-2 mb-3">
                        <p>WALLET</p>
                        <h4 className="text-center">$1000.00</h4>
                        <p>Add Card</p>
                    </div>
                    <div className="card">
                        <p className="text-center">TRACKER</p>
                        <div className="row">
                            <div className="col track">ORDER 1234</div>
                            <div className="col track">EOD - 20th Sept 2020</div>
                            <div><button className="btn btn-danger btn-sm">CANCEL ORDER</button></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Seller;