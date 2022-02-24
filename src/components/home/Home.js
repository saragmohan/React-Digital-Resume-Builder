import React from 'react';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import Pic01 from '../images/pic01.jpg';
import Pic02 from '../images/pic02.jpg';
import Pic03 from '../images/pic03.jpg';


function Home(props) {
    return (
        <div>

            {/* Page Wrapper */}
            <div id="page-wrapper">

                {/* Banner */}
                <section id="banner">
                    <div className="inner">
                        <h2>Sleekcvs</h2>
                        <p>Boost your chances-<br />
                            to land that<br />
                            dream job</p>
                        <ul className="actions special">
                            <li><Link to="/" class="button primary">Create your resume</Link></li>
                        </ul>
                    </div>
                    <Link to="one" className="more scrolly" smooth={true} duration={1000}>Learn More</Link>
                </section>

                {/* One */}
                <section id="one" className="wrapper style1 special">
                    <div className="inner">
                        <header className="major">
                            <h2>Only 2% of resumes make it past the first round.<br />
                                Be in the top 2%</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                        </header>
                        <ul className="icons major">
                            <li><span className="icon fa-gem major style1"><span className="label">Lorem</span></span></li>
                            <li><span className="icon fa-heart major style2"><span className="label">Ipsum</span></span></li>
                            <li><span className="icon solid fa-code major style3"><span className="label">Dolor</span></span></li>
                        </ul>
                    </div>
                </section>

                {/* Two */}
                <section id="two" className="wrapper alt style2">
                    <section className="spotlight">
                        <div className="image"><img src={Pic01} alt="" /></div>
                        <div className="content">
                            <h2>Magna primis lobortis<br />
                                sed ullamcorper</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src={Pic02} alt="" /></div>
                        <div className="content">
                            <h2>Tortor dolore feugiat<br />
                                elementum magna</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src={Pic03} alt="" /></div>
                        <div className="content">
                            <h2>Augue eleifend aliquet<br />
                                sed condimentum</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                        </div>
                    </section>
                </section>

                {/* Three */}
                <section id="three" className="wrapper style3 special">
                    <div className="inner">
                        <header className="major">
                            <h2>Accumsan mus tortor nunc aliquet</h2>
                            <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                                fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.</p>
                        </header>
                        <ul className="features">
                            <li className="icon fa-paper-plane">
                                <h3>Arcu accumsan</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                            <li className="icon solid fa-laptop">
                                <h3>Ac Augue Eget</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                            <li className="icon solid fa-code">
                                <h3>Mus Scelerisque</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                            <li className="icon solid fa-headphones-alt">
                                <h3>Mauris Imperdiet</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                            <li className="icon fa-heart">
                                <h3>Aenean Primis</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                            <li className="icon fa-flag">
                                <h3>Tortor Ut</h3>
                                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Footer */}
                <footer id="footer">
                    <ul className="icons">
                        <li><Link to="#" class="icon brands fa-twitter"><span class="label">Twitter</span></Link></li>
                        <li><Link to="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></Link></li>
                        <li><Link to="#" class="icon brands fa-instagram"><span class="label">Instagram</span></Link></li>
                        <li><Link to="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></Link></li>
                        <li><Link to="#" class="icon solid fa-envelope"><span class="label">Email</span></Link></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Untitled</li><li>Design: <Link to="http://html5up.net">HTML5 UP</Link></li>
                    </ul>
                </footer>

            </div>
        </div>
    );
}

export default Home;