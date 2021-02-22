import React from 'react';
import {Search, ShoppingCart, NotificationsNone, Person} from '@material-ui/icons';
import {Link} from 'react-router-dom'
const LoggedInNav = () => {
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
                       <a className="nav-link"> <Search/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><ShoppingCart/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><NotificationsNone/></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown"><Person/></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/seller/dashboard" className="dropdown-item">Dashboard</Link></li>
                        </ul>
                    </li>
                </ul>
            
            </div>
            </div>
           
        </nav>
     );
}
 
export default LoggedInNav;