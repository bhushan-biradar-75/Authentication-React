import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { checkToken } from './Util'

const Head = () => {
    const navigate = useNavigate()

    const logoutbtn = () => {
        localStorage.removeItem("auth")
        navigate("/login")
    }
    const token = checkToken()


    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Autentication</a>
                    <form class="d-flex">
                        <Link to='/Login'>
                            <button style={token ? { display: 'none' } : {}} class="btn btn-dark mx-2" type="submit">Login</button>
                        </Link>
                        <Link to='/Register'>
                            <button style={token ? { display: 'none' } : {}} class="btn btn-dark" type="submit">Register</button>
                        </Link>
                        <button style={!token ? { display: 'none' } : {}} class="btn-dark" onClick={logoutbtn}>Logout</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
{/* <Link to="/">About</Link> */ }

export default Head