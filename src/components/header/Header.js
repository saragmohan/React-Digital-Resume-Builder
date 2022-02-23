import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    // const [sidebar, setSidebar] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <header id="header" className="alt">
                <h1><Link to="/">Sleekcvs</Link></h1>
                <nav id="nav">
                    <ul>
                        <li className="special">
                            <Link to="menu" className="menuToggle"><span>Menu</span></Link>
                            <div id="menu">
                                < ul >
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Sign Up</Link></li>
                                    <li><Link to="#">Log In</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav >
            </header >

        </div >
    );
}

export default Header;