import React from "react";

function Header() {
    return (
        <div>
            <div className="HeaderContainer">
                <div className="Header">
                    <h3>JANG SOO SUSHI BAR</h3>
                    <nav className="Header__nav">
                        <div className="HeaderClicker">
                            <a href="/">HOME</a>
                        </div>
                        <div className="HeaderClicker">
                            <a href="/menu">MENU</a>
                        </div>
                        <div className="HeaderClicker">
                            <a href="/gallery">GALLERY</a>
                        </div>
                        {/* <div className="HeaderClicker">
                            <a href="/covid-19">COVID-19</a>
                        </div> */}
                        <div className="HeaderClicker">
                            <a href="/contact_us">CONTACT US</a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="newsHeader">
                <p>30% OFF ALL SPECIAL ROLLS FOR TOGO ONLY! Call (562) 924-2498 to order.</p>
            </div>
            
        </div>
    );
}

export default Header;