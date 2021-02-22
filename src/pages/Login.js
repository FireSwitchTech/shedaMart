import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState()
    const login =async()=>{
        setLoading(true)
        await axios.get('http://www.api.shedamart.com/', { params: { 
        action:'02',
        apptoken:'F0Q3P8ZM92',
        mail:`${email}`,
        password:`${password}`
    } }).then(response=>{

        console.log(response.data)
        if(response.data.response ==="02"){
            setUser(response.data)
            localStorage.setItem('email', response.data.mail)
            localStorage.setItem('name', response.data.name)
            localStorage.setItem('token', response.data.usertoken)
            toast.success(response.data.message)
        }
        else{
            toast.warn(response.data.message)
        }
        setLoading(false)
        
    }).catch(error=>{
        console.log(error)
    })
    }
    let buttonContent;
    if(loading){
        buttonContent= 'Loading...'
    } 
    else{
        buttonContent= 'LOGIN'
    }
    const handleSubmit = (event) =>{ 
        login()
        event.preventDefault()
    }

    return ( 
        <div className="login">
            <ToastContainer position="bottom-left"/>
            <div className="container">
                <div className="row h-100 ">
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 my-auto text-center">
                        <h3>LOG IN</h3>
                        <p className="message">Stay connected to do more</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                        <div className="card">
                            <form className="p-4" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" value={email} onChange={e=>setemail(e.target.value)} placeholder="Email Address" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" value={password} onChange={e=>setpassword(e.target.value)} placeholder="Password"/>
                            </div>
                            <p className="justify-content-end">Forgotten your password?</p>
                            <button type="submit" class="btn btn-lg btn-block">{buttonContent}</button>
                            <p>Don't have an account?<Link to="/register"> Create one</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Login;
 