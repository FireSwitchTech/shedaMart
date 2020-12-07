import React from 'react';
import Header from '../components/Header'
import TopDeal from '../components/TopDeals'
import About from '../components/About'
import Footer from '../components/Footer'
const Landing = () => {
    return ( 
        <div>
            <Header/>
            <TopDeal/>
            <About/>
            <Footer/>
        </div>
     );
}
 
export default Landing;