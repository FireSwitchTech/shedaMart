import React from 'react';
import {Search, ShoppingCart, NotificationsNone, Person} from '@material-ui/icons';
const Navbar = () => {
    return (   
        <nav class="navbar navbar-expand-lg">
            <div className="container">
            <a class="navbar-brand" href="#">SHEDAMART</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">ART & CRAFT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ART TOOLS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">GIFTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BOOKS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ELECTRONICS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CLOTHINGS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">3D DESIGNS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">SELL ON SHEDAMART</a>
                </li>
                </ul>
                <ul className="navbar-nav icons">
                    <li className="nav-item">
                       <a> <Search/></a>
                    </li>
                    <li className="nav-item">
                        <a><ShoppingCart/></a>
                    </li>
                    <li className="nav-item">
                        <a><NotificationsNone/></a>
                    </li>
                    <li className="nav-item">
                        <a><Person/></a>
                    </li>
                </ul>
            
            </div>
            </div>
           
        </nav>
    );
}
 
export default Navbar;