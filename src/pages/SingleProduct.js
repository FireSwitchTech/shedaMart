import React from 'react';
import { ShoppingCart} from '@material-ui/icons';

import Header from '../components/Header'

const SingleProduct = () => {
    return ( 
        <div>
            <Header/>
            <div className="container py-3">
                <div className="card">
                <div className="card-body">
                    <h5>GIFTS</h5>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="row mt-3">
                                <p>SHOP WITH SHEDA MART</p>
                                <p className="ml-4">Available for pickup</p>
                            </div> 
                            <div>
                                <h5>Quality Bags and Shoes for Ladies</h5>
                                <p>Designed for young ladies in fashion</p>
                            </div>
                            <p>Select size</p>
                            <h4>NGN 49.99</h4>
                            <div className="row">
                                <button className="btn btn-orange p-3">BUY NOW</button>
                                <div className="cart text-center ml-2">
                                    <ShoppingCart className="mt-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
     );
}
 
export default SingleProduct;