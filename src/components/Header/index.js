import React from 'react'
import {Link} from 'react-router-dom'


const Header = props => {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>                        
                    </button>
                    {/*<img className='navbar-brand' src='acordeon.png' alt='San Francisco' />*/}
                    <Link className='navbar-brand' to='/'>Logo</Link>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><Link to='/'>ABOUT</Link></li>
                        <li><Link to='services'>SERVICES</Link></li>
                        <li><Link to='portfolio'>PORTFOLIO</Link></li>
                        <li><Link to='pricing'>PRICING</Link></li>
                        <li><Link to='contact'>CONTACT</Link></li>
                        <li><Link to='login'>LOGIN</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header