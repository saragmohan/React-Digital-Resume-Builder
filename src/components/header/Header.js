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
                            <Link to="/nav-menu" className="menuToggle"><span>Menu</span></Link>

                        </li>
                    </ul>
                </nav >
            </header >

        </div >
    );
}

export default Header;