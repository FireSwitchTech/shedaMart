import React, { useEffect, useState } from 'react';
import axios from 'axios'
const TopDeal = () => {
    const [products, setProducts] = useState([])

    const getProducts =async () =>{
        await axios.get('https://fakestoreapi.com/products?limit=6').then(response=>{
            console.log(response.data)
            setProducts(response.data)
        }).catch(error=>{
            console.log(error.response)
        })
    }
    const singleItem = products.map((item, i)=>{
        return(
            <div class="col-lg-2 col-md-3 col-sm-4">
                <div>
                    <img class="product" src={item.image} alt="hello"/>
                    <p class="product-title">{item.title}</p>
                    <p class="product-price">${item.price}</p>
                </div>
            </div>
        )
    })
    useEffect(()=>{
        getProducts()
    },[])
    return ( 
        <div className="container">
        <div class="card mb-4 p-4">
            <h4>TOP DEALS</h4>
            <div class="row">
                {singleItem}
            </div>
        </div>
         <div class="card mb-4  p-4">
            <h4>ARTS & CRAFT</h4>
            <div class="row">
                {singleItem}
            </div>
        </div>
        <div class="card mb-4  p-4">
            <h4>ART TOOLS</h4>
            <div class="row">
                {singleItem}
            </div>
        </div>
        <div class="card mb-4  p-4">
            <h4>GIFTS</h4>
            <div class="row">
                {singleItem}
            </div>
        </div>
        <div class="card mb-4  p-4">
            <h4>BOOKS</h4>
            <div class="row">
                {singleItem}
            </div>
        </div> 
        <div class="card mb-4  p-4">
            <h4>ELECTRONICS</h4>
            <div class="row">
                {singleItem}
            </div>
        </div>
     </div>
     );
}
 
export default TopDeal;