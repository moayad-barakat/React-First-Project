import man from "./assets/man.jpg"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"

function Container() {


    return (
        <div className="container">

            <div className="header-background">
                {/* Start Navbar */}
                <div className="Navbars">
                    <div>
                        <h1 className="food-class">Foody</h1>
                    </div>

                    <div className="xx">
                        <ul className="lists">
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>

                        <div className="icons">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-user"></i>
                            <i class="fa-solid fa-shop"></i>
                        </div>
                    </div>
                </div>

                {/* End Navbar */}


                <div className="header-section">
                    <h1 className="organik-class">Organic Food Is Good For Health </h1>

                    <div>
                        <button className="header-btns header-btn1">Products</button>
                        <button className="header-btns header-btn2">Sevices</button>
                    </div>
                </div>


            </div>


            {/* End Header */}


             {/* Start section 3 */}
             <div className="section-3">
                <div>
                    <img className="section3-img" src={man} alt="" />
                </div>

                <div className="section3-text">
                    <h1>Best Organic Fruits And Vegetables</h1>
                    <p className="text1-section3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet


                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos! Fugiat, laboriosam. Consectetur, odio veniam!
                    </p>
                    <ul className="section3-lists">
                        <li><i class="fa-solid fa-check section3-icons"></i> <span>Tempor erat elitr rebum at clita</span></li>
                        <li><i class="fa-solid fa-check section3-icons"></i> <span>Aliqu diam amet diam et eos</span></li>
                        <li><i class="fa-solid fa-check section3-icons"></i> <span>Clita duo justo magna dolore erat amet</span></li>
                    </ul>


                    <button className="section3-btn">Read More</button>
                </div>


            </div>

            {/* End Section 3 */}





   {/* START FIRM SECTTION */}



   <div className="firm-section">
                <div>
                    <h1>Visit Our Firm</h1>
                    <p className="firm-text">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>

                </div>

                <div>
                    <button className="firm-button">Visit Now</button>
                </div>
            </div>

            {/* END FIRM SECTTION  */}




              {/* START FEATURES SECTION */}

              <div className="features-section">
                <div className="empty-divs">
                    <div className="empty-div1"></div>
                    <div className="empty-div2"></div>
                </div>


                <div className="features-content">
                    <h1 className="features-title">Our Features</h1>
                    <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum</p>
                    <p>diam justo sed rebum vero dolor duo.</p>
                </div>


                <div className="features-cards">
                    <div className="feature-card">
                        <img src={icon1} alt="" />

                        <h3 className="features-title1">Natural Process</h3>
                        <p className="features-text2">
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                        </p>

                        <button className="features-buttons">Read More</button>


                    </div>

                    <div className="feature-card">
                        <img src={icon2} alt="" />

                        <h3 className="features-title1">Organic Products</h3>
                        <p className="features-text2">
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                        </p>

                        <button className="features-buttons">Read More</button>


                    </div>


                    <div className="feature-card">
                        <img src={icon3} alt="" />

                        <h3 className="features-title1">Biologically Safe</h3>
                        <p className="features-text2">
                            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.
                        </p>

                        <button className="features-buttons">Read More</button>


                    </div>
                </div>

            </div>



            {/*  END FEATURES SECTION */}

           




            {/* START FOOTER */}

            <footer>

                <div className="footer-1">
                    <h1 className="footer-title1">Foody</h1>
                    <p className="footer-text1">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>

                    <div className="footer-icons">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className="footer-2">
                    <h2 className="address-title">Address</h2>
                    <ul className="address-icons">
                        <li><i class="fa-solid fa-location-dot"></i> <span>123 Street, New York, USA</span></li>
                        <li><i class="fa-solid fa-phone"></i> <span>+012 345 67890</span></li>
                        <li><i class="fa-regular fa-envelope"></i> <span>info@example.com</span></li>
                    </ul>
                </div>


                <div className="footer-3">
                    <h1>Quick Links</h1>
                    <ul className="quick-icons">
                        <li><a href="#">&gt; About Us</a></li>
                        <li><a href="#">&gt; Contact Us</a></li>
                        <li><a href="#">&gt; Our Sevices</a></li>
                        <li><a href="#">&gt; Team & Condation</a></li>
                        <li><a href="#">&gt;  Support</a></li>
                    </ul>
                </div>

                <div className="footer-4">
                    <h1>Newsletter</h1>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="footer-input">
                        <input className="footer-input" type="email" />
                        <button className="footer-btn">Sign In</button>
                    </div>
                </div>
            </footer>



            {/* END FOOTER */}

        </div>
    )
}

export default Container;