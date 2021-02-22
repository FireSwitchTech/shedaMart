import React from 'react';
import Wallet from '../components/Wallet'
const Seller = () => {
    return ( 
        <div class="container mb-4">
        <div class="row mt-4 ">
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="card seller mb-4">
                <div class="card-body">
                    <ul className="side-items">
                        <li>Home</li>
                        <li>Activities</li>
                        <li>Chats</li>
                        <li>Account Settings</li>
                    </ul>
                </div>
            </div>
               
            <div class="card seller">
                <div class="card-body">

                    <h4 class="text-center">WISHLIST</h4>
                    <div class="card seller mb-3">
                        <div class="card-body">
                            <p>Big Amber</p>
                            <p>$49.99</p>
                        </div>    
                    </div>
                    <div class="card seller mb-3">
                        <div class="card-body">
                            <p>Big Amber</p>
                            <p>$49.99</p>
                        </div>
                            
                    </div>
                    <div class="card seller">
                        <div class="card-body">
                            <p>Big Amber</p>
                            <p>$49.99</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <div class="second col-lg-4 col-md-6 col-sm-12">
            <div class="card seller">
                <div class="card-body">
                    <p class="text-center">PRODUCT HISTROY</p>
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p>  
                        </div> 
                        <div class="color" style={{backgroundColor: "#f81919"}}>

                        </div>
                    </div>  
                    <hr/>  
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p>  
                        </div>   
                        <div class="color" style={{backgroundColor: "#f8f119"}}></div> 
                    </div>
                    <hr/>  
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p> 
                        </div>
                        
                        <div class="color" style={{backgroundColor: "#3cf819"}}></div>  
                    </div> 
                    <hr/>  
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p> 
                        </div>
                         
                        <div class="color " style={{backgroundColor: "#f81919"}}></div> 
                    </div>
                    <hr/>
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p> 
                        </div>
                        
                        <div class="color" style={{backgroundColor: "#3cf819"}}></div>  
                    </div> 
                    <hr/>  
                    <div class="order">
                        <div>
                            <h5>ORDER 1234567</h5>
                            <p>Cancelled</p>  
                        </div>   
                        <div class="color" style={{backgroundColor: "#f8f119"}}></div> 
                    </div>
                    <hr/>  
                </div>
               
            </div>
        </div>
        <div class="third col-lg-4 col-md-6 col-sm-12">
            <Wallet/>
            <div className="card mt-4">
                <div className="card-body">
                    <p className="text-center">TRACKER</p>
                </div>
            </div>

            <div className="card mt-4">
                <div className="card-body">
                    <p className="text-center">LAST SEEN</p>
                </div>
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default Seller;