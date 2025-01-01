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

           



        </div>
    )
}

export default Container;