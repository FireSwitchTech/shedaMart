import React from 'react';
import {ColorLens,CardGiftcard, Computer,homere} from '@material-ui/icons';
const Header = () => {
    return ( 
        <div>
            <div className="header-img">

            </div>
            <div className="row d-none d-lg-flex align-items-center justify-content-center p-3" id="inner-nav">
                <div className="col-2 nav-item-logo text-center">
                    <ColorLens/>
                    <p className="show-nav">ART TOOLS</p>
                </div>
                <div className="col-2 nav-item-logo text-center">
                    <CardGiftcard/>
                    <p className="show-nav">GIFT</p>
                </div>
                <div className="col-2 nav-item-logo text-center">
                    <Computer />
                    <p className="show-nav">ELECTRONICS</p>
                </div>
                <div className="col-2 nav-item-logo text-center">
                    <ColorLens/>
                    <p className="show-nav">ART & CRAFT</p>
                </div>
                <div className="col-2 nav-item-logo text-center">
                    <CardGiftcard/>
                    <p className="show-nav">3D DESIGN</p>
                </div>
                <div className= "col-2 nav-item-logo text-center">
                    <Computer/>
                    <p className="show-nav">ELECTRONICS</p>
                </div>
                
               
            </div>
        </div>
     );
}
 
export default Header;