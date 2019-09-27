import React from 'react'
import {Link} from 'react-router-dom'

const Footer = props => {
    return(
        <footer className='container-fluid text-center'>
            <a href='/' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Visite meu linkedIn <a href='https://www.linkedin.com/in/welltonquirino95/' title='Linkedin Wellton'>www.linkedin.com</a></p>
        </footer>
    )
}



export default Footer