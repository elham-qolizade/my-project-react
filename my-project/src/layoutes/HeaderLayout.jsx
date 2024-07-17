import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLayout() {
    return (
        <div className='navbar'>
            <div className='logo-img'>
                <img src="../assets/image/logo.svg" alt="" />
            </div>
            <div className='menuList'>
                <Link to='/Features'>Features</Link>
                <Link to='/Pricing'>Pricing </Link>
                <Link to='/Resources'>Resources</Link>
            </div>
            <div className='navbar-btn'>
                <button className='login-btn'>Login</button>
                <button className='singup-btn'>SingUp</button>
            </div>
        </div>
    )
}
