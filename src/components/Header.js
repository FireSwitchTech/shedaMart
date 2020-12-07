import React from 'react';
import {ColorLens,CardGiftcard, Computer,homere} from '@material-ui/icons';
const Header = () => {
    return ( 
        <div>
            <div className="header-img">

            </div>
            <div className="row align-items-center justify-content-center" id="inner-nav">
                <div className="col-2 nav-item-logo">
                    <ColorLens/>
                    <p className="show-nav">ART TOOLS</p>
                </div>
                <div className="col-2 nav-item-logo">
                    <CardGiftcard/>
                    <p className="show-nav">GIFT</p>
                </div>
                <div className="col-2 nav-item-logo">
                    <Computer/>
                    <p className="show-nav">ELECTRONICS</p>
                </div>
                <div className="col-2 nav-item-logo">
                    <ColorLens/>
                    <p className="show-nav">ART & CRAFT</p>
                </div>
                <div className="col-2 nav-item-logo">
                    <CardGiftcard/>
                    <p className="show-nav">3D DESIGN</p>
                </div>
                <div className= "col-2 nav-item-logo">
                    <Computer/>
                    <p className="show-nav">ELECTRONICS</p>
                </div>
                
               
            </div>
        </div>
     );
}
 
export default Header;