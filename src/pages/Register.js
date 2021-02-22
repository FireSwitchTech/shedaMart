import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    const register =()=>{
        axios.get('http://www.api.shedamart.com/', { params: { 
        action:'01',
        apptoken:'F0Q3P8ZM92',
        name: `${firstName} ${lastName}`,
        mail:`${email}`,
        phone:`${phone}`,
        password:`${password}`,
        cpassword:`${cpassword}`
    } }).then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })
    }
    const handleSubmit = (event) =>{
        register()
        event.preventDefault()
    }
    return ( 
        <div className="register">
            <div className="container">
                <div className="row h-100 ">
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-4 text-center my-auto">
                        <h3>CREATE AN ACCOUNT</h3>
                        <p className="message">Begin to explore your choices</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                        <div className="card">
                            <form className="p-4"  onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">First Name</label>
                                <input type="text" value={firstName} onChange={event=> setfirstName(event.target.value)} class="form-control" placeholder="First Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                <input type="text" value={lastName} onChange={event=>setlastName(event.target.value)} class="form-control" placeholder="Last Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" value={email} onChange={event=>setemail(event.target.value)} class="form-control" placeholder="Email Address" />
                            </div>
                            <div class="mb-3">
                                <label for="Phone number" class="form-label">Phone Number</label>
                                <input type="tel" className="form-control" placeholder="08123456789" id="phone" name="phone" value={phone} onChange={event=>setPhone(event.target.value)}  required></input>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" value={password} onChange={event=>setpassword(event.target.value)} class="form-control" placeholder="Password"/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Re-type Password</label>
                                <input type="password" valuz={cpassword} onChange={event=>setcpassword(event.target.value)} class="form-control" placeholder="Password"/>
                            </div>
                            <button class="btn btn-lg btn-block">REGISTER</button>
                            <p className="text-center mt-2">Already have an account? <Link to="/login"> Login </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Register;