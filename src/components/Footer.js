import React from "react";
import Hours from "../components/Hours.js"
import Location from "../components/Location.js";

function Footer() {
    return (
        <div className="FooterContainer">
            <div className="Footer">
                <div className="footerColumn">
                    <div className="footerRow">
                        <h3>JANG SOO SUSHI BAR</h3>
                    </div>
                    <div className="footerRow">
                        <div className="footerColumn2">
                            <h4>Menu</h4>
                            <div className="footerLink">
                                <a href="/menu">See What We Have</a>
                            </div>
                            <h4>Gallery</h4>
                            <div className="footerLink">
                                <a href="/gallery">See Who We Are</a>
                            </div>
                            <h4>Contact Us</h4>
                            <div className="footerLink">
                                <a href="/contact_us">Reach Out To Us</a>
                            </div>
                        </div>
                        <div className="footerColumn2">
                            <h4>Feedback</h4>
                            <div className="footerLink">
                                <a href="">Use Our Form</a>
                            </div>
                            <h4>Careers</h4>
                            <div className="footerLink">
                                <a href="/careers">Join Our Team</a>
                            </div>
                            <h4>Press Inquiries</h4>
                            <div className="footerLink">
                            <a href="mailto:email@email.com">jangsoo.press@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerColumn">
                    <Hours />
                </div>
                <div className="footerColumn hide">
                    <Location />
                </div>
            </div>
            <div className="FooterCredits">
                <div className="FooterCreditsText">
                    <p>© 2020 JANG SOO CORPORATION | JANG SOO SUSHI BAR</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;