import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [state, setstate] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    const postdata = () => {
        if ((state.username == "sntuser") && (state.password == "Snt@1234")) {
            alert("Login Succesfully")
            localStorage.setItem("auth", "a7edb3545222ac538e65df8d37579ef2f3adb655")
            navigate('/user')

        } else {
            alert("wrong inputs")
        }

    }

    const handlechange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <from>
            <div>
                <h3 className='text-center mt-3'><marquee><b>LOGIN</b></marquee></h3>
                <h5 className='text-center'>Static Authentication</h5>
                <div class="container-fluid" style={{ position: 'absolute', left: '35%', top: '25%' }}>
                    <label><b>USERNAME</b></label>
                    <input style={{ width: "400px" }} className='form-control mt-4' name='username' onChange={handlechange} type="text" placeholder='enter your name' required />
                    <br />
                    <div>
                    <label><b>PASSWORD</b></label>
                    <input style={{ width: "400px" }} className='form-control mt-4' name='password' onChange={handlechange} type="password" placeholder='enter your name' minLength={8} required />
                    </div>
                    <br />
                    <br />
                    <button className='btn-dark' onClick={postdata} type="button">SUBMIT</button>
                </div>
            </div>
        </from>

    )
}

export default Login