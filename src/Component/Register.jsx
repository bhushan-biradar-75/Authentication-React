import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    return (
        <div>
                <h3 className='text-center mt-3'>REGISTER</h3>
            <div class="container-fluid" style={{ position: 'absolute', left: '35%', top: '25%'}}>
                <label><b>USERNAME</b></label>
                <input style={{ width: "400px" }} className='form-control mt-4' type="text" placeholder='enter your username' minLength={8} required />
                <br />
                <label><b>PASSWORD</b></label>
                <input style={{ width: "400px" }} className='form-control mt-4' type="password" placeholder='enter your password' minLength={8} required />
                <br />
                <label><b>EMAIL</b></label>
                <input style={{ width: "400px" }} className='form-control mt-4' type="email" placeholder='enter your email' minLength={8} required />
                <br />
                <Link to='/Login'>
                    <button className='btn-dark' type="submit">SUBMIT</button></Link>
            </div>
        </div>
    )
}

export default Register