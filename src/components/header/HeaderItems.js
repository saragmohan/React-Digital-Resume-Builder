import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItems(props) {
    return (
        <div id="menu">
            < ul >
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Sign Up</Link></li>
                <li><Link to="#">Log In</Link></li>
            </ul>
        </div>
    );
}

export default HeaderItems;