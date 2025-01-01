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


           



        </div>
    )
}

export default Container;