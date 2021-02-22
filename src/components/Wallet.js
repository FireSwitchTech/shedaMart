import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Wallet = () => {
    const [balance, setBalance] = useState(0)
    const getWallentBalance =async ()=>{
        await axios.get('http://www.api.shedamart.com/', { params: { 
            action:'07',
            apptoken:'F0Q3P8ZM92',
            usertoken:localStorage.getItem('token')
        }}).then(response=>{
                console.log(response)
                if(response.data.message ===""){
                    setBalance(0)
                }
                setBalance(response.data.message)
            }).catch(error=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        getWallentBalance()
    })
    return ( 
        <div className="card wallet">
            <div className="card-body text-center">
            <p className="text-center">WALLET</p>
            <h3>${balance}</h3>
            <p>Add card</p>
            </div>
        </div>
     );
}
 
export default Wallet;