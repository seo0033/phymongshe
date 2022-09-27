import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <ul>
            <li><Link to='/'>BRAND</Link></li>
            <li><Link to='/'>SHOPPING</Link></li>
            <li><Link to='/'>EVENT</Link></li>
            <li><Link to='/'>CS CENTER</Link></li>
        </ul>
    )
}

export default MainNav